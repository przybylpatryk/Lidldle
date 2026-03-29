-- CreateTable
CREATE TABLE `daily_image` (
    `product_id` INTEGER NOT NULL,
    `image_date` DATE NOT NULL,

    PRIMARY KEY (`product_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `daily_product` (
    `product_id` INTEGER NOT NULL,
    `product_date` DATE NOT NULL,

    PRIMARY KEY (`product_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `image_guesses` (
    `user_id` INTEGER NOT NULL,
    `product_id` INTEGER NOT NULL,
    `name` VARCHAR(50) NOT NULL,

    PRIMARY KEY (`user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `product` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    `brand` VARCHAR(50) NOT NULL,
    `category` VARCHAR(50) NOT NULL,
    `weight` VARCHAR(30) NOT NULL,
    `price` DECIMAL(10, 2) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `product_guesses` (
    `user_id` INTEGER NOT NULL,
    `product_id` INTEGER NOT NULL,
    `name` VARCHAR(50) NOT NULL,
    `brand` VARCHAR(50) NOT NULL,
    `category` VARCHAR(50) NOT NULL,
    `weight` VARCHAR(20) NOT NULL,
    `price` DECIMAL(10, 2) NOT NULL,

    PRIMARY KEY (`user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `product_image` (
    `product_id` INTEGER NOT NULL,
    `image_url` VARCHAR(50) NOT NULL,

    PRIMARY KEY (`product_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
