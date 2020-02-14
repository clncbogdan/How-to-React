# Monster House!

Hello! There is a small project that allows you to filter through a list of monsters using a search box.

-   Fetch a list of monsters from an external API ([JSON placeholder](https://jsonplaceholder.typicode.com/users))

-   Fetch monster's avatars from another external API ([Robohash](https://robohash.org/))

-   Filter monsters by name using a search box.

# How to run

1. Clone the project on your local machine;

2. Navigate to that folder and open a terminal inside the folder;

3. Run `npm start` from the command line;

4. Enjoy! :)

# Key concepts

Throughout this tutorial, we touched on React concepts including **components lifecycle**, **lists**, **planning architecture** and **naming convensions**.

## Important State learnings

1. **State** should belong to the main component that can pass it further to its children though **props**;
2. `setState()` function is called **asynchronously**;
3. **Never** run `setState()` inside the `render()` method because it will result in an **infinite loop**;

## Best Practices

1. Use arrow functions to automatically bing `this` context to the place they are created in.

**Please feel free to fork and add your tweaks to it! Programming is fun!**
