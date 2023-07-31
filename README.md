# My CV

[![GitHub license](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](https://github.com/danicolms/cv/blob/main/LICENSE)

Welcome to my cv repository! This project showcases my education and work history. The cv is built using React and bundled with Parcel, making it easy to use and deploy.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development](#development)
  - [Build](#build)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Technologies](#technologies)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Introduction

The cv is designed to provide a quick overview of the things i know. By using functional components in React and plain CSS for styling, the cv maintains a clean and responsive layout

## Features

- Display of my work history, as well as some freelance professional projects
- Display of my education history
- Responsive design to ensure compatibility with all devices
- Typechecking with PropTypes for better code reliability
- Parcel bundler for no-setup bundling

## Getting Started

Follow the instructions below to set up and run the cv project on your local machine.

### Prerequisites

- Node.js and yarn installed on your computer.

### Installation

Clone this repository to your local machine:

```bash
git clone https://github.com/danicolms/cv
```

Navigate to the project directory:

```bash
cd cv
```

Install the required dependencies:

```bash
yarn install
```

### Development

To run the cv in development mode, use the following command:

```bash
yarn start
```

This will start a local development server and open the CV in your default web browser (defaults to http://localhost:1234). Any changes you make to the source code will automatically be reflected in the browser.

### Build

To create a production-ready build of the CV, use the following command:

```bash
yarn build
```

This will generate an optimized build in the `dist` directory, which can be deployed to a web server or hosting platform.

## Usage

Simply visit the live version of [the cv](https://danicolms.github.io/cv/) hosted on my website to explore my work and education record.

## Project Structure

The project structure is organized as follows:

```
cv/
  ├── src/
  │   ├── components/     # React components used
  │   ├── views/          # Th different screens / sections
  │   ├── App.js          # Main application component
  │   ├── index.js        # Entry point of the application
  │   ├── index.html      # Entry point for Parcel bundler
  │   ├── styles.css      # Boilerplate styles for the projects
  ├── .gitignore          # List of files and directories ignored by Git
  ├── package.json        # Project dependencies and scripts
  ├── yarn.lock           # Auto-generated file for npm package versioning
  ├── LICENSE             # Rules on what you can do with this project
  └── README.md           # The file you're reading right now
```

## Technologies

The following technologies and tools are used in this cv:

- React - JavaScript library for building user interfaces
- Parcel - Web application bundler
- CSS - Styling language for the presentation of the cv
- PropTypes - Runtime typechecking for React props

## Contributing

Thank you for considering contributing to my cv! If you find any issues or have suggestions for improvement, feel free to create a pull request or open an issue.

## License

This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions or want to get in touch, you can reach me at:

Daniel Colmenares Salamanca\
danicolms@icloud.com\
https://github.com/danicolms
