import { useEffect } from 'react';
import { useStateProvider } from '../../../../utils/StateProvider';
import { SET_CURRENT_PLAYING, SET_MY_PLAYLIST, SET_NEW_RELEASE_ALBUM, SET_PLAYER_STATE, SET_TOP_ARTISTS, SET_TOP_TRACKS, SET_USER } from '../../../../utils/Constants';
import { getCurrentPlaying, getMyPlaylist, getNewReleaseAlbum, getPlayback, getTopItem, loginSpotify } from '../../../../services/Music/MusicServices';
import { NavBar } from './NavBar/NavBar';
import { Route, Routes, useOutletContext } from 'react-router-dom';
import { Discover } from './Components/Discover/Discover';
import { Latest } from './Components/Latest/Latest';
import { SideBar } from './Components/SideBar/SideBar';
import { MusicPlayerMobile } from './Components/SideBar/components/MusicPlayerMobile/MusicPlayerMobile';
import { OutletContextType } from '../../../../interface';

export const SpotifyPage = () => {
    const [{ token }, dispatch] = useStateProvider();
    const { collapsed } = useOutletContext<OutletContextType>();
    // const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    // useEffect(() => {
    //     const handleResize = () => {
    //         setScreenWidth(window.innerWidth);
    //     };

    //     window.addEventListener('resize', handleResize);

    //     return () => {
    //         window.removeEventListener('resize', handleResize);
    //     };
    // }, []);

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
        const limit = 3
        const getMyPlaylistSpotify = async () => {
            const myPlaylist = await getMyPlaylist(limit)
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
            <div className='flex flex-1 sm:flex-row flex-col sm:overflow-hidden'>
                {/* Phần có thể scroll */}
                <div className={`sm:flex-[3] overflow-auto sm:pb-[70px] ${collapsed ? 'md:static relative ' : 'lg:static relative'}`}>
                    <NavBar />
                    <Routes>
                        <Route index element={<Discover />} />
                        <Route path='latest' element={<Latest />} />
                    </Routes>
                </div>
                <div className={`${collapsed ? 'md:hidden w-screen-minus-80' : 'lg:hidden w-screen-minus-200 mobile:block hidden'} fixed bottom-0 z-[1000]`}><MusicPlayerMobile /></div>
                {/* Phần không scroll */}
                <SideBar />
            </div>
        </div>
    )
}
