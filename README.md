Journeys & Journals
A full-stack application for exploring travel posts and stories. The project features a React frontend and a Payload (Node.js/Express) backend with MongoDB. Users can browse a list of travel posts, read post details, and view author profiles and related media.

- Features
User-friendly UI for browsing travel posts (React + Tailwind CSS).
Post Management via Payload CMS for images, authors, and posts.
Dynamic Routes for viewing individual posts and related author data.
Modular & Reusable React components (e.g., Image, PostCard, PostDetail).

- Prerequisites
Node.js (v14 or higher recommended)
npm or yarn
MongoDB (local or remote instance)

Installation & Setup
Backend Setup
Clone the Repository (if you haven’t already):



cd Internship
Install Backend Dependencies:


cd backend
npm install
Create a .env file in backend/ with the following variables (adjust values as needed):


PAYLOAD_SECRET=YOUR_PAYLOAD_SECRET
DATABASE_URI=YOUR DATABASE STRING
PORT=3000
Start the Backend:

npm run dev
This launches the Payload app at http://localhost:3000.

Frontend Setup
Install Frontend Dependencies:


cd ../frontend
npm install

Start the Frontend:

npm start

By default, it runs at http://localhost:3001 (or sometimes 3000, depending on your setup).

- Running Locally
Make sure MongoDB is running (if using a local MongoDB).
Open two terminals (or use background processes):
Terminal 1: Run cd backend && npm run dev.
Terminal 2: Run cd frontend && npm start.
Navigate to your frontend URL (e.g., http://localhost:3001/).
You should see the homepage with a list of posts. The backend is accessible at http://localhost:3000/api/....


- Using the Admin Panel
Payload provides a built-in admin dashboard to manage your content (Posts, Authors, Media, etc.).

Navigate to http://localhost:3000/admin in your browser.
Log in using the credentials you set up.
If you haven’t created a user yet, you can register one via the admin panel or the users collection (depending on your configuration).

Once logged in, you’ll see the admin UI with your configured collections:
Posts: Create or edit travel posts, assign cover images, and link them to authors.
Authors: Manage author profiles, including bios and profile pictures.
Media: Upload and store images to reference in your posts or author profiles.
To add a new document in a collection (e.g., a new Post or Author), click “Create New”.
Save your changes; they’ll be instantly reflected in your React frontend if the data is fetched dynamically.
