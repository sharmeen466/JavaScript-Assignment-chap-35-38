//...................................CHAP # 35-38 START.............................................
//.......................................FUNCTIONS..................................................

//  Q   #   01

// function today (){
//     let date = new Date()
// document.write(date)
// return
// }

// today()


//  Q   #   02

// function greet() {
//     let firstName = prompt("Your first Name")
//     let lastName = prompt("Your last Name")
//     alert("Hello "+ firstName +" "+ lastName)
//     return
// }
// greet()


//  Q   #   03

// function sum (){
//     let num1 = +prompt("Enter number 1")
//     let num2 = +prompt("Enter number 2")
//     let sumOfNum = num1 + num2
//     alert("The sum of "+ num1 +" and "+ num2 +" = "+ sumOfNum)
// }

// sum()


//  Q   #   04

// function calculator(num1, num2, operator){
// if(operator === "+"){
//     result =  num1 + num2
//     alert(num1 + " + "+ num2 + " = "+ result)
// }
// else if(operator === "-"){
//     result =  num1 - num2
//     alert(num1 + " - "+ num2 + " = "+ result)
// }
// else if(operator === "*"){
//     result =  num1 * num2
//     alert(num1 + " * "+ num2 + " = "+ result)
// }
// else if(operator === "/"){
//     result =  num1 / num2
//     alert(num1 + " / "+ num2 + " = "+ result)
// }
// }
// let firstNum = +prompt("Enter first number")
// let secNum = +prompt("Enter second number")
// let operator = prompt("Enter an operator")

// calculator(firstNum, secNum, operator)


//  Q   #   05

// function square(numSquare){
//     let result = numSquare * numSquare
//     alert(result)
//     return
// }

// square(+prompt("Enter a number for square"))


//  Q   #   06


//  Q   #   07

// function count (start, end){
// for (let i = start; i <= end; i++){
//     document.write(i + "<br />")
// }
// }

// let start = +prompt("Enter starting number")
// let end = +prompt("Enter ending number")
// count(start, end)


//  Q   #   08


// function hypoteneous() {
//     document.write("Hypoteneous = Base <sup> 2 </sup> + Perpendicular <sup>2 </sup> <br />")

//     function square(base, perpendicular) {
//         let baseResult = base * base
//         let perpendicularResult = perpendicular * perpendicular

//         document.write("Hypoteneous = " +"("+ base, ")<sup> 2 </sup>" , " + ","("+ perpendicular +")<sup> 2 </sup> <br />")
//         document.write("Hypoteneous = " + baseResult, " + ", perpendicularResult + "<br />")
//         document.write("Hypoteneous = " + baseResult + perpendicularResult)

//     }

//     let base = +prompt("Enter a number of base")
//     let perpendicular = +prompt("Enter a number of perpendicular")
//     square(base, perpendicular)
// }

// hypoteneous()


//  Q   #   09


// function area(widthOfArea, heightOfArea){
// document.write("The width of area of a Rectangle is: "+ widthOfArea + "<br />")
// document.write("The height of area of a Rectangle is: "+ heightOfArea + "<br />")
// document.write("The complete area of a Rectangle is: " + widthOfArea * heightOfArea)
// }
// let widthOfArea = +prompt("Write a number of width of Area")
// let heightOfArea = +prompt("Write a number of height of Area")
// area(widthOfArea, heightOfArea)


//  Q   #   10


// function palindrome(str) {
//     let split = str.split("")
//     split = split.reverse().join("")

//     if (str == split) {
//         document.write(split + " is palindrome word")
//     }
//     else {
//         document.write(split + " is not palindrome word <br /> Write something palindrome word <br /> e.g. civic")
//     }
// }

// let str = prompt("Enter a palindrome word: e.g. madam")
// palindrome(str)


//  Q   #   11


// function upperCase(str){
// let titleCase = str.split(" ")
// let arr = [];
// for(let i = 0; i < titleCase.length; i++){
//     arr.push(titleCase[i].charAt(0).toUpperCase() + titleCase[i].slice(1).toLowerCase())
// }
// return arr.join(" ")
// }

// let str =  "the quick brown fox"
// upperCase(str)
// let result = upperCase(str)
// document.write("Example String: " + str + "<br />")
// document.write("Expected Output: " + result)


//  Q   #   12


// function findLongestWord(str) {
//     let word = str.split(" ") // web, development, tutorial
//                               //  0  ,     1,         2       [i]
//     let longest = ""
//     for (let i = 0; i < word.length; i++) {
//         if (word[i].length > longest.length) {

//             longest = word[i]
//         }
//     }
// return longest;
// }

// let str = "Web Development Tutorial"
// findLongestWord(str)

// document.write("Example String: "+ str + "<br />")
// document.write("Expected Output: " + findLongestWord(str))


//  Q   #   13

// let count = 0

// function counting(str, letter) {
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] == letter) {
//             count++
//         }
//     }
//     return count;
// }
// let str = "JSResourceS.com"
// let letter = "o"
// counting(str, letter)
// document.write('The occurence of o in this string is: ' + count)


//  Q   #   14

// let r = +prompt("Enter a radius of a Circle")

// function calsCircumference(circumferenceOfCircle){
//     document.write("<h1> Circumference Of Circle </h1>")
//     document.write("Formula of Circumference of Circle is: <br/> 2 π r <br /> <br />")
//     document.write("Circumference of Circle is:<br /> 2 * 3.14 * "+ r +"<br /> <br />")
//     document.write("Circumference of Circle is:<br /> " + circumferenceOfCircle + "<br /> <br /> <br />")
// }

// let circumferenceOfCircle = 2 * 3.14 * r
// calsCircumference(circumferenceOfCircle)

// function area(areaOfCircle){
//     document.write("<h1> Area Of Circle </h1>")
//     document.write("Formula of Area of Circle is: <br/> π r <sup> 2 </sup> <br /> <br />")
//     document.write("Area of Circle is:<br />3.14 * ("+ r +")<sup> 2 </sup> "+"<br /> <br />")
// document.write("Area of Circle is: " + areaOfCircle)
// }

// let areaOfCircle = 3.14 * r * r
// area(areaOfCircle)



//...................................CHAP # 35-38 END.............................................