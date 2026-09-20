# Intro to programming

This course so far uses **Python**, so assume all code from this point on is written accordingly. The CS labs use **Linux** PCs (specifically Ubuntu), but Python and will work consistently on any computer that runs a relatively modern operating system. This also goes more into the nitty-gritty of things unlike COSS's cmsc12 reviewer, only read this if you want elaboration on a topic or if you simply just have more time.
## Programming Languages

A set of **commands**, **instructions**, and other **syntax** to create a **software program**. These are what we use to actually implement algorithms, etc. Programming languages work by defining their own syntax, data types, and semantics and then use a compiler or interpreter to turn it into binary a computer can natively execute.
### Syntax and Semantics

- **Syntax** defines which strings of characters and symbols are well formed. It governs how code must be written for a specific programming language.
- **Semantics** associate a behavior to valid strings, it's what the instructions will actually do when executed. 
- Think of **syntax** as **grammar** and **semantics** as **meaning**.
### Objects

The core of what Python uses to represent and manipulate data. Everything in Python is an object.

Objects have two types:
- **Scalar Objects** are the more basic data types that only holds an individual value. Think of `int`, `float`, `bool`, and `None`. Python variables aren't explicitly declared with a type unlike other languages, but something like `1.2345` is very much considered a **scalar object**.
- **Non-Scalar Objects**, like the name implies are non-singular. Instead, they hold a collection of **values**. This means data structures with multiple data points like `strings`, `lists`, `tuples`, and `dictionaries` are considered non-scalar.
	- Notice how it wasn't stated that a **non-scalar object** is a collection of **scalar objects**. That is because a **non-scalar object** itself can hold a collection of **non-scalar objects**.
	- Examples are: `[1, 2, 3, 4]` and `[[1, 2], [3, 4]]`

### Variables

If **objects** represent **data**, **variables** represent **objects**, putting a name to them. Think of **variables** as what **holds data**, allowing for **storage**, **modification**, and **retrieval**.

In **Python**, variable names are:
- **Only valid** if the **first** character is a **letter** in the alphabet,
- OR the **first** character is an **underscore**, which may then be followed by either an **alphanumeric character** or **another underscore**.
- Variable names are also **case-sensitive**, meaning `x` and `X` are considered two **different** variables.
- **Assignment** is **right to left**, meaning that the left hand variable will inherit the right hand value.
	- For example, `examPassed = True`. `examPassed` will be given the value `True`, not vice versa. Pretty obvious here since **True** is a **reserved** keyword anyways.

**Reserved Keywords** (sometimes called reserved words, like in the handout) are words that Python reserves as part of its syntax. This means that they cannot be used as identifiers for **variables**, **function names**, or **class names**.

| `False` | `None`   | `True`   | `and`     | `as`       | `assert` | `async`    |
| ------- | -------- | -------- | --------- | ---------- | -------- | ---------- |
| `await` | `break`  | `case`   | `class`   | `continue` | `def`    | `del`      |
| `elif`  | `else`   | `except` | `finally` | `for`      | `from`   | `global`   |
| `if`    | `import` | `in`     | `is`      | `lambda`   | `match`  | `nonlocal` |
| `not`   | `or`     | `pass`   | `raise`   | `return`   | `try`    | `while`    |
| `with`  | `yield`  |          |           |            |          |            |
### Operators

These are constructs that allow for the manipulation of values. There are several types such as **arithmetic**, **comparison/relational**, **assignment**, **logical**, **bitwise**, **membership**, and **identity**.

| Type                    | Operators                                                            | Purpose                                              |
| ----------------------- | -------------------------------------------------------------------- | ---------------------------------------------------- |
| Arithmetic              | `+` `-` `*` `/` `//` `%` `**`                                        | Perform mathematical operations                      |
| Relational / Comparison | `==` `!=` `>` `<` `>=` `<=`                                          | Compare values                                       |
| Assignment              | `=` `+=` `-=` `*=` `/=` `//=` `%=` `**=` `&=` `\|=` `^=` `>>=` `<<=` | Assign or update values                              |
| Logical                 | `and` `or` `not`                                                     | Combine or negate conditions                         |
| Bitwise                 | `&` `\|` `^` `~` `<<` `>>`                                           | Perform operations on individual bits                |
| Membership              | `in` `not in`                                                        | Test whether a value exists in a collection          |
| Identity                | `is` `is not`                                                        | Test whether two references refer to the same object |

Python also has a specific order in which arithmetic is performed. It goes as follows (top to bottom):
- ()
- **
- *, /, //, %
- +, -
In the case that two operators are on similar levels, the **leftmost** operator will be prioritized.
### Expressions

Combinations of values, variables, and operators. As long as you use an operator on some objects, it can be considered an expression.

**e.g.**
```
x = 12
x *= x
y = "john"
z = "doe"
z = y + z
```

### Comments

Comments are strings in a program that the **compiler/interpreter** will **ignore**. Each language has a different way of adding a comment, python has two. These can be used to annotate code, and more often than not, to walk future readers through how the program works.

1. A single line comment, written like this
```
# tinatamad nakong magsulat legit
```
2. A multi line comment, written like this (three apostrophes)
```
'''
hi
bye
'''
```

### Strings

Strings are a **non-scalar data type** that represent a **series** of **characters**. You can create a string using either **apostrophes** or **quotes**.

```
this = 'works'
the_same_as = "this"
```

### Input/Output

To get an input, you can use `input()`. This **function** will return a `string` and can take a **prompt** as an **argument**. The **prompt** will be **printed** to the **cli**.

```
user_in = input("type something: ")
```

### Type Casting

This is converting a value into another type. Say considering a string to a number, or vice versa. Because `x = "67"` will obviously make python store it as a string, but what if you wanted to add a number to it?

**e.g.** 
```
x = int("67")
y = float("68")
x += y
z = string("69")
```
## More on Python & Other Nitpicky Stuff

This is kept at the end because this is likely extraneous information to the course itself but was still included in the handout.

**Python** is an **interpreted**, **object-oriented**, **high-level programming language** with **dynamic**
**semantics**. Its high-level built in **data structures**, combined with **dynamic typing** and **dynamic**
**binding**. Python’s keywords/commands (syntax) and sequence of syntactic elements (semantics)
are very close to the English language; thus, It is very simple and easy to learn.

**This course uses Python 3.x**
### Ways to Start Python

We have four ways to start Python:
1. Interactive Interpreter
   
	To be able to access the interactive interpreter, type in the terminal the command
	python3. This will bring you to an interface that is running on the command line for
	Python.
2. Invoking the Interpreter
   
	Without going to the interactive interpreter, you can invoke Python and run a program that
	you built. To do this, just type `python3 <filename>.py`
3. As a script
   
	Running a script in the terminal using `./<filename>.py` on the command line.
	Before doing this, the file must be executable and has a declaration at the 1st line of the
	file with the following: `#!/usr/bin/python3`
4. Using an Integrated Development Environment (IDE)
   
	Python can be run in an IDE. IDEs make things easier for the user since all the
	configurations need are already install and configured. It also has shortcuts in running the
	script.
