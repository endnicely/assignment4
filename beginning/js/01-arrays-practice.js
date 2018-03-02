/*eslint-env browser*/
//STEP 1
//var favoriteMovies = ["Gone with the wind", "Matrix", "Horse Whisper", "One night with the king", "God Father"];
//window.console.log(favoriteMovies[1]);

//STEP 2
//var movies = new Array(5);
//movies[0] = "Gone with the wind";
//movies[1] = "Matrix";
//movies[2] = "Horse Whisper";
//movies[3] = "One night with the king";
//movies[4] = "God Father";
//window.console.log(movies[0]);

//STEP 3
//var movies = new Array(5);
//movies[0] = "Gone with the wind";
//movies[1] = "Matrix";
//movies[2] = "Horse Whisper";
//movies[3] = "One night with the king";
//movies[4] = "God Father";
//movies[5] = "Brave Heart";
//window.console.log(movies.length);

//STEP 4
/*var movies = [];
movies[0] = "Gone with the wind";
movies[1] = "Matrix";
movies[2] = "Horse Whisper";
movies[3] = "One night with the king";
movies[4] = "God Father";
delete movies[0];
window.console.log(movies);   //empty for the first element*/

//STEP 5
/*var movies = [];
movies[0] = "Gone with the wind";
movies[1] = "Matrix";
movies[2] = "Horse Whisper";
movies[3] = "One night with the king";
movies[4] = "God Father";
movies[5] = "Brave Heart";
movies[6] = "The Sound of Music";
var i;
for (i = 0; i < movies.length; i += 1) {
    window.console.log(movies[i] + "\n");
}*/
//STEP 6
//var movies = [];
//movies[0] = "Gone with the wind";
//movies[1] = "Matrix";
//movies[2] = "Horse Whisper";
//movies[3] = "One night with the king";
//movies[4] = "God Father";
//movies[5] = "Brave Heart";
//movies[6] = "The Sound of Music";
//var i;
//for (i in movies) {
//    if (movies.hasOwnProperty(i)) {
//        window.console.log(movies[i] + "\n");
//    }
//}

//STEP 7
//var i;
//var movies = [];
//movies[0] = "Gone with the wind";
//movies[1] = "Matrix";
//movies[2] = "Horse Whisper";
//movies[3] = "One night with the king";
//movies[4] = "God Father";
//movies[5] = "Brave Heart";
//movies[6] = "The Sound of Music";
//
//movies.sort();
//for (i in movies) {
//    if (movies.hasOwnProperty(i)) {
//        window.console.log(movies[i] + "\n");
//    }
//}

//STEP 8
//var movies = [];
//movies[0] = "Gone with the wind";
//movies[1] = "Matrix";
//movies[2] = "Horse Whisper";
//movies[3] = "One night with the king";
//movies[4] = "God Father";
//movies[5] = "Brave Heart";
//movies[6] = "The Sound of Music";
//var leastFavMovies = [];
//leastFavMovies[0] = "300";
//leastFavMovies[1] = "American Pie";
//leastFavMovies[2] = "Brokeback Mountain";
//
//var i;
//window.console.log("Movies I like:\n\n");
//for (i = 0; i < movies.length; i += 1) {
//    window.console.log(movies[i] + "\n");
//}
//
//window.console.log("\nMovies I regret watching:\n\n");
//for (i = 0; i < leastFavMovies.length; i += 1) {
//    window.console.log(leastFavMovies[i] + "\n");
//}

//STEP 9
//var movies = [];
//movies[0] = "Gone with the wind";
//movies[1] = "Matrix";
//movies[2] = "Horse Whisper";
//movies[3] = "One night with the king";
//movies[4] = "God Father";
//movies[5] = "Brave Heart";
//movies[6] = "The Sound of Music";
//var leastFavMovies = [];
//leastFavMovies[0] = "300";
//leastFavMovies[1] = "American Pie";
//leastFavMovies[2] = "Brokeback Mountain";
//movies = movies.concat(leastFavMovies);
//movies.sort();
//movies.reverse();
//var i;
//
//for (i = 0; i < movies.length; i += 1) {
//    window.console.log(movies[i] + "\n");
//}
//STEP 10
//var movies = [];
//movies[0] = "Gone with the wind";
//movies[1] = "Matrix";
//movies[2] = "Horse Whisper";
//movies[3] = "One night with the king";
//movies[4] = "God Father";
//movies[5] = "Brave Heart";
//movies[6] = "The Sound of Music";
//var leastFavMovies = [];
//leastFavMovies[0] = "300";
//leastFavMovies[1] = "American Pie";
//leastFavMovies[2] = "Brokeback Mountain";
//movies = movies.concat(leastFavMovies);
//movies.sort();
//movies.reverse();
//window.console.log(movies.pop());

