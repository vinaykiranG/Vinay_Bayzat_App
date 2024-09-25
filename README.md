Calculator Project
Overview
The Calculator Project is a user-friendly web application built with React that allows users to perform basic arithmetic operations, utilize memory functions, and evaluate complex mathematical expressions.

Features
Basic Operations: Addition, subtraction, multiplication, and division.
Memory Functions: Includes M+, M-, MR, and MC for memory management.
Advanced Calculations: Supports square roots and percentages.
Calculation History: Keeps track of past calculations for user reference.
Error Handling: Effectively manages invalid inputs and operations.
Technologies Used
React: Chosen for building a dynamic user interface.
TypeScript: Provides type safety and improves code maintainability.
Material-UI (MUI): Utilized for a modern design framework to style components.
BigNumber.js: Ensures precise arithmetic operations, especially for large and floating-point numbers.
SCSS Modules: Facilitates modular and maintainable styling.
How to Run the Project Locally
Prerequisites
Make sure you have Node.js (version 14 or later) installed on your machine. You can use either npm or yarn as your package manager.

Step-by-Step Instructions
Clone the repository from GitHub to your local machine.
Navigate to the project directory where the repository has been cloned.
Install the required dependencies using npm or yarn.
Start the development server to launch the application. It will be accessible at the local URL provided in your browser.
Running Tests
To run the unit tests for the calculator functions, use the test command provided by your package manager.

Edge Cases Handled
Division by Zero: The application displays an error message instead of crashing when a division by zero is attempted.
Invalid Expressions: The application checks for malformed expressions and informs users with appropriate error messages.
Square Root of Negative Numbers: An error message is displayed when users attempt to calculate the square root of a negative number.
Potential Improvements
Implement additional mathematical functions such as exponentiation, logarithms, or trigonometric functions.
Enhance the user interface with more advanced styling and animations.
Introduce features for saving and retrieving previous calculations.
Improve error handling and provide better user feedback for invalid inputs.
Conclusion
This project showcases a practical implementation of React and TypeScript for building a calculator application. By using modern libraries and focusing on user experience, the application offers both functionality and usability.