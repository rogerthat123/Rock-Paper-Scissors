# Rock Paper Scissors Game

A classic Rock Paper Scissors game implementation with a clean, modern interface. The game features a score tracking system that persists between sessions using localStorage.



## Features

- Interactive gameplay against computer opponent
- Real-time score tracking (Wins, Losses, Ties)
- Score persistence using localStorage
- Visual feedback with emojis for moves
- Responsive design with hover animations
- Score reset functionality
- Result display with color coding (green for wins, red for losses, gray for draws)

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript
- Local Storage API for data persistence

## File Structure

```
├── rock-paper-scissors.html
├── style.css
├── script.js
└── images/
    ├── rock-emoji.png
    ├── paper-emoji.png
    └── scissors-emoji.png
```

## Installation

1. Clone the repository

2. Navigate to the project directory

3. Open `rock-paper-scissors.html` in your web browser to start playing

Note: Due to the use of local file access, you'll need to run the game through a local server for the best experience. You can use extensions like Live Server in VS Code.

## How to Play

1. Click on one of the three buttons (Rock, Paper, or Scissors) to make your move
2. The computer will randomly select its move
3. The game will display both moves and the result
4. Score is automatically updated and saved
5. Use the "Reset Score" button to start fresh (appears after first move)

## Game Rules

- Rock beats Scissors
- Scissors beats Paper
- Paper beats Rock
- Same moves result in a tie

## Styling

The game features a dark theme with:
- Black background
- White text and borders
- Antique white score cards
- Animated buttons on hover and click
- Color-coded results (green for wins, red for losses, gray for draws)

## Future Improvements

Potential enhancements for future versions:
- Add sound effects
- Implement multiplayer mode
- Add game statistics and charts
- Include difficulty levels
- Add animations for winning/losing
- Responsive design for mobile devices
