# Basic Calculator

This project is a basic calculator implemented in HTML, CSS, and JavaScript. It allows users to perform mathematical operations and obtain accurate results. The calculator is designed to be responsive and accessible on both desktop and mobile devices.

## Getting Started

To contribute to this project, please follow these steps:

1. Initialize Git from the start and set up the "develop" branch as the main working branch.
2. Add me as a collaborator on Github to enable collaboration and review.
3. Ensure that the calculator is centered on the screen and that it adjusts appropriately for mobile devices.

## Functionality

The calculator includes the following features:

- Users can string together multiple operations and obtain accurate results. Each pair of numbers is evaluated separately.
- Only one pair of numbers is evaluated at a time. When an operator button is pressed, the calculator evaluates the current pair, displays the result, and uses it as the first number in the subsequent calculation.
- Decimal numbers can be input using the "." button, preventing users from entering more than one decimal point.
- Long decimal answers are rounded to fit within the calculator display.
- Pressing the "=" button before entering all numbers or an operator is handled gracefully without causing any issues.
- The "clear" button wipes out any existing data, ensuring that the user starts fresh after pressing it.
- In case of a division by zero, the calculator displays an error message and prevents any crashes.

## Additional Features

To enhance the calculator, the following features have been implemented:

- The calculator's appearance has been styled to provide a visually appealing user interface. The operations buttons are differentiated from the keypad buttons by using different colors.
- Hover effects have been added to buttons to provide visual feedback to the user.
- A "backspace" button has been included, allowing users to undo any incorrect inputs.
- Keyboard support has been added, enabling users to input digits, operators, and perform calculations using their keyboard. Special considerations have been made to handle specific keys like "/", preventing any issues.
- A bonus feature of a dark theme has been added, along with a toggle button to switch between the light and dark modes.
