# University Database Schema Documentation

## Overview
This database schema is designed to manage a comprehensive university system, handling students, faculty, courses, enrollments, and fee management. The schema supports academic operations including course registration, grade tracking, and financial management.

## Core Tables and Relationships

### 1. STUDENTS Table
**Purpose**: Central repository for all student information and academic records.

**Key Fields**:
- `student_id` (Primary Key): Unique identifier for each student (e.g., "221-2779-042")
- `full_name`: Student's complete name
- `current_status`: Academic status (Active, Inactive, Graduated, etc.)
- `current_cgpa`: Current cumulative grade point average
- `credit_passed`: Total credits successfully completed
- `probation_status`: Academic probation status
- `major_1`, `major_2`, `minor`: Academic program information
- `degree_level`: Undergraduate, Graduate, etc.

**Personal Information Fields**:
- Contact details (cell_phone, personal_email)
- Identity information (nid, birth_reg_no, date_of_birth)
- Demographics (sex, citizenship, blood_group, marital_status)
- Address information (mailing_address)

**Family Information**:
- Parent/guardian details (father_name, mother_name, guardian_name)
- Emergency contact information (parent_address, parent_phone, parent_mobile)

### 2. FACULTIES Table
**Purpose**: Manages faculty member information and employment details.

**Key Fields**:
- `faculty_id` (Primary Key): Unique identifier for faculty members
- `full_name`: Faculty member's complete name
- `designation`: Academic rank (Assistant Professor, Associate Professor, Professor)
- `department`: Academic department affiliation
- `specialization`: Areas of expertise
- `employment_status`: Current employment status
- `join_date`: Date of employment commencement
- `salary_grade`: Compensation level classification

### 3. COURSES Table
**Purpose**: Master catalog of all available courses in the university.

**Key Fields**:
- `course_code` (Primary Key): Unique course identifier (e.g., "CSE327", "CHE101L")
- `course_title`: Full course name
- `credit_hours`: Academic credit value (typically 1.0-4.0)
- `course_type`: Category (Theory, Lab, Project, Seminar)
- `department`: Offering department
- `prerequisite`: Required prior courses (comma-separated list)
- `description`: Course content overview

### 4. SEMESTERS Table
**Purpose**: Defines academic terms and their schedules.

**Key Fields**:
- `semester_id` (Primary Key): Unique semester identifier
- `semester_name`: Human-readable name (e.g., "Summer 2025")
- `year`, `season`: Numeric year and season designation
- `start_date`, `end_date`: Academic term boundaries
- `registration_start`, `registration_end`: Registration period
- `is_current`: Boolean flag for active semester

### 5. COURSE_SECTIONS Table
**Purpose**: Represents specific offerings of courses in particular semesters.

**Key Fields**:
- `section_id` (Primary Key): Unique section identifier
- `course_code`: References courses table
- `section_number`: Section designation within a course
- `semester_id`: References semesters table
- `faculty_id`: Assigned instructor (references faculties table)

**Schedule Information**:
- `day_of_week`: Class days (S, M, T, W, R, F, A)
- `start_time`, `end_time`: Class duration
- `room`: Classroom assignment

**Capacity Management**:
- `max_capacity`: Maximum enrollable students
- `enrolled_count`: Current enrollment count
- `section_status`: Operational status

### 6. STUDENT_ENROLLMENTS Table
**Purpose**: Tracks student course registrations and academic performance.

**Key Fields**:
- `enrollment_id` (Primary Key): Unique enrollment record
- `student_id`: References students table
- `section_id`: References course_sections table
- `semester_id`: References semesters table
- `enrollment_status`: Current status (Enrolled, Dropped, Completed)
- `enrollment_date`, `drop_date`: Important dates

**Academic Performance**:
- `grade`: Letter grade (A+, A, A-, B+, B, etc.)
- `grade_points`: Numeric grade value
- `final_marks`: Course score

**Financial Information**:
- `tuition_fee`: Course-specific fees
- `payment_status`: Payment tracking
- `payment_date`: Payment completion date

### 7. STUDENT_FEES Table
**Purpose**: Comprehensive fee management for students by semester.

**Fee Categories**:
- `student_activity_fee`: Campus activities funding
- `computer_lab_fee`: Technology resource fees
- `library_fee`: Library services charges
- `science_lab_fee`: Laboratory usage fees
- `studio_lab_fee`: Specialized facility fees
- `total_fees`: Aggregate fee amount

**Payment Tracking**:
- `amount_paid`: Payments received
- `balance_due`: Outstanding amount
- `payment_status`: Overall payment status
- `due_date`: Payment deadline
- `library_clearance`: Library account status

### 8. ROOMS Table
**Purpose**: Physical space management for classes and activities.

**Key Fields**:
- `room_id` (Primary Key): Unique room identifier
- `building`: Building location
- `floor`: Floor number
- `capacity`: Maximum occupancy
- `room_type`: Space category (Classroom, Lab, Auditorium)
- `equipment`: Available resources
- `status`: Operational status

## Relationships and Foreign Keys

### Primary Relationships:
1. **Students ↔ Enrollments**: One-to-many relationship where each student can have multiple enrollments across semesters
2. **Faculties ↔ Course Sections**: One-to-many relationship where each faculty member can teach multiple sections
3. **Courses ↔ Course Sections**: One-to-many relationship where each course can have multiple sections per semester
4. **Semesters ↔ Course Sections**: One-to-many relationship linking academic terms to course offerings
5. **Students ↔ Student Fees**: One-to-many relationship for fee tracking per semester
6. **Course Sections ↔ Student Enrollments**: One-to-many relationship tracking which students are enrolled in which sections

### Referential Integrity:
- All foreign key relationships maintain data consistency
- Unique constraints prevent duplicate enrollments and course sections
- Check constraints ensure data validity (e.g., sex field limited to 'M' or 'F')

## Indexing Strategy

The schema includes strategic indexes for performance optimization:
- Student name and status indexes for quick student searches
- Department-based indexes for faculty and courses
- Semester-based indexes for enrollment queries
- Student-specific indexes for academic and financial records

## Data Integrity Features

### Constraints:
- Primary key constraints ensure unique record identification
- Foreign key constraints maintain relational integrity
- Check constraints validate data format and values
- Unique key constraints prevent duplicate entries

### Default Values:
- Timestamps automatically track record creation and updates
- Status fields default to standard values
- Boolean flags provide clear operational states
- Numeric fields initialize to appropriate zero values

## Sample Data Structure

The schema includes sample data demonstrating:
- A current semester (Summer 2025)
- Various course types (theory, lab)
- Faculty from different departments
- A sample student record with academic standing

This comprehensive schema provides a robust foundation for university management systems, supporting academic operations, student services, and administrative functions while maintaining data integrity and performance optimization.
