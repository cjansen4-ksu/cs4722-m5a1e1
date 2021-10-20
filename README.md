# CS 4722

## Module 05 - Assignment 01 - Exercise 01

I'm providing a snippet of my code from this particular exercise because the keyboard key handlers are probably going to be a pain for anyone who wasn't in class when the professor explained them. He also said you'll also need all the key-handling code going forward, so better to have them now.

The code given here is incomplete, and only contains the event handlers (plus some other code so you know where they go). This isn't a solution to the assignment, only a finished example of one part of the exercise for you to learn from. I strongly suggest you don't just copy the code; read it and know what it's doing.

### Note

I know the code he provides uses the _keycode_ property, but this is being depreciated, [as seen here.](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode) You can continue to use it for the time being, but personally, I feel that as developers, it's important to evolve our practices with our technology. Take that for what you will.

Instead, I use the newer _key_ property and provide the _key_ names for each key. If you need to find the proper name for a key, you can find it by using the **Try It Out** element on [this MDN Docs page](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code).
