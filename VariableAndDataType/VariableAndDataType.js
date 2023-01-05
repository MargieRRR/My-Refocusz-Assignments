let caloriesBurnPerDay = 225;
let totalDayOfCycling = 15;
let minPerDayOfCyling = 30;
let minToHour = 60;
let convertMintoHour = minPerDayOfCyling / minToHour;
let totalCaloriesLostPerDay = totalDayOfCycling * caloriesBurnPerDay
console.log(`"Great work, Sam! After ${convertMintoHour} hours of cycling every day for a week, you may lose total of ${totalCaloriesLostPerDay} calories." `)


let targetMoneyToSave = 10_000;
let moneyOnHand = 7500;
let balPercentageOfMoneyBeingSaved = (1-(moneyOnHand / targetMoneyToSave)) * 100
console.log(`"Thank your discipline and hardwork, Sam! you are now ${balPercentageOfMoneyBeingSaved}% away from your goal of saving ₱${targetMoneyToSave}."`)
