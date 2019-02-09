CREATE TABLE Users (
    id          BIGINT          NOT NULL,
    name        VARCHAR(150)    NOT NULL,
    email       VARCHAR(150)    NOT NULL,
    password    VARCHAR(100)    NOT NULL,

    CONSTRAINT pk_users PRIMARY KEY (id)
);

INSERT INTO Users (id, name, email, password) VALUES (1, 'Juanita Childs', 'jchilds@self.dom', '');
INSERT INTO Users (id, name, email, password) VALUES (2, 'Robert Conferio', 'confeiroman@hootme.yo', '');
INSERT INTO Users (id, name, email, password) VALUES (3, 'Eliza Freeport', 'domydeeds@freeworld.own', '');
