// src/components/SpotifyPlayer.tsx
import React, { useEffect, useState } from 'react';
import { PLAY_MUSIC } from '../utils/Constants';
import { useStateProvider } from '../utils/StateProvider';
import { playMusicSpotify } from '../services/Music/MusicServices';

declare global {
    interface Window {
        onSpotifyWebPlaybackSDKReady?: () => void;
        Spotify: any
    }
}

type SpotifyPlayerProps = {
    accessToken: any;
};

const SpotifyPlayer: React.FC<SpotifyPlayerProps> = ({ accessToken }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [deviceId, setDeviceId] = useState('');
    // const [dispatch] = useStateProvider();

    useEffect(() => {
        if (!accessToken) return;

        window.onSpotifyWebPlaybackSDKReady = () => {
            const player = new window.Spotify.Player({
                name: '123456789',
                getOAuthToken: (cb: any) => cb(accessToken),
            });

            // Error handling
            player.addListener('initialization_error', ({ message }: any) => { console.error(message); });
            player.addListener('authentication_error', ({ message }: any) => { console.error(message); });
            player.addListener('account_error', ({ message }: any) => { console.error(message); });
            player.addListener('playback_error', ({ message }: any) => { console.error(message); });

            // Playback status updates
            player.addListener('player_state_changed', (state: { paused: any; }) => {
                setIsPlaying(!state.paused);
            });

            // Ready
            player.addListener('ready', ({ device_id }: any) => {
                setDeviceId(() => { return device_id })
                console.log('Ready with Device ID', device_id);
            });

            // Not Ready
            player.addListener('not_ready', ({ device_id }: any) => {
                setDeviceId('')
                console.log('Device ID has gone offline', device_id);
            });

            // Connect to the player!
            player.connect().then((success: any) => {
                if (success) {
                    console.log('The Web Playback SDK successfully connected to Spotify!');
                }
            })

        };

        // const scriptTag = document.createElement('script');
        // scriptTag.src = 'https://sdk.scdn.co/spotify-player.js';
        // document.head.appendChild(scriptTag);

        // return () => {
        //     document.head.removeChild(scriptTag);
        // };
    }, [accessToken]);

    // Play a specified track
    // const playTrack = (spotify_uri: string) => {
    //     fetch(`https://api.spotify.com/v1/me/player/play`, {
    //         method: 'PUT',
    //         body: JSON.stringify({ uris: spotify_uri }),

    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Authorization': `Bearer ${accessToken}`
    //         },
    //     });
    // };

    const playMusic = async () => {
        const music = await playMusicSpotify(deviceId)
        // dispatch({ type: PLAY_MUSIC, music });
    };

    return (
        <div>
            <button onClick={() => playMusic()}>Play</button>

            <p>{isPlaying ? 'Playing' : 'Paused'}</p>
        </div>
    );
};

export default SpotifyPlayer;
