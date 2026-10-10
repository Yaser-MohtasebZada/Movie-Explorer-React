# Movie Explorer

A React app for browsing and searching movies using **The Movie Database (TMDB) API**. Search by title, sort by release date or rating, and page through results.

Built for CPSC 349 (Front-End Engineering) at Cal State Fullerton.

## Features

- **Live search:** results update as you type
- **Sorting:** by release date or rating, ascending or descending
- **Pagination:** browse through every page of results
- **Movie cards:** poster, title, release date, and rating
- **Loading state** while data is fetched

## Tech stack

- React 19 with functional components and hooks (`useState`, `useEffect`)
- Vite for dev server and builds
- Axios for API requests
- TMDB REST API (`/discover/movie` and `/search/movie`)

## Project structure

```
src/
├── App.jsx              # State, data fetching, layout
├── components/
│   ├── Header.jsx       # Search bar and sort dropdown
│   ├── MovieCard.jsx    # Single movie display
│   └── Pagination.jsx   # Previous / next controls
└── index.css            # Styles
```

## Run it locally

1. Get a free API key from [TMDB](https://www.themoviedb.org/settings/api).
2. Clone the repo and install dependencies:
   ```bash
   git clone https://github.com/Yaser-MohtasebZada/Movie-Explorer-React.git
   cd Movie-Explorer-React
   npm install
   ```
3. Copy `.env.example` to `.env` and add your key:
   ```bash
   cp .env.example .env
   # then edit .env: VITE_TMDB_API_KEY=your_key
   ```
4. Start the dev server:
   ```bash
   npm run dev
   ```

## Notes

The API key is loaded from an environment variable and `.env` is git-ignored, so keys never get committed. Since this is a front-end-only app, the key is still visible in the browser at runtime. For a production app, requests would go through a small backend or serverless proxy instead.

## What I'd add next

- Movie detail page with cast and trailers
- Debounced search to cut down on API calls
- Error handling and an empty-results state
