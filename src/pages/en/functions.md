---
title: Functions
description: Functions in Java
layout: ../../layouts/MainLayout.astro
---
Commonly referred to as "Methods", functions are blocks of code which only run when called.
You can pass data, known as parameters into functions.
Functions are used to easily create reusable pragmatic code.

## Creating a function

In Java, a function must be declared within a class. It is defined by the return value of the function, the name of the function, followed by paranthesis **()**.

```java
public class Main {
  static void myFunction() {
    System.out.println("Hello World!");
  }
}
```

* ```myFunction()``` is the name of the function
* ```static``` means that the method belongs to the Main class and is not an object of it. This is expanded on later.
* ```void``` means that this function does not have a return value.

### Calling a function

```java
public class Main {
  static void myFunction() {
    System.out.println("Function called!");
  }

  public static void Main(String[] args) {
    myFunction();
  }
}
```

* Outputs ```"Function called!"```

Functions can be called multiple times.

```java
public class Main {
  static void myFunction() {
    System.out.println("Function called!");
  }

  public static void Main(String[] args) {
    myFunction();
    myFunction();
    myFunction();
  }
}
```

* Outputs ```"Function called!"``` three times.

## Function Parameters

Information can be passed to function as parameter. Parameters act as variables inside the function.

Parameters are specified after the method name, inside the parentheses. You can add as many parameters as you want, just separate them with a comma.

```java
public class Main {
  static void myFunction(String name)
  {
    System.out.println(name + "smith");
  }

  public static void Main(String[] args)
  {
    myFunction("Liam");
  }
}
```

* Outputs ```"Liam smith"```

When a parameter is passed to the function, it is called an argument. So, from the example above: name is a parameter while "Liam" is an argument.

### Multiple Parameters

```java
public class Main {
  static void myFunction(String name, int age) {
    System.out.println(name + " is " + age);
  }

  public static void Main(String[] args) {
    myFunction("Liam", 16);
  }
}
```

* Output is ```"Liam is 16"```

## Return Values

The ```void``` keyword, used in the examples above, indicates that the method should not return a value. If you want the method to return a value, you can use a primitive data type (such as ```int, char```, etc.) instead of ```void```, and use the ```return``` keyword inside the method:

```java
public class Main {
  static int myFunction(int x, int y) {
    return x + y;
  }

  public static void Main(String[] args) {
    System.out.println(myFunction(5, 10))
  }
}
```

* Output is ```15```

## Function overloading

Function overloading allows the programmer to define a function with the same name, but with different parameters.

```java
static int plusMethodInt(int x, int y) {
  return x + y;
}

static double plusMethodDouble(double x, double y) {
  return x + y;
}

public static void main(String[] args) {
  int myNum1 = plusMethodInt(8, 5);
  double myNum2 = plusMethodDouble(4.3, 6.26);
  System.out.println("int: " + myNum1);
  System.out.println("double: " + myNum2);
}
```
