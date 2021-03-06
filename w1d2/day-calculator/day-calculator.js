function calculateDayInYear(date) {
  var splitDate = date.split('/');
  var year = Number(splitDate[0]); //pulls year
  var month = Number(splitDate[1]); //pulls month
  var day = Number(splitDate[2]); //pulls day number
  var febDays = daysInFeb(year);
  var DAYS_IN_MONTH = [31, febDays, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (year && validMonth(month) && validDay(month, day)) {
    console.log(date, "is day", calculateDayNumber(month, day), "of the year", year);
  } else {
    console.log("Invalid date");
  }

  function validMonth(month) {
    return month && month >= 1 && month <= 12; //added <= for 12
  }

  function validDay(month, day) {
    return day && day >= 1 && day <= DAYS_IN_MONTH[month - 1]; //added <= to capture last day of month
  }

  function calculateDayNumber(month, day) {
    var dayOfYear = 0; //changed to 0 from 1 (was adding an additional day to year)

    for (var i = 1; i < month; i++) {
     //console.log(month);
      dayOfYear += DAYS_IN_MONTH[i - 1];
    }
    return dayOfYear + day; //added day to add the day when loop exits
  }

  function daysInFeb(year) {
    if(isLeapYear(year)){
      return 29;
    } else {
      return 28;
    }
  }

  function isLeapYear(year) {
    return isMultiple(year, 400) || !isMultiple(year, 100) && isMultiple(year, 4);
  }
}

function isMultiple(numerator, denominator) {
  return numerator % denominator === 0;
}

var date = process.argv[2];

if (!date) {
  console.log("Please provide a date in the format YYYY/MM/DD");
} else {
  calculateDayInYear(date);
}
