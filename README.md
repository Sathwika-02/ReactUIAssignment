# React Dashboard

A modern dashboard application built with React, utilizing Material-UI for design components, Chart.js for data visualization, and GitHub Pages for deployment. This application showcases a data grid with various functionalities, including sorting, filtering, and pagination, along with a sidebar for navigation.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Features](#features)
- [Setup and Installation](#setup-and-installation)
- [Design Decisions](#design-decisions)
- [Challenges Faced](#challenges-faced)
- [Improvements Made](#improvements-made)

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Material-UI**: A popular React UI framework for styling components.
- **GitHub Pages**: For hosting the application.
- **React Router**: For navigation within the application.
- **@mui/x-data-grid**: For displaying tabular data with advanced features.

## Features

- A responsive layout that adapts to various screen sizes.
- A sidebar for navigation.
- A data grid that supports pagination, sorting, filtering, and selection of items.
- Dark mode support for improved accessibility.
- User-friendly interface with intuitive controls.

## Setup and Installation

To set up and run the project locally, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Sathwika-02/ReactUIAssignment.git
   cd react-dashboard
   ```

2. **Make Sure Node.js is Installed**

First, confirm that Node.js is installed on your machine. You can check this by running the following command:

```bash
node -v
```
If it outputs a version number, you're set. Otherwise, download and install Node.js.


3.**Install Dependencies:**

Run
```bash
npm install
```

4. **Start the Development Server:**
 After installing the dependencies, start the application with:

```bash
npm start
```

5.**View in Browser:**
 Open your browser and go to http://localhost:3000 to view the application.

6.**Running the Application**
To deploy the application to GitHub Pages, run the following command:

```bash
npm run deploy
```

## Design Decisions
- The dashboard layout was designed to be intuitive, allowing users to easily navigate between different sections.
- Material-UI was chosen for its extensive set of components and responsive design features, which helped speed up the development process.
- The sidebar uses icons for better visual representation and to enhance user experience.
- FontAwesome and CoreUI icons were utilized to provide a consistent and accurate iconography throughout the application.
- Redux was implemented for storing and managing the global state, making it easier to manage data flow across components.
- The Context API was used to manage dark and light mode settings.
- A brightness icon is located beside the search bar; clicking it toggles between dark mode and light mode.
- Navigation is intuitive: clicking on "Dashboard" in the navbar directs users to the main page, while clicking on "Orders" in the homepage widget takes them to the orders page.



## Challenges Faced
- **Deployment Issues:** Initially encountered problems deploying the app to GitHub Pages, especially with routing and asset paths. This was resolved by setting the correct homepage property in package.json.

- **Redux State Management:** Managing global state with Redux was challenging at first, but with some practice, it became easier to handle data flow across components.

- **Chart.js and World Map Design:** Faced some design challenges with Chart.js, especially with customizing the world map. Researched and tested different approaches to get the desired look and functionality.

## Improvements Made
- **Dark Mode:** Added a dark mode option to make the app easier to use in low-light settings.

- **Data Grid Sorting and Filtering:** Enabled sorting and filtering in the data grid to make data easier to view and manage.
