import { useLayoutEffect, useState } from 'react'
import MusicPlayer from './components/MusicPlayer/MusicPlayer'
import { Playlist } from '../../../../models/Music/Playlist'
import { useStateProvider } from '../../../../../../utils/StateProvider'
import { useOutletContext } from 'react-router-dom'
import { OutletContextType } from '../../../../../../interface'
import { MyPlaylist } from './components/MyPlaylist/MyPlaylist'

export const SideBar = () => {
    const { collapsed } = useOutletContext<OutletContextType>();

    const [{ myPlaylist }] = useStateProvider();
    const [playlist, setPlaylist] = useState<Playlist[]>([])

    useLayoutEffect(() => {
        if (myPlaylist) {
            setPlaylist(myPlaylist.items)
        }
    }, [myPlaylist]);

    return (
        <div className="flex-1 overflow-hidden sm:pb-0 pb-[70px]">
            <div className="flex flex-col sm:py-5 py-2 sm:px-5 px-2 justify-between sm:h-screen-minus-64 gap-5">
                <div>
                    <h4 className="font-semibold text-[20px]">Library</h4>
                    <div className='flex flex-col gap-3 pt-3'>
                        {playlist && playlist.length > 0 && playlist.map((value: Playlist) => (
                            <MyPlaylist playList={value} key={value.id} />
                        ))}
                    </div>
                </div>
                <div className={`${collapsed ? 'md:block hidden' : 'lg:block hidden'}`}><MusicPlayer /></div>
            </div>
        </div>
    )
}
