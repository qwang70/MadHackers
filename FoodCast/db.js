// const sqlite3 = require('sqlite3').verbose();
// let db = new sqlite3.Database('./data/data.db', (err) => {
//     if (err) {
//         console.error(err.message);
//     }
//     console.log('Connected to the database.');
// });
db = [
    {Food: "Turkey Breast Sandwich",
    FoodQuantity: 10,
    PickupUntil: "8:30 P.M.",
    Description: "Turkey Breast Sandwich made this morning"},
    {Food: "Tuna Salad",
    FoodQuantity: 18,
    PickupUntil: "7:00 A.M.",
    Description: "Leftover from breakfast"},
]
export default db;