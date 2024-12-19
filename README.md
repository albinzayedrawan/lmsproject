# Library Management System (LMS)

This project is a Library Management System (LMS) built with Node.js, Express, MongoDB, and Mongoose. It includes role-based access control (RBAC) to manage different user roles and their permissions.

## Features

- **Books Management**: Add, update, delete, and query books.
- **Members Management**: Add, update, delete, and query members.
- **Loans Management**: Manage book loans.
- **Users Management**: Add, update, delete, and query users.
- **Role-Based Access Control (RBAC)**: Manage different user roles and their permissions.

## User Roles and Permissions

- **Librarian**:
  - Full access to all collections.
  - Can add, update, delete, and query all data.
  - Manages member registrations and book loans.
- **Assistant**:
  - Limited access to `library_books` and `book_loans`.
  - Can query all data but only update certain fields (e.g., updating available copies in `library_books`).
- **Member**:
  - Read-only access to `library_books`.
  - Can add data to `book_reviews`.
  - Access to their own data in `library_members` and `book_loans`.

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/library-management-system.git
   cd library-management-system
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a .env file in the root directory and add the following environment variables:

   ```properties
   DB_URI=mongodb+srv://<username>:<password>@<cluster-url>/<database>?retryWrites=true&w=majority
   JWT_SECRET=your_jwt_secret_key
   PORT=3000
   ```

4. Seed the database with sample data:

   ```bash
   npm run seed
   ```

### Running the Server

Start the server:

```bash
npm start
```

The server will run on `http://localhost:3000`.

## API Endpoints

### Authentication

- **Login**: `POST /api/users/login`

### Books

- **Add Book**: `POST /api/books` (Librarian)
- **Get All Books**: `GET /api/books` (Librarian, Assistant, Member)
- **Get Book by ID**: `GET /api/books/:id` (Librarian, Assistant, Member)
- **Update Book**: `PUT /api/books/:id` (Librarian)
- **Delete Book**: `DELETE /api/books/:id` (Librarian)

### Members

- **Add Member**: `POST /api/members` (Librarian)
- **Get All Members**: `GET /api/members` (Librarian, Assistant)
- **Get Member by ID**: `GET /api/members/:id` (Librarian, Assistant)
- **Update Member**: `PUT /api/members/:id` (Librarian)
- **Delete Member**: `DELETE /api/members/:id` (Librarian)

### Loans

- **Add Loan**: `POST /api/loans` (Librarian)
- **Get All Loans**: `GET /api/loans` (Librarian, Assistant)
- **Get Loan by ID**: `GET /api/loans/:id` (Librarian, Assistant)
- **Update Loan**: `PUT /api/loans/:id` (Librarian)
- **Delete Loan**: `DELETE /api/loans/:id` (Librarian)

### Users

- **Add User**: `POST /api/users` (Librarian)
- **Get All Users**: `GET /api/users` (Librarian)

## Testing with Postman

1. **Login to Get the Token**:
   - Create a new request in Postman.
   - Set the method to POST.
   - Set the URL to `{{baseUrl}}/api/users/login`.
   - In the Body tab, select `raw` and `JSON` format.
   - Add the following JSON:
  
     ```json
     {
       "email": "john.doe@library.com",
       "password": "password"
     }
     ```

   - Send the request.
   - Copy the token from the response.

2. **Set Up Environment Variable for Token**:
   - Go back to the environment settings.
   - Paste the copied token value into the `token` variable.
   - Save the environment.

3. **Create Requests for CRUD Operations**:
   - Use the token in the `Authorization` header for all authenticated requests:
     - Key: `Authorization`
     - Value: `Bearer {{token}}`

## License

This project is licensed under the MIT License.
