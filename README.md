# Основы веб-технологий

**Русский** · [English](README.en.md)

[![CI](https://github.com/EDeev/web-tech/actions/workflows/ci.yml/badge.svg)](https://github.com/EDeev/web-tech/actions/workflows/ci.yml)

Лабораторные по курсу «Основы веб-технологий» в Московском Политехе: от первой HTML-страницы до сайта
сервиса доставки ланчей «ЭкоЛанч» с меню, корзиной и заказами через учебный API.

**Статус:** учебный проект (Московский Политех, 2025), завершён, в архиве · сайт — [web-tech.deev.space](https://web-tech.deev.space)

![ЭкоЛанч — итоговая лабораторная](docs/screenshots/eco-lunch.png)

**Стек:** HTML5 · CSS3 (Flexbox, Grid) · JavaScript (ES6+, fetch) · Bootstrap 5 · GitHub Pages

| Папка | Тема |
|---|---|
| `labs/lab-01` | семантическая разметка и базовые стили |
| `labs/lab-02` | блочная модель, Flexbox, адаптивность |
| `labs/lab-03` | формы и их проверка |
| `labs/lab-04` | основы JavaScript, меню из массива данных |
| `labs/lab-05`, `labs/lab-06` | DOM, события, фильтры и выбор блюд |
| `labs/lab-07` … `labs/lab-09` | JSON и fetch: меню и заказы через учебный API |
| `labs/lab-10` | итог на Bootstrap: оформление, просмотр, правка и удаление заказов |
| `tasks/` | задачи на JavaScript: математические функции и игра |

## Запуск

Сайт статический: откройте `index.html` в браузере или посмотрите опубликованную версию на
[web-tech.deev.space](https://web-tech.deev.space). Меню и заказы в лабораторных 7–10 загружаются из
учебного API Московского Политеха; ключ API выдан курсом и лежит в коде лабораторных.

Данные из API экранируются перед вставкой в страницу (функция `esc()`); CI проверяет синтаксис всех
скриптов.

## Лицензия

Учебный проект (Основы веб-технологий, Московский Политех, 2025). Код открыт для изучения, отдельной
лицензии нет.

## Автор

**Деев Егор Викторович** — [GitHub](https://github.com/EDeev) · [Telegram](https://t.me/DeevEgor) · [egor@deev.space](mailto:egor@deev.space)

---

<div align="center">
  <sub>⭐ Если проект оказался полезным, поставьте звёздочку на GitHub!</sub>
  <p><sub>Сделано с ❤️ — <a href="https://deev.space">deev.space</a></sub></p>
</div>
