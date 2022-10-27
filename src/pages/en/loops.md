---
title: Loops
description: Loops - Basics.
layout: ../../layouts/MainLayout.astro
---

Looping in programming languages is a feature which facilitates the execution of a set of instructions/functions repeatedly while some condition evaluates to true. Java provides two ways for executing the loops. While all the ways provide similar basic functionality, they differ in their syntax and condition checking time.

## While Loop

```java
while (Condition)
{
  * code to run *
}
```

While loop starts with the checking of condition. If it evaluated to true, then the loop body statements are executed otherwise first statement following the loop is executed.

For example:

```java
int i = 10;
while (i > 0)
{
  System.out.println(i);
  i--;
}
```

## For Loop

```java
for (initializing condition; testing condition; increment/decrement)
{
 * code to run *
} 
```

* **Initialization condition**: Here, we initialize the variable in use. It marks the start of a for loop. An already declared variable can be used or a variable can be declared, local to loop only.
* **Testing Condition**: It is used for testing the exit condition for a loop. It must return a boolean value.
* **Statement execution**: Once the condition is evaluated to true, the statements in the loop body are executed.
* **Increment/ Decrement**: It is used for updating the variable for next iteration.

For example:

```java
for (int i = 10; i > 0; i--)
{
  System.out.println(i);
}
```

### Foreach loop

```java
for (type var : array)
{
 * code to run using var *
}

equivelant to:

for (int i=0; i<arr.length; i++) 
{ 
    type var = arr[i];
    statements using var;
}
```

* It starts with the keyword for like a normal for-loop.
* Instead of declaring and initializing a loop counter variable, you declare a variable that is the same type as the base type of the array, followed by a colon, which is then followed by the array name.
* In the loop body, you can use the loop variable you created rather than using an indexed array element.
