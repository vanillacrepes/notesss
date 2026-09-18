# Rules of Inference and Equivalence

**Argument**: A sequence of propositions or sentences.

```
F1
F2
:
Fn
∴ Q
```

**or**

`(F1 ∧ F2 ∧ ... ∧ Fn) → Q`

## Rules of Inference

| #   | Name                   | Rule                                                                 | Tautological Form                                                             |
| --- | ---------------------- | -------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| 1   | Addition               | P <br>$\therefore$ P $\lor$ Q                                        | P $\to$ (P $\lor$ Q)                                                          |
| 2   | Simplification         | P $\land$ Q <br>$\therefore$ P                                       | (P $\land$ Q) $\to$ P                                                         |
| 3   | Conjunction            | P<br>Q <br>$\therefore$ P $\land$ Q                                  |                                                                               |
| 4   | Modus Ponens           | P $\to$ Q<br>P <br>$\therefore$ Q                                    | [(P $\to$ Q) $\land$ P] $\to$ Q                                               |
| 5   | Modus Tollens          | P $\to$ Q<br>~Q <br>$\therefore$ ~P                                  | [(P $\to$ Q) $\land$ ~Q] $\to$ ~P                                             |
| 6   | Disjunctive Syllogism  | P $\lor$ Q<br>~P <br>$\therefore$ Q                                  | [(P $\lor$ Q) $\land$ ~P] $\to$ Q                                             |
| 7   | Hypothetical Syllogism | P $\to$ Q<br>Q $\to$ R <br>$\therefore$ P $\to$ R                    | [(P $\to$ Q) $\land$ (Q $\to$ R)] $\to$ (P $\to$ R)                           |
| 8   | Constructive Dilemma   | P $\to$ Q<br>R $\to$ S<br>P $\lor$ R <br>$\therefore$ Q $\lor$ S     | [(P $\to$ Q) $\land$ (R $\to$ S) $\land$ (P $\lor$ R)] $\to$ (Q $\lor$ S)     |
| 9   | Destructive Dilemma    | P $\to$ Q<br>R $\to$ S<br>~Q $\lor$ ~S <br>$\therefore$ ~P $\lor$ ~R | [(P $\to$ Q) $\land$ (R $\to$ S) $\land$ (~Q $\lor$ ~S)] $\to$ (~P $\lor$ ~R) |

## Laws of Equivalence (Fundamental Rules of Logic)

| #   | Name                 | Rule                                                                                                                                                                                                                                                        |
| --- | -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | Reflexivity          | P $\leftrightarrow$ P                                                                                                                                                                                                                                       |
| 2   | Double Negation      | ~(~P) $\leftrightarrow$ P                                                                                                                                                                                                                                   |
| 3   | Commutativity        | (P $\land$ Q) $\leftrightarrow$ (Q $\land$ P) <br>(P $\lor$ Q) $\leftrightarrow$ (Q $\lor$ P) <br>(P $\leftrightarrow$ Q) $\leftrightarrow$ (Q $\leftrightarrow$ P)                                                                                         |
| 4   | Associativity        | [(P $\land$ Q) $\land$ R] $\leftrightarrow$ [P $\land$ (Q $\land$ R)]<br>[(P $\lor$ Q) $\lor$ R] $\leftrightarrow$ [P $\lor$ (Q $\lor$ R)]<br>[(P $\leftrightarrow$ Q) $\leftrightarrow$ R] $\leftrightarrow$ [P $\leftrightarrow$ (Q $\leftrightarrow$ R)] |
| 5   | Distributivity       | [P $\land$ (Q $\lor$ R)] $\leftrightarrow$ [(P $\land$ Q) $\lor$ (P $\land$ R)] <br>[P $\lor$ (Q $\land$ R)] $\leftrightarrow$ [(P $\lor$ Q) $\land$ (P $\lor$ R)]                                                                                          |
| 6   | Idempotency          | (P $\land$ P) $\leftrightarrow$ P <br>(P $\lor$ P) $\leftrightarrow$ P                                                                                                                                                                                      |
| 7   | Identity             | (P $\land$ T) $\leftrightarrow$ P <br>(P $\lor$ F) $\leftrightarrow$ P                                                                                                                                                                                      |
| 8   | Inverse              | (P $\land$ ~P) $\leftrightarrow$ F <br>(P $\lor$ ~P) $\leftrightarrow$ T                                                                                                                                                                                    |
| 9   | Dominance            | (P $\land$ F) $\leftrightarrow$ F <br>(P $\lor$ T) $\leftrightarrow$ T                                                                                                                                                                                      |
| 10  | Absorption           | [P $\land$ (P $\lor$ Q)] $\leftrightarrow$ P <br>[P $\lor$ (P $\land$ Q)] $\leftrightarrow$ P                                                                                                                                                               |
| 11  | De Morgan's Laws     | ~(P $\land$ Q) $\leftrightarrow$ (~P $\lor$ ~Q) <br>~(P $\lor$ Q) $\leftrightarrow$ (~P $\land$ ~Q)                                                                                                                                                         |
| 12  | Contrapositive       | (P $\to$ Q) $\leftrightarrow$ (~Q $\to$ ~P)                                                                                                                                                                                                                 |
| 13  | Material Implication | (P $\to$ Q) $\leftrightarrow$ (~P $\lor$ Q)                                                                                                                                                                                                                 |
| 14  | Material Equivalence | (P $\leftrightarrow$ Q) $\leftrightarrow$ [(P $\to$ Q) $\land$ (Q $\to$ P)] <br>(P $\leftrightarrow$ Q) $\leftrightarrow$ [(P $\land$ Q) $\lor$ (~P $\land$ ~Q)]                                                                                            |
| 15  | Exportation          | [(P $\land$ Q) $\to$ R] $\leftrightarrow$ [P $\to$ (Q $\to$ R)]                                                                                                                                                                                             |
