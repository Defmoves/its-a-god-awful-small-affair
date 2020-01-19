# its-a-god-awful-small-affair

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

### Tests, tests, tests!

I was only able to add the most basic of tests, and even those were added outside the alloted time. Hence I have little faith in the code as it stands. Were I to continue I would love to add a comprehensive test suit to ensure all my assumptions are correct, and fix any bugs that may service.

### To someone with a hammer all problems look like a nail

I've just started Eric Elliot's [Composing Software](https://leanpub.com/composingsoftware), now while I'm not ready write code in "point free style" yet, I have been pondering reducers. So when I saw the input as an array, well I just could not help but think of a reducer solution. On refelction this is less that ideal, while the "commandBotReducer" is likely fine, the "inputReducer" is a little mad. Not to mention that nesting one reducer inside another leads to some odd circular thinking, and so is very legiable. This becaume obvoius farily quickly, yet as I was trying to hit the dealine I forwent the refactor. Had I more time, I would likley rewirte the "inputReducer" at the very least. 