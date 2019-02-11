CREATE TABLE Users (
    id          SERIAL,
    name        VARCHAR(150) NOT NULL,
    email       VARCHAR(150) NOT NULL,
    password    VARCHAR(100) NOT NULL,

    CONSTRAINT pk_users PRIMARY KEY (id),
    CONSTRAINT uk_users_1 UNIQUE (email)
);

INSERT INTO Users (name, email, password) VALUES ('Juanita Childs', 'juanita@some.dom', 'aaaa1111');
INSERT INTO Users (name, email, password) VALUES ('Alabaster White', 'albatross@para.hu.ti', 'bbbb2222');
INSERT INTO Users (name, email, password) VALUES ('Love Aswell', 'lasw@someother.dom', 'cccc3333');
INSERT INTO Users (name, email, password) VALUES ('Father Browm', 'mystery@god.rel', 'dddd1111');
