# My Shop App Backend

This is the backend for the My Shop App, an e-commerce platform that allows users to buy and sell products online. This backend is built with Node.js and Express.js, and communicates with the database through an ORM (Object-Relational Mapping) called Sequelize.

## Installation

To install this backend, make sure you have Node.js and Yarn installed on your machine. Then, clone this repository and run the following command:

```
yarn install
```

This will install all the necessary dependencies to run the backend.

## Database Configuration

Before running the backend, make sure to configure the database in the `config/config.js` file. Update your local or remote database information in this file.

## Execution

To run the backend, run the following command:

```
yarn start
```

This will start the server at `http://localhost:3000`.

## Endpoints

The My Shop App backend offers the following endpoints:

- `/api/products`: returns a list of all the products in the database.
- `/api/products/:id`: returns a specific product based on its ID.
- `/api/users`: returns a list of all the users in the database.
- `/api/users/:id`: returns a specific user based on its ID.
- `/api/orders`: returns a list of all the orders in the database.
- `/api/orders/:id`: returns a specific order based on its ID.

To test these endpoints, you can use a tool like Postman or simply make HTTP requests through your browser.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more information.