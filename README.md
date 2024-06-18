# CRUD Functionality Backend Project

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)

## Introduction
This project is a simple backend service providing CRUD (Create, Read, Update, Delete) functionalities for a specified resource. It is built to be easily extensible and scalable.

## Features
- Create new entries
- Read existing entries
- Update existing entries
- Delete entries
- RESTful API endpoints

## Technologies
- Node.js
- Express.js
- MongoDB (Mongoose)
- nodemon (for development)

## Installation

### Prerequisites
- Node.js (v14.x or later)
- MongoDB

### Steps
1. Clone the repository
    ```bash
    git clone https://github.com/Ramcodere/CRUD-FUNCTION.git
    cd CRUD-FUNCTION
    ```

2. Install dependencies
    ```bash
    npm install
    ```

3. Update the configuration file (`config.js`) with your MongoDB URI and other necessary settings.

## Usage
To start the server, run:
```bash
npm start

This will start the server.

Product Management
1. Add New Product: Open http://localhost:8080/products/new in your browser. This page allows you to upload a new product.
2. View and Manage Products: Open http://localhost:8080/products in your browser. This page displays all products and allows you to edit, view, and delete them.
