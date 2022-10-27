---
title: Data Types 	
description: Data Types in Programming languages.
layout: ../../layouts/MainLayout.astro
---


A data type is an attribute associated with a piece of data that tells a computer system how to interpret its value. Or, in layman's terms, a data type is a classification that specifies which type of value a variable has and what type of mathematical, relational or logical operations can be applied to it without causing an error.

## Primitive Data Types

Primitive data types are a set of basic data types from which all other data types are constructed.

### Integer (int)

An integer is a numeric data type for whole numbers. For example:  ```-707, 0, 707, 23, 43213, -232.```

Integers can be derived to unisgned and signed numbers. Unsigned integers _cannot_ contain negative numbers, whereas signed integers _can_.

### Floating point (float)

A float is a numeric data type for numbers with fractions. For example:  ```123.2, 0.0, 5454.2, -232.4452.```

Floats are commonly written as 'doubles', which are floats that can store double the memory (and double the numbers) of regular floats.

### Character (char)

A char is a single letter, digit, punctuation mark, symbol, or blank space. For example: ```a, 1, !.```

Chars are the building blocks of the "string" data types.

### String (str)

A string is a sequence of characters, digits, or symbols—always treated as text. For example: ```"Hello World".```

Strings, in most languages, can be treated as Arrays of Chars.

### Boolean (bool)

A boolean is used to represent either a ```True (1)``` value, or a ```False value (0).```
These numbers can be represented by the two integers mentioned above, and are used in if statements to validate conditions.

## Non-Primitive Data Types

 Non-Primitive data types are user-defined data types created by programmers. These data types are used to store multiple values.

For example, consider an array that stores a group of values.

### Array (arr)

The only necessary non-primitive data type to know is an Array.

Arrays are used to store multiple values in a single variable, instead of declaring separate variables for each value.

Most commonly formatted as: ```[5, 2, 34, 65, -43]``` arrays are mutable, strongly typed (cannot change type of variable after decleration) data-structures.
