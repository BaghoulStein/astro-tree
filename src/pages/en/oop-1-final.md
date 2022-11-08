---
title: OOP 1 - Final Project
description: To be handed.
layout: ../../layouts/MainLayout.astro
---

## Question 1 - Level 1

### 1. Take a look at the following block of code

```java
public class Car
    {
        private string color;
        private int number;
    }
```

* If we were to make an object from the class Car, would the following statement make sense? Explain.

```java
int a = c.number;
```

* How would you solve the given issue?

### 2. Take a look at the following block of code

```java
public class Hyundai extends Car
{
  public void Print()
  {
    System.out.println("Color is: " + this.color "and number is: " this.number);
  }
}
```

* Is the code correct? Explain
* What is the difference between protected and private?

### 3. Take a look at the following block of code

```java
public class Car 
{
  public void Drive()
  {
    System.out.println("Driving car.");
  }

  public void Park()
  {
    System.out.println("Parking car.");
  }
}

public class BMW extends Car
{
  public void Drive()
  {
    System.out.println("Driving fancy car");
  }

  public String park()
  {
    System.out.println("Parking fancy car");
  }
} 
class Program
{
  static void Main(String[] args)
  {
    Car c2 = new BMW();
    c2.Drive();
    c2.Park();
  }
}
```

* Does this work? Explain
