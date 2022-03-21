// When eyes button is clicked, toggle laser class on brain
$(".flash").click(function() {
    $(".brain").toggleClass('laser');
  });
  
  //When fistbump Right is pushed, arm goes  up/down //
  $(".right-arm").click(function() {
      $(".right").toggleClass('right-up');
  });
  
  //When fistbump Left is pushed, arm goes  up/down //
  $(".left-arm").click(function() {
      $(".left").toggleClass('left-up');
  });
  
  // When color button is clicked...
  $(".color").click(function() {
    
    // assign each named color a random number 0-255
    var red = Math.floor(Math.random() * 255);
    var green = Math.floor(Math.random() * 255);
    var blue = Math.floor(Math.random() * 255);
  
  //generate an RGBA value from red, green, blue
  var randomRGBA = 'rgba('+red+','+green+','+blue+',1)';
  
  //and change body's background to our random color
  $("body").css("background" , randomRGBA);
    
  //Display the RGBA value in an alert window
  //alert(randomRGBA);
  });
  
  // When color button is clicked...
  $(".color").click(function() {
    
    // assign each named color a random number 0-255
    var red = Math.floor(Math.random() * 255);
    var green = Math.floor(Math.random() * 255);
    var blue = Math.floor(Math.random() * 255);
  
  //generate an RGBA value from red, green, blue
  var randomRGBA = 'rgba('+red+','+green+','+blue+',1)';
  
  //and change body's background to our random color
  $("body").css("color" , randomRGBA);
  });
  
  $(".disco").click(function() {
    $("img").toggle("dance");
  });