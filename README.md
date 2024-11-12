# School-Management-System

## Tables
Contains four tables for now:
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