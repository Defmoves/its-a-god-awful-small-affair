> It's a god-awful small affair  
> To the girl with the mousy hair  
> But her mummy is yelling, "No!"  
> And her daddy has told her to go  
> But her friend is nowhere to be seen  
> Now she walks through her sunken dream  
> To the seat with the clearest view  
> And she's hooked to the silver screen  
> 
> David Bowie - Life on Mars

## What remains

Frankly, plenty...

#### Tests, tests, tests!

I was only able to add some very most basic of tests, and even those were added outside the alloted time. Hence I don't have the faith in the code I would like. The next step would be to add a comprehensive test suit. Ensuring my assumptions are correct, and fix any bugs that may surface.

#### To someone with a hammer all problems look like a nail

I've just started Eric Elliot's [Composing Software](https://leanpub.com/composingsoftware), now while I'm not ready to write code in "point free style" yet, I have been considering the flexibility of reducers. So when I saw the input as an array... well I just could not help but think of a reducer solution. 

On refection this is less that ideal, while the **commandBotReducer** is likely fine, the **inputReducer** is a little mad. Not to mention that nesting one reducer inside another leads to some odd circular thinking, and lacks the legibility I prefer. This became obvious midway, yet in trying to hit the deadline I forwent the refactor. 

#### Refactor all the things

Had I more time, I would likely rewrite the **inputReducer** at the very least. While this test was supposed to be a place for me to showcase my style, the tight deadline and uniqueness of the challenge spurred me to focus on solving the challenge itself. Seeing the solution became the goal. Yet the nested reducers and likely the nested switches should have had the refactor they seem to need. At the very least refactored into smaller, testable functions.

*In Summary,* technical tests are not the best place to experiment with new concepts, yet it was kind of fun. :)

## And Beyond

The nature of the grid puts me in mind of various [cellular automata](https://en.wikipedia.org/wiki/Cellular_automaton) such as [Conway's Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life). I toyed with various forms of artificial life before and similar ideas could be bought to this project.

For example you could create a large grid, say 50x50 and start each bot at 0,0. Give each a set of randomly generated of commands, 50 in total. These commands are now the DNA of our Automata. Let each bot loose, ideally in parallel. Once done, lost bots are considered dead (sorry fellas, but it was for a good cause). However survivors are awarded a *health* score based on how close their final position was to 50,50. These survivors are then randomly paired and their DNA spliced with their partners (perhaps starting with 50% from each parent) to form a new generation of bots. Iterate.

It would be interesting to see how many generations (on average) it would take before the perfect Uber bot starts to trend. One that moves directly from 0,0 to 50,50. 

Naturally all the arbitrary parameters could be tweaked for comparison. One could introduce new scents to act as waypoints or food, add random mutations per generation, even predators, or simply enhance the health calculation. The list is as long and varied as life itself. Perhaps even more so, one could "breed" bots with 3 parents, or 50. You know, just to make sure we ourselves are on the right track...

