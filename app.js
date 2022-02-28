         function digitalWatch(){

            var myDate = new Date();
            var hours, minutes = (myDate.getMinutes() <10) ?  "0" + myDate.getMinutes() : myDate.getMinutes(),
                           seconds = (myDate.getSeconds() < 10) ? "0" + myDate.getSeconds() : myDate.getSeconds(),
                           timeFormat = (myDate.getHours() >= 12) ? "PM" : "AM";

           if(myDate.getHours() == 0){
               hours = 12;
           } 
           else if(myDate.getHours() > 12){
               hours = myDate.getHours() - 12;
           }
           else{
               hours = myDate.getHours();
           }

           var displayTime = hours + ":" + minutes + ":" + seconds;

           document.getElementsByClassName("time")[0].innerHTML = displayTime;
           document.getElementsByClassName("am-pm")[0].innerHTML = timeFormat;

           var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                monthsName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                dateOfDay = myDate.getDate();

           var displayDate = weekDays[myDate.getDay()] + "," + " " + monthsName[myDate.getMonth()] + " " + dateOfDay;

           document.getElementsByClassName("date")[0].innerHTML = displayDate;    
  

       }

       setInterval(digitalWatch, 1000);

      