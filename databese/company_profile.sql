CREATE TABLE applicants (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    address VARCHAR(100) NOT NULL,
    phone VARCHAR(15) NOT NULL,
    email VARCHAR(25) NOT NULL,
    cv_path VARCHAR(200) NOT NULL,
    gender BOOLEAN NOT NULL,
    experience VARCHAR(50) NOT NULL,
    tools_knowledge VARCHAR(50) NOT NULL
);

CREATE TABLE applicants_specialist (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    userId INT NOT NULL,
    specialist VARCHAR(100) NOT NULL,
    FOREIGN KEY (userId) REFERENCES applicants(id)
);

CREATE TABLE admin (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    password VARCHAR(50) NOT NULL
);


