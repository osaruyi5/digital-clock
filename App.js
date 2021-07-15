function clock(){
  var hours = document.getElementById('hour');
  var minutes = document.getElementById('minutes');
  var seconds = document.getElementById('seconds');
  
  var h = new Date().getHours();
  var m = new Date().getMinutes();
  var s = new Date().getSeconds();
 
   if (hour == 0) {
     hour = 12
   }
   if (hour > 12) {
     hour = hour - 12
   }
  
  hours.innerHTML = h;
  minutes.innerHTML = m;
  seconds.innerHTML = s;
}

  var interval = setInterval(clock, 1000);