Calculator Project

Description
A simple calculator application built with React that supports basic arithmetic operations, memory functions, and evaluates complex mathematical expressions using the Shunting Yard algorithm.

Features
Basic operations: Addition, subtraction, multiplication, division
Memory functions: M+, M-, MR, MC
Square root and percentage calculations
History of calculations
Error handling for invalid inputs and operations


Installation
Prerequisites
Node.js (v14 or later)
npm or yarn
Steps to Run the Project Locally


Clone the repository:
Use the command to clone the repository to your local machine.
Navigate to the project directory:
Change to the directory where the cloned repository is located.


Install dependencies:
Run the command to install all necessary packages.
Start the development server:
Launch the application, which will be accessible at http://localhost:3000.
Running Tests
To run the unit tests for the calculator functions, execute the command associated with your package manager.

Edge Cases
The application handles the following edge cases:

Division by Zero: An error is displayed when attempting to divide by zero.
Invalid Expressions: The app checks for malformed expressions and shows an appropriate error message.
Square Root of Negative Numbers: An error message is shown when trying to calculate the square root of a negative number.
Potential Improvements
If given more time, the following enhancements could be made:

Implement additional mathematical functions such as exponentiation, logarithms, or trigonometric functions.
Enhance the user interface with more advanced styling and animations.
Add a feature for saving and retrieving previous calculations.
Improve error handling and user feedback for invalid inputs.
Tools and Libraries
The following tools and libraries were used in this project:

React: For building the user interface, leveraging its component-based architecture.
TypeScript: For type safety and reducing runtime errors, enhancing development efficiency.
MUI (Material-UI): To provide a robust component library for quickly building responsive user interfaces.


BigNumber.js: To handle large numbers and ensure precision in arithmetic operations, especially important in financial calculations.
License
This project is licensed under the MIT License. See the LICENSE file for more details.