# TS-HA-Tasks

## Task Manager API

This project is a Task Manager API built using Node.js and Express.js. It provides endpoints to manage tasks stored in a MongoDB database. The API allows users to retrieve tasks and add new tasks to the database.

## Installation

To run this project locally, follow the instructions below:

1. Clone the repository to your local machine.
2. Install the required dependencies by running the following command:

shell```npm install```


3. Set up a MongoDB database and obtain the connection link.
4. Replace `'mongoDB link hier einfügen :P'` in the `app.js` file with your MongoDB connection link.
5. Start the server by running the following command:

shell```node app.js```


6. The server will be running on port 3000. You can access the API at `http://localhost:3000`.

## API Endpoints

### GET /tasks

This endpoint retrieves all tasks from the database.

#### Response

- Status code: 200 (OK)
- Response body: JSON array containing task objects.

### POST /tasks

This endpoint adds a new task to the database.

- use following form to make a post (e.g. with Postman):
  ``
  {"Titel":"titel",
  "Beschreibung":"a description",
  "Status":"offen",
  "Stichtag": "2023.06.23"
  }
  ``

#### Request Body

- `Titel` (required): The title of the task (string).
- `Beschreibung`: The description of the task (string, maximum length: 200).
- `Stichtag`: The due date of the task (date).
- `Status` (default: 'offen'): The status of the task (string, allowed values: 'offen', 'in Bearbeitung', 'erledigt').

#### Response

- Status code: 200 (OK)
- Response body: JSON object representing the saved task.

## Database Schema

The project uses a MongoDB database and defines a task schema using the Mongoose library. The schema includes the following fields:

- `Titel`: The title of the task (string, required).
- `Beschreibung`: The description of the task (string, maximum length: 200).
- `Erstellungsdatum`: The creation date of the task (date, default: current date).
- `Stichtag`: The due date of the task (date).
- `Status` (default: 'offen'): The status of the task (string, allowed values: 'offen', 'in Bearbeitung', 'erledigt').

The tasks are stored in a collection named 'tasks'.

## Dependencies

This project uses the following dependencies:

- express: For building the API.
- mongoose: For connecting to the MongoDB database and defining schemas.

These dependencies are listed in the `package.json` file.

Feel free to use this project as a starting point for your own Task Manager API or customize it further to meet your specific requirements. Enjoy building and managing your tasks using this API!

## License

This code is released under the [MIT License](LICENSE).
