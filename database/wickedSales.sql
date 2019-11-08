-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Nov 08, 2019 at 03:20 AM
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

DROP TABLE IF EXISTS `cart`;
CREATE TABLE `cart` (
  `id` mediumint(8) UNSIGNED NOT NULL,
  `created` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `cart`
--

INSERT INTO `cart` (`id`, `created`) VALUES
(1, '2019-10-14 05:56:29');

-- --------------------------------------------------------

--
-- Table structure for table `cartItems`
--

DROP TABLE IF EXISTS `cartItems`;
CREATE TABLE `cartItems` (
  `id` mediumint(8) UNSIGNED NOT NULL,
  `productID` mediumint(8) UNSIGNED NOT NULL,
  `count` smallint(5) UNSIGNED NOT NULL,
  `price` mediumint(8) UNSIGNED NOT NULL,
  `added` datetime NOT NULL,
  `updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `cartID` mediumint(8) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `cartItems`
--

INSERT INTO `cartItems` (`id`, `productID`, `count`, `price`, `added`, `updated`, `cartID`) VALUES
(1, 1, 2, 2999, '2019-10-14 05:56:29', '2019-10-14 05:58:50', 1),
(2, 2, 1, 2595, '2019-10-14 05:57:47', '2019-10-14 05:57:47', 1);

-- --------------------------------------------------------

--
-- Table structure for table `Images`
--

DROP TABLE IF EXISTS `Images`;
CREATE TABLE `Images` (
  `id` tinyint(4) NOT NULL,
  `url` varchar(255) NOT NULL,
  `product_id` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Images`
--

INSERT INTO `Images` (`id`, `url`, `product_id`) VALUES
(1, 'https://bit.ly/2JtVNE6', 1),
(2, 'images/shakeweight.jpg', 1),
(3, 'https://bit.ly/2w9C3Nm', 2),
(4, 'images/shamwow.jpg', 2),
(5, 'https://bit.ly/2LVHYAk', 3),
(6, 'images/snuggie.jpg', 3),
(7, 'https://bit.ly/2EjCU2a', 4),
(8, 'images/waxvac.jpg', 4),
(9, 'https://bit.ly/2VD80b8', 5),
(10, 'images/ostrichpillow.jpg', 5),
(11, 'https://bit.ly/2w9EmzO', 6),
(12, 'images/tatermitts.jpg', 6);

-- --------------------------------------------------------

--
-- Table structure for table `Products`
--

DROP TABLE IF EXISTS `Products`;
CREATE TABLE `Products` (
  `ID` smallint(5) UNSIGNED NOT NULL,
  `Name` varchar(62) NOT NULL,
  `Price` mediumint(9) NOT NULL,
  `Image` varchar(40) NOT NULL,
  `Short Description` varchar(255) NOT NULL,
  `Long Description` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Products`
--

INSERT INTO `Products` (`ID`, `Name`, `Price`, `Image`, `Short Description`, `Long Description`) VALUES
(1, 'Shake Weight', 3000, 'https://bit.ly/2JtVNE6', 'Dynamic Inertia technology ignites muscles in arms, shoulders, and chest.', 'The Shake Weight is the revolutionary new way to work out the muscles in your upper body-biceps, triceps, shoulders and chest using Dynamic Inertia. Its distinct motion makes the Shake Weight the first product of its kind specifically designed to help women achieve firm, toned and sculpted arms in one simple workout!'),
(2, 'ShamWow', 2600, 'https://bit.ly/2w9C3Nm', 'It\'s like a chamois, towel, and sponge, all in one! Soaks up to 10x it\'s weight in any liquid!', 'ShamWow is perfect for any situation. It is like a chamois, a towel, and a sponge all in one. This amazing cleaning cloth sensation has been sweeping the nation. You can use ShamWow to clean, dry, or polish every surface imaginable.'),
(3, 'Snuggie', 2900, 'https://bit.ly/2LVHYAk', 'Super-Soft Fleece with pockets! One Size fits all Adults! Keeps you Warm & Your Hands-Free!', 'Snuggie blankets is the amazing blanket with sleeves that will keep you warm and cozy all winter long.  You can lower your heating bill and keep your hands free while you snuggle your baby, talk on the phone, read a book or use your laptop. Wear a Snuggie blanket for your next outdoor event, or use it to keep warm around the house while you save money all year round.'),
(4, 'Wax Vac', 1000, 'https://bit.ly/2EjCU2a', 'Gentle way to remove ear wax. Safe and hygienic. Reduces the risk of painful infections.', 'WaxVac ear cleaner is the safe and effective way to clean and dry your ears! The WaxVac secret is safe and gentle suction. Simply attach the Wax Vac silicone tip and insert in ear. Say \"Goodbye\" to cotton swabs with WaxVac ear cleaner!'),
(5, 'Ostrich Pillow', 9900, 'https://bit.ly/2VD80b8', 'Create your own snugly space in the world and feel-good anywhere with the ultimate cocoon pillow.', 'OSTRICH PILLOW is a revolutionary new product to enable easy power naps anytime, everywhere. OSTRICH PILLOW\'S unique design offers a micro environment in which to take a cozy and comfortable power nap at ease. It has been designed to allow you to create a little private space within a public one, to relax and unwind.'),
(6, 'Tater Mitts', 1000, 'https://bit.ly/2w9EmzO', '8 Seconds is All You Need with Tater Mitts! Quickly and easily prepare all your favorite potato dishes with Tater Mitts.', 'Peels the thinnest layer of potato skin. Tater Mitts are the new kitchen gloves that combine comfort and innovation to bring you the ultimate potato peeling process. 8 seconds is all you need to peel one potato effortlessly without getting your hands wet, nicked or cut.');

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
  MODIFY `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `cartItems`
--
ALTER TABLE `cartItems`
  MODIFY `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `Images`
--
ALTER TABLE `Images`
  MODIFY `id` tinyint(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT for table `Products`
--
ALTER TABLE `Products`
  MODIFY `ID` smallint(5) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
