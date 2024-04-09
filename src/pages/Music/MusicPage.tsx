import { useEffect, useLayoutEffect, useState } from "react";
import { SpotifyPage } from "./components/Spotify/SpotifyPage";
import LoginPage from "./components/Login/LoginPage";
import { useStateProvider } from "../../utils/StateProvider";
import { SET_TOKEN } from "../../utils/Constants";
import { useOutletContext } from "react-router-dom";
import { OutletContextType } from "../../interface";

declare global {
    interface Window {
        onSpotifyWebPlaybackSDKReady?: () => void;
        Spotify: any
    }
}

export const MusicPage = () => {
    const { collapsed } = useOutletContext<OutletContextType>();
    const [{ token }, dispatch] = useStateProvider();
    useLayoutEffect(() => {
        const token = localStorage.getItem("token");

        const getToken = () => {
            const hash = window.location.hash;
            if (hash) {
                const token = hash.substring(1).split("&")[0].split("=")[1];
                if (token) {
                    dispatch({ type: SET_TOKEN, token });
                    localStorage.setItem("token", token);
                }
            }
            document.title = "Spotify";
        }

        if (token) {
            dispatch({ type: SET_TOKEN, token });
        } else {
            getToken();
        }
    }, [dispatch, token]);

    useEffect(() => {
        if (!token) return
        window.onSpotifyWebPlaybackSDKReady = () => {
            const player = new window.Spotify.Player({
                name: 'DEVU',
                getOAuthToken: (cb: any) => cb(token),
            });

            // Error handling
            player.addListener('initialization_error', ({ message }: any) => { console.error(message); });
            player.addListener('authentication_error', ({ message }: any) => { console.error(message); });
            player.addListener('account_error', ({ message }: any) => { console.error(message); });
            player.addListener('playback_error', ({ message }: any) => { console.error(message); });

            // Playback status updates
            player.addListener('player_state_changed', (state: { paused: any; }) => {
                // setIsPlaying(!state.paused);
            });

            // Ready
            player.addListener('ready', ({ device_id }: any) => {
                localStorage.setItem('deviceId', device_id)
                console.log('Ready with Device ID', device_id);
            });

            // Not Ready
            player.addListener('not_ready', ({ device_id }: any) => {
                console.log('Device ID has gone offline', device_id);
            });

            // Connect to the player!
            player.connect().then((success: any) => {
                if (success) {
                    console.log('The Web Playback SDK successfully connected to Spotify!');
                }
            })
            //Khi làm hàm logout thì xóa deviceId và xóa token
        };

        const scriptTag = document.createElement('script');
        scriptTag.src = 'https://sdk.scdn.co/spotify-player.js';
        document.head.appendChild(scriptTag);

        return () => {
            document.head.removeChild(scriptTag);
        };
    }, [token]);
    return (
        <div>
            {token ? <SpotifyPage /> : <LoginPage collapsed={collapsed} />}
        </div>
    )
}