//STEP 11
//var movies = [];
//movies[0] = "Gone with the wind";
//movies[1] = "Matrix";
//movies[2] = "Horse Whisper";
//movies[3] = "One night with the king";
//movies[4] = "God Father";
//movies[5] = "Brave Heart";
//movies[6] = "The Sound of Music";
//var leastFavMovies = [];
//leastFavMovies[0] = "300";
//leastFavMovies[1] = "American Pie";
//leastFavMovies[2] = "Brokeback Mountain";
//movies = movies.concat(leastFavMovies);
//movies.sort();
//movies.reverse();
//window.console.log(movies.shift());

//STEP 12
//var movies = [];
//movies[0] = "Gone with the wind";
//movies[1] = "Matrix";
//movies[2] = "Horse Whisper";
//movies[3] = "One night with the king";
//movies[4] = "God Father";
//movies[5] = "Brave Heart";
//movies[6] = "The Sound of Music";
//movies[7] = "300";
//movies[8] = "American Pie";
//movies[9] = "Brokeback Mountain";
//
//var leastFavMovies = [];
//leastFavMovies[0] = "300";
//leastFavMovies[1] = "American Pie";
//leastFavMovies[2] = "Brokeback Mountain";
//movies = movies.concat(leastFavMovies);
//movies.sort();
//movies.reverse();
//window.console.log(movies.shift());

//STEP 13
//var employee1 = [], employee2 = [], employees = [];
//employee1.id = "111";
//employee1.name = "Zak Ruvalcaba";
//employee1.title = "Professor";
//employee1.department = "SDCCD";
//employee1.current = true;
//
//employee2.id = "222";
//employee2.name = "Joy Zhou";
//employee2.title = "Student";
//employee2.department = "SDCCD";
//employee2.current = true;
//
//employees[0] = employee1;
//employees[1] = employee2;
//
//window.console.log(employees[1].name);


//STEP 14
//var employee1 = [], employee2 = [], employees = [];
//employee1.id = "111";
//employee1.name = "Zak Ruvalcaba";
//employee1.title = "Professor";
//employee1.department = "SDCCD";
//employee1.current = true;
//
//employee2.id = "222";
//employee2.name = "Joy Zhou";
//employee2.title = "Student";
//employee2.department = "SDCCD";
//employee2.current = true;
//
//employees[0] = employee1;
//employees[1] = employee2;
//
//var i;
//for (i = 0; i < employees.length; i += 1) {
//    window.console.log(employees[i].name);
//}


//STEP 15
//var employee1 = [], employee2 = [], employee3 = [], employees = [];
//employee1.id = "111";
//employee1.name = "Zak Ruvalcaba";
//employee1.title = "Professor";
//employee1.department = "SDCCD";
//employee1.current = true;
//
//employee2.id = "222";
//employee2.name = "Joy Zhou";
//employee2.title = "Student";
//employee2.department = "SDCCD";
//employee2.current = true;
//
//employee3.id = "333";
//employee3.name = "Theresa";
//employee3.title = "Student";
//employee3.department = "SDCCD";
//employee3.current = false;
//
//
//employees[0] = employee1;
//employees[1] = employee2;
//employees.push(employee3);
//var i;
//for (i = 0; i < employees.length; i += 1) {
//    if (employees[i].current) {
//        window.console.log(employees[i].name);
//    }
//}

//STEP 16
//var movies = [["Gone with the wind", 1], ["Matrix", 2], ["Horse Whisper", 3], ["One night with the king", 4], ["God Father", 5]];
//var movieNames = movies.filter(function (item) {
//    "use strict";
//    return item[0][0];
////    if typeof item[0] === "string") {
////        
////    }
//});
//window.console.log(movieNames);
//STEP 17
var employees = ["Zak Ruvalcaba", "Joy Zhou", "Teresa Deng", "Jeff Raynold"];
var showEmployee = function (param) {
    "use strict";
    window.console.log("Employees:");
    var i;
    for (i = 0; i < param.length; i += 1) {
        window.console.log(param[i] + "\n");
    }
    
};
showEmployee(employees);

//STEP 18
var testData = [58, '', 'abcd', true, null, false, 0];
var filterValues = function (arr) {
    "use strict";
    var i;
    for (i = 0; i < arr.length; i += 1) {
        
        switch (arr[i].value) {
        case false:
        case 0:
        case '':
            arr.pop(arr[i]);
            break;
        }
    }
    return arr;
};
window.console.log(filterValues(testData));

//STEP 19

//STEP 20