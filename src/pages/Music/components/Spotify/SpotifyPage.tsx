import { NavBar } from './Components/NavBar/NavBar';
import { Route, Routes, useOutletContext } from 'react-router-dom';
import { Latest } from './Components/Latest/Latest';
import { SideBar } from './Components/SideBar/SideBar';
import { MusicPlayerMobile } from './Components/SideBar/components/MusicPlayerMobile/MusicPlayerMobile';
import { OutletContextType } from '../../../../interface';
import Discover from './Components/Discover/Discover';
import { useFetchApi } from './hooks/useFetchApi';
import { useConnectSpotify } from '../../hooks/useConnectSpotify';

const SpotifyPage = () => {
    const { collapsed } = useOutletContext<OutletContextType>();
    useFetchApi();
    useConnectSpotify();

    return (
        <div className='flex flex-col sm:h-screen-minus-64 h-screen'>
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

export default SpotifyPage;