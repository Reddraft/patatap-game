

// circles array will store all the circles are creating by pressing all keys
var circles = [];
//keyData Object store each key object with its own sound and color properties
var keyData = {

  q: {
    sound: new Howl({
      src: ['sounds/bubbles.mp3']
    }),
    color: '#1abc9c'
  },
  w: {
    sound: new Howl({
      src: ['sounds/clay.mp3']
    }),
    color: '#2ecc71'
  },
  e: {
    sound: new Howl({
      src: ['sounds/confetti.mp3']
    }),
    color: '#3498db'
  },
  r: {
    sound: new Howl({
      src: ['sounds/corona.mp3']
    }),
    color: '#9b59b6'
  },
    t: {
    sound: new Howl({
      src: ['sounds/dotted-spiral.mp3']
    }),
    color: '#34495e'
  },
  y: {
    sound: new Howl({
      src: ['sounds/flash-1.mp3']
    }),
    color: '#16a085'
  },
  u: {
    sound: new Howl({
      src: ['sounds/flash-2.mp3']
    }),
    color: '#27ae60'
  },
  i: {
    sound: new Howl({
      src: ['sounds/flash-3.mp3']
    }),
    color: '#2980b9'
  },
  o: {
    sound: new Howl({
      src: ['sounds/glimmer.mp3']
    }),
    color: '#8e44ad'
  },
  p: {
    sound: new Howl({
      src: ['sounds/moon.mp3']
    }),
    color: '#2c3e50'
  },
  a: {
    sound: new Howl({
      src: ['sounds/pinwheel.mp3']
    }),
    color: '#f1c40f'
  },
  s: {
    sound: new Howl({
      src: ['sounds/piston-1.mp3']
    }),
    color: '#e67e22'
  },
    d: {
    sound: new Howl({
      src: ['sounds/piston-2.mp3']
    }),
    color: '#e74c3c'
  },
  f: {
    sound: new Howl({
      src: ['sounds/prism-1.mp3']
    }),
    color: '#95a5a6'
  },
  g: {
    sound: new Howl({
      src: ['sounds/prism-2.mp3']
    }),
    color: '#f39c12'
  },
  h: {
    sound: new Howl({
      src: ['sounds/prism-3.mp3']
    }),
    color: '#d35400'
  },
  j: {
    sound: new Howl({
      src: ['sounds/splits.mp3']
    }),
    color: '#1abc9c'
  },
  k: {
    sound: new Howl({
      src: ['sounds/squiggle.mp3']
    }),
    color: '#2ecc71'
  },
  l: {
    sound: new Howl({
      src: ['sounds/strike.mp3']
    }),
    color: '#3498db'
  },
  z: {
    sound: new Howl({
      src: ['sounds/suspension.mp3']
    }),
    color: '#9b59b6'
  },
  x: {
    sound: new Howl({
      src: ['sounds/timer.mp3']
    }),
    color: '#34495e'
  },
  c: {
    sound: new Howl({
      src: ['sounds/ufo.mp3']
    }),
    color: '#16a085'
  },
  v: {
    sound: new Howl({
      src: ['sounds/veil.mp3']
    }),
    color: '#27ae60'
  },
  b: {
    sound: new Howl({
      src: ['sounds/wipe.mp3']
    }),
    color: '#2980b9'
  },
  n: {
    sound: new Howl({
      src: ['sounds/zig-zag.mp3']
    }),
    color: '#8e44ad'
  },
  m: {
    sound: new Howl({
      src: ['sounds/moon.mp3']
    }),
    color: '#2c3e50'
  }

}

//Function onKeyDown will trigger when any key is pressed
function onKeyDown(event) {

  //check if the key the was pressed exist in the keyData obj
  if (keyData[event.key]) {

    // new Point will get the size of the window in its actual size.
    var maxPoint = new Point(view.size.width, view.size.height);

    //Returns a point object with random x and y values between 0 and 1.
    var randomPoint = Point.random();

    // result of multiplying maxPoint by randomPoint
    var randomCordinate = maxPoint * randomPoint;

    //make a new circle in a random cordinate of 500 radius
    var newCircle = new Path.Circle(randomCordinate, 500);

    //add a fill color to the new circle depending on wich key was pressed
    newCircle.fillColor = keyData[event.key].color;
    //play the sound that correspond to the key the was pressed
    keyData[event.key].sound.play();
    //add the circle to the circles array
  	circles.push(newCircle) ;
  }

}

//onFrame() its a build-infunction in paper js
function onFrame(event) {
  //loop trough the circles array
  for (var i = 0; i < circles.length; i++) {
    //change the hue by one
    circles[i].fillColor.hue += 1;
    //scale down until circle
    circles[i].scale(.9);

    // check if the area of the circle is less than 1
    if (circles[i].area < 1) {
      //remove the circle from the DOM
      circles[i].remove();
      //remove the circle from the array
      circles.splice(i, 1);
      console.log(circles);
    }

  }
}















/*

for (var x = 0; x <= 1000; x += 100) {
  for (var y = 0; y <= 1000; y += 100) {
    new Path.Circle(new Point(x, y), 10).fillColor = 'purple';
  }
}

 x = 0 | y = 0
 x = 0 | y = 100
 x = 0 | y = 200
 x = 0 | y = 300
 x = 0 | y = 400
 x = 0 | y = 500
 ===============
 x = 100 | y = 0
 x = 100 | y = 100
 x = 100 | y = 200
 x = 100 | y = 300
 x = 100 | y = 400
 x = 100 | y = 500

*/
