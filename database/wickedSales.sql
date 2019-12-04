-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 04, 2019 at 05:53 AM
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
(24, 'images/widepants3.jpg', 8),
(25, 'images/slimpants1.jpg', 9),
(26, 'images/slimpants2.jpg', 9),
(27, 'images/slimpants3.jpg', 9),
(28, 'images/straightpants1.jpg', 10),
(29, 'images/straightpants2.jpg', 10),
(30, 'images/straightpants3.jpg', 10),
(31, 'images/boxyjacket1.jpg', 11),
(32, 'images/boxyjacket2.jpg', 11),
(33, 'images/boxyjacket3.jpg', 11),
(34, 'images/quiltedjacket1.jpg', 12),
(35, 'images/quiltedjacket2.jpg', 12),
(36, 'images/quiltedjacket3.jpg', 12),
(37, 'images/vneck1.jpg', 13),
(38, 'images/vneck2.jpg', 13),
(39, 'images/vneck3.jpg', 13),
(40, 'images/dropstripe1.jpg', 14),
(41, 'images/dropstripe2.jpg', 14),
(42, 'images/dropstripe3.jpg', 14),
(43, 'images/ribbedscarf1.jpg', 15),
(44, 'images/ribbedscarf2.jpg', 15),
(45, 'images/ribbedscarf3.jpg', 15),
(46, 'images/buckethat1.jpg', 16),
(47, 'images/buckethat2.jpg', 16),
(48, 'images/buckethat3.jpg', 16),
(49, 'images/heartnecklace1.jpg', 17),
(50, 'images/heartnecklace2.jpg', 17),
(51, 'images/heartnecklace3.jpg', 17),
(52, 'images/heartbelt1.jpg', 18),
(53, 'images/heartbelt2.jpg', 18),
(54, 'images/heartbelt3.jpg', 18),
(55, 'images/stitchskirt1.jpg', 19),
(56, 'images/stitchskirt2.jpg', 19),
(57, 'images/stitchskirt3.jpg', 19),
(58, 'images/drapeskort1.jpg', 20),
(59, 'images/drapeskort2.jpg', 20),
(60, 'images/drapeskort3.jpg', 20),
(61, 'images/cableknit1.jpg', 21),
(62, 'images/cableknit2.jpg', 21),
(63, 'images/cableknit3.jpg', 21),
(64, 'images/corduroy1.jpg', 22),
(65, 'images/corduroy2.jpg', 22),
(66, 'images/corduroy3.jpg', 22),
(67, 'images/beret1.jpg', 23),
(68, 'images/beret2.jpg', 23),
(69, 'images/beret3.jpg', 23),
(70, 'images/fringescarf1.jpg', 24),
(71, 'images/fringescarf2.jpg', 24),
(72, 'images/fringescarf3.jpg', 24),
(73, 'images/lapelcoat1.jpg', 25),
(74, 'images/lapelcoat2.jpg', 25),
(75, 'images/lapelcoat3.jpg', 25),
(76, 'images/drawstring1.jpg', 26),
(77, 'images/drawstring2.jpg', 26),
(78, 'images/drawstring3.jpg', 26),
(79, 'images/shortset1.jpg', 27),
(80, 'images/shortset2.jpg', 27),
(81, 'images/shortset3.jpg', 27),
(82, 'images/boyfriend1.jpg', 28),
(83, 'images/boyfriend2.jpg', 28),
(84, 'images/boyfriend3.jpg', 28),
(85, 'images/loosecardigan1.jpg', 29),
(86, 'images/loosecardigan2.jpg', 29),
(87, 'images/loosecardigan3.jpg', 29),
(88, 'images/necklaceset1.jpg', 30),
(89, 'images/necklaceset2.jpg', 30),
(90, 'images/necklaceset3.jpg', 30),
(91, 'images/buttoncardigan1.jpg', 31),
(92, 'images/buttoncardigan2.jpg', 31),
(93, 'images/buttoncardigan3.jpg', 31),
(94, 'images/squarebelt1.jpg', 32),
(95, 'images/squarebelt2.jpg', 32),
(96, 'images/squarebelt3.jpg', 32);

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

--
-- Dumping data for table `Orders`
--

