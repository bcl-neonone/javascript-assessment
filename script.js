/* 
    1. The following code produces an error. Clear the error 
    and ensure the correct amount is logged to the console.
*/
const checkedInAttendees = 25;
checkedInAttendees += 10;
console.log(checkedInAttendees);


/*
    2. What is the value of profitableEvent in the following snippet? 
    Uncomment the console log to check your logic! 
*/
const ticketsSold = Math.abs(93);
const profitableEvent = ticketsSold > 30 ? true : false;
// console.log(profitableEvent);


/* 
    3. If the event above was profitable, log "Congratulations!" to the console.
    If the event was not profitable, log "What a shame..." to the console.
*/


/* 
    4. Log each item to the following array to the developer console one at a time. 
*/
const seatTypes = ['standard', 'wheelchair', 'companion', 'transfer', 'special'];


/* 
    5. Refactor the array log logic above as a function that accepts a single argument.
*/


/* 
    6. When a user clicks the page's <h1> element, update the background color 
    of the page body as well as the color of the page text.
*/


/* 
    7. Log the thumbnail URL for Breakfast Potatoes from the response object.
*/
const response = {
  meals: [
    {
      strMeal: "BeaverTails",
      strMealThumb: "https://www.themealdb.com/images/media/meals/ryppsv1511815505.jpg",
      idMeal: "52928"
    },
    {
      strMeal: "Breakfast Potatoes",
      strMealThumb: "https://www.themealdb.com/images/media/meals/1550441882.jpg",
      idMeal: "52965"
    },
    {
      strMeal: "Poutine",
      strMealThumb: "https://www.themealdb.com/images/media/meals/uuyrrx1487327597.jpg",
      idMeal: "52804"
    }
  ]
}


/* 
    8. Log the thumbnail URL for Breakfast Potatoes using the variable below.
*/
const objectProperty = "strMealThumb";