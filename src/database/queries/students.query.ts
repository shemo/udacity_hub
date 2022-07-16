create: "INSERT INTO students (email ,user_name, first_name, last_name, password) VALUES ($1,$2,$3,$4,$5) RETURNING * ";
getStudent: "SELECT email, user_name, first_name, last_name, password FROM students WHERE id = $1 ";
GetStudents: "SELECT email, user_name, first_name, last_name, password FROM students ";
UpdateOne: "UPDATE students SET email = ($1) , user_name = ($2), first_name= ($3) , last_name= ($4), password = ($5) WHERE id = ($6) RETURNING *";
deleteStudent: "DELETE FROM students WHERE id = ($1) RETURNING *";
