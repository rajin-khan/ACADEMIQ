-- SAMPLE QUERIES FOR UNIVERSITY DATABASE

-- 1. Get Student's Current Course Registration Information
SELECT 
    s.student_id,
    s.full_name,
    s.current_cgpa,
    s.degree_level,
    c.course_code,
    c.course_title,
    cs.section_number,
    cs.day_of_week,
    TIME_FORMAT(cs.start_time, '%h:%i %p') as start_time,
    TIME_FORMAT(cs.end_time, '%h:%i %p') as end_time,
    cs.room,
    f.full_name as faculty_name,
    c.credit_hours,
    se.enrollment_status
FROM students s
JOIN student_enrollments se ON s.student_id = se.student_id
JOIN course_sections cs ON se.section_id = cs.section_id
JOIN courses c ON cs.course_code = c.course_code
LEFT JOIN faculties f ON cs.faculty_id = f.faculty_id
JOIN semesters sem ON se.semester_id = sem.semester_id
WHERE s.student_id = '221-2779-042' 
  AND sem.is_current = TRUE
ORDER BY c.course_code;

-- 2. Get Student's Fee Information for Current Semester
SELECT 
    s.student_id,
    s.full_name,
    sem.semester_name,
    sf.student_activity_fee,
    sf.computer_lab_fee,
    sf.library_fee,
    sf.science_lab_fee,
    sf.studio_lab_fee,
    sf.total_fees,
    sf.amount_paid,
    sf.balance_due,
    sf.payment_status,
    sf.library_clearance
FROM students s
JOIN student_fees sf ON s.student_id = sf.student_id
JOIN semesters sem ON sf.semester_id = sem.semester_id
WHERE s.student_id = '221-2779-042' 
  AND sem.is_current = TRUE;

-- 3. Get Course Schedule for a Specific Semester
SELECT 
    c.course_code,
    cs.section_number,
    c.course_title,
    cs.day_of_week,
    TIME_FORMAT(cs.start_time, '%h:%i %p') as start_time,
    TIME_FORMAT(cs.end_time, '%h:%i %p') as end_time,
    cs.room,
    f.full_name as faculty_name,
    cs.enrolled_count,
    cs.max_capacity
FROM course_sections cs
JOIN courses c ON cs.course_code = c.course_code
LEFT JOIN faculties f ON cs.faculty_id = f.faculty_id
JOIN semesters sem ON cs.semester_id = sem.semester_id
WHERE sem.semester_name = 'Summer 2025'
ORDER BY c.course_code, cs.section_number;

-- 4. Get All Students Enrolled in a Specific Course Section
SELECT 
    s.student_id,
    s.full_name,
    s.current_cgpa,
    se.enrollment_status,
    se.enrollment_date,
    se.grade,
    se.payment_status
FROM student_enrollments se
JOIN students s ON se.student_id = s.student_id
JOIN course_sections cs ON se.section_id = cs.section_id
JOIN courses c ON cs.course_code = c.course_code
WHERE c.course_code = 'CSE327' 
  AND cs.section_number = 4
ORDER BY s.full_name;

-- 5. Generate Student Registration Summary (like the document format)
SELECT 
    'REGISTRAR\'S OFFICE COPY' as document_type,
    CONCAT('Registration # ', s.student_id) as registration_info,
    s.student_id,
    s.full_name as student_name,
    s.degree_level,
    sem.semester_name,
    COUNT(se.enrollment_id) as total_courses,
    SUM(c.credit_hours) as total_credits,
    SUM(se.tuition_fee) as total_tuition,
    sf.total_fees as semester_fees,
    (SUM(se.tuition_fee) + sf.total_fees) as grand_total
FROM students s
JOIN student_enrollments se ON s.student_id = se.student_id
JOIN course_sections cs ON se.section_id = cs.section_id
JOIN courses c ON cs.course_code = c.course_code
JOIN semesters sem ON se.semester_id = sem.semester_id
LEFT JOIN student_fees sf ON s.student_id = sf.student_id AND sf.semester_id = sem.semester_id
WHERE s.student_id = '221-2779-042' 
  AND sem.is_current = TRUE
