-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 25, 2020 at 11:23 PM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.4.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bub_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `antwort`
--

CREATE TABLE `antwort` (
  `id` int(11) NOT NULL,
  `frage_id` int(11) DEFAULT NULL,
  `answer` varchar(512) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `antwort`
--

INSERT INTO `antwort` (`id`, `frage_id`, `answer`) VALUES
(1, 1, 'Weiß ich nicht'),
(2, 1, 'Nein'),
(3, 1, 'Ich versuche darauf zu achten'),
(4, 1, 'Ich verhalte mich meist nachhaltig'),
(5, 1, 'Ich bin so nachhaltig, wie es mir möglich ist'),

(6, 2, 'Nein'),
(7, 2, 'Nein, aber ich achte trotzdem auf nachhaltige Produkte'),
(8, 2, 'Ja, ab und zu'),
(9, 2, 'Ja, sehr oft'),
(10,2, 'Ja, immer!'),

(11, 3, 'Nein, ich schmeiße sie weg'),
(12, 3, 'Wenn sie noch funktionieren, klar'),
(13, 3, 'Ich lasse sie recyclen'),
(14, 3, 'Die liegen irgendwo rum'),
(15, 3, 'Ja, diese verkaufe/verschenke ich immer weiter'),

(16, 4, 'Weiß ich nicht'),
(17, 4, 'Ich müsste mal nachgucken'),
(18, 4, 'Nein'),
(19, 4, 'Ja'),
(20, 4, 'Ja, sogar mehrere'),

(21, 5, 'Weiß ich nicht'),
(22, 5, 'Bis zu 2 Jahre'),
(23, 5, '2 bis 4 Jahre'),
(24, 5, '4 bis 6 Jahre'),
(25, 5, 'Älter als 6 Jahre'),

(26, 6, 'Ich besitze keine Smartphone'),
(27, 6, 'Bis zu 1 Stunde pro Tag'),
(28, 6, 'Bis zu 2 Stunden pro Tag'),
(29, 6, 'Bis 4 Stunden pro Tag'),
(30, 6, 'Mehr als 4 Stunden pro Tag'),

(31, 7, '1 Jahr'),
(32, 7, '2 Jahre'),
(33, 7, '3 Jahre'),
(34, 7, '4 Jahre'),
(35, 7, 'Länger als 4 Jahre'),

(36, 8, 'Nein, ich höre Musik nur über CD´s'),
(37, 8, 'Nein, ich besitze auch keine CD´s'),
(38, 8, 'Ja, ab und zu'),
(39, 8, 'Ja, mehrmals pro Woche'),
(40, 8, 'Ja, jeden Tag'),

(41, 9, 'Ich streame keine Videos'),
(42, 9, '0 bis 1 Stunde'),
(43, 9, '1 Stunde bis 2 Stunden'),
(44, 9, '2 Stunden bis 3 Stunden'),
(45, 9, 'Mehr als 4 Stunden täglich'),

(46, 10, 'Nie'),
(47, 10, 'Während ich das Smartphone für andere Aktivitäten benutzte (bspw. Social Media, Online Shopping)'),
(48, 10, 'Bei Haushaltsaktivitäten (bspw. putzen, aufräumen, kochen)'),
(49, 10, 'Um keine zu ruhige Wohnung zu haben'),
(50, 10, 'Abends zum Einschlafen'),

(51, 11, 'Aus (Stromzufuhr getrennt)'),
(52, 11, 'Standby'),
(53, 11, 'Mal so mal so'),
(54, 11, 'Ich bin mir unsicher, ob meine Heimelektronik einen Standby-Modus hat'),
(55, 11, 'Ich lasse sie immer angeschaltet'),

(56, 12, 'Nein, ich speichere alles lokalauf meinem Rechner oderWechselmedium.'),
(57, 12, 'Ja, zwischen 1MB und 1000MB'),
(58, 12, 'Ja, zwischen 1GB und 25GB'),
(59, 12, 'Ja, zwischen 25GB und 100GB'),
(60, 12, 'Ja, mehr als 100GB'),

(61, 13, 'Jedes Jahr'),
(62, 13, 'Alle 2 Jahre'),
(63, 13, 'Alle 3 Jahre'),
(64, 13, 'Alle 4 Jahre'),
(65, 13, 'Seltener als 4 Jahre'),

(66, 14, 'Nein'),
(67, 14, 'Ja'),
(68, 14, 'Ich besitze bereits einen eBook-Reader'),
(69, 14, 'Ich lese prinzipiell nur Bücher'),
(70, 14, 'Ich lese keine Bücher'),

(71, 15, 'Weiß ich nicht'),
(72, 15, 'Nein'),
(73, 15, 'Ich versuche darauf zu achten'),
(74, 15, 'Ich verhalte mich meist nachhaltig'),
(75, 15, 'Ich bin so nachhaltig, wie es mir möglich ist');

-- --------------------------------------------------------

--
-- Table structure for table `auswertung`
--

CREATE TABLE `auswertung` (
  `id` int(11) NOT NULL,
  `frage_id` int(11) DEFAULT NULL,
  `antwort_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


-- --------------------------------------------------------

--
-- Table structure for table `frage`
--

CREATE TABLE `frage` (
  `id` int(11) NOT NULL,
  `text` varchar(512) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `frage`
--

INSERT INTO `frage` (`id`, `text`) VALUES
(1, 'Würdest du dein digitales Konsumverhalten als nachhaltig bezeichnen?'),
(2, 'Kaufst du bei Online-Shops, welche sich auf nachhaltige Produkte spezialisiert haben? '),
(3, 'Verkaufst oder verschenkst du regelmäßig veraltete Elektrogeräte weiter ?'),
(4, 'Hast du noch kaputte bzw. defekte Geräte irgendwo bei dir rumliegen? '),
(5, 'Wie alt ist oder war dein bisher ältester Computer?'),
(6, 'Wie viel Zeit verbringst du täglich mit deinem Smartphone?'),
(7, 'Wie schätzt du die Gesamtlebensdauer deines aktuellen Smartphones ein?'),
(8, 'Hörst du Musik über Online-Streaming Dienste?'),
(9, 'Wie viele Stunden pro Tag verbringst du mit dem Streamen auf Videoplattformen wie Netflix, YouTube und Co.?'),
(10, 'Wann laufen Serien oder Filme bei dir im Hintergrund?'),
(11, 'Schaltest du deine Heimelektronik (Konsole, PC, TV, Stereoanlage etc.) nach der Nutzung komplett aus oder lässt du sie im Standby-Modus?'),
(12, 'Nutzt du regelmäßig Cloud Dienste, wenn ja – wie viel Speicherplatz ist dort belegt? '),
(13, 'Wie oft kaufst du dir neue Elektronik (Laptop, Smartphone, Tablet, etc.)?'),
(14, 'Hast du vor ein Tablet oder eBook Reader zu kaufen, um Bücher zu lesen?'),
(15, 'Würdest du dein digitales Konsumverhalten als nachhaltig bezeichnen?');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `antwort`
--
ALTER TABLE `antwort`
  ADD PRIMARY KEY (`id`),
  ADD KEY `frageid` (`frage_id`);

--
-- Indexes for table `auswertung`
--
ALTER TABLE `auswertung`
  ADD PRIMARY KEY (`id`),
  ADD KEY `frageid` (`frage_id`),
  ADD KEY `antwortid` (`antwort_id`);

--
-- Indexes for table `frage`
--
ALTER TABLE `frage`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `antwort`
--
ALTER TABLE `antwort`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=72;

--
-- AUTO_INCREMENT for table `auswertung`
--
ALTER TABLE `auswertung`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=423;

--
-- AUTO_INCREMENT for table `frage`
--
ALTER TABLE `frage`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `antwort`
--
ALTER TABLE `antwort`
  ADD CONSTRAINT `antwort_ibfk_1` FOREIGN KEY (`frage_id`) REFERENCES `frage` (`id`);

--
-- Constraints for table `auswertung`
--
ALTER TABLE `auswertung`
  ADD CONSTRAINT `auswertung_ibfk_1` FOREIGN KEY (`antwort_id`) REFERENCES `antwort` (`id`),
  ADD CONSTRAINT `auswertung_ibfk_2` FOREIGN KEY (`frage_id`) REFERENCES `frage` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
