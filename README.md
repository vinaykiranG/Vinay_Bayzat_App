Calculator Project
Overview
This project is a simple calculator application built with React that supports basic arithmetic operations, memory functions, and evaluates complex mathematical expressions using the Shunting Yard algorithm.

Features
Basic Operations: Addition, subtraction, multiplication, and division.
Memory Functions: M+, M-, MR, MC.
Advanced Calculations: Square root and percentage calculations.
Calculation History: Keeps a history of previous calculations.
Error Handling: Graceful handling of invalid inputs and operations.
Technologies Used
React: For building the user interface.
TypeScript: For type safety and improved development experience.
Material-UI (MUI): For styling components and enhancing UI design.
BigNumber.js: For precise arithmetic operations, especially with large and floating-point numbers.
SCSS Modules: For modular and maintainable styling.
How to Run the Project Locally
Prerequisites
Node.js (v14 or later)
npm or yarn
Steps
Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/calculator.git
Navigate to the project directory:

bash
Copy code
cd calculator
Install the dependencies:

bash
Copy code
npm install
# or
yarn install
Start the development server:

bash
Copy code
npm start
# or
yarn start
The application will be available at http://localhost:3000.

Running Tests
To run the unit tests for the calculator functions, use the following command:

bash
Copy code
npm test
# or
yarn test
Edge Cases Handled
Division by Zero: An error is thrown when attempting to divide by zero, preventing application crashes.
Invalid Expressions: The application checks for malformed expressions and displays appropriate error messages.
Square Root of Negative Numbers: An error message is displayed when trying to calculate the square root of a negative number.
Potential Improvements
Implement additional mathematical functions such as exponentiation, logarithms, or trigonometric functions.
Enhance the user interface with advanced styling and animations.
Add a feature for saving and retrieving previous calculations.
Improve error handling and user feedback for invalid inputs.
Tools and Libraries
React: Chosen for its component-based architecture, making it easy to manage UI state.
TypeScript: Ensures type safety and reduces runtime errors, improving development efficiency.
MUI: Provides a robust component library for building responsive user interfaces quickly.
BigNumber.js: Ideal for handling large numbers and ensuring precision in arithmetic operations, especially important in financial calculations.
Getting Started with Create React App
This project was bootstrapped with Create React App.

Available Scripts
In the project directory, you can run the following commands:

npm start
Runs the app in development mode.
Open http://localhost:3000 to view it in the browser. The page will reload if you make edits. You will also see any lint errors in the console.

npm test
Launches the test runner in interactive watch mode.
See the section about running tests for more information.

npm run build
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified, and the filenames include hashes. Your app is ready to be deployed!

See the section about deployment for more information.

npm run eject
Note: This is a one-way operation. Once you eject, you can’t go back!
If you aren’t satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project. Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc.) right into your project, giving you full control over them.

All commands except eject will still work, but they will point to the copied scripts so you can tweak them. At this point, you’re on your own. You don’t have to use eject. The curated feature set is suitable for small and medium deployments.