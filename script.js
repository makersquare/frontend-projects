/**
 * Exercise 0: angryGandalf (example)
**/
 
// Define angryGandalf with input parameters
var angryGandalf = function(type) {
 
	// Define the variables needed
	var message;
 
	// Run conditional on type for 'grey' and 'white'
	if (type === 'grey') {
		message = "YOU...SHALL NOT... PASS!";
	} else if (type === 'white') {
		message = "You merely passed me to your demise.";
	} else {
		message = "I don't think I'm Gandalf anymore.";
	}
 
	// Return message
	return message 
 
}
 
// console.log(angryGandalf('grey'));  // Expect "YOU...SHALL NOT... PASS!" 
// console.log(angryGandalf('white')); // Expect "You merely passed me to your demise."
// console.log(angryGandalf(2)); // Expect "I don't think I'm Gandalf anymore."
 
 
/**
 * Exercise 1: tellFortune
**/
 
// Create function with name tellFortune and appropriate parameters
var tellFortune = function(job,location,partner,children) {
	// takes 4 arguments: number of children, partner's name, geographic location, job title.
 
	// Define string variable that will have that output
	var fortune = "You will be a " + job + " in " + location + ", and married to " + partner + " with " + children + " kids."
	
	// console.log(fortune);
 
	// Return that string
	return fortune;
};
 
// console.log(tellFortune('bball player', 'spain', 'Shaq', 3)); // Expect 'You will be a bball player in spain and married to Shaq  with 3 kids. '
// console.log(tellFortune('stunt double', 'Japan', 'Ryan Gosling', 3000)); // Expect 'You will be a stunt double in Japan and married to Ryan Gosling  with 3000 kids. '
// console.log(tellFortune('Elvis impersonator', 'Russia', 'The Oatmeal', 0)); // You will be a Elvis impersonator in Russia and married to The Oatmeal  with 0 kids. 
 
 
 
/**
 * Exercise 2: calculateAge
**/
 
// Create function with name calculateAge and appropriate parameters
 
	// Define number variable age and save the age based on the years given, ie 2010-1990 = '20'

	// Define a number variable that will account for month discrepcies, ie Jan 2010 - August 1990 = '19'
    
    // return string that says 'You are either XX or YY'
 
// console.log(calculateAge(1984, 2012)); // You are either 28 or 27 
// console.log(calculateAge(1988, 2012)); // You are either 24 or 23 
// console.log(calculateAge(1982, 2012)); // You are either 30 or 29 
 
 
 
/**
 * Exercise 3: calculateSupply
**/
 
// Create function with name calculateSupply and appropriate parameters
 
	// define max age as 100
    
    // Do math to substract max string - string
 
    // Create Message
 
    // Return Message
 
// console.log(calculateSupply(28, 36)); // You will need 946080 cups of tea to last you until the ripe old age of 100
// console.log(calculateSupply(28, 2.5)); // You will need 65700 cups of tea to last you until the ripe old age of 100
// console.log(calculateSupply(28, 400));  // You will need 10512000 cups of tea to last you until the ripe old age of 100 
 
 
 
/**
 * Exercise 4: The Circle Calculator
**/
 
// Create function with name calcDiameterFromRadius and appropriate parameters
 
	// Define string variable that will have that output
    
    // return string to pass the tests below
 
// Create function with name calcCircumfrence and appropriate parameters
 
	// Define string variable that will have that output
 
	// Get Diameter from radius with calcDiameterFromRadius() made above
    
    // Create string to pass test below
 
    // return string
 
// console.log(calcCircumfrence(3)); // The circumference is 18.84
// console.log(calcCircumfrence(4)); // The circumference is 25.12
// console.log(calcCircumfrence(5)); // The circumference is 31.4
 
 
/**
 * Exercise 5:  The Temperature Converter
**/
 
// Create a function called convertTemp:
// Give it 2 parameters, the first being number, second being inputType. inputType should accept strings 'F' or 'C'
	
	// Define the variables used

	// Convert the number from the inputType to the opposite
	
	// Return that number

// Create a function called celciusWaterState. This function will tell you if a Celsius temperature is boiling, liquid, or freezing:
// Give it 1 parameter thats a number

	// Define a variable that will save the string of the conditional below

	// Write a conditional if then statement that saves 'boiling', 'liquid', or 'freezing' depending on what the temperature is.
	
	// Return that number

// Create function with name waterTempAndState
// Give it 2 parameters, the first being number, second being inputType. inputType should accept strings 'F' or 'C'
	
    // Define the variables needed. You may need extra variables here for the use case of converting to C
    
    // If the inputType is 'F', convert the number to 'C' with the convertTemp function above.
    
    	// Pass this number into the celciusWaterState function to get the state
    	// Keep the original 'F' tempurature saved too. You can do this by saving it a new variable or running the 'convertTemp' function again to convert it back to F.

    // If the inputType is 'C', pass the number into celiusWaterState function to get state. 

    // return string "It's currently XXX degrees in the XXX standard and water is in a XXX state.'
 
// console.log(convertTemp(32, 'F')); // 0
// console.log(convertTemp(100, 'C')); // 212

// console.log(celciusWaterState(0)); // 'freezing'
// console.log(celciusWaterState(1)); // 'liquid'
// console.log(celciusWaterState(99.99)); // 'liquid'
// console.log(celciusWaterState(100)); // 'boiling'

// console.log(waterTempAndState(50, 'C')); // "It's currently 50 degrees in the Celcius standard and water is liquid. "
// console.log(waterTempAndState(213, 'F')); // "It's currently 213 degrees in the Farenheit standard and water is boiling. "
// console.log(waterTempAndState(-1, 'F')); // "It's currently -1 degrees in the Farenheit standard and water is liquid. " 
