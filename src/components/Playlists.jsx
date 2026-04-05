import { useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import './Playlists.css';

export default function Playlists({ playlists, playlistMeta, loading }) {
  const CU_PLAYLIST_ID = 'PLbcF-Q38-czfGS4_xFdWReF6eP60a-LLV';
  const MW_PLAYLIST_ID = 'PLbcF-Q38-czfQOi9ERx-okrQHgedYqUBA';
  const [ref, revealed] = useReveal();
  const [playingId, setPlayingId] = useState(null);

  const cuVideos = playlists?.carsUncovered || [];
  const mwVideos = playlists?.mostWanted || [];
  const cuMeta = playlistMeta?.carsUncovered;
  const mwMeta = playlistMeta?.mostWanted;

  return (
    <section className={`section playlists-section reveal-section ${revealed ? 'revealed' : ''}`} id="playlists" ref={ref}>
      <div className="container">
        <div className="section-label">The Playlists</div>
        <div className="divider" />

        <div className="playlists-wrapper">
          <PlaylistBlock
            title="Cars Uncovered"
            subtitle="The full series — drives, reviews, and head-to-head comparisons with zero filter."
            videos={cuVideos}
            loading={loading}
            playlistId={CU_PLAYLIST_ID}
            tag="Full Series"
            meta={cuMeta}
            sectionRevealed={revealed}
            playingId={playingId}
            onPlay={setPlayingId}
          />
          <PlaylistBlock
            title="Most Wanted"
            subtitle="The cars Howard can't stop thinking about. His definitive, slightly obsessive wish list."
            videos={mwVideos}
            loading={loading}
            playlistId={MW_PLAYLIST_ID}
            tag="Howard's Picks"
            accent
            meta={mwMeta}
            sectionRevealed={revealed}
            playingId={playingId}
            onPlay={setPlayingId}
          />
        </div>
      </div>
    </section>
  );
}

function PlaylistBlock({ title, subtitle, videos, loading, playlistId, tag, accent, meta, sectionRevealed, playingId, onPlay }) {
  const ytUrl = `https://www.youtube.com/playlist?list=${playlistId}`;
  const itemCount = meta?.itemCount;

  return (
    <div className={`playlist-block ${accent ? 'accent' : ''}`}>
      <div className="playlist-header">
        <div className="playlist-tag">{tag}</div>
        <h2 className="playlist-title">{title}</h2>
        <p className="playlist-subtitle">{subtitle}</p>

        {(loading || itemCount !== undefined) && (
          <div className="playlist-count">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
              <rect x="2" y="7" width="20" height="15" rx="2" />
              <polyline points="17,2 12,7 7,2" />
            </svg>
            {loading && !itemCount
              ? <span className="count-skeleton" />
              : <span>{itemCount} videos</span>
            }
          </div>
        )}

        <a href={ytUrl} target="_blank" rel="noopener noreferrer" className="playlist-view-all">
          View Full Playlist
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
      </div>

      <div className="video-grid">
        {loading
          ? Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="video-card skeleton-card">
                <div className="skeleton-thumb-sm" />
                <div className="skeleton-info-sm">
                  <div className="skeleton-line long" />
                  <div className="skeleton-line short" />
                </div>
              </div>
            ))
          : videos.length > 0
            ? videos.map((v, i) => <VideoCard key={v.id} video={v} index={i} sectionRevealed={sectionRevealed} playingId={playingId} onPlay={onPlay} />)
            : <FallbackCards playlistId={playlistId} />
        }
      </div>
    </div>
  );
}

function VideoCard({ video, index, sectionRevealed, playingId, onPlay }) {
  const playing = playingId === video.id;

  return (
    <div
      className={`video-card reveal ${sectionRevealed ? 'revealed' : ''}`}
      style={{ '--reveal-delay': `${index * 60}ms` }}
    >
      <div className="vc-thumb">
        {playing ? (
          <iframe
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="vc-iframe"
          />
        ) : (
          <button className="vc-preview" onClick={() => onPlay(video.id)}>
            <img src={video.thumbnailUrl} alt={video.title} loading="lazy" />
            <div className="vc-play">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </button>
        )}
      </div>
      <div className="vc-info">
        <h4 className="vc-title">{video.title}</h4>
        {video.publishedAt && (
          <span className="vc-date">
            {new Date(video.publishedAt).toLocaleDateString('en-GB', {
              day: 'numeric', month: 'short', year: 'numeric'
            })}
          </span>
        )}
      </div>
    </div>
  );
}

function FallbackCards({ playlistId }) {
  return (
    <a
      href={`https://www.youtube.com/playlist?list=${playlistId}`}
      target="_blank"
      rel="noopener noreferrer"
      className="video-card fallback-card"
    >
      <div className="vc-thumb fallback-thumb">
        <img src="/banner.jpg" alt="View playlist" />
        <div className="vc-play">
          <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
            <path d="M8 5v14l11-7z"/>
          </svg>
        </div>
      </div>
      <div className="vc-info">
        <h4 className="vc-title">Watch this playlist on YouTube</h4>
        <span className="vc-date">Add your API key to see live content</span>
      </div>
    </a>
  );
}
