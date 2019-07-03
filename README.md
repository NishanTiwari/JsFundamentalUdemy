# Commit, push and pull request
1. git status check status ( red text indicates its not stagged yet.)
2. git add . your code goes to staging area.
3. git status check status ( text should be green )
4.  git commit -m "< your commit message here>" saves the changes.
5. git push -u origin <branch>
6. Repeat this step 1- 4 each time you want to commit. step 5 to upload your working code(avoid pushing the broken code ).
7. Goto your git hub and send the pull request.

---
Nishan is good guy
### markdown [tips](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

---
# Two Kinds of Data
In JavaScript there are two different kinds of data: primitives, and objects. A primitive is simply a data type that is not an object, and has no methods.

In JS, there are six primitive data types:

## Boolean

A boolean represents only one of two values: true, or false. Think of a boolean as an on/off or a yes/no switch.

```javascript
var boo1 = true;
var boo2 = false;
```
## Number

There is only one type of Number in JavaScript. Numbers can be written with or without a decimal point. A number can also be +Infinity, -Infinity, and NaN (not a number).
```javascript
var num1 = 32;
var num2 = +Infinity;
```

## String

Strings are used for storing text. Strings must be inside of either double or single quotes. In JS, Strings are immutable (they cannot be changed).

```javascript
var str1 = 'hello, it is me';
var str2 = "hello, it's me";
```

## Null

Null has one value: null. It is explicitly nothing.

 
```javascript
var nothing = null;
```

##  Undefined

A variable that has no value is undefined.
```javascript
var testVar;
console.log(testVar); // undefined
```
            §§§§                