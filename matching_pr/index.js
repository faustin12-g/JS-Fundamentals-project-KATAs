/*
Your job is to fix the parentheses so that all opening and closing parentheses (brackets) 
have matching counterparts. You will do this by appending parenthesis to the beginning or 
end of the string. The result should be of minimum length. Don't add unnecessary 
parenthesis.

The input will be a string of varying length, only containing '(' and/or ')'.

For example:

Input: ")("
Output: "()()"

Input: "))))(()("
Output: "(((())))(()())"
*/


function fixParentheses(s) {
    let openNeeded = 0;
    let balance = 0;

    for (let char of s) {
        if (char === '(') {
            balance++;
        } else if (char === ')') {      // )()())
            if (balance > 0) {
                balance--; // match found
            } else {
                openNeeded++; // need a '(' at the start
            }
        }
    }

    return '('.repeat(openNeeded) + s + ')'.repeat(balance);
}

console.log(fixParentheses(")("));         // Output: "()()"
console.log(fixParentheses("))))(()("));   // Output: "(((())))(()())"
