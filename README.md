# Lucas problem

This program solves the lucas puzzle. This is part of an exercise from computational intelligence class.

Puzzle: 

```
This puzzle was invented in the late nineteenth century by Edouard Lucas, a French mathematician. The 
object is very simple. You are given a pattern, two sets of colored markers, with an empty space 
in the middle. You have to reverse the pattern. Just to keep it interesting, there are a few rules 
on how you can go about this. The markers can only be moved in one direction, red markers toward the 
right, and blue markers toward the left. Second, a marker can only be moved to the empty space by 
either sliding it over to the adjacent square, or by jumping over one other marker.
```
<p align="center">
	<a href="">
		<img alt="puzzle" src="./puzzle.png" width="300px">
	</a>
</p>

## How to run

Just install nodejs and run:

```
$ node src/index.js
```

## Example 

Inicial State:

```javascript
let firstState = new Node( new State([">", ">", ">", ">", " ", "<", "<", "<", "<"]) );
```

Final State:

```javascript
let objetiveState = new Node( new State(["<", "<", "<", "<", " ", ">", ">", ">", ">"]) );
```

Output: 

```
Lucas's puzzle
State 0 >,>,>,>, ,<,<,<,<
State 1 >,>,>, ,>,<,<,<,<
State 2 >,>,>,<,>, ,<,<,<
State 3 >,>,>,<,>,<, ,<,<
State 4 >,>,>,<, ,<,>,<,<
State 5 >,>, ,<,>,<,>,<,<
State 6 >, ,>,<,>,<,>,<,<
State 7 >,<,>, ,>,<,>,<,<
State 8 >,<,>,<,>, ,>,<,<
State 9 >,<,>,<,>,<,>, ,<
State 10 >,<,>,<,>,<,>,<, 
State 11 >,<,>,<,>,<, ,<,>
State 12 >,<,>,<, ,<,>,<,>
State 13 >,<, ,<,>,<,>,<,>
State 14  ,<,>,<,>,<,>,<,>
State 15 <, ,>,<,>,<,>,<,>
State 16 <,<,>, ,>,<,>,<,>
State 17 <,<,>,<,>, ,>,<,>
State 18 <,<,>,<,>,<,>, ,>
State 19 <,<,>,<,>,<, ,>,>
State 20 <,<,>,<, ,<,>,>,>
State 21 <,<, ,<,>,<,>,>,>
State 22 <,<,<, ,>,<,>,>,>
State 23 <,<,<,<,>, ,>,>,>
State 24 <,<,<,<, ,>,>,>,>
```
