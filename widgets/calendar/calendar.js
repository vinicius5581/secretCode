var Calendar = (function() {
  var DATE_NOT_IN_CURRENT_MONTH = 0,
      DAYS_IN_WEEK = 7;

  this.state = {
    selectedDate: new Date();
  };

  return {

    setSelectedDate: function(date) {
      this.state.selectedDate = date;
    },

    /*
     *  Return an array of "weeks", in which each "week" is also an array that stores the value of the date from Sun to Sat for the week.
     *  To handle the case for the days not in the current month (i.e. first week of the month and last week of the month), we use the value "0".
     */
    getCurrentMonthData: function() {

      var selectedDateObj = this.state.selectedDate,
          selectedYear = selectedDateObj.getUTCFullYear(),
          selectedMonth = selectedDateObj.getMonth(),
          firstDay = new Date(selectedYear, selectedMonth, 1).getDay(),
          lastDateObj = new Date(selectedYear, selectedMonth+1, 0),
          lastDate = lastDateObj.getDate(),
          lastDay = lastDateObj.getDay(),
          month = [],
          week = [],
          d = 0,
          date = 1;

      // fill up days in the first week not in current month
      for(; d < firstDay; d++) {
        week.push(DAY_NOT_IN_CUR_MONTH);
      }

      for(; date <= lastDate; date++) {
        week.push(date);

        if (week.length == DAYS_IN_WEEK) {
          month.push(week);
          week = [];
        }
      }

      if (lastDay != DAYS_IN_WEEK-1) {
        // last day of month not a Saturday
        // fill up remaining days of the week not in current month
        for (d = lastDay+1, d < DAYS_IN_WEEK; d++) {
          week.push(DAY_NOT_IN_CUR_MONTH);
        }

        month.push(week);
      }

      return month;
    }
  };

})();

// get current month data
var calendar = new Calendar();
var monthDate = calendar.getCurrentMonthData();

// handle select a different date
// $('.day).click(function(event) {
//   var newDate = event.target.innerText;
//
//   if (!newDate.length) {
//     return;
//   }
//
//   newDate = +newDate;
//   calendar.setSelectedDate(newDate);
//
//   // re-render the UI somehow
// });
