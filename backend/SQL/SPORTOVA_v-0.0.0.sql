-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Мар 04 2024 г., 12:23
-- Версия сервера: 5.6.51-log
-- Версия PHP: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `SPORTOVA`
--

-- --------------------------------------------------------

--
-- Структура таблицы `age_restrictions`
--

CREATE TABLE `age_restrictions` (
  `id` bigint(20) NOT NULL,
  `age_restrictions` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `age_restrictions`
--

INSERT INTO `age_restrictions` (`id`, `age_restrictions`) VALUES
(1, 0),
(2, 1),
(3, 2);

-- --------------------------------------------------------

--
-- Структура таблицы `street_equipment`
--

CREATE TABLE `street_equipment` (
  `id` bigint(20) NOT NULL,
  `title` varchar(128) NOT NULL,
  `price` int(11) NOT NULL,
  `urlImg` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `street_equipment`
--

INSERT INTO `street_equipment` (`id`, `title`, `price`, `urlImg`) VALUES
(1, 'УСК Богатырь Romana, качели гнездо Romana', 27590, 'StreetSports_1.jpeg'),
(2, 'Спортивный детский комплекс “Юниор-Плюс”...', 15999, 'StreetSports_2.jpeg'),
(3, 'Детский уличный спортивный комплекс «Юниор» (с сеткой)...', 19490, 'StreetSports_3.jpeg'),
(4, 'Уличный спортивный турник Романа', 22990, 'StreetSports_4.jpeg'),
(5, 'Спортивный детский комплекс “Юниор-Плюс”...', 15990, 'StreetSports_2.jpeg'),
(6, 'УСК Богатырь Romana, качели гнездо Romana', 27590, 'StreetSports_1.jpeg'),
(7, 'Детский уличный спортивный комплекс «Юниор» (с сеткой)...', 20000, 'StreetSports_3.jpeg');

-- --------------------------------------------------------

--
-- Структура таблицы `street_equipment_discount`
--

CREATE TABLE `street_equipment_discount` (
  `id` bigint(20) NOT NULL,
  `discount` int(11) NOT NULL,
  `street_equipment_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `street_equipment_discount`
--

INSERT INTO `street_equipment_discount` (`id`, `discount`, `street_equipment_id`) VALUES
(1, 15999, 2),
(2, 23800, 3),
(3, 18500, 5),
(4, 23800, 7);

-- --------------------------------------------------------

--
-- Структура таблицы `swedish_walls`
--

CREATE TABLE `swedish_walls` (
  `id` bigint(20) NOT NULL,
  `title` varchar(128) NOT NULL,
  `price` int(11) NOT NULL,
  `urlImg` varchar(225) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `swedish_walls`
--

INSERT INTO `swedish_walls` (`id`, `title`, `price`, `urlImg`) VALUES
(1, 'Шведская стенка P-19 (Цвет: Белый)', 14980, 'wall_1.jpeg'),
(2, 'Шведская стенка P-3 (Цвет: Антик Серебро)', 7990, 'wall_2.jpeg'),
(3, 'Шведская стенка P-4 (Цвет: Светофор)', 10990, 'wall_3.jpeg'),
(4, 'Шведская стенка P-19 (Цвет: Белый)', 14980, 'wall_1.jpeg'),
(5, 'Шведская стенка P-3 (Цвет: Антик Серебро)', 7990, 'wall_2.jpeg');

-- --------------------------------------------------------

--
-- Структура таблицы `swedish_walls_discount`
--

CREATE TABLE `swedish_walls_discount` (
  `id` bigint(20) NOT NULL,
  `discount` int(11) NOT NULL,
  `swedish_walls_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `swedish_walls_discount`
--

INSERT INTO `swedish_walls_discount` (`id`, `discount`, `swedish_walls_id`) VALUES
(1, 11320, 2),
(2, 14990, 3);

-- --------------------------------------------------------

--
-- Структура таблицы `weightlifting`
--

CREATE TABLE `weightlifting` (
  `id` bigint(20) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `price` int(11) NOT NULL,
  `urlImg` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `weightlifting`
--

INSERT INTO `weightlifting` (`id`, `title`, `price`, `urlImg`) VALUES
(1, 'Гантель разборная стальная (гриф + блины) 15 кг', 1920, 'Weightlifting_1.jpeg'),
(2, 'Гантель разборная (гриф + блины) 24,1 кг', 4260, 'Weightlifting_2.jpeg'),
(3, 'Гантель разборная (гриф + блины) 26,6 кг', 4260, 'Weightlifting_3.jpeg'),
(4, 'Гиря «Горилла» 16,0 кг', 5990, 'Weightlifting_4.jpeg'),
(5, 'Гантель разборная (гриф + блины) 24,1 кг', 4200, 'Weightlifting_2.jpeg'),
(6, 'Гантель разборная стальная (гриф + блины) 15 кг', 3520, 'Weightlifting_1.jpeg'),
(7, 'Гантель разборная (гриф + блины) 26,6 кг', 5624, 'Weightlifting_3.jpeg');

-- --------------------------------------------------------

--
-- Структура таблицы `weightlifting_discount`
--

CREATE TABLE `weightlifting_discount` (
  `id` bigint(20) NOT NULL,
  `discount` int(11) NOT NULL,
  `weightlifting_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `weightlifting_discount`
--

INSERT INTO `weightlifting_discount` (`id`, `discount`, `weightlifting_id`) VALUES
(1, 4200, 2),
(2, 4260, 3),
(3, 4200, 5),
(4, 3590, 7);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `age_restrictions`
--
ALTER TABLE `age_restrictions`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `street_equipment`
--
ALTER TABLE `street_equipment`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `street_equipment_discount`
--
ALTER TABLE `street_equipment_discount`
  ADD PRIMARY KEY (`id`),
  ADD KEY `street_equipment_fk` (`street_equipment_id`);

--
-- Индексы таблицы `swedish_walls`
--
ALTER TABLE `swedish_walls`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `swedish_walls_discount`
--
ALTER TABLE `swedish_walls_discount`
  ADD PRIMARY KEY (`id`),
  ADD KEY `swedish_walls_id_fk` (`swedish_walls_id`);

--
-- Индексы таблицы `weightlifting`
--
ALTER TABLE `weightlifting`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `weightlifting_discount`
--
ALTER TABLE `weightlifting_discount`
  ADD PRIMARY KEY (`id`),
  ADD KEY `weightlifting_id_fk` (`weightlifting_id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `age_restrictions`
--
ALTER TABLE `age_restrictions`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT для таблицы `street_equipment`
--
ALTER TABLE `street_equipment`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT для таблицы `street_equipment_discount`
--
ALTER TABLE `street_equipment_discount`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT для таблицы `swedish_walls`
--
ALTER TABLE `swedish_walls`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT для таблицы `swedish_walls_discount`
--
ALTER TABLE `swedish_walls_discount`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT для таблицы `weightlifting`
--
ALTER TABLE `weightlifting`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT для таблицы `weightlifting_discount`
--
ALTER TABLE `weightlifting_discount`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `street_equipment_discount`
--
ALTER TABLE `street_equipment_discount`
  ADD CONSTRAINT `street_equipment_fk` FOREIGN KEY (`street_equipment_id`) REFERENCES `street_equipment` (`id`);

--
-- Ограничения внешнего ключа таблицы `swedish_walls_discount`
--
ALTER TABLE `swedish_walls_discount`
  ADD CONSTRAINT `swedish_walls_id_fk` FOREIGN KEY (`swedish_walls_id`) REFERENCES `swedish_walls` (`id`);

--
-- Ограничения внешнего ключа таблицы `weightlifting_discount`
--
ALTER TABLE `weightlifting_discount`
  ADD CONSTRAINT `weightlifting_id_fk` FOREIGN KEY (`weightlifting_id`) REFERENCES `weightlifting` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
