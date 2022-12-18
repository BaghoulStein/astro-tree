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

## Question 1 - Level 2

"Parcel" is constructed of multiple attributes:

1. The item containted inside of it (string)
2. The item's volume in cm^2
3. The address of origin (Address)
4. The recipient (Customer)

### Part 1 - Lvl 2

Every address contains the following: Country, City, House Number, Floor, Apartment number, isPrivate. If true, floor and apartment reset to 0.

Create the class "Address". Add all helper functions that are needed (in your opinion). If "useless" functions are included they will be deducted.

### Part 2 - Lvl 2

Create the class "Customer" with the attributes: First Name, Surname, ID, Address.
Add all needed helper functions, useless ones will be deducted for.

### Part 3 - Lvl 2

Create the class Parcel using the previously created classes.

## Question 1 - Level 3

### Preface

After creating the necessary classes for the company "Cheap-ass" we must start to implement logic in order to manage the company.

### Part 1 - Lvl 3

The courier company must pack each shipment in a suitable box. The company has 3 sizes of boxes - 10 cm^2, 25 cm^2 and 100 cm^2.
Each package larger than 100 square meters is required for the production of a box specifically adapted to the package and the volume of the box will be exactly the same as the volume of the product.

**Build a function in the class Parcel called "ChooseBox" which returns the type (size) of box that will be used. The function would return a double - the volume of the box in cubic centimeters.**

### Part 2 - Lvl 3

The company organizes the packages in a factory according to the first letter of the destination country.
For every character, there's a special area in the delivery center in such way that for countries starting with A, it'd be zone 1, B : zone 2, etc, etc.

**Build a function in the class Parcel called "ChooseZone" that returns an int that indicates the zone for the parcel.**

### Part 3 - Lvl 3

Pay attention, the product in the store isn't just a name! A product has the attributes; Name, Producing Company (string), and price.

**Create the class "Product". Change the class "Parcel" so that a product will be a "Product" instead of a string.**

### Part 4 - Lvl 3

Pay attention, a Box isn't free! the price of the box is equal to the price of the product. Assuming the company has to create a custom box, the price will go up by 5 dollars.

**Build a function called "GetPrice" that returns the final price of the package.**
