# Tokyo 2020

A web app for running an Olympics: sports, disciplines, athletes, teams, schedules, results and medal tables. It has separate views for each role.

| Role | Can do |
|---|---|
| Visitor | browse countries, the medal table, athletes and world records |
| National delegate | register athletes and teams, and enter results |
| Organizer | add sports and tournaments, edit schedules, approve user accounts |

## Stack

- **Frontend:** Angular 12, Angular Material, Bootstrap
- **Backend:** Node.js, Express and TypeScript, with Mongoose
- **Database:** MongoDB. Seed data is in `baza/`.

## Run

```bash
# database
mongod   # then import baza/*.txt into the Tokyo2020 database

# backend (port 4000)
cd backend && npm install && npx tsc && node dist/server.js

# frontend (port 4200)
cd frontend && npm install && npm start
```

Built for the Web Application Programming course (PIA) at ETF Belgrade. The spec is in the PDF in the repo root.
