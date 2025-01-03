# School-Management-System

## Tables
Contains these tables for now:
- User table (student, teacher, admin, parent)
- Class table
- Subject table
- Attendance table
- Grade table

example use cases:

```bash
# create user
curl -X POST http://localhost:3000/api/users \
-H "Content-Type: application/json" \
-d '{"firstName":"old","lastName":"man","email":"nadimerahan@gmail.com","password":"password123","role":"teacher"}'

curl -X POST http://localhost:3000/api/users \
-H "Content-Type: application/json" \
-d '{"firstName":"johnny","lastName":"silverhand","email":"lol@example.com","password":"password123"}'

# create class
curl -X POST http://localhost:3000/api/classes \
-H "Content-Type: application/json" \
-d '{"teacherId":2,"className":"maths 101","classDescription":"very cool","subjectId":1}'

# create attendance
curl -X POST http://localhost:3000/api/attendances \
-H "Content-Type: application/json" \
-d '{"studentId":1,"classId":1,"status":"present","attendanceDate":"2024-11-08"}'

# create grade
curl -X POST http://localhost:3000/api/grades \
-H "Content-Type: application/json" \
-d '{"studentId":1,"subjectId":1,"grade":19,"gradeType":"exam"}'

# create subject
curl -X POST http://localhost:3000/api/subjects \
-H "Content-Type: application/json" \
-d '{"subjectName":"math","description":"a very cool subject"}'

# sign in
curl -X POST http://localhost:3000/auth/sign-in \
-H "Content-Type: application/json; charset=utf-8" \
-d '{"email":"rahannadime@gmail.com","password":"password123"}'

# sign up
curl -X POST http://localhost:3000/auth/sign-up \
-H "Content-Type: application/json; charset=utf-8" \
-d '{"firstName":"nadime","lastName":"something","email":"rahannadime@gmail.com","password":"0000","role":"teacher"}'

# get a user and his grades by name
curl -X GET "http://localhost:3000/api/grades?name=john"
```

##  Database Relationships

User ↔ Class
- A User (teacher) can have many Class entries.
- Each Class belongs to one User (teacher).

Class ↔ Subject
- A Subject can have many Class entries.
- Each Class belongs to one Subject.

User ↔ Attendance
- A User (student) can have many Attendance entries.
- Each Attendance belongs to one User (student).

Class ↔ Attendance
- A Class can have many Attendance entries.
- Each Attendance belongs to one Class.

User ↔ Grade
- A User (student) can have many Grade entries.
- Each Grade belongs to one User (student).

Subject ↔ Grade
- A Subject can have many Grade entries.
- Each Grade belongs to one Subject.

## Security
Securely hash passwords using bcrypt before storing them in the database to protect user passwords even if the database is compromised.

Implement user authentication with sign-up and login, password hashing, and JWT token issuance.
