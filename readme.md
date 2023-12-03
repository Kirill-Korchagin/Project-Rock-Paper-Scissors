Struggled for several hours taking several breaks while trying to understand why 5 function calls of playRound inside game() would produce identical output while prompting for user input only once. Knowing that prompt must appear 5 times, however, couldn't find anything useful on google and so turned to chatgpt which refactored the code to for loop and put the prompt inside of it. This in turn cued me to repeat the prompt in front of each function call (since I wasn't familiar with loops and was just calling the function several times).

Made what appears to be an unconventional choice to keep count of player and computer score by using string.included() method which felt intuitive to do and also proved to work flawlessly.

But manually repeating the playRound 5 times inside of game() made code look repetitive and bulky and also using for loop as suggested by chatgpt felt unintuitive. By chance, while reading random comments while googling, realized that while loop makes a lot of sense because the actual player and computer scores can be used inside of it as counters.

Initially, while looking through solutions of other users, was surprised to see their decision to let the game continue until one of the players reaches 5 wins. Knowing that best of 5 game means any player must win 3 games to win the whole match and confirming the same on google, decided to reduce the counters from 5 to 3 to match the result expected by the exercise.

It was hard. It took me 3 days but I'm glad I didn't give up.