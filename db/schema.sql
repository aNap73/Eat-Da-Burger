--   * Create the `burgers_db`.
--   * Switch to or use the `burgers_db`.
--   * Create a `burgers` table with these fields:
--     * **id**: an auto incrementing int that serves as the primary key.
--     * **burger_name**: a string.
--     * **devoured**: a boolean.


CREATE DATABASE IF NOT EXISTS BURGER_DB;

USE BURGER_DB;

CREATE TABLE BURGERS (
`ID` int(10) auto_increment NOT NULL,
`BURGER_NAME` VARCHAR(100) NOT NULL,
`DEVOURED` BOOL,
PRIMARY KEY(ID)
);

