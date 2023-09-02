CREATE TABLE applicants (
    id VARCHAR(35) PRIMARY KEY NOT NULL,
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
    id VARCHAR(35) PRIMARY KEY NOT NULL,
    userId VARCHAR(35) NOT NULL,
    specialist VARCHAR(100) NOT NULL,
    FOREIGN KEY (id) REFERENCES applicants(id)
);
