CREATE TABLE attendance (
  id SERIAL PRIMARY KEY,
  session_id INT REFERENCES sessions(id) NOT NULL
  lead_id INT REFERENCES session_lead(id) NOT NULL,
  student_id INT REFERENCES students (student_id) NOT NULL,
);