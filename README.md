# JavaScript Loop Practice

A practical JavaScript learning project containing **34 interactive loop exercises** designed to strengthen programming fundamentals, logical thinking, iteration, conditions, calculations, and nested loops.

This project is part of my JavaScript learning journey. I built these exercises to understand how loops work and how they can be combined with conditions, calculations, user input, and DOM manipulation.

## 🚀 Project Overview

The project provides an interactive interface where users can enter a number and see the result of different JavaScript loop operations directly in the browser.

The exercises progress from basic loop concepts to more challenging **nested loop patterns**.

### Total Exercises: 34

## 📚 Loop Concepts Practiced

### 1. Basic `for` Loop

Practiced:

* Printing numbers from 1 to `n`
* Printing numbers in reverse
* Printing even numbers
* Printing odd numbers
* Printing multiples of 5
* Printing every 3rd number
* Printing squares of numbers
* Generating multiplication tables

Example:

```javascript
for (let i = 1; i <= n; i++) {
    console.log(i);
}
```

---

### 2. `for` Loop with Conditions

Practiced combining loops with `if`, `else if`, and `else`.

Examples include:

* Checking even and odd numbers
* Checking divisibility
* Finding numbers divisible by 3 and 5
* Checking Pass/Fail conditions
* Categorizing numbers
* Identifying positive, negative, and zero values
* Finding numbers greater than 50

Example:

```javascript
for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
        // Even number
    } else {
        // Odd number
    }
}
```

---

### 3. Counting with Loops

Practiced using variables as counters inside loops.

Examples:

* Count even numbers
* Count odd numbers
* Count numbers divisible by 5
* Count numbers greater than 50

Example:

```javascript
let count = 0;

for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
        count++;
    }
}
```

---

### 4. Sum and Calculation with Loops

Practiced using loops for repeated calculations.

Examples:

* Sum of numbers from 1 to `n`
* Sum of even numbers
* Sum of odd numbers
* Sum of numbers divisible by 3
* Factorial calculation

Example:

```javascript
let sum = 0;

for (let i = 1; i <= n; i++) {
    sum += i;
}
```

---

### 5. Nested `for` Loops

One of the main parts of this project was understanding **nested loops**.

A nested loop means placing one loop inside another loop.

The **outer loop controls the rows**, while the **inner loop controls the items inside each row**.

Example:

```javascript
for (let i = 1; i <= n; i++) {

    for (let j = 1; j <= i; j++) {
        // Pattern content
    }

}
```

I practiced nested loops to create different patterns using stars and numbers.

## ⭐ Pattern Practice

The project includes:

* Square pattern
* Increasing star pattern
* Decreasing star pattern
* Increasing number pattern
* Repeated number pattern
* Decreasing number pattern
* Right-aligned triangle
* Pyramid pattern
* Reverse pyramid pattern

Example output:

```text
*
**
***
****
*****
```

Pyramid:

```text
    *
   ***
  *****
 *******
*********
```

Reverse pyramid:

```text
*********
 *******
  *****
   ***
    *
```

## 🧠 What I Learned

Through these exercises, I practiced:

* How `for` loops work
* Initialization, condition, and increment
* Forward and reverse iteration
* Using `%` for even, odd, and divisibility checks
* Combining loops with `if/else`
* Using counters
* Using accumulators for sums
* Calculating factorials
* Working with user input
* Displaying results in the browser
* Understanding nested loops
* Understanding rows and columns in patterns
* Building logic step by step
* Improving problem-solving skills

## 🌐 DOM & User Interaction

The exercises are connected to an HTML interface.

Users can:

1. Enter a number.
2. Click a button.
3. Run the JavaScript function.
4. See the generated result on the page.

This helped me practice JavaScript together with basic DOM manipulation rather than only running code in the console.

## 🛠️ Technologies Used

* **HTML5** — Structure
* **CSS3** — Styling and layout
* **JavaScript** — Logic and interactivity
* **Git** — Version control
* **GitHub** — Repository hosting

## 📁 Project Structure

```text
Loop-Practice/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## ▶️ How to Run the Project

### Clone the repository

```bash
git clone https://github.com/Muhammad-Zain-Butt-001/Loop-Practice.git
```

### Open the project

Open the project folder in VS Code.

Then open:

```text
index.html
```

in your browser.

You can enter different numbers and test each loop exercise.

## 🎯 Purpose of This Project

The main purpose of this project is to build a strong foundation in JavaScript programming before moving toward more advanced concepts.

I focused on understanding the logic behind each problem instead of simply copying solutions.

The project helped me practice:

**Input → Logic → Loop → Condition/Calculation → Output**

## 📈 My Learning Journey

This project represents one stage of my JavaScript learning journey.

I am continuing to improve my programming fundamentals and gradually moving toward more practical frontend development projects.

My long-term goal is to become a **professional Web Developer** and build real-world applications using modern web technologies.

## 🔜 Next Learning Steps

After completing these `for` loop exercises, I plan to continue practicing JavaScript fundamentals and then move toward:

* More JavaScript problem solving
* Arrays
* Functions
* Objects
* DOM manipulation
* Events
* More practical projects
* Modern frontend development

## 🤝 Feedback & Opportunities

I am continuously learning and improving my web development skills through practical projects and consistent coding practice.

Developers, recruiters, and professionals are welcome to explore this project.

I would appreciate:

* Constructive feedback
* Guidance
* Collaboration opportunities
* Internship opportunities
* Entry-level opportunities

Any feedback that helps me improve my programming and web development skills is welcome.

## 👨‍💻 Author

**Muhammad Zain Butt**

Aspiring Web Developer | JavaScript Learner | Frontend Development

GitHub:

https://github.com/Muhammad-Zain-Butt-001

---

⭐ **If you find this project useful, feel free to explore the repository and share feedback.**
