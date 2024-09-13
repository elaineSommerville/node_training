//defining and initialising a variable
let count = 0;

//two functions, one to increment, one to decrement
//the functions take in NO arguments, they just perfom an action
const inc = () => ++count;
const dec = () => --count;

//function to get whatever the current count is
//it holds the value of whatever count currently is
//again, it takes in no arguements, it just perfoms and action
const getCount = () => count; 

//then we export all of this
//exporting it means that all the properties can be consumed by a different file
module.exports = {
    anything: true,
    who: "Bill",
    count,
    inc,
    dec, 
    getCount
}; 