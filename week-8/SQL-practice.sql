-- Total number of employees
SELECT COUNT(*) FROM employee_detail;

-- Who is the highest earning employee & what is their job title?
SELECT employee_detail.name, c.job_title, c.salary 
FROM current_job_detail AS c
INNER JOIN employee_detail ON c.employee_id=employee_detail.employee_id 
ORDER BY salary DESC LIMIT 1;

-- How many Senior Developers are there?
SELECT COUNT(job_title) FROM current_job_detail WHERE job_title="Senior Developer";

-- How many developers are in each wage bracket?
-- wage brackets: 0-25000, 25001-45000, 45001-60000, 60001+
SELECT
CASE
	WHEN salary BETWEEN 0 AND 25000 THEN "Junior"
    WHEN salary BETWEEN 25001 AND 45000 THEN "Mid"
    WHEN salary BETWEEN 45001 AND 60000 THEN "Senior"
    WHEN salary >= 60001 THEN "Lead"
END salary_bracket, COUNT(*)
FROM current_job_detail
GROUP BY salary_bracket;


SELECT * FROM employee_detail;
SELECT * FROM current_job_detail;
SELECT * FROM jobs_history;
SELECT * FROM laptop_detail;