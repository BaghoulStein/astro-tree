---
title: If Statements
description: If Statements - Basics
layout: ../../layouts/MainLayout.astro
---

An if statement lets your program know whether or not it should execute a block of code.
Comparison-based branching is a core component of programming. The concept of an if-else or switch block exists in almost every programming language.

If statements are catogorized to 3 blocks. If, Else-If, and Else.

### The "if" Block

```
if ((condition) == true)
{
  * code to run *
}
```

An example for that:

``` 
int score = 95;

if (score => 90) {
  System.out.println("Congratulations! You got an A");
}
```

### The "else" Block

The else block is used to exectue a piece of code if a condition is false.

```
else {
  * code to run *
}
```

Extending our previous example we can say:
```
else {
  System.out.println("You did not get an A, better luck next time!");
}
```

### The "else if" Block

The else if block is used to check if _another_ statement is true after the first statement is determined to be **false**.

```
if (condition)
{
  * code to run *
} else if (condition)
{
  * code to run *
}
```

If we were to extend our previous to accommodate for B grades we would do the following:
```
int score = 85;

if (score => 90)
{
  System.out.println("...");
} else if (score => 80)
{
  System.out.println("You got a B! Not bad!");
} else {
  System.out.println("...");
}
```

## Boolean Operators

Similar to how you can add two float values using the + operator to get a third float value, or subtract them using the - operator, you can also operate on two boolean values to get a third boolean value.

Almost all boolean operators can be expressed in a mathematical statement

### And ( && )

The and operator evaluates to true whenever the two boolean values on either side of it are also true.

```
(Condition) && (Condition) == (Condition) * (Condition)
if result == 1 true else false
```
### Or ( || )

The or operator evaluates to true if either of the two boolean values on either side of it is true.
```
(Condition) || (Condition) == (Condition) + (Condition)
if result => 1 true else false
```
### Not ( ! )

In addition to operating on two boolean values, you can also calculate the opposite of a single boolean value. The opposite of true is false, and the opposite of false is true.
```
!(Condition) = Opposite of (Condition)
```
### Combining Operators

You can also combine these operators to form more complicated logic. So you can do things like this:
```
boolean isMammal = !canSwim && !canFly;
```