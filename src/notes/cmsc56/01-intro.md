# Propositional Logic

## Basics
- Proposition
  - A declarative sentence.
  - Its truth value is either known or easily determined.

- Notation
  - T: True
  - F: False
  - Propositions: Anything you want, but usually P, Q, R...
  - Compound propositions: usually E, F, G, H...

- Assumptions
  - Law of Excluded Middle
    - "For every proposition P, P is either True or False"
    - Walang maybe, laging true or false yan.
  - Law of Contradiction
    - "For every proposition P, P cannot be both T and F at the same time."

## LOGICAL CONNECTIVES
- NOT [~]
  - Negates the truth value
  - ```~P, ~Q```
  - Rule: ~P is true iff P is false. ~P is false iff P is true.

- AND [∧]
  - "both P and Q"
  - ```P ∧ Q```
  - Rule: true iff **both** P and Q are true. Sobrang strict, need talaga both.

- OR [∨]
  - "either P or Q" / "at least one of P and Q"
  - ```P ∨ Q```
  - Rule: true iff **at least one** of P or Q is true.
  - And na di maselan.

- IF-THEN [->]
  - "if P then Q" / "P implies Q" / "Q if P"
  - ```P → Q```
  - In P → Q:
    - P = premise
    - Q = conclusion
  - Rule: P → Q is true iff P is false OR Q is true.
    - Basta pag true ang P, true lang yung **term** pag true yung Q, pag false ang P laging true yan.
  - Related forms (given P → Q):
    - Inverse: ~P → ~Q
    - Converse: Q → P
    - Contrapositive: ~Q → ~P

- IF-AND-ONLY-IF [<->]
  - "P if and only if Q" / "if P then Q, and if Q then P"
  - ```P ↔ Q```
  - Rule: true iff P and Q have the **same** truth value (both T or both F).

## Literals vs Terms
- Literal: a single propositional variable or its negation
  - ex. ```P``` or ```~Q```
- Term: 2 or more literals combined by a connective
  - ex. ```P ∨ Q```, ```P ∧ ~R```

## Syntax
- T and F are valid propositions.
- If P and Q are valid propositions, so are: ```~P, P∧Q, P∨Q, P→Q, P↔Q```
- Order of operations (kung walang grouping symbols): ```~ → ∧ → ∨ → → → ↔```
  - Same logic as PEMDAS, pwede tanggalin yung parentheses kung malinaw naman order.

## Semantics
- Truth value ng buong compound proposition = assign truth values sa variables tapos apply yung connective rules paisa-isa.

## Kinds of Propositional Statements
- Tautology (valid sentence)
  - Laging true, regardless of truth values ng variables.
- Contradiction (absurdity)
  - Laging false, regardless of truth values ng variables.
- Contingency
  - Depende sa truth values, minsan true minsan false.

## Determining the Type (Truth Table Method)
1. Label first n columns with the n component variables. Sunod na columns = combinations leading up to buong statement.
2. List lahat ng 2ⁿ possible combinations ng truth values.
3. Fill in truth values ng remaining columns hanggang sa buong statement.

## Properties
- Satisfiable
  - May at least one assignment of truth values na magiging true yung statement.
- Equivalent
  - 2 statements same truth value sa **every** interpretation (i.e. same truth table).