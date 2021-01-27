### Part 1

1. The variable i will be printed because the scope of i is within the function.
   
2. The variable discountedPrice will be printed because the scope of discountedPrice is within the function and var doesn't have block scope.
   
3. The variable finalPrice will be printed because the scope of finalPrice is within the function.
   
4. The function will return the array discounted with the values [50, 100, 150]. For each value in prices, the value is halved because 1 - discount is .5 in this case and pushes the values into the array. The var type allows for redeclarations so the for loop will work.
   
5. The variable i will not be printed because the scope of i is within the code block since it's type is let.
   
6. The variable discountedPrice will not be printed because the scope of discountedPrice is within the code block since it's type is let.
   
7. The variable finalPrice will be printed because the scope of finalPrice is within the function.
   
8. The function will return an error because the let type doesn't allow redeclarations and the for loop is repeatedly declaring discountedPrice.
   
9.  The variable i will not be printed because the scope of i is within the code block since it's type is let.
    
10. The varaible discountedPrice will not be printed because the scope of discountedPrice is within the code block since it's type is const.
    
11. The variable finalPrice will be printed because the scope of finalPrice is within the function.
    
12. The function will return an error because the const type doesn't allow reassignments or redeclarations and the for loop is repeatedly declaring and assigning discountedPrice.

13. A. `student.name`\
    B. `student["Grad Year"]`\
    C. `student.greeting()`\
    D. `student["Favorite Teacher"].name`\
    E. `student.courseLoad[0]`

14. A. 32; '3' + 2 is treated as string concatenation so the 2 is converted to a string and concatenated to '3'\
    B. 1; '3' is converted to the number 3 and subtraction is performed\
    C. 3; null is converted to the number 0 and addition is performed\
    D. 3null; '3' + null is treated as string concatenation so null is converted to a string and concatenated to '3'\
    E. 4; true is converted to the number 1 and addition is performed\
    F. 0; false and null are both converted to the number 0 and addition is performed\
    G. 3undefined; "3" + undefined is treated as string concatenation so undefined is converted to a string and concatenated to "3"\
    H. NaN; "3" is converted to the number 3 and undefined is converted to NaN, which results in NaN because the subtraction fails

15. A. true; '2' is converted to the number 2 and 2 is greater than 1\
    B. false; both are strings and 1 is alphabetically less than 2\
    C. true; '2' is converted to the number 2 and 2 is equal to 2\
    D. false; under strict equality 2 is not equal to '2'\
    E. false; true is converted to the number 1 and 1 is not equal to 2\
    F. true; Boolean(2) evaluates to true and true is equal to true under strict equality

16. The == operator uses type conversion, so it converts the two things being compared to numbers. The === operator checks for equality without type conversion.

17. 'How are you?' is printed. The first if statement fails because true is converted to the number 1 and 2 is not equal to 1. This will cause the else if statement to run and 'How are you?' will be printed because 2 is converted to true. Since the else if statement is true, the else statement will be ignored.

18. In part1-question18.js

19. The function returns [6, 8, 10]. For each value in [1, 2, 3], the doSomething function will be called with the value and function(x) as parameters. The doSomething function will add 2 to the value and call function(x), which multiplies the value by 2. The new value will then be added to newArr. After iterating through every value, the function returns.

20. In part1-question20.js

21. 1\
    4\
    3\
    2