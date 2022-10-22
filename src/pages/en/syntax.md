---
title: Syntax
description: Mandatory Basics - Syntax
layout: ../../layouts/MainLayout.astro
---

In this page we go over basic python syntax, and some logic fallacies that need to be addressed.


## 1. Introdution to Python

For now, we will start off with Python due to it's simple syntax that's similar to English.

### 1.1 Hello World
To get started, invoke the interperter by writing ```Python``` in the terminal, and write the following line:<br><p style="text-align: center; font-size: 125%;"><span style="color: #85EA85"> ```print```</span>```("Hello World")```</p>

...And congratulations on writing your first line of Python code.


### 1.2 Variables & Types

Python at it's core is a dynamically typed language, with static typing capabilities.
It consists of 4 primitive data types, and 4 non-primitive data types. 

The primitive data types are:
 * Integers (Whole numbers)
 * Floats (Decimal numbers)
 * Strings (Collections of alphabets, words or other characters)
 * Booleans (True or False values)

The non-primitive data types are:
 * Lists (Used to store collections of heterogeneous, mutable items)
 * Tuples (Used to store collections of heterogeneous, immutable items)
 * Dictionaries (Used to store collections of ```key : pair``` heterogeneous, mutable items)
 * Sets  (Used to store collections of unordered, unindexed, heterogeneous, immutable items)


 #### Integers

Integers represent whole numbers such as: <span style="padding-left: 0.5em; padding-right: 0.5em;">```[-1, 923, 5345, -23, 0]```</span>

#### Floats

Float (floating point number) represenets rational numbers, ending with a decimal figure such as: <span style="padding-left 0.5em;">```[3.14, 8.2323, 1.0, 8973.2323, -54.23]```</span>

#### Strings

Strings represent a collection of characters, words, etc. 
For example: <span style="padding-left: 0.5em;">```["Hello", "Programming >> CAD", "Caffeine"]```</span>

Worth noting that Strings, by definition, are character arrays (char == 'w' for example) and technically not a primitive type.

#### Booleans

Booleans represent True or False values.


#### Variables

Variables are containers for storing data values.
In python, it is not mandatory to declare the type of a variable.

A variable is declared the moment it is created ```X = 5```<br>
<span style="padding-left: 15em;">```print(x) prints out => 5```</span>

Variables _are_ case sensetive, and we will go over our team's naming convention as a team together.