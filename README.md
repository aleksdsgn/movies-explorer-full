# :movie_camera: Проект Movies-Explorer (frontend + backend)
Дипломный проект созданный на курсе "Веб-разработчик" в Яндекс.Практикум (2022-2023).


## Описание:
Movies-Explorer это Single Page Application  вэб-приложение с пользовательскими профилями. В нем можно найти документальные фильмы и сохранить их в свою личную подборку.

На главной странице находится лендинг проекта, с описанием этой дипломной работы. В конце короткое резюме о себе и портфолио с учебными работами.

Проект задеплоен на виртуальной машине YandexCloud. Бэкенд находится на поддомене фронтенда.

![preview](https://user-images.githubusercontent.com/97102815/228849082-10a15264-03de-41bb-bf9b-4e2fabf02556.gif)

## Логика работы сервиса
После простой регистрации (можно ввести данные "от балды", главное чтобы соответствовали элементарной валидации) открывается доступ к основному функционалу приложения Movies-Explorer. 

После авторизации сразу же предлагается выполнить поиск фильмов по ключевым словам в названии и фильтру короткометражного кино (>= 40 минутам).

После нажатия на кнопку "Поиска" сервис должен выполнить действия:
* отправить запрос к сервису с данными о фильмах Beatfilm Movies , получить данные и сохранить в Local Storage;
* согласно выбранной продолжительности найти все подходящие фильмы и отобразить карточки с ними;

Когда пользователь отмечает фильм, он должен отображаться в специальном разделе "Сохранённые фильмы"

При повторной загрузке страницы восстанавливаются данные запроса поиска (текст который вводился в строку поиска и состояние чекбокса "Короткометражки").


## Функциональность:
* Регистрация и авторизация пользователей.
* Получение и изменение данных текущего пользователя.
* Получение списка фильмов и выполнения поиска по ним.
* Сохранение фильма в свою подборку, а также удаление из нее.
* Live-валидация всех полей в формах.
* Также валидация запросов через API.
* Логирование запросов.
* Централизованная обработка ошибок.


## Примененные знания и стэк технологий:
* В разработке использовался editorconfig, StyleLint  и ESLint со стайлгайдом от Airbnb.
* helmet - для простановки security-заголовков.
*  express-rate-limit - для ограничения кол-во запросов и защиты от DoS-атак.
* Верстка:
	- CSS
	- Адаптивная с подходом Desktop first
	- С использованием Flexbox и Grid Layout
	- Применен семантический HTML5
	- Использована методология БЭМ
* React.js v18.2:
	- Приложение создано при помощи Create React App
	- Используются хуки: useState, useEffect, useContext, useRef
 	- Применяются управляемые компоненты в элементах формы
 	- Используется React Router v6 с защищенными роутами
* Бэкенд:
	- База данных на MongoDB + Mongoose
 	- Создание моделей БД для фильма и пользователя
	- API-сервер на Node.js + express.js
 	- Авторизация через JWT-token
 	- Хранение данных в Local Storage
	- Менеджер процессов на сервере pm2
	- Переменные окружения хранятся в .env-файле
	- Использование nginx в качестве обратного прокси-сервера
	- Выпущены SSL-сертификаты безопасности
	- Сервер на Ubuntu в YandexCloud


## Ссылки:
* Frontend: https://movies.aleksdsgn.nomoredomains.club
* Backend: https://api.movies.aleksdsgn.nomoredomains.club
* Репозитории до слияния в один общий:
  - Frontend: [https://github.com/aleksdsgn/movies-explorer-frontend](https://github.com/aleksdsgn/movies-explorer-frontend)
  - Backend: [https://github.com/aleksdsgn/movies-explorer-api](https://github.com/aleksdsgn/movies-explorer-api)
* Макет по которому была произведена верстка: [https://www.figma.com/file/Pk8FcCeHxuL1skSjTsyhLX/Diploma-(Copy)?node-id=891-3857&t=YsQJtV5eFiwCj81s-0](https://www.figma.com/file/Pk8FcCeHxuL1skSjTsyhLX/Diploma-(Copy)?node-id=891-3857&t=YsQJtV5eFiwCj81s-0)

## Инструкция по развёртыванию проекта:

Требования:
* Node.js >= 14;
* npm >= 9.3.1;

`git clone https://github.com/aleksdsgn/movies-explorer-full.git` - клонирование репозитория

для обращения к API по локальной сети в файле
\movies-explorer-full\frontend\src\utils\constants.js
расскомментировать 5 строку
`// export const API_URL = 'http://localhost:3001';`
и закомментировать 6 строку
`export const API_URL = 'https://api.movies.aleksdsgn.nomoredomains.club';`

* Backend:
  - `cd .\movies-explorer-full\backend` - вход в каталог
  - `npm i` - установка зависимостей 
  - `mongod` - запуск mongodDB
  - `npm run start` - запуск develop-сборки с hot-reload

* Frontend:
  - `cd .\frontend` - вход в каталог
  - `npm i` - установка зависимостей 
  - `npm run start` - запуск develop-сборки с hot-reload
