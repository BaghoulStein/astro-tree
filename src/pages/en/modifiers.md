---
title: Java Modifiers
descriptions: Java Modifiers
layout: ../../layouts/MainLayout.astro
---

## Access Modifiers

Access modifiers control the access level of the modified code.

* **Public** code is accessible from all classes.
* **Private** code is only accessible from within the class.
* **Protected** code is accessible only from within the class and it's _subclasses_

## Non-Access Modifiers

Non-Access modifiers are used to provide additional functioanlity which does not interact with the access level. (Only relevant keywords are mentioned.)

* **Final** code is neither inheritable nor overridable.
* **Static** code belongs to the class, rather a specific object.
* **Synchronized** code can only be accessed by one thread at a time.

### Abstract

An ```abstract``` method belongs to an ```abstract``` class, and it does not have a body. The body is provided by the subclass.

```java
abstract class Animal {
  public abstract void makeSound();
}

public class Dog extends Animal {
  public void makeSound() { System.out.println("Bark!"); }
}

public class Main {
  public static void main(String[] args) { 
    Dog m_dog = new Dog();
    m_dog.makeSound();
  }
}
```

* Output would be: "Bark!"

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
