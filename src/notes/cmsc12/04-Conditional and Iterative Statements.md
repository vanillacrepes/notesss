# Conditional and Iterative Statements

This note will cover implementation of **conditions** and **iterations** in Python.
## Conditional Statements

A condition is a statement describing the **value** of a variable or the **relationship** between two or more variables.
- A condition can only evaluate to **true** or **false**.
- Conditions can be **nested**, meaning you can put another condition inside another. This was mentioned in a previous note.

If statements in python have three types: `if`, `elif`, and `else`.
- `if` statements can be used alone or used to start an `if-else` chain.
- `elif` require that an `if` statement is used before it. `An if-else` chain can have as many instances of  `elif` as you require.
- `else` is placed at the end of an `if-else` chain. Acting as a **base case** that will run when all preceding statements are not `True`.

A complex `if-else` chain can look something like this:
```
#let "be" stand for boolean expression
if be1:
	code
elif be2:
	if be3:
		code
	else:
		code
elif be4:
	code
else:
	code
```

Be careful with **indentation**, since python uses **indentation** instead of `{}`, make sure that the code block you want to run in the `if` statement is indented **relative** to it.

```
if condition:
	code_must_be_indented
```

## Iterative Statements

A **loop** that **repeats** execution of a block of code as long as a **condition** holds **True**.

### Types of Loops

Python has two types of loops:
- `while`
	- Fits the formal definition of the loop. A while loop **only** repeats execution while the condition evaluates to **True**.
```
while condition:
	code
```

- `for`
	- **Repeats** code **for each item** in a `sequence` or `iterable`, these are things such as `list`, `string`, or `range()`.
	- The loop will stop once **all** items in the `iterable` have been passed.
```
for item in [1,2,3,4]
	print(item)
	
'''
this will print:
1
2
3
4
'''

for item in range(1, 6): # ranges will always stop at 1 below the end value.
	print(item)
	
'''
this will print:
1
2
3
4
5
'''
```

### Special Keywords

There are two keywords you can use to modify a loop's flow:
- `break`
	- **Exits** you out of the smallest enclosing loop, **terminating** all further execution.
- `continue`
	- Forces a loop to start the **next iteration**, **skipping** the execution of all lines after the `continue`.