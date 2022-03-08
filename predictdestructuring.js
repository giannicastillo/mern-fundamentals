//#1

// const cars = ['Tesla', 'Mercedes', 'Honda']
// const [ randomCar ] = cars
// const [ ,otherRandomCar ] = cars
//Predict the output
// console.log(randomCar)// Tesla 
// console.log(otherRandomCar) //Mercedes 

//[randomCar] signifies the first index cars[0] 

//the coma that is before otherRandomCar signifies that the information that is being consol.loged is after the index [0]
//The value of [1] is the string 'Mercedes'

//2
// const employee = {
//     name: 'Elon',
//     age: 47,
//     company: 'Tesla'
// }
// const { name: otherName } = employee;
// //Predict the output
// // console.log(name);
// console.log(otherName);

//console.log (name) will return an error because on line 21 we changed the name of the variable 
//console.log (othername) will return 'Elon'


//#3
// const person = {
//     name: 'Phil Smith',
//     age: 47,
//     height: '6 feet'
// }
// const password = '12345';
// const { password: hashedPassword } = person;  
// //Predict the output
// console.log(password);
// console.log(hashedPassword);

//console.log(password) will come up as '12345'
//console.log(hashedPassword) will come up as undefined because there is not anything wihin the spoke of persons that is identified by hashedPasssword. 

//#4
// const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
// const [,first] = numbers;//[1]
// const [,,,second] = numbers;//[3]
// const [,,,,,,,,third] = numbers;//[8]
// //Predict the output
// console.log(first == second);
// console.log(first == third);

//console.log(first == second) 
    //comparing the value of [1] to the value of [3]
//console.log(first == third);
    //comparing the value of [1] to the value [8]
    //2==2 is true 


    //#5 
    const lastTest = {
        key: 'value',
        secondKey: [1, 5, 1, 8, 3, 3]
    }
    const { key } = lastTest;
    const { secondKey } = lastTest;
    const [ ,willThisWork] = secondKey;
    //Predict the output
    console.log(key);
    console.log(secondKey);
    console.log(secondKey[0]);
    console.log(willThisWork);
    
    //console.log(key) == 'value' 
    //console.log(secondKey) == [1, 5, 1, 8, 3, 3]
    //console.log(secondKey[0]) == 1
    //console.log(willThisWork) == 5  







