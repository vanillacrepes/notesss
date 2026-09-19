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

Can roughly be split into 4 groups to remember easier. Basic, Modus, Syllogism, Dillema (BMSD)<br>
**DO NOT SWAP MODUS AND DILLEMA !!!** 

| #   | Name                   | Rule                                                                 | Tautological Form                                                             |
| --- | ---------------------- | -------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| 1   | Addition               | P <br>$\therefore$ P $\lor$ Q                                        | P $\to$ (P $\lor$ Q)                                                          |
| 2   | Simplification         | P $\land$ Q <br>$\therefore$ P                                       | (P $\land$ Q) $\to$ P                                                         |
| 3   | Conjunction            | P<br>Q <br>$\therefore$ P $\land$ Q                                  |                                                                               |
| 4   | Modus Ponens           | P $\to$ Q<br>P <br>$\therefore$ Q                                    | [(P $\to$ Q) $\land$ P] $\to$ Q                                               |
| 5   | Modus Tollens          | P $\to$ Q<br>$\sim$Q <br>$\therefore$ $\sim$P                                  | [(P $\to$ Q) $\land$ $\sim$Q] $\to$ $\sim$P                                             |
| 6   | Disjunctive Syllogism  | P $\lor$ Q<br>$\sim$P <br>$\therefore$ Q                                  | [(P $\lor$ Q) $\land$ $\sim$P] $\to$ Q                                             |
| 7   | Hypothetical Syllogism | P $\to$ Q<br>Q $\to$ R <br>$\therefore$ P $\to$ R                    | [(P $\to$ Q) $\land$ (Q $\to$ R)] $\to$ (P $\to$ R)                           |
| 8   | Constructive Dilemma   | P $\to$ Q<br>R $\to$ S<br>P $\lor$ R <br>$\therefore$ Q $\lor$ S     | [(P $\to$ Q) $\land$ (R $\to$ S) $\land$ (P $\lor$ R)] $\to$ (Q $\lor$ S)     |
| 9   | Destructive Dilemma    | P $\to$ Q<br>R $\to$ S<br>$\sim$Q $\lor$ $\sim$S <br>$\therefore$ $\sim$P $\lor$ $\sim$R | [(P $\to$ Q) $\land$ (R $\to$ S) $\land$ ($\sim$Q $\lor$ $\sim$S)] $\to$ ($\sim$P $\lor$ $\sim$R) |

## Laws of Equivalence (Fundamental Rules of Logic)

I memorized this by grouping them as well. If you don't have a mnemonic yet, try **VOMINT**.

| #   | Name                 | Rule                                                                                                                                                                                                                                                        | Group          |
| --- | -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| 1   | Reflexivity          | P $\leftrightarrow$ P                                                                                                                                                                                                                                       | Identity       |
| 2   | Double Negation      | $\sim$($\sim$P) $\leftrightarrow$ P                                                                                                                                                                                                                         | Negation       |
| 3   | Commutativity        | (P $\land$ Q) $\leftrightarrow$ (Q $\land$ P) <br>(P $\lor$ Q) $\leftrightarrow$ (Q $\lor$ P) <br>(P $\leftrightarrow$ Q) $\leftrightarrow$ (Q $\leftrightarrow$ P)                                                                                         | Order          |
| 4   | Associativity        | [(P $\land$ Q) $\land$ R] $\leftrightarrow$ [P $\land$ (Q $\land$ R)]<br>[(P $\lor$ Q) $\lor$ R] $\leftrightarrow$ [P $\lor$ (Q $\lor$ R)]<br>[(P $\leftrightarrow$ Q) $\leftrightarrow$ R] $\leftrightarrow$ [P $\leftrightarrow$ (Q $\leftrightarrow$ R)] | Order          |
| 5   | Distributivity       | [P $\land$ (Q $\lor$ R)] $\leftrightarrow$ [(P $\land$ Q) $\lor$ (P $\land$ R)] <br>[P $\lor$ (Q $\land$ R)] $\leftrightarrow$ [(P $\lor$ Q) $\land$ (P $\lor$ R)]                                                                                          | Three Literals |
| 6   | Idempotency          | (P $\land$ P) $\leftrightarrow$ P <br>(P $\lor$ P) $\leftrightarrow$ P                                                                                                                                                                                      | Identity       |
| 7   | Identity             | (P $\land$ T) $\leftrightarrow$ P <br>(P $\lor$ F) $\leftrightarrow$ P                                                                                                                                                                                      | Identity       |
| 8   | Inverse              | (P $\land$ $\sim$P) $\leftrightarrow$ F <br>(P $\lor$ $\sim$P) $\leftrightarrow$ T                                                                                                                                                                          | Value          |
| 9   | Dominance            | (P $\land$ F) $\leftrightarrow$ F <br>(P $\lor$ T) $\leftrightarrow$ T                                                                                                                                                                                      | Value          |
| 10  | Absorption           | [P $\land$ (P $\lor$ Q)] $\leftrightarrow$ P <br>[P $\lor$ (P $\land$ Q)] $\leftrightarrow$ P                                                                                                                                                               | Three Literals |
| 11  | De Morgan's Laws     | $\sim$(P $\land$ Q) $\leftrightarrow$ ($\sim$P $\lor$ $\sim$Q) <br>$\sim$(P $\lor$ Q) $\leftrightarrow$ ($\sim$P $\land$ $\sim$Q)                                                                                                                           | Negation       |
| 12  | Contrapositive       | (P $\to$ Q) $\leftrightarrow$ ($\sim$Q $\to$ $\sim$P)                                                                                                                                                                                                       | Negation       |
| 13  | Material Implication | (P $\to$ Q) $\leftrightarrow$ ($\sim$P $\lor$ Q)                                                                                                                                                                                                            | Material       |
| 14  | Material Equivalence | (P $\leftrightarrow$ Q) $\leftrightarrow$ [(P $\to$ Q) $\land$ (Q $\to$ P)] <br>(P $\leftrightarrow$ Q) $\leftrightarrow$ [(P $\land$ Q) $\lor$ ($\sim$P $\land$ $\sim$Q)]                                                                                  | Material       |
| 15  | Exportation          | [(P $\land$ Q) $\to$ R] $\leftrightarrow$ [P $\to$ (Q $\to$ R)]                                                                                                                                                                                             | Three Literals |
