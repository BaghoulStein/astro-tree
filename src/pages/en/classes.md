---
title: Classes
description: Classes - OOP
layout: ../../layouts/MainLayout.astro
---

Java is an object-oriented programming langauge.

Everything in Java is associated with classes and objects, along with its attributes and functions. For example: in real life, a car is an object. The car has attributes, such as weight and color, and functions, such as drive and brake.

A Class is like an object constructor, or a "blueprint" for creating objects.

### Creating a class

```java
public class Number
{
  int x = 5;
}
```

### Creating an Object

In Java, an object is created from a class. We have already created the class named ```Number```, so now we can use this to create objects.

To create an object of ```Number```, specify the class name, followed by the object name, and use the keyword new:

```java
public class Number
{
  int x = 5;
}

public static void main(String[] args)
{
  Number m_number = new Number();
  System.out.println(m_number.x);
} 
```

### Creating multiple objects

You can create multiple instances of one class.

```java
public class Number
{
  int x = 5;
}

public static void main(String[] args)
{
  Number m_number1 = new Number();
  Number m_number2 = new Number();
  System.out.println(m_number1.x);
  System.out.println(m_number2.x);
} 
```

## Class Attributes

Attributes are variables that are bound to a class or an instance of it. Commonly refered to as "fields"

For example, let's create a class with two attributes.

```java
public class TwoNumbers
{
  int x = 5;
  int y = 3;
}
```

## Static vs Public

You will often see Java programs that contain either [```static```](#access-modifiers) or [```public```](#access-modifiers) attributes and methods.

In the example above, we created a static method, which means that it can be accessed without creating an object of the class unlike [```public```](#access-modifiers), which can only be accessed by objects:

```java
public class Main {
  // Static method
  static void myStaticMethod() {
    System.out.println("Static methods can be called without creating objects");
  }

  // Public method
  public void myPublicMethod() {
    System.out.println("Public methods must be called by creating objects");
  }

  // Main method
  public static void main(String[] args) {
    myStaticMethod(); // Call the static method
    // myPublicMethod(); This would compile an error

    Main myObj = new Main(); // Create an object of Main
    myObj.myPublicMethod(); // Call the public method on the object
  }
}
```

## Constructors

A constructor is a special method that is used to initialize objects. The constructor is called when an object of a class is created. It can be used to set initial values for object attributes.

```java
public class Main {
  int x;

  public Main() {
    x = 5;
  }

  public static void main(Stringp[] args) {
    Main m_obj = new Main();
    System.out.println(m_obj.x);
  }
}
```

* Output would be: 5

### Constructor Parameters

Constructors can also take parameters, which are used to initialize attributes.

```java
public class Main {
  int x;

  public Main(int y) {
    this.x = y;
  }

  public static void Main(String[] args) {
    Main m_obj = new Main(10);
    System.out.println(m_obj.x);
  }
}
```

* Output would be: 10

## Access Modifiers

* **Public** code is accessible from all classes.
* **Private** code is only accessible from within the class.
* **Protected** code is accessible only from within the class and it's _subclasses_
