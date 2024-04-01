import { useEffect } from 'react';
import { useStateProvider } from '../../../../utils/StateProvider';
import { SET_USER } from '../../../../utils/Constants';
import { loginSpotify } from '../../../../services/Music/MusicServices';
import { NavBar } from './NavBar/NavBar';
import { Route, Routes } from 'react-router-dom';
import { Discover } from './Components/Discover/Discover';
import { Latest } from './Components/Latest/Latest';

export const SpotifyPage = () => {
    const [{ token }, dispatch] = useStateProvider();

    useEffect(() => {
        const getUserInfo = async () => {
            const data = await loginSpotify()
            dispatch({ type: SET_USER, data });
        };
        getUserInfo();
    }, [dispatch, token]);

    return (
        <div className='flex flex-col'>
            <NavBar />
            <Routes>
                <Route index element={<Discover />} />
                <Route path='latest' element={<Latest />} />
            </Routes>
        </div>
    )
}
