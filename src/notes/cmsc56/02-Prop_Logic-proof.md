# Methods of Proof
## Truth Tables

Make a table, then show that either:
- All premises **true** $\to$ conclusion is **true**, and therefore the argument is always valid
- Statement is **tautology**

## Chain of Reasoning (Direct Proof)

**Goal**: prove (F1 $\wedge$ F2 $\wedge$ ... $\wedge$ $F_n$) $\to$ Q is valid.

**Procedure:**
- List down the given premises.
- Determine what you need to prove.
	- If you're stuck, you can try working backwards from the conclusion to see what literals you can use and the statements that contain them.
- Using the premises, create inferences using **ROI** and **LOE**.
	- **ROI** can be used to derive new statements.
		- **LOE** can be used to transform statements to equivalent ones, or be used to "simplify".
- Work towards proving the given conclusion.

## Proof by Contradiction (Indirect Proof)

**Rationale**: (F1 $\wedge$ F2 $\wedge$ ... $\wedge$ $F_n$) $\to$ Q is valid iff (F1 $\wedge$ F2 $\wedge$ ... $\wedge$ $F_n$) $\to$ ~Q is **false**.

**Procedure:**
- Negate the conclusion **Q**.
- List down the given premises, and use the negated conclusion alongside them.
- Using a similar procedure as Chain of Reasoning, aim to arrive at a contradiction.