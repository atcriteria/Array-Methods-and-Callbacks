import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

// let test1 = fifaData.filter(x => {
//     return x["Year"] === 2014 && x["Stage"] === "Final";
// });
// console.log(test1)
// console.log(test1[0]["Home Team Name"]);
// console.log(test1[0]["Away Team Name"]);
// console.log(test1[0]["Home Team Goals"]);
// console.log(test1[0]["Away Team Goals"]);
// console.log(test1[0]["Win conditions"]);

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {

    const solution = data.filter(x => {
        return x["Stage"] === "Final";
    });
    return solution;

};

console.log(getFinals(fifaData));
// const finals = getFinals(fifaData);

// console.log (finals);
/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(getFinals) {

    let years = [];
    let final = getFinals(fifaData);
    // console.log(final);
    final.filter(x => { years.push(x["Year"])});
    return years;

    // original solution below ....
    // let expo = getFinals(fifaData);
    // let years = [];
    // expo.filter(x => {
    //     years.push(x["Year"]);
    // })
    // return years;

};
console.log(getYears(getFinals));

getYears(getFinals);

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(getFinals) {


// //  Original Solution below
    let arr = [];
    getFinals(fifaData).filter(x => {
        if (x["Home Team Goals"] > x["Away Team Goals"]){
            return arr.push(x["Home Team Name"]);
        } else {
            return arr.push(x["Away Team Name"]);
        }
    })
    return arr;

};
getWinners(getFinals);
console.log(getWinners(getFinals));

/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(getWinners, getYears) {

    let winners = getWinners(getFinals);
    console.log(winners);
    let years = getYears(getFinals);
    console.log(years);
    let arr = [];
    years.forEach((a, b) => {
        arr.push(`In ${[a]}, ${winners[b]} won the world cup!`)
    });
    return arr;
};
console.log(getWinnersByYear(getWinners, getYears));
// getWinnersByYear(getWinners, getYears);

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
    let hometeam = 0;
    let awayteam = 0;
    let count = 0;
    let arr = data.reduce((a, b) => {
        count ++;
        hometeam += b["Home Team Goals"];
        awayteam += b["Away Team Goals"];
        return a + (b["Home Team Goals"] + b["Away Team Goals"]);
    },0);
    console.log(count, hometeam, awayteam);
    return `${arr} total points, Home scored avg ${hometeam / count}, Away scored avg ${awayteam / count}`;

};

console.log(getAverageGoals(fifaData));
// getAverageGoals();

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(data, initials) {

    

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