GROUP BY s.student_id, sem.semester_id;

-- 6. Get Faculty Teaching Schedule
SELECT 
    f.faculty_id,
    f.full_name as faculty_name,
    f.department,
    c.course_code,
    c.course_title,
    cs.section_number,
    cs.day_of_week,
    TIME_FORMAT(cs.start_time, '%h:%i %p') as start_time,
    TIME_FORMAT(cs.end_time, '%h:%i %p') as end_time,
    cs.room,
    cs.enrolled_count
FROM faculties f
JOIN course_sections cs ON f.faculty_id = cs.faculty_id
JOIN courses c ON cs.course_code = c.course_code
JOIN semesters sem ON cs.semester_id = sem.semester_id
WHERE f.faculty_id = 'MMAI' 
  AND sem.is_current = TRUE
ORDER BY cs.day_of_week, cs.start_time;

-- 7. Get Students with Outstanding Payments
SELECT 
    s.student_id,
    s.full_name,
    sf.total_fees,
    sf.amount_paid,
    sf.balance_due,
    sf.payment_status,
    sf.due_date,
    DATEDIFF(CURRENT_DATE, sf.due_date) as days_overdue
FROM students s
JOIN student_fees sf ON s.student_id = sf.student_id
JOIN semesters sem ON sf.semester_id = sem.semester_id
WHERE sf.balance_due > 0 
  AND sem.is_current = TRUE
ORDER BY sf.balance_due DESC;

-- 8. Course Enrollment Report
SELECT 
    c.course_code,
    c.course_title,
    cs.section_number,
    f.full_name as faculty_name,
    cs.max_capacity,
    cs.enrolled_count,
    ROUND((cs.enrolled_count / cs.max_capacity) * 100, 2) as enrollment_percentage,
    CASE 
        WHEN cs.enrolled_count >= cs.max_capacity THEN 'Full'
        WHEN cs.enrolled_count >= (cs.max_capacity * 0.8) THEN 'Nearly Full'
        ELSE 'Available'
    END as status
FROM course_sections cs
JOIN courses c ON cs.course_code = c.course_code
LEFT JOIN faculties f ON cs.faculty_id = f.faculty_id
JOIN semesters sem ON cs.semester_id = sem.semester_id
WHERE sem.is_current = TRUE
ORDER BY enrollment_percentage DESC;

-- 9. Student Academic Progress Report
SELECT 
    s.student_id,
    s.full_name,
    s.current_cgpa,
    s.credit_passed,
    s.major_1,
    s.current_status,
    s.probation_status,
    COUNT(se.enrollment_id) as courses_this_semester,
    SUM(c.credit_hours) as credits_this_semester,
    AVG(se.grade_points) as semester_gpa
FROM students s
LEFT JOIN student_enrollments se ON s.student_id = se.student_id
LEFT JOIN course_sections cs ON se.section_id = cs.section_id
LEFT JOIN courses c ON cs.course_code = c.course_code
LEFT JOIN semesters sem ON se.semester_id = sem.semester_id AND sem.is_current = TRUE
WHERE s.student_id = '221-2779-042'
GROUP BY s.student_id;

-- 10. Room Utilization Report
SELECT 
    cs.room,
    COUNT(cs.section_id) as total_sections,
    GROUP_CONCAT(DISTINCT cs.day_of_week ORDER BY cs.day_of_week) as days_used,
    MIN(cs.start_time) as earliest_class,
    MAX(cs.end_time) as latest_class,
    SUM(cs.enrolled_count) as total_students
FROM course_sections cs
JOIN semesters sem ON cs.semester_id = sem.semester_id
WHERE sem.is_current = TRUE
GROUP BY cs.room
ORDER BY total_sections DESC;