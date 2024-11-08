# School-Management-System

Contains four tables for now:
- User table (student, teacher, admin, parent)
- Class table
- Subject table
- Attendance table

example use cases:

```bash
# create user
curl -X POST http://localhost:3000/api/users \
-H "Content-Type: application/json" \
-d '{"firstName":"Johnny","lastName":"SILVERHAND","email":"lol@example.com","password":"password123"}'


# create class
curl -X POST http://localhost:3000/api/classes \
-H "Content-Type: application/json" \
-d '{"teacherId":2,"className":"maths","classDescription":"very cool"}'


# create attendance
curl -X POST http://localhost:3000/api/attendance \
-H "Content-Type: application/json" \
-d '{"studentId":3,"classId":6,"status":"present","attendanceDate":"2024-11-08"}'
```
