the frontend is a react web app that displays a list of users taken from the backend JSON api.

the backend is a JSON api built using express and postgresql.

To run it first set it up using npm install in both frontend/ and backend/ create a .env file like this in backend/

PGUSER=postgres
PGHOST=localhost
PGPASSWORD=none
PGDATABASE=friendo
PGPORT=5432
PORT=8000

then load the seeds and run the backend

npm run seed
npm run server:dev

and frontend

npm run start

