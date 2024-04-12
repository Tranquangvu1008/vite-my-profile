import { useLayoutEffect, useState } from 'react'
import MusicPlayer from './components/MusicPlayer/MusicPlayer'
import { Playlist } from '../../../../../../models/Music/Playlist'
import { useStateProvider } from '../../../../../../utils/StateProvider'
import { useOutletContext } from 'react-router-dom'
import { OutletContextType } from '../../../../../../interface'

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
        <div className="flex-1 overflow-hidden">
            <div className="flex flex-col sm:py-5 py-2 sm:px-5 px-2 justify-between sm:h-screen-minus-64 gap-5">
                <div>
                    <h4 className="font-semibold text-[20px]">Library</h4>
                    <div className='flex flex-col gap-3 pt-3'>
                        {playlist && playlist.length > 0 && playlist.map((value: Playlist, index: number) => (
                            <div key={index} className='flex gap-2'>
                                <img src={value.images[0].url} alt='library' className='max-w-[50px] max-h-[50px] object-cover' />
                                <div className='flex flex-col'>
                                    <p className='font-semibold lg:text-base text-sm'>{value.name}</p>
                                    <p className='lg:text-sm text-xs'>My Playlist</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={`${collapsed ? 'md:block hidden' : 'lg:block hidden'}`}><MusicPlayer /></div>
            </div>
        </div>
    )
}