INSERT INTO `Orders` (`id`, `Name`, `Address`, `creditCard`, `cartID`) VALUES
(1, 'asldkfj', 'asdfsdf', '123123', 2);

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
(8, 'High Waist Wide Leg Pants', 1000, 'images/widepants1.jpg', 'Stay breezy and effortless with these solid color pants.', 'Be comfortable whenever you don these solid tone pants. They come with a high waist, a loose fit, and an ankle-length construction. Tuck in a casual or natty top, then finish the look with your fave shoes.', 'Bottom'),
(9, 'Fleece Lined Slim Pants', 2500, 'images/slimpants1.jpg', 'Sport a cozy, casual style with these fleece-lined pants.', 'Great for the cooler season, these solid toned pants come with a mid rise, belt loops, a button and zip fly, pockets, a fleece lining, and a slim fit. Team them with your sweatshirt and ankle boots for an instant cozy casual style.', 'Bottom'),
(10, 'Straight Leg Slim Fit Jeans', 2600, 'images/straightpants1.jpg', 'Stay classic and comfortable with these straight leg jeans.', 'These jeans are flattering and versatile with their straight leg silhouette and slim fit. They also come with a mid rise, a classic button and zip fastening, and five pockets. Style these jeans with a colorful sweater and sneakers.', 'Bottom'),
(11, 'Spread Collar Boxy Jacket', 3500, 'images/boxyjacket1.jpg', 'Dress your ensemble up or down with this versatile jacket.', 'Chic and classic, this jacket is a great addition to your ensemble. It comes with a spread collar, a button up front, pockets, long sleeves, and a boxy fit. With its solid tone, this coverup will match well with a number of casual or polished looks.', 'Outerwear'),
(12, 'Fuzzy Collar Quilted Jacket', 4000, 'images/quiltedjacket1.jpg', 'Stay comfy during the fall and winter seasons with this fuzzy quilted jacket.', 'Keep yourself comfy this season with this jacket. It features a fuzzy collar, a snap button and zip closure, pockets, long sleeves, and a relaxed fit. Team it with your casual outfits for added warmth.', 'Outerwear'),
(13, 'V Neck Button Up Top', 1200, 'images/vneck1.jpg', 'Stay breezy with this fashion staple.', 'A simple yet classic top, like this, is a good fashion staple to invest in. It has a V neck, a button up front, short sleeves, and a solid tone for versatility. This piece will go well with most casual or natty bottoms.', 'Top'),
(14, 'Drop Shoulder Stripe Knit Top', 2000, 'images/dropstripe1.jpg', 'Radiate a relaxed feel with this knit top that is perfect for any occasion.', 'Stripes add a mod feel to this basic knit top. It sports a round neck, dropped shoulders, extended sleeves, and a relaxed fit. Team it with your denim jeans and plimsolls to complete the look.', 'Top'),
(15, 'Ribbed Edge Scarf', 1500, 'images/ribbedscarf1.jpg', 'Pair this winter staple with a number of cold weather looks.', 'Handy and versatile, this scarf will surely serve you well this season. It comes with ribbed edges and a solid color for easy mixing and matching with a number of cold weather looks.', 'Accessories'),
(16, 'Single Tone Bucket Hat', 1100, 'images/buckethat1.jpg', 'Wear with casual ensembles for a hip addition.', 'Protect your head this season with this handy bucket hat. It has a flat crown, a single tone, and a subtly floppy brim. Wear it best with casual ensembles.', 'Accessories'),
(17, 'Heart Pendant Chain Necklace', 1000, 'images/heartnecklace1.jpg', 'Spruce up casual looks by adding this necklace.', 'Spruce up casual looks by adding this necklace. It comes with a heart pendant, a chain strand, and a lobster claw clasp. With its solid tone, this accessory will go well with a number of outfits.', 'Accessories'),
(18, 'Heart Buckle Belt', 800, 'images/heartbelt1.jpg', 'Make a cute style statement with this heart buckle belt.', 'Make a style statement with this belt. It has a heart shaped buckle with prong, multiple punched holes for easy adjustment, and a rounded end tip. This charming belt may be used with your loose floral dresses.', 'Accessories'),
(19, 'Contrast Stitch Denim Skirt', 1500, 'images/stitchskirt1.jpg', 'Rock a preppy, casual look with this H line mini skirt.', 'Ditch your usual jeans for a more feminine bottom like this mini skirt. It has a high waist, belt loops, a button and zip fly, pockets, and an H line cut. Tuck in a striped tee, then complete the look with a pair of crew socks and sneakers for a preppy casual getup.', 'Bottom'),
(20, 'Front Drape Skort', 2500, 'images/drapeskort1.jpg', 'Enjoy the look of a skirt with the comfort of shorts in this lovely skort.', 'Enjoy the look of a skirt with the comfort of shorts in this lovely skort. It comes with a high waist, a side zipper, a solid tone, and a concealed pair of shorts that peeks out from under the front drape. Wear this piece with your favorite t shirt and sneakers.', 'Bottom'),
(21, 'Cable Knit V Neck Sweater', 2400, 'images/cableknit1.jpg', 'Go for a preppy and warm look with this comfy knitted sweater.', 'Enjoy the warmth and utter comfort of this knitted sweater! It has a cable knit pattern, a V neckline, contrast stripe trims, extended sleeves, and a loose fit. Go for a preppy look by teaming this with a check skirt, tights, and loafers.', 'Top'),
(22, 'Sherpa Fleece Lining Corduroy Jacket', 3000, 'images/corduroy1.jpg', 'Add warmth and flair to your ensemble.', 'Classic with its corduroy make, this jacket will be a handy piece this season. It has a spread collar, a button up front, buttoned flap pockets at the chest, cuffed long sleeves, and a sherpa fleece lining. Top it over basic looks for added warmth and flair.', 'Outerwear'),
(23, 'Fuzzy Beret Hat', 1200, 'images/beret1.jpg', 'Add a cozy element to your by wearing this beret hat.', 'Add a cozy element to your by wearing this beret hat. It sports a short tab atop, a fuzzy fabric make, and a single tone for versatility. Team it with a casual shirt, mini skirt, and plimsolls combo for an easy preppy style.', 'Accessories'),
(24, 'Fringed Edge Solid Tone Scarf', 1400, 'images/fringescarf1.jpg', 'Pair this scarf perfectly with knit tops and casual ensembles.', 'Layer up without sacrificing style with this scarf. It is designed with a solid tone for versatility and fringed edges. This accessory is perfect worn with knit tops and casual coats.', 'Accessories'),
(25, 'Wide Notch Lapel Double Breasted Coat', 4500, 'images/lapelcoat1.jpg', 'Add a classy note to your ensemble by donning this coat.', 'Add a classy note to your ensemble by donning this coat. This piece comes with wide notched lapels, a double-breasted style, slanted pockets, and a relaxed fit. Top it over casual or professional looks; it is that versatile.', 'Outerwear'),
(26, 'Shirred Drawstring Front Knit Top', 1200, 'images/drawstring1.jpg', 'Achieve a chic, casual look with this shirred ribbed knit top.', 'Versatile with its single tone, this ribbed knit top is a nice apparel to have whatever the occasion. It comes with a V neck, a shirred drawstring detail in front, short sleeves, and a slim fit. Team it with a mini denim skirt and block heel sandals to achieve a chic casual look.', 'Top'),
(27, 'Round Buckle Belt and Cuffed Cotton Shorts Set', 2600, 'images/shortset1.jpg', 'Achieve a no fuss casual outfit with this cotton shorts/belt set.', 'Handy and versatile, these cotton shorts will be your next go to bottom this summer. They have a high waist, belt loops, a button and zip fastening, pockets, folded cuffs, and a bonus round buckled belt as a nice accessory. Wear it with your fave tee and sneakers to achieve a no fuss casual getup.', 'Bottom'),
(28, 'Loose Checkered Boyfriend Shirt', 1800, 'images/boyfriend1.jpg', 'Stay casual in this classic wardrobe staple.', 'A classic boyfriend shirt like this is always a welcome to your wardrobe. It comes with a basic collar, a single chest pocket, cuffed long sleeves, and a loose fit. Cool with its checkered design, this top is great worn as is or layered over a simple tee.', 'Top'),
(29, 'V Neck Loose Button Up Cardigan', 2500, 'images/loosecardigan1.jpg', 'Add a cozy detail to your basic looks.', 'Add a cozy detail to your basic looks with this loose fitting cardigan. It comes with a V neckline, a button up front, dropped shoulders with extended sleeves, and ribbed cuffs. You can wear this with your frilly dresses or layer it over your tops.', 'Outerwear'),
(30, 'Pendant Necklace Set', 700, 'images/necklaceset1.jpg', 'Pair this necklace set with casual wear for a sophisticated style.', 'Give your neck a sophisticated advantage with this two piece necklace set! The longer necklace has a heart pendant while the short one has a triple hoop pendant strung through it. This set is best with casual wear.', 'Accessories'),
(31, 'Button Front V Neck Cardigan', 2200, 'images/buttoncardigan1.jpg', 'Layer up easily when you have this cardigan on hand.', 'Layer up easily when you have this cardigan on hand. It has a classic V neck, a button up front, long sleeves, and a regular fit. This piece is nice worn with either sleeved or sleeveless tops.', 'Outerwear'),
(32, 'Square Buckled Faux Leather Belt', 900, 'images/squarebelt1.jpg', 'Pair this versatile belt with your dresses, loose blouses, pants, and skirts.', 'This buckled belt is a must have accessory. With a classic, glossy square buckle and a supple strap to wrap around the waist, this belt can work well with your dresses, loose blouses, pants, and skirts.', 'Accessories');

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
  MODIFY `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `Images`
--
ALTER TABLE `Images`
  MODIFY `id` tinyint(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=97;
--
-- AUTO_INCREMENT for table `Orders`
--
ALTER TABLE `Orders`
  MODIFY `id` tinyint(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `Products`
--
ALTER TABLE `Products`
  MODIFY `ID` smallint(5) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
