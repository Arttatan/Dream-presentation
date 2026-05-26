# PresentDream — интерактивная презентация «Сны»

Цифровая презентация уровня keynote: 14 полноэкранных сцен, пошаговое раскрытие текста, фоны с иллюстрациями.

## Сайт (презентация в браузере)

**https://arttatan.github.io/Dream-presentation/**

После push в `main` GitHub Actions собирает проект (вкладка **Actions**).

**Один раз включите публикацию (важно — именно так):**

1. Репозиторий → **Settings** → **Pages**
2. **Source:** `Deploy from a branch`
3. **Branch:** `main` → папка **`/docs`** (не gh-pages!)
4. **Save** → подождите 3–5 минут

Готовый сайт лежит в папке `docs/` в ветке `main`.

## Запуск локально

```bash
npm install
npm run dev
```

## Фоны из дизайн-макета

Каждая сцена использует кадр из вашего коллажа (`assets/design-collage-12.png` → `public/backgrounds/scene-XX.webp`).

Пересоздать фоны после смены макета:

```bash
npm run split-bg
```

## Управление

| Клавиша | Действие |
|---------|----------|
| Enter / Space / ↓ / клик | Следующий шаг / сцена |
| ↑ | Предыдущий шаг / сцена |
| Esc | Карта разделов |

Позиция сохраняется в `localStorage`.

## Стек

React · TypeScript · Tailwind CSS · Framer Motion · Vite

## Архитектура

См. [PLANNING.md](./PLANNING.md)
