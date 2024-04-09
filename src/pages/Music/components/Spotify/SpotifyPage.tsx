import { useEffect } from 'react';
import { useStateProvider } from '../../../../utils/StateProvider';
import { SET_CURRENT_PLAYING, SET_MY_PLAYLIST, SET_NEW_RELEASE_ALBUM, SET_PLAYER_STATE, SET_TOP_ARTISTS, SET_TOP_TRACKS, SET_USER } from '../../../../utils/Constants';
import { getCurrentPlaying, getMyPlaylist, getNewReleaseAlbum, getPlayback, getTopItem, loginSpotify } from '../../../../services/Music/MusicServices';
import { NavBar } from './NavBar/NavBar';
import { Route, Routes } from 'react-router-dom';
import { Discover } from './Components/Discover/Discover';
import { Latest } from './Components/Latest/Latest';
import { SideBar } from './Components/SideBar/SideBar';

export const SpotifyPage = () => {
    const [{ token }, dispatch] = useStateProvider();

    useEffect(() => {
        const getUserInfo = async () => {
            const userInfo = await loginSpotify()
            dispatch({ type: SET_USER, userInfo });
        };
        getUserInfo();
    }, [dispatch, token]);

    useEffect(() => {
        const getPlaybackState = async () => {
            const playbackState = await getPlayback()
            dispatch({ type: SET_PLAYER_STATE, playbackState });
        };
        getPlaybackState();
    }, [dispatch, token])

    useEffect(() => {
        const getUserTopItem = async () => {
            const topArtist = await getTopItem('artists')
            dispatch({ type: SET_TOP_ARTISTS, topArtist });
        };
        getUserTopItem();
    }, [dispatch, token])

    useEffect(() => {
        const getUserTopItem = async () => {
            const topTracks = await getTopItem('tracks')
            dispatch({ type: SET_TOP_TRACKS, topTracks });
        };
        getUserTopItem();
    }, [dispatch, token])

    useEffect(() => {
        const getNewRelease = async () => {
            const newReleaseAlbum = await getNewReleaseAlbum()
            dispatch({ type: SET_NEW_RELEASE_ALBUM, newReleaseAlbum });
        };
        getNewRelease();
    }, [dispatch, token])

    useEffect(() => {
        const getMyPlaylistSpotify = async () => {
            const myPlaylist = await getMyPlaylist()
            dispatch({ type: SET_MY_PLAYLIST, myPlaylist });
        };
        getMyPlaylistSpotify();
    }, [dispatch, token])

    useEffect(() => {
        const getCurrentPlayingSpotify = async () => {
            const playing = await getCurrentPlaying()
            dispatch({ type: SET_CURRENT_PLAYING, playing });
        };
        getCurrentPlayingSpotify();
    }, [dispatch, token])

    return (
        <div className='flex flex-col h-screen-minus-64'>
            <div className='flex flex-1 overflow-hidden'>
                {/* Phần có thể scroll */}
                <div className='flex-[3] overflow-auto'>
                    <NavBar />
                    <Routes>
                        <Route index element={<Discover />} />
                        <Route path='latest' element={<Latest />} />
                    </Routes>
                </div>
                {/* Phần không scroll */}
                <SideBar />
            </div>
        </div>

    )
}
