# Broker Clone Project

## Project Description

Broker Clone is a professional networking platform built with the MERN stack (MongoDB, Express, React, Node.js). This project includes user authentication, managing listings, and collaborative features. JWT is used for authentication, and tokens are stored in cookies.

## Base URL

- **Production:** [https://apna-ghar.onrender.com/]
- **Development:** [http://localhost:8080]

## Endpoints

### Authentication

#### Sign Up

- **URL:** `/api/auth/signup`
- **Method:** `POST`

#### Sign In

- **URL:** `/api/auth/signin`
- **Method:** `POST`

#### Google Sign In

- **URL:** `/api/auth/google`
- **Method:** `POST`

#### Sign Out

- **URL:** `/api/auth/signout`
- **Method:** `GET`

### Users

#### Update User

- **URL:** `/api/user/update/:id`
- **Method:** `POST`

#### Delete User

- **URL:** `/api/user/delete/:id`
- **Method:** `DELETE`

#### Get User Listings

- **URL:** `/api/user/listing/:id`
- **Method:** `GET`

#### Get User by ID

- **URL:** `/api/user/:id`
- **Method:** `GET`

### Listings

#### Create Listing

- **URL:** `/api/listing/create`
- **Method:** `POST`

#### Delete Listing

- **URL:** `/api/listing/delete/:id`
- **Method:** `DELETE`

#### Update Listing

- **URL:** `/api/listing/update/:id`
- **Method:** `POST`

#### Get Listing by ID

- **URL:** `/api/listing/get/:id`
- **Method:** `GET`

#### Get All Listings

- **URL:** `/api/listing/get`
- **Method:** `GET`

## Installation and Setup

1. Clone the repository:

   ```sh
   git clone https://github.com/hsc92180/mern-estate.git
   ```

2. Navigate to the project directory:

   ```sh
   cd mern-estate
   ```

3. Install the dependencies:

   ```sh
   cd estate-api
   npm install
   cd ../estate-ui
   npm install
   ```

4. Set up environment variables by creating a `.env` file in the `mern-estate` directory and add the following:
   ```env
   MONGO=<your_mongo_db_connection_string>
   JWT_SECRET=<your_jwt_secret>
   VITE_FIREBASE_API_KEY=<your_firebase_api_key>
   ```

5. Set up environment variables by creating a `.env` file in the `estate-ui` directory and add the following:
   ```env
   VITE_FIREBASE_API_KEY=<your_firebase_api_key>
   ```

6. Start the development servers:
   ```sh
   cd estate-api
   npm run dev
   cd ../estate-ui
   npm start
   ```

## Deployment

Follow the deployment instructions for your preferred platform, ensuring all necessary environment variables are configured.

## License

This project is licensed under the MIT License.

---

Replace placeholder URLs, repository paths, and other specific details with actual data relevant to your project.
