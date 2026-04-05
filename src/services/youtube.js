const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const CHANNEL_HANDLE = 'carsuncoveredofficial';
const UPLOADS_PLAYLIST_ID = 'UUbcF-Q38-czfGS4_xFdWReF6eP60a-LLV';

const PLAYLISTS = {
  carsUncovered: {
    id: 'PLbcF-Q38-czfGS4_xFdWReF6eP60a-LLV',
    name: 'Cars Uncovered',
    description: 'The full Cars Uncovered series — drives, reviews, and head-to-head comparisons.'
  },
  mostWanted: {
    id: 'PLbcF-Q38-czfQOi9ERx-okrQHgedYqUBA',
    name: 'Most Wanted',
    description: "The cars Howard can't stop thinking about. His definitive wish list."
  }
};

const BASE_URL = 'https://www.googleapis.com/youtube/v3';

async function apiRequest(endpoint, params) {
  if (!API_KEY) {
    throw new Error('NO_API_KEY');
  }
  const url = new URL(`${BASE_URL}/${endpoint}`);
  url.searchParams.set('key', API_KEY);
  Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v));
  const res = await fetch(url.toString());
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err?.error?.message || `API error ${res.status}`);
  }
  return res.json();
}

export async function getChannelInfo() {
  const data = await apiRequest('channels', {
    part: 'snippet,statistics,contentDetails',
    forHandle: CHANNEL_HANDLE
  });
  if (!data.items?.length) throw new Error('Channel not found');
  const ch = data.items[0];
  return {
    id: ch.id,
    title: ch.snippet.title,
    description: ch.snippet.description,
    thumbnailUrl: ch.snippet.thumbnails?.high?.url || ch.snippet.thumbnails?.default?.url,
    subscriberCount: ch.statistics.subscriberCount,
    viewCount: ch.statistics.viewCount,
    videoCount: ch.statistics.videoCount,
    uploadsPlaylistId: ch.contentDetails?.relatedPlaylists?.uploads
  };
}

export async function getLatestVideo(uploadsPlaylistId) {
  const playlistId = uploadsPlaylistId || 'UUbcF-Q38-czfGS4_xFdWReF6eP60a-LLV';
  const data = await apiRequest('playlistItems', {
    part: 'snippet,contentDetails',
    playlistId,
    maxResults: '1'
  });
  if (!data.items?.length) return null;
  const item = data.items[0];
  const videoId = item.contentDetails.videoId;

  const videoData = await apiRequest('videos', {
    part: 'snippet,statistics',
    id: videoId
  });

  const video = videoData.items?.[0];
  if (!video) return null;

  return {
    id: videoId,
    title: video.snippet.title,
    description: video.snippet.description,
    publishedAt: video.snippet.publishedAt,
    thumbnailUrl: video.snippet.thumbnails?.maxres?.url
      || video.snippet.thumbnails?.high?.url
      || video.snippet.thumbnails?.medium?.url,
    viewCount: video.statistics?.viewCount,
    likeCount: video.statistics?.likeCount
  };
}

export async function getPlaylistVideos(playlistId, maxResults = 8) {
  const data = await apiRequest('playlistItems', {
    part: 'snippet,contentDetails',
    playlistId,
    maxResults: String(maxResults)
  });
  return (data.items || []).map(item => ({
    id: item.contentDetails.videoId,
    title: item.snippet.title,
    description: item.snippet.description,
    publishedAt: item.snippet.publishedAt,
    thumbnailUrl: item.snippet.thumbnails?.high?.url || item.snippet.thumbnails?.medium?.url
  }));
}

export { PLAYLISTS };

export function formatCount(count) {
  if (!count) return '0';
  const n = parseInt(count, 10);
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}K`;
  return n.toString();
}

export function timeAgo(dateStr) {
  const date = new Date(dateStr);
  const now = new Date();
  const diff = (now - date) / 1000;
  if (diff < 60) return 'just now';
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  if (diff < 2592000) return `${Math.floor(diff / 86400)}d ago`;
  if (diff < 31536000) return `${Math.floor(diff / 2592000)}mo ago`;
  return `${Math.floor(diff / 31536000)}y ago`;
}
