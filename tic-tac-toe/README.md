# Tic-Tac-Toe game!

Hello! This is tic-tac-toe game featured on ReactJS documentation. At the moment it can:

 - Play a classic tic-tac-toe game
 - Indicate when a player won
 - Store a game history as the game progresses
 - Allow players to navigate back to previous moves.

It is a great start to dive into React framework and learn some of the basic terminology and best practices. 

# Key concepts

Throughout this tutorial, we touched on React concepts including elements, components, props, and state.


## Setup Local Environment

 1. Create a new ReactJS project on your local machine using: `npx create-react-app my-app`;
 2. Adding required components and get familiar with the project's structure;
 3. Start the server and experiment with autoreload.

## Overview

 1. Learn about `React.Component` and `render()` method;
 2. Dive into passing data to components using `props`;
 3. Add interactivity to components using **event listeners**;
 4. Store data to objects and manage the values using `state`.

## Best Practices

 1. Best practices in state management moving the state up to the parent;

> **To collect data from multiple children, or to have two child components communicate with each other, you need to declare the shared state in their parent component instead. The parent component can pass the state back down to the children by using props; this keeps the child components in sync with each other and with the parent component.** -- ReactJS Docs

 2. Passing an event halder from the parent to its children;
 3. Using naming convensions for event listeners and event handlers;
 4. Importance of **Immutability** when changing data;
 5. Using **function components** instead of **React.Component** for simple components.

## Possible Improvements

1.  Display the location for each move in the format (col, row) in the move history list.
2.  Bold the currently selected item in the move list.
3.  Rewrite Board to use two loops to make the squares instead of hardcoding them.
4.  Add a toggle button that lets you sort the moves in either ascending or descending order.
5.  When someone wins, highlight the three squares that caused the win.
6.  When no one wins, display a message about the result being a draw.


**Please feel free to fork and add your tweaks to it! Programming is fun!**
