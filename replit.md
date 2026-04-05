# Cars Uncovered Website

A slick, modern website for Howard Ritchie's Cars Uncovered YouTube channel (41.8K subscribers, 8M+ views).

## Tech Stack

- **Frontend**: React 19 + Vite 8
- **Styling**: Plain CSS (Barlow Condensed + Barlow fonts)
- **Data**: YouTube Data API v3 (live updates)
- **Port**: 5000

## Project Structure

```
├── public/
│   ├── banner.jpg        # Channel banner image
│   ├── logo.jpg          # Channel logo (profile picture)
│   └── hero.png          # Hero image of Howard
├── src/
│   ├── components/
│   │   ├── Navbar.jsx/css     # Fixed navigation bar
│   │   ├── Hero.jsx/css       # Full-screen hero section
│   │   ├── LatestVideo.jsx/css # Latest YouTube upload
│   │   ├── Playlists.jsx/css  # Cars Uncovered + Most Wanted playlists
│   │   ├── About.jsx/css      # About Howard section
│   │   ├── Contact.jsx/css    # Partnerships & contact section
│   │   └── Footer.jsx/css     # Site footer
│   ├── services/
│   │   └── youtube.js         # YouTube Data API v3 service
│   ├── App.jsx                # Root component with data fetching
│   ├── index.css              # Global styles and design tokens
│   └── main.jsx               # React entry point
├── index.html
├── vite.config.js
└── package.json
```

## Design Tokens

- **Background**: `#0a0a0a`
- **Accent**: `#FF8110` (orange)
- **White**: `#ffffff`
- **Card bg**: `#141414`
- **Font display**: Barlow Condensed (headings, labels)
- **Font body**: Barlow (body copy)

## YouTube API Setup

The site fetches live content using the YouTube Data API v3. To enable live content:

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project (or use existing)
3. Enable "YouTube Data API v3"
4. Create an API key under Credentials
5. Add it as `VITE_YOUTUBE_API_KEY` in Replit Secrets

Without the API key, the site displays static fallback content with links to the YouTube channel.

## YouTube Data Fetched

- Channel statistics (subscribers, views, video count)
- Latest video (title, thumbnail, description, view count)
- "Cars Uncovered" playlist: `PLbcF-Q38-czfGS4_xFdWReF6eP60a-LLV`
- "Most Wanted" playlist: `PLbcF-Q38-czfQOi9ERx-okrQHgedYqUBA`

## Running the App

```bash
npm run dev    # Development server (port 5000)
npm run build  # Production build
```
