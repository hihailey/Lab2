function isleapYear(year) {
    // function which can figure whether a year is a leap year or not
    return ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0);
}

function exception(year, month, stepFive) {
    // Some exception cases
    var localStepFive = stepFive;

    if (isleapYear(year) && (month == 1 || month == 2 || month == "January" || month == "Feburary")) {
        localStepFive -= 1;
    }
    if (1600 <= year && year < 1700) {
        return localStepFive + 6; //9
    } else if (1700 <= year && year < 1800) {
        return localStepFive + 4;
    } else if (1800 <= year && year < 1900) {
        return localStepFive + 2;
    } else if (2000 <= year && year < 2100) {
        return localStepFive + 6;
    } else if (2100 <= year && year < 2200) {
        return localStepFive + 4;
    } else {
        return stepFive;
    } 
}

function getDayOfTheWeek(year, month, day) {
    
    var lastDigit = year % 100;
    // bring the last two digits

    var stepOne = Math.floor(lastDigit / 12);
    var stepTwo = (lastDigit - (stepOne * 12));
    var stepThree = Math.floor(stepTwo / 4);
    var stepFour = day;
    var stepFive = null;

    var monthNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    var monthList = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var monthCodeList = [1, 4, 4, 0, 2, 5, 0, 3, 6, 1, 4, 6];

    // Find the monthCodeList
    // If month is 'number', monthNumorList should be monthNum
    function checkIfExists(monthNumOrList, month) {
        if (monthNumOrList.indexOf(month) != -1) {
            var locationInList = monthNumOrList.indexOf(month);
            return monthCodeList[locationInList];
        }
    }

    var monthCode = null;
    // Detetmine user's input is number or string (monthNum or monthList)
    if (isNaN(month) == true) {
        monthCode = checkIfExists(monthList, month);
    } else {
        monthCode = checkIfExists(monthNum, parseInt(month));
    }
    stepFive = monthCode;

    stepFive = exception(year, month, stepFive); 
    // deine stpeFive from exception function

    var stepSix = (stepOne + stepTwo + stepThree + stepFour + stepFive) % 7;

    var dayOfWeek = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    var dayWeek = null;

    function findDayOfWeek(stepSix) {
        dayWeek = dayOfWeek[stepSix];
    }
    findDayOfWeek(stepSix);

    return dayWeek;
}


function makeCalendar (year) {

    var month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    var days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

   
    days[1] = isleapYear(year) ? 29 : 28;
     // If the year is leap year, the total days of feburary should be changed to 29 days
    var i = 0;

    while (i < 12) {
        var j = 0;
        while (j < days[i]) {
            j++;
            console.log((i + 1) + "-" + j + "-" + year + " is a " + getDayOfTheWeek(year, month[i], j));
        }
        i++;
    }
}

module.exports = { isleapYear, makeCalendar, getDayOfTheWeek };
    // Using { } to export functions more than two