CREATE TABLE `api`.`users` (
`id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
`name` VARCHAR(63) NOT NULL,
`email` VARCHAR(127) NOT NULL,
`password` VARCHAR(127) NOT NULL,
`createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
`updatedtAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
PRIMARY Key (`id`));