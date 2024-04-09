import { useLayoutEffect, useState } from 'react'
import MusicPlayer from './components/MusicPlayer/MusicPlayer'
import { Playlist } from '../../../../../../models/Music/Playlist'
import { useStateProvider } from '../../../../../../utils/StateProvider'

export const SideBar = () => {
    const [{ myPlaylist }] = useStateProvider();
    const [playlist, setPlaylist] = useState<Playlist[]>([])

    useLayoutEffect(() => {
        if (myPlaylist) {
            setPlaylist(myPlaylist.items)
        }
    }, [myPlaylist]);


    return (
        <div className="flex-1 overflow-hidden">
            <div className="flex flex-col py-[3%] px-[30px] justify-between h-screen-minus-64 gap-5">
                <div>
                    <h4 className="font-semibold text-[20px]">Library</h4>
                    <div className='flex flex-col gap-3 pt-3'>
                        {playlist && playlist.length > 0 && playlist.map((value: Playlist, index: number) => (
                            <div key={index} className='flex gap-2'>
                                <img src={value.images[0].url} alt='library' className='max-w-[50px] max-h-[50px] w-[10vw] h-[10vw] object-cover' />
                                <div className='flex flex-col'>
                                    <p className='font-semibold text-[16px]'>{value.name}</p>
                                    <p>My Playlist</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <MusicPlayer />
            </div>
        </div>
    )
}
