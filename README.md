# Clean architecture for Frontend

A simple project to test the possibility of application of clean architecture for frontend.

[Lerna](https://lerna.js.org/) is considered as library to manage multiple packages.

---

### 1. Prerequisites

Pre-installation of ```node``` and ```npm```.

---

### 2. Installation

Install Lerna as global package: ```npm install lerna -g```.

Install all packages: ```npm install``` in project's root folder.

Link together local packages and npm install remaining package dependencies: 
```lerna bootstrap``` in project's root folder.


---

### 3. TEST

Run ```lerna run test``` or ```npm run test``` in project's root folder.

---

### 4. Deploy

Run ```npm run start``` in project's root folder.
