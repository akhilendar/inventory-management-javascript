# Inventory Management System

This is where you can start to get familiar with the problem and what you need to run it.
This codebase is used during pairing session for JOI initiative.
It's focused on identifying code smells, refactoring and testing legacy codebase while promoting
conversations.

## Objective

Create an inventory management system that tracks product stock levels and updates based on transactions.

## Before the interview

Get familiar with the codebase! Make sure you have the necessary dependencies installed, and that you are able to run the tests.

## What you need to run it

- [Node](https://nodejs.org/en/download/)

## Technology Stack

- JavaScript
- Jest (for unit testing)

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/akhilendar/inventory-management-javascript.git
   ```

## Setup the Application

```console
npm install
```

## Run Unit Tests

```console
npm test
```

## Run the Sample Application

To understand how this library would be used you can check the `app.js` file. If you want to see the results, run:

```console
npm run execute
```

## Existing Business Rules

- Track product stock levels.
- Update stock levels when products are sold or restocked.
- Prevent selling more products than are in stock.
- Notify when a product is out of stock.
