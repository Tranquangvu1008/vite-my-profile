import { useCallback, useEffect, useState } from "react";
import { SPOTIFY_PLAYER } from "../../../utils/Constants";
import { useStateProvider } from "../../../utils/StateProvider";
import { loadSpotifyPlayer } from "../../../helpers/helpers";


export const useConnectSpotify = () => {
    const [{ token }, dispatch] = useStateProvider();

    const [isInitialized, setInitialized] = useState(false);
    const [isSDKLoaded, setSDKLoaded] = useState(false);

    const initPlayer = useCallback(async () => {
        console.log("initPlayer");

        const spotifyPlayer = new window.Spotify.Player({
            getOAuthToken: (callback: (input: string) => void) => {
                callback(token);
            },
            name: "DEVU Spotify Web",
            volume: 1
        });

        // Ready
        spotifyPlayer.addListener("ready", async ({ device_id }: any) => {
            localStorage.setItem('deviceId', device_id)
            console.log(`Ready with Device ID: ${device_id}`);
        });

        // Not Ready
        spotifyPlayer.addListener("not_ready", ({ device_id }: any) => {
            console.log("Device ID has gone offline", device_id);
        });

        spotifyPlayer.addListener("initialization_error", ({ message }: any) => {
            console.error(message);
        });

        spotifyPlayer.addListener("authentication_error", ({ message }: any) => {
            console.error(message);
        });

        spotifyPlayer.addListener("account_error", ({ message }: any) => {
            console.error(message);
        });

        // spotifyPlayer.addListener(
        //     "player_state_changed",
        //     (state: Spotify.PlaybackState) => {
        //         setPlaying(!state?.paused);
        //     }
        // );

        spotifyPlayer.addListener("autoplay_failed", async () => {
            // eslint-disable-next-line no-console
            console.log("Autoplay is not allowed by the browser autoplay rules");
        });

        await spotifyPlayer.connect();
        dispatch({ type: SPOTIFY_PLAYER, player: spotifyPlayer });
        setInitialized(true);
    }, [dispatch, token]);

    useEffect(() => {
        if (isSDKLoaded && !!token && !isInitialized) {
            initPlayer();
        }
    }, [initPlayer, isInitialized, isSDKLoaded, token]);

    useEffect(() => {
        if (!isSDKLoaded) {
            window.onSpotifyWebPlaybackSDKReady = () => {
                console.log("onSpotifyWebPlaybackSDKReady");
                setSDKLoaded(true);
            };
            loadSpotifyPlayer();
        }
    }, [isSDKLoaded]);

}
