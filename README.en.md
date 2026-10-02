# Web Technologies Basics

[Русский](README.md) · **English**

[![CI](https://github.com/EDeev/web-tech/actions/workflows/ci.yml/badge.svg)](https://github.com/EDeev/web-tech/actions/workflows/ci.yml)

Labs for the "Web Technologies Basics" course at Moscow Polytechnic University: from a first HTML page to
the "EcoLunch" lunch delivery site with a menu, cart and orders through the course API.

**Status:** coursework (Moscow Polytech, 2025), completed, archived · site at [web-tech.deev.space](https://web-tech.deev.space)

![EcoLunch — final lab](docs/screenshots/eco-lunch.png)

**Stack:** HTML5 · CSS3 (Flexbox, Grid) · JavaScript (ES6+, fetch) · Bootstrap 5 · GitHub Pages

| Folder | Topic |
|---|---|
| `labs/lab-01` | semantic markup and basic styles |
| `labs/lab-02` | box model, Flexbox, responsive layout |
| `labs/lab-03` | forms and validation |
| `labs/lab-04` | JavaScript basics, menu from a data array |
| `labs/lab-05`, `labs/lab-06` | DOM, events, filters and dish selection |
| `labs/lab-07` … `labs/lab-09` | JSON and fetch: menu and orders through the course API |
| `labs/lab-10` | final version on Bootstrap: styling, viewing, editing and deleting orders |
| `tasks/` | JavaScript exercises: math functions and a game |

## Running

The site is static: open `index.html` in a browser or see the published version at
[web-tech.deev.space](https://web-tech.deev.space). Menus and orders in labs 7–10 come from the Moscow
Polytech course API; the API key was issued by the course and lives in the lab code.

API data is escaped before being inserted into the page (the `esc()` function); CI checks the syntax of
all scripts.

## License

Coursework (Web Technologies Basics, Moscow Polytechnic University, 2025). The code is open for study;
there is no separate license.

## Author

**Egor Deev** — [GitHub](https://github.com/EDeev) · [Telegram](https://t.me/DeevEgor) · [egor@deev.space](mailto:egor@deev.space)

---

<div align="center">
  <sub>⭐ If you find this project useful, give it a star on GitHub!</sub>
  <p><sub>Made with ❤️ — <a href="https://deev.space">deev.space</a></sub></p>
</div>
