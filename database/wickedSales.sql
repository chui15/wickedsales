-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 04, 2019 at 12:43 AM
-- Server version: 5.7.27-0ubuntu0.18.04.1
-- PHP Version: 7.2.19-0ubuntu0.18.04.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `wickedSales`
--

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `id` mediumint(8) UNSIGNED NOT NULL,
  `created` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `cart`
--

INSERT INTO `cart` (`id`, `created`) VALUES
(1, '2019-12-02 00:14:29'),
(2, '2019-12-03 04:47:38');

-- --------------------------------------------------------

--
-- Table structure for table `cartItems`
--

CREATE TABLE `cartItems` (
  `id` mediumint(8) UNSIGNED NOT NULL,
  `productID` mediumint(8) UNSIGNED NOT NULL,
  `count` smallint(5) UNSIGNED NOT NULL,
  `price` mediumint(8) UNSIGNED NOT NULL,
  `added` datetime NOT NULL,
  `updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `cartID` mediumint(8) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Images`
--

CREATE TABLE `Images` (
  `id` tinyint(4) NOT NULL,
  `url` varchar(255) NOT NULL,
  `product_id` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Images`
--

INSERT INTO `Images` (`id`, `url`, `product_id`) VALUES
(1, 'images/offshoulder1.jpg', 1),
(2, 'images/offshoulder2.jpg', 1),
(3, 'images/balloontop1.jpg', 2),
(4, 'images/balloontop2.jpg', 2),
(5, 'images/cottonpants1.jpg', 3),
(6, 'images/cottonpants2.jpg', 3),
(7, 'images/sherpa1.jpg', 4),
(8, 'images/sherpa2.jpg', 4),
(9, 'images/hskirt1.jpg', 5),
(10, 'images/hskirt2.jpg', 5),
(11, 'images/peanuts2.jpg', 6),
(12, 'images/peanuts1.jpg', 6),
(13, 'images/offshoulder3.jpg', 1),
(14, 'images/balloontop3.jpg', 2),
(15, 'images/cottonpants3.jpg', 3),
(16, 'images/sherpa3.jpg', 4),
(17, 'images/hskirt3.jpg', 5),
(18, 'images/peanuts3.jpg', 6),
(19, 'images/checkshirt1.jpg', 7),
(20, 'images/checkshirt2.jpg', 7),
(21, 'images/checkshirt3.jpg', 7),
(22, 'images/widepants1.jpg', 8),
(23, 'images/widepants2.jpg', 8),
(24, 'images/widepants3.jpg', 8);

-- --------------------------------------------------------

--
-- Table structure for table `Orders`
--

CREATE TABLE `Orders` (
  `id` tinyint(6) NOT NULL,
  `Name` varchar(62) NOT NULL,
  `Address` varchar(255) NOT NULL,
  `creditCard` varchar(20) NOT NULL,
  `cartID` tinyint(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `Products`
--

CREATE TABLE `Products` (
  `ID` smallint(5) UNSIGNED NOT NULL,
  `Name` varchar(62) NOT NULL,
  `Price` mediumint(9) NOT NULL,
  `Image` varchar(40) NOT NULL,
  `Short Description` varchar(255) NOT NULL,
  `Long Description` varchar(500) NOT NULL,
  `Category` varchar(62) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Products`
--

INSERT INTO `Products` (`ID`, `Name`, `Price`, `Image`, `Short Description`, `Long Description`, `Category`) VALUES
(1, 'Off Shoulder Crop Top', 1100, 'images/offshoulder1.jpg', 'Look chic and flirty with this crop top, perfect for any occasion.', '	Look chic and flirty with this crop top. It features an off-shoulder top, short sleeves, an overlapping design, and a single tone for versatility. This piece is perfect worn with high waist bottoms, be it a pair of jeans, shorts, or even a skirt.', 'Top'),
(2, 'Balloon Sleeve Knit Top', 2300, 'images/balloontop1.jpg', 'Display a chic and cozy style during the fall and winter seasons.', '	Assemble a cozy chic style with this knit top. It has a V neck, balloon sleeves, and a cropped silhouette. Team it with your mini skirt and ankle boots for a nice fall appropriate attire.', 'Top'),
(3, 'Cotton Straight Cut Pants', 2600, 'images/cottonpants1.jpg', 'Stay comfortable and casual with cotton bottoms.', 'Handy and casual, these pants will be a good canvas to build around your wardrobe. They have an elasticated waist, belt loops, a button and zip fly, pockets, and a straight cut. The solid tone makes these pants easy to mix and match with various casual and natty tops.', 'Bottom'),
(4, 'Zip Front Sherpa Fleece Jacket', 3000, 'images/sherpa1.jpg', 'Warm up your look for the day during winter with this soft jacket.', '	Warm up your look for the day with this handy jacket. Made from sherpa fleece, this cover-up sports a spread collar, a zip front, pockets, long sleeves, and a loose silhouette. Wear it over your sweatshirt, then complete the look by teaming a pair of jeans and sneakers.', 'Outerwear'),
(5, 'Mini H Line Skirt', 1900, 'images/hskirt1.jpg', 'Create a sophisticated ensemble with this mini skirt.', 'Ditch your usual skinnies with this mini skirt. It sports a high waist, belt loops, a button and zip fastening, pockets, plus an H line cut. The solid color makes it easy to mix and match with various tops and footwear.', 'Bottom'),
(6, 'Embroidered Sweatshirt', 1800, 'images/peanuts1.jpg', 'Show a youthful side with an embroidery of an iconic comic character.', 'Decorated with an embroidery of an iconic comic character, this sweatshirt boasts a simple look that goes with most casual pieces. Ultra comfy with its loose fit, this pullover also features a round neck, dropped shoulders with long sleeves, and tapered cuffs plus hem. Wear this sweatshirt with your jeans for the weekend.', 'Outerwear'),
(7, 'Loose Fit Check Shirt', 1500, 'images/checkshirt1.jpg', 'Sport a classic style with this wardrobe staple.', 'A check shirt in a classic button up style is a must have for every wardrobe. This shirt comes with a spread collar, a chest pocket, and a baggy fit for a laidback appeal. Pair this long sleeved piece with your favorite jeans or layer it over a tshirt for a casual look.', 'Top'),
(8, 'High Waist Wide Leg Pants', 1000, 'images/widepants1.jpg', 'Stay breezy and effortless with these solid color pants.', 'Be comfortable whenever you don these solid tone pants. They come with a high waist, a loose fit, and an ankle-length construction. Tuck in a casual or natty top, then finish the look with your fave shoes.', 'Bottom');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cartItems`
--
ALTER TABLE `cartItems`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `cartproductid` (`productID`,`cartID`);

--
-- Indexes for table `Images`
--
ALTER TABLE `Images`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Orders`
--
ALTER TABLE `Orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Products`
--
ALTER TABLE `Products`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `cartItems`
--
ALTER TABLE `cartItems`
  MODIFY `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `Images`
--
ALTER TABLE `Images`
  MODIFY `id` tinyint(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
--
-- AUTO_INCREMENT for table `Orders`
--
ALTER TABLE `Orders`
  MODIFY `id` tinyint(6) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `Products`
--
ALTER TABLE `Products`
  MODIFY `ID` smallint(5) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
