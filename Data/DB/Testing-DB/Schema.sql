-- University Database Schema
-- Created for managing students, faculties, courses, and enrollments

-- 1. STUDENTS TABLE
CREATE TABLE students (
    student_id VARCHAR(20) PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    current_status VARCHAR(20) DEFAULT 'Active',
    current_cgpa DECIMAL(3,2),
    credit_passed INT DEFAULT 0,
    probation_status VARCHAR(20) DEFAULT 'No',
    major_1 VARCHAR(50),
    major_2 VARCHAR(50),
    minor VARCHAR(50),
    entry_item VARCHAR(50),
    test_pas_number VARCHAR(20),
    
    -- Personal Information
    cell_phone VARCHAR(15),
    personal_email VARCHAR(100),
    nid VARCHAR(20),
    birth_reg_no VARCHAR(20),
    date_of_birth DATE,
    sex CHAR(1) CHECK (sex IN ('M', 'F')),
    citizenship VARCHAR(50),
    blood_group VARCHAR(5),
    marital_status VARCHAR(20),
    mailing_address TEXT,
    
    -- Parent Information
    father_name VARCHAR(100),
    mother_name VARCHAR(100),
    guardian_name VARCHAR(100),
    parent_address TEXT,
    parent_phone VARCHAR(15),
    parent_mobile VARCHAR(15),
    
    -- Academic Information
    enrolled_in VARCHAR(50),
    curriculum VARCHAR(50),
    degree_level VARCHAR(20) DEFAULT 'Undergraduate',
    
    -- Timestamps
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- 2. FACULTIES TABLE
CREATE TABLE faculties (
    faculty_id VARCHAR(20) PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    designation VARCHAR(50),
    department VARCHAR(50),
    email VARCHAR(100),
    phone VARCHAR(15),
    office_address TEXT,
    specialization TEXT,
    
    -- Personal Information (similar to students)
    personal_email VARCHAR(100),
    cell_phone VARCHAR(15),
    date_of_birth DATE,
    sex CHAR(1) CHECK (sex IN ('M', 'F')),
    blood_group VARCHAR(5),
    address TEXT,
    
    -- Employment Information
    join_date DATE,
    employment_status VARCHAR(20) DEFAULT 'Active',
    salary_grade VARCHAR(10),
    
    -- Timestamps
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- 3. COURSES TABLE (Master course catalog)
CREATE TABLE courses (
    course_code VARCHAR(10) PRIMARY KEY,
    course_title VARCHAR(100) NOT NULL,
    credit_hours DECIMAL(2,1) NOT NULL,
    course_type VARCHAR(20), -- Theory, Lab, Project, etc.
    department VARCHAR(50),
    prerequisite VARCHAR(200), -- Can store multiple prerequisites as comma-separated
    description TEXT,
    
    -- Timestamps
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- 4. SEMESTERS TABLE
CREATE TABLE semesters (
    semester_id INT AUTO_INCREMENT PRIMARY KEY,
    semester_name VARCHAR(20) NOT NULL, -- e.g., "Summer 2025", "Fall 2024"
    year INT NOT NULL,
    season VARCHAR(10) NOT NULL, -- Summer, Fall, Spring
    start_date DATE,
    end_date DATE,
    registration_start DATE,
    registration_end DATE,
    is_current BOOLEAN DEFAULT FALSE,
    
    -- Timestamps
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    UNIQUE KEY unique_semester (year, season)
);

-- 5. COURSE SECTIONS TABLE (Offered courses each semester)
CREATE TABLE course_sections (
    section_id INT AUTO_INCREMENT PRIMARY KEY,
    course_code VARCHAR(10) NOT NULL,
    section_number INT NOT NULL,
    semester_id INT NOT NULL,
    faculty_id VARCHAR(20),
    
    -- Schedule Information
    day_of_week VARCHAR(10), -- S, M, T, W, R, F, ST, etc.
    start_time TIME,
    end_time TIME,
    room VARCHAR(20),
    
    -- Capacity and Enrollment
    max_capacity INT DEFAULT 40,
    enrolled_count INT DEFAULT 0,
    
    -- Status
    section_status VARCHAR(20) DEFAULT 'Active',
    
    -- Foreign Keys
    FOREIGN KEY (course_code) REFERENCES courses(course_code),
    FOREIGN KEY (semester_id) REFERENCES semesters(semester_id),
    FOREIGN KEY (faculty_id) REFERENCES faculties(faculty_id),
    
    -- Timestamps
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    UNIQUE KEY unique_section (course_code, section_number, semester_id)
);

-- 6. STUDENT ENROLLMENTS TABLE
CREATE TABLE student_enrollments (
    enrollment_id INT AUTO_INCREMENT PRIMARY KEY,
    student_id VARCHAR(20) NOT NULL,
    section_id INT NOT NULL,
    semester_id INT NOT NULL,
    
    -- Enrollment Status
    enrollment_status VARCHAR(20) DEFAULT 'Enrolled', -- Enrolled, Dropped, Completed
    enrollment_date DATE DEFAULT (CURRENT_DATE),
    drop_date DATE,
    
    -- Grades
    grade VARCHAR(5), -- A+, A, A-, B+, B, etc.
    grade_points DECIMAL(3,2),
    final_marks DECIMAL(5,2),
    
    -- Payment Information
    tuition_fee DECIMAL(10,2) DEFAULT 0,
    payment_status VARCHAR(20) DEFAULT 'Unpaid', -- Paid, Unpaid, Partial
    payment_date DATE,
    
    -- Foreign Keys
    FOREIGN KEY (student_id) REFERENCES students(student_id),
    FOREIGN KEY (section_id) REFERENCES course_sections(section_id),
    FOREIGN KEY (semester_id) REFERENCES semesters(semester_id),
    
    -- Timestamps
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    UNIQUE KEY unique_enrollment (student_id, section_id, semester_id)
);

-- 7. STUDENT FEES TABLE (For tracking various fees)
CREATE TABLE student_fees (
    fee_id INT AUTO_INCREMENT PRIMARY KEY,
    student_id VARCHAR(20) NOT NULL,
    semester_id INT NOT NULL,
    
    -- Fee Types and Amounts
    student_activity_fee DECIMAL(8,2) DEFAULT 0,
    computer_lab_fee DECIMAL(8,2) DEFAULT 0,
    library_fee DECIMAL(8,2) DEFAULT 0,
    science_lab_fee DECIMAL(8,2) DEFAULT 0,
    studio_lab_fee DECIMAL(8,2) DEFAULT 0,
    total_fees DECIMAL(10,2) DEFAULT 0,
    
    -- Payment Information
    amount_paid DECIMAL(10,2) DEFAULT 0,
    balance_due DECIMAL(10,2) DEFAULT 0,
    payment_status VARCHAR(20) DEFAULT 'Unpaid',
    due_date DATE,
    
    -- Library Clearance
    library_clearance VARCHAR(10) DEFAULT 'Pending', -- OK, Pending, Hold
    
    -- Foreign Keys
    FOREIGN KEY (student_id) REFERENCES students(student_id),
    FOREIGN KEY (semester_id) REFERENCES semesters(semester_id),
    
    -- Timestamps
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    UNIQUE KEY unique_student_semester_fee (student_id, semester_id)
);

-- 8. ROOMS TABLE (Optional - for better room management)
CREATE TABLE rooms (
    room_id VARCHAR(20) PRIMARY KEY,
    building VARCHAR(50),
    floor INT,
    capacity INT,
    room_type VARCHAR(20), -- Classroom, Lab, Auditorium
    equipment TEXT, -- Available equipment
    status VARCHAR(20) DEFAULT 'Active',
    
    -- Timestamps
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- INDEXES for better performance
CREATE INDEX idx_student_name ON students(full_name);
CREATE INDEX idx_student_status ON students(current_status);
CREATE INDEX idx_faculty_department ON faculties(department);
CREATE INDEX idx_course_department ON courses(department);
CREATE INDEX idx_section_semester ON course_sections(semester_id);
CREATE INDEX idx_enrollment_student ON student_enrollments(student_id);
CREATE INDEX idx_enrollment_semester ON student_enrollments(semester_id);
CREATE INDEX idx_fees_student ON student_fees(student_id);

-- SAMPLE DATA INSERTION EXAMPLES

-- -- Insert sample semester
-- INSERT INTO semesters (semester_name, year, season, is_current) 
-- VALUES ('Summer 2025', 2025, 'Summer', TRUE);

-- -- Insert sample courses
-- INSERT INTO courses (course_code, course_title, credit_hours, course_type, department) VALUES
-- ('CHE101L', 'General Chemistry Lab', 1.0, 'Lab', 'Chemistry'),
-- ('CSE327', 'Software Engineering', 3.0, 'Theory', 'Computer Science'),
-- ('CSE445', 'Machine Learning', 3.0, 'Theory', 'Computer Science'),
-- ('EEE452', 'Engineering Economics and Management', 3.0, 'Theory', 'Electrical Engineering'),
-- ('PHY107L', 'Physics I Lab', 1.0, 'Lab', 'Physics');

-- -- Insert sample faculty
-- INSERT INTO faculties (faculty_id, full_name, designation, department) VALUES
-- ('FZD', 'Dr. Farid Zaman', 'Assistant Professor', 'Chemistry'),
-- ('MMAI', 'Dr. Mohammad AI', 'Associate Professor', 'Computer Science'),
-- ('MSRD', 'Dr. M S Rahman', 'Professor', 'Computer Science'),
-- ('RKZ', 'Dr. R K Zaman', 'Assistant Professor', 'Electrical Engineering'),
-- ('RUH', 'Dr. R U Hassan', 'Associate Professor', 'Physics');

-- -- Insert sample student
-- INSERT INTO students (student_id, full_name, current_cgpa, major_1, degree_level) 
-- VALUES ('221-2779-042', 'Samiul Alim Busrat', 3.75, 'Computer Science', 'Undergraduate');