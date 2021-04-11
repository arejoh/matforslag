window.onload = function() {
  var d = new Date();
  var weekNumber = d.getWeek();
  var weekDay = d.getDay();
  var thisWeek = document.getElementsByClassName('week__' + weekNumber);
  var nextWeek = document.getElementsByClassName('week__' + (weekNumber + 1));
  var allWeeks = document.querySelectorAll('[class^=week__]');
  if (thisWeek.length !== 0 && nextWeek.length !== 0) {
    nextWeek[0].style.display = 'none';
    if ((weekDay > 4 || weekDay < 1) && nextWeek.length > 0) {
      thisWeek[0].style.display = 'none';
      nextWeek[0].style.display = 'block';
    }
  }
  else {
    //allWeeks.style.display = 'none';
  }
}

Date.prototype.getWeek = function() {
  var date = new Date(this.getTime());
  date.setHours(0, 0, 0, 0);
  date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
  var week1 = new Date(date.getFullYear(), 0, 4);
  return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000
                        - 3 + (week1.getDay() + 6) % 7) / 7);
}