
#  The "Heritage" project System Documentation

The "Heritage" project is a comprehensive web application that enables users to explore, bid on, and manage properties. It includes both front-end and back-end development, featuring property listings with detailed information and images, a bidding system that allows users to place and track bids, and role-based access for administrators, bidders, and property owners. The application also includes testimonials, search, and filter functionalities to enhance user experience.
## Tech Stack

**Frontend:** Nextjs, TailwindCSS, React Hook Form, Shadcn UI, axios.

**Backend:** Node, Express, Bcrypt, Date-fns, Nodemon, jwt, multer.

**Database:** MySQL

## Key Features

### Property Listings
- View detailed information and images for each property.
- Display the current highest bid, including bid amount, bidder details, and location.

### Bidding System
- **Placing a Bid:** Users can submit bids within a specified range, with validation to ensure only valid bids are accepted.
- **Bid Win:** The highest bidder wins the property, and the property is displayed in the winner's profile.

### Role Management

- **Admin:** Manages users, properties, and oversees all bidding activities.
- **Bidder:** Can place bids, view property details, and track their bidding history.
- **Property Owner:** Lists properties and monitors ongoing bids.


## Installation

Install my-project with npm

### Backend Setup

1. Clone the repository:

```bash
git clone https://github.com/sunnysakib/heritage-backend.git
cd heritage-backend/backend
```

2. Install dependencies:

```bash
npm install
```

3. Set up the MySQL database:

- Upload the database into the pgAdmin 4

4. Configure the database connection:

```
host: "localhost",
user: your_db_username,
password: your_db_password,
database: lunch_menu_db,

<!-- configure it in src/utils/db.js -->

```

5. Start the backend server:

```
 npm run dev
 ```
 or
 ```
 npm start

```

### Frontend Setup

1. Navigate to the frontend directory:

```
git clone https://github.com/sunnysakib/Heritage.git
cd ../Heritage
```

2. Install dependencies

```bash
npm install
```

3. Start the frontend development server:
```
npm run dev
```

## Conclusion 

This documentation provides an overview of the Project, including its features, setup instructions, API endpoints, and user interface. For more detailed information, please refer to the project's codebase and inline comments.


## Demo


