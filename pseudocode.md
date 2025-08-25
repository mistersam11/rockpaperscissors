# Pseudocode

- GET choice from computer
    - Generate a random number, multiply by 10, add 1
        - IF number is equal to or less than 3.33, choose 'rock'
        - ELSE IF number is equal to or less than 6.66, choose 'paper'
        - ELSE choose 'scissors'
    - For debugging purposes, print current value of computer selection to log.
- GET choice from user
    - Use a prompt to obtain string from user
    - For debugging purposes, print current value of player selection to log
- Track player and computer score after each round
    - Create a variable for the player score and computer store in the global scope
    - Initialize them with a value of 0
- Use logic to determine winner of the round
    - Create a function for the round and define player choice and computer choice as parameters
    - Make the player choice parameter case-insensitive
        - IF player and computer choices are equal, print a 'tie' string to the log
        - ELSE IF player choice is rock and computer choice is paper, print a 'you lose' string
        - ELSE IF player choice is rock and computer choice is scissors, print a 'you win' string
        - ELSE IF player choice is paper and computer choice is rock, print a 'you win' string
        - ELSE IF player choice is paper and computer choice is scissors, print a 'you lose' string
        - ELSE IF player choice is scissors and computer choice is rock, print a 'you lose' string
        - ELSE IF player choice is scissors and computer choice is paper, print a 'you win' string
        - FOR all of the losing rounds, add 1 to the computer score
        - FOR all of the winning rounds, add 1 to the player score
- Create a play game function and move the round function and score variables into it
- Create a function with a for loop that runs the round function until 5 rounds

    