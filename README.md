Tic Tac Toe
Play against a friend, or the computer!

Structure of the computer's programming:
All logic is contained in the useComputer custom hook.
Easy Mode:
If the player made a move within a given line, computer will play in the first available space in that line, going through the 'lines' Array from the top down. So essentially it only ever reaches the first 3 entries in the Array, the first 3 line options.

In case there is no available spot on that line find the first available spot in the grid and computer will choose that. This is the bottom loop.

Medium Mode:
The same idea as Easy mode, but the 'lines' are shuffled before they are looped through, as well as the spots within the line, so that the computer may make a move at _any_ space that is part of a line that the player's move is in. This makes the computer's moves more random and difficult to predict.

Hard Mode:
Here is where the computer starts trying. The computer will first check if there are any places in the grid that he has two moves together in a line and will complete that line to win the game if possible.
If there is no way to win then the computer will go on to check if the opponent has two moves in teh same line and will proceed to fill up the third in that line, blocking the opponent from winning.
If neither of these conditions are met, the computer will fall back to a random selection of placement based on medium mode.
Additional feature: If the player's first move is in the center the computer will play in one of the corners. This is to avoid the easily made double trap that my 7 year old son taught me about :-).
