import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import LatestVideo from './components/LatestVideo';
import Playlists from './components/Playlists';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import {
  getChannelInfo,
  getLatestVideo,
  getPlaylistVideos,
  getPlaylistInfo,
  PLAYLISTS
} from './services/youtube';

export default function App() {
  const [channelInfo, setChannelInfo] = useState(null);
  const [latestVideo, setLatestVideo] = useState(null);
  const [playlists, setPlaylists] = useState({ carsUncovered: [], mostWanted: [] });
  const [playlistMeta, setPlaylistMeta] = useState({ carsUncovered: null, mostWanted: null });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const hasApiKey = Boolean(import.meta.env.VITE_YOUTUBE_API_KEY);

  useEffect(() => {
    if (!hasApiKey) {
      setLoading(false);
      setError('NO_API_KEY');
      return;
    }

    async function loadData() {
      try {
        setLoading(true);

        const channelData = await getChannelInfo();
        setChannelInfo(channelData);

        const [latest, cuVideos, mwVideos, cuInfo, mwInfo] = await Promise.allSettled([
          getLatestVideo(channelData.uploadsPlaylistId),
          getPlaylistVideos(PLAYLISTS.carsUncovered.id, 8),
          getPlaylistVideos(PLAYLISTS.mostWanted.id, 8),
          getPlaylistInfo(PLAYLISTS.carsUncovered.id),
          getPlaylistInfo(PLAYLISTS.mostWanted.id),
        ]);

        if (latest.status === 'fulfilled') setLatestVideo(latest.value);
        setPlaylists({
          carsUncovered: cuVideos.status === 'fulfilled' ? cuVideos.value : [],
          mostWanted: mwVideos.status === 'fulfilled' ? mwVideos.value : [],
        });
        setPlaylistMeta({
          carsUncovered: cuInfo.status === 'fulfilled' ? cuInfo.value : null,
          mostWanted: mwInfo.status === 'fulfilled' ? mwInfo.value : null,
        });
      } catch (err) {
        console.error('YouTube API error:', err);
        if (err.message === 'NO_API_KEY') {
          setError('NO_API_KEY');
        } else {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, [hasApiKey]);

  return (
    <div className="app">
      <Navbar />
      <Hero channelInfo={channelInfo} />
      <Marquee />
      <LatestVideo video={latestVideo} loading={loading} error={error} />
      <Playlists playlists={playlists} playlistMeta={playlistMeta} loading={loading} />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
