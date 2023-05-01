1.What will happen at line 12 and why? If the code causes an error, explain why. 
The program prints 3 because i is equal to 3 when program execution exits the loop.

2.What will happen at line 13 and why? If the code causes an error, explain why. 
The program will print 150 because from the last iteration of the loop, discountedPrice stores the result of 300 times (1-0.5) as the amount.

3.What will happen at line 14 and why? If the code causes an error, explain why. 
The program will print 150 as well.

4.What will this function return? Give a brief explanation why. If the code causes an error, explain why. 
The function returns the array of [50, 100, 150].

5.What will happen at line 12 and why?  If the code causes an error, explain why. 
ReferenceError because i is defined only inside of the for loop.

6.What will happen at line 13 and why? If the code causes an error, explain why. 
ReferenceError because discuntedPrice is defined only inside of the for loop.

7.What will happen at line 14 and why? If the code causes an error, explain why. 
The program prints 150.

8.What will this function return? Give a brief explanation. If the code causes an error, explain why. 
The funciton returns the array of [50, 100, 150].

9.What will happen at line 11 and why? If the code causes an error, explain why. 
ReferenceError because i is defined only inside of the for loop.

10.What will happen at line 12 and why? If the code causes an error, explain why. 
The program will print out 3.

11.What will this function return? Give a brief explanation. If the code causes an error, explain why. 
The function returns the array [50, 100, 150] because discounted is decalred using const in the main block of the function, so it is accessable throughout the function execution and during the for loop the three values were appended to discounted, and it gets returned by the end of the funciton block.

12.Given the above Object, write the notation for:  (These should be in your part2.md)
A.Accessing the value of the name property in the student object
student.name

B.Accessing the value of the Grad Year property in the student object
student['Grad Year']

C.Calling the function for the greeting property in the student object
student.greeting()

D.Accessing the name property of the object in the Favorite Teacher property in student
student['Favorite Teacher'].name

E.Access index zero in the array of the courseLoad property of the student object
student.courseload[0]

13.Arithmetic
A.‘3’ + 2
'32' 
When you use the + operator with a string and a number, JavaScript converts the number to a string and concatenates it with the other string. Therefore, the result is the string "32".

B.‘3’ - 2
1
When you use the - operator with a string and a number, JavaScript tries to convert the string to a number. In this case, the string "3" can be converted to the number 3. Therefore, the result is the number 1.

C.3 + null
3
When you use the + operator with a number and null, JavaScript converts null to the number 0. Therefore, the result is the number 3.

D.‘3’ + null
'3null'
When you use the + operator with a string and null, JavaScript converts null to the string "null". Therefore, the result is the string "3null".

E.true + 3
4
When you use the + operator with a boolean and a number, JavaScript converts the boolean to a number. true is converted to 1 and then added to 3, resulting in the number 4.

F.false + null
0
When you use the + operator with a boolean and null, JavaScript converts false to 0 and null to 0. Therefore, the result is the number 0.

G.'3' + undefined
'3undefined'
When you use the + operator with a string and undefined, JavaScript converts undefined to the string "undefined". Therefore, the result is the string "3undefined".

H.'3' - undefined
'NaN'
When you use the - operator with a string and undefined, JavaScript tries to convert the string to a number. In this case, the string "3" can be converted to the number 3. However, undefined cannot be converted to a number, so the result is NaN (Not a Number).

14.Comparison
A.‘2’ > 1
True because the string '2' is converted to a number, which is greater than 1.

B.‘2’ < ‘12’
False because each character is compared from left to right, and since '1' is less than '2', the comparison returns false.

C.2 == ‘2’
True because the == operator converts the string '2' to the number 2 before comparing it.

D.2 === ‘2’
False because the === operator checks for both value and type equality, and the two operands have different types (number and string).

E.true == 2
False because the == operator converts true to the number 1, which is not equal to 2.

F.true === Boolean(2)
True because the === operator checks for both value and type equality, and both operands are of the same type (boolean) and have the same value (true).

15.Explain the difference between the == and === operators.
The difference between the two is how they handle type coercion. The double equals will perform type coercion to convert the values to a common type before the comparison. But the triple equals operator does not, which means it only returns true if the to values have the same type and value.

16.

17.If the function above is called with the following parameters modifyArray([1,2,3], doSomething), what will be the result? Briefly walk through how you arrived at that result. (This should be in your part2.md). Here we are passing in a function as a parameter, however we can also return a function from another function just as easily, you're encouraged to play around with callbacks as they are used heavily in frontend JS development. 
[ 2, 4, 6 ] is returned. The function modifyArray takes an array as well as a callback function, initializes a new array that will be later returned, iterates through each element of the original array, applies the callback function to each element, and appends the result to the new array.

18.

19.What is the output of the above code?
1
4
3
2
