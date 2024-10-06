# Mini Job Portal - Backend/API
This application is the backend/API for the [Mini Job Portal](https://github.com/rivaldys/mini-jobportal) project.

## &#10095; Installation Prerequisites
The following are required to be able to run this application:
- Node.js 18 (or higher version)

## &#10095; Development
For development purposes, before running this application please do some necessary preparations including: installing dependencies, and setting environment variables in the `.env` file.

### &#10102; Dependencies Installation and Running Database Migration & Seeder
   Command:
   ```shell
   npm install
   ```
   ___

   Running Database Migration & Seeder. Command:
   ```shell
   npm run knex migrate:latest
   ```
   ```shell
   npm run knex seed:run
   ```
   ___

### &#10103; Setting the Environment Variable
Please copy or duplicate the `.env.example` file into `.env` and adjust each variable. If you want to copy the file automatically, you can run the command below in the terminal and adjust each variable.

Command:
   ```shell
   cp .env.example .env
   ```
   ---

**PLEASE NOTE** in the `.env` file, this section “# App Info” please fill in as detailed below, and in the section “# Database," it must be filled with `mysql2`. Well, it will actually be easier if you do the above command to copy the `env.example` file into `.env` and its contents. And then, you just need to customize the `DB_USERNAME` and `DB_PASSWORD` sections with the MySQL database configuration on your PC.

   ```shell
   # App Info
   APP_NAME =
   APP_PORT = 3002

   # Database
   DB_CLIENT   = mysql2
   DB_HOST     = 127.0.0.1
   DB_PORT     = 3306
   ...
   ```

### &#10104; Running the App
   Command:
   ```shell
   npm run dev
   ```
## &#10095; User Account
- Username: user
- Password: 12345678

## &#10095; API Endpoints
For API documentation, please refer to `API-ENDPOINTS-DOCS.md` or simply click [here](API-ENDPOINTS-DOCS.md).

## &#10095; Author
This documentation was written by [Ahmad Rivaldy S](https://rivaldy.net)
