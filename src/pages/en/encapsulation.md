---
title: Encapsulation
description: Encapsulation
layout: ../../layouts/MainLayout.astro
---

Encapsulation is the act of bundling data with the methods that operate on that data, or the restricting of direct access to some of an object's component.
Commonly used to make sure that "sensitive" data is hidden and unaccessible from users.

To achieve this you must:

* Declare class variable/attirubtes as ```private```
* Provide **get** and **set** methods to access and update the values of said variables.

## Get and Set methods

* The ```get``` method returns the variable's value.
* The ```set``` method sets the variable's value.

Syntax for both is that they start with either ```set``` or ```get```, followed by the name of the varaible, with the first letter in upper case.

```java
public class Person {
  private String name;

  public Person(String name) {
    this.name = name;
  }

  public String getName() { return name; }
  public Void setName(String name) { this.name = name; }
}

public class Main {
  public static void Main(String[] args) {
    Person m_person = new Person("Jeff");
    System.out.print(Person.getName() + " ");
    m_person.setName("Josh");
    System.out.print(Person.getName());
  }
}
```

* Output would be: Jeff Josh
