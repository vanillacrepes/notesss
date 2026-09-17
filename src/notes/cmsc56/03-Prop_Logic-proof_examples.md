# Proof Examples
## Truth Tables

**Argument:**

```
P → Q
~R → ~Q
P ∨ R
∴ R
```

3 variables (P, Q, R) so we need $2^3 = 8$ rows.

| P   | Q   | R   | ~Q  | ~R  | P $\to$ Q | ~R $\to$ ~Q | P $\lor$ R |
| --- | --- | --- | --- | --- | --------- | ----------- | ---------- |
| T   | T   | T   | F   | F   | T         | T           | T          |
| T   | T   | F   | F   | T   | T         | F           | T          |
| T   | F   | T   | T   | F   | F         | T           | T          |
| T   | F   | F   | T   | T   | F         | T           | T          |
| F   | T   | T   | F   | F   | T         | T           | T          |
| F   | T   | F   | F   | T   | T         | F           | F          |
| F   | F   | T   | T   | F   | T         | T           | T          |
| F   | F   | F   | T   | T   | T         | T           | F          |

Check for the row(s) where all premises are **true**. Is the conclusion also **true**?

Here, rows 1, 5, 7 has **all** premises **true**, and have a **true** conclusion, so we can say the argument is **valid**. :D

Cons: $O(2^n)$ rows.
## Chain of Reasoning (Direct Proof)

## Proof by Contradiction (Indirect Proof)

