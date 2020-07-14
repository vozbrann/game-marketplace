$(document).ready(function() {
  var myGamePiece;

  function startGame() {
    myGamePiece = new component(46, 93, '../images/auth/spaceShuttle3.png', window.innerWidth/4,
      -100, 'image');
    myGameArea.start();
  }

  var myGameArea = {
    canvas: document.createElement('canvas'),
    start: function() {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
      this.context = this.canvas.getContext('2d');
      document.body.querySelector(".main").appendChild(this.canvas);
      this.frameNo = 0;
      this.interval = setInterval(updateGameArea, 20);
      window.addEventListener('keydown', function(e) {
        myGameArea.keys = (myGameArea.keys || []);
        myGameArea.keys[e.keyCode] = (e.type == 'keydown');
      });
      window.addEventListener('keyup', function(e) {
        myGameArea.keys[e.keyCode] = (e.type == 'keydown');
      });
    },
    stop: function() {
      clearInterval(this.interval);
    },
    clear: function() {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
  };

  function component(width, height, color, x, y, type) {
    this.type = type;
    this.image = new Image();
    this.image.src = color;
    this.width = width;
    this.height = height;
    this.speed = 0;
    this.angle = 2;
    this.moveAngle = 0;
    this.x = x;
    this.y = y;

    this.update = function() {
      ctx = myGameArea.context;
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.angle);
      ctx.drawImage(this.image,
        0,
        -60,
        this.width, this.height);
      ctx.restore();

      if (this.x < -window.innerWidth / 2 || this.x > window.innerWidth / 2 *
        3 || this.y <
        -window.innerHeight / 2 || this.y > window.innerHeight / 2 * 3) {

        let randomPos = myGameArea.startPosArr[Math.floor(Math.random() * myGameArea.startPosArr.length)];
        this.x = randomPos.x;
        this.y = randomPos.y;
        this.angle = randomPos.angle;
      }
    };
    this.newPos = function() {
      this.angle += this.moveAngle * Math.PI / 180;
      this.x += this.speed * Math.sin(this.angle);
      this.y -= this.speed * Math.cos(this.angle);
    };
  }

  function updateGameArea() {
    myGameArea.startPosArr = [
      {
        x: window.innerWidth + 100,
        y: window.innerHeight/5*4,
        angle: -1.2,
      },
      {
        x: -100,
        y: window.innerHeight/3,
        angle: 1.2,
      },
      {
        x: window.innerWidth/4,
        y: -100,
        angle: 2,
      },
    ];
    myGameArea.clear();
    myGamePiece.moveAngle = 0;
    myGamePiece.speed = 4;
    if (myGameArea.keys && myGameArea.keys[37]) {myGamePiece.moveAngle = -1; }
    if (myGameArea.keys && myGameArea.keys[39]) {myGamePiece.moveAngle = 1; }
    myGamePiece.newPos();
    myGamePiece.update();
  }

  $(window).resize(function() {
    myGameArea.canvas.width = window.innerWidth;
    myGameArea.canvas.height = window.innerHeight;
  });

  startGame();
});
