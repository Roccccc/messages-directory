# Messages Directory App

** Mobile Programming — Exercise 3**

A React Native message directory app built with **Expo** and **TypeScript**. The app displays a list of message categories. When you tap a category, you see the saved messages for that folder.

---

## Features

- Home screen with 5 categories: **Home**, **Love**, **Family**, **Friends**, and **School**
- Category detail screen showing stored messages
- Back navigation from category view to the home screen
- Responsive layout for web, Android, and iOS
- Mock data stored in a separate TypeScript file

---

## Prerequisites

| Tool | Minimum version | Download |
|------|-------------------|----------|
| Node.js | 18 or higher | https://nodejs.org |
| npm | Comes with Node.js | — |
| Expo Go (optional) | Latest | App Store / Google Play |

---

## Configuration and Setup

### 1. Open the project folder

```bash
cd "Exercise 3"
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm start
```

---

## How to Run the App

### Web (Chrome)

```bash
npm run web
```

Open: `http://localhost:8081`

### Android Emulator

```bash
npm run android
```

### iOS Simulator (Mac only)

```bash
npm run ios
```

### Physical Phone (Expo Go)

1. Install **Expo Go** on your phone.
2. Run `npm start`.
3. Scan the QR code in the terminal.

---

## Exact Project Structure

```
Exercise 3/
├── App.tsx                      # Root component
├── app.json                     # Expo configuration
├── index.ts                     # Entry point
├── package.json                 # Dependencies and scripts
├── tsconfig.json                # TypeScript config
├── assets/                      # Icons and splash images
├── components/                  # Reusable UI components
│   ├── CategoryCard.tsx
│   ├── MessageItem.tsx
│   ├── ScreenContainer.tsx
│   └── ScreenHeader.tsx
├── constants/
│   └── theme.ts                 # Colors and category themes
├── data/
│   └── mockMessages.ts          # Mock categories and messages
├── screens/
│   ├── HomeScreen.tsx           # Category list
│   └── CategoryScreen.tsx       # Message list
└── docs/
    └── screenshots/             # App screenshots
```

---

## Screenshots

Add screenshots to `docs/screenshots/`:

- `home-screen.png` — home screen with all categories
- `category-screen.png` — messages for one category

---

## Author

YIPENG HUANG
1276932
