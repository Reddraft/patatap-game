function onKeyDown(event) {
  //maxPoint will get the size of the window in its actual state
  var maxPoint = new Point(view.size.width, view.size.height);
  //Returns a point object with random x and y values between 0 and 1.
  var randomPoint = Point.random();
  var randomCordinate = maxPoint * randomPoint;
	// When a key is pressed,A point between {x:0, y:0} and {x:100, y:100} is returned
  // A circle is made each t
	new Path.Circle(randomCordinate, 50).fillColor = 'purple';
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
