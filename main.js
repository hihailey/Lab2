var readlineSync = require('readline-sync');
var test = require("./test");
 // Call the test file

console.log("This is a calendar of 2020 ! ")

test.makeCalendar(2020);

console.log("You can find the day of week , You want ! ")

function getDayOfTheWeekForUserDate() {

    var year = readlineSync.questionInt('Type year.\n');
    var month = readlineSync.question('Type the month. (You can put in English too. ex. March ")\n');
    var day = readlineSync.questionInt('Type the day.\n');

    console.log(test.getDayOfTheWeek(year, month, day));

}
getDayOfTheWeekForUserDate();

