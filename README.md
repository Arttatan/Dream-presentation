# PresentDream — интерактивная презентация «Сны»

Цифровая презентация уровня keynote: 14 полноэкранных сцен, пошаговое раскрытие текста, фоны с иллюстрациями.

## Сайт (презентация в браузере)

**https://arttatan.github.io/Dream-presentation/**

После push в `main` GitHub Actions собирает проект и публикует его (1–3 минуты).

Если ссылка не открывается: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

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
