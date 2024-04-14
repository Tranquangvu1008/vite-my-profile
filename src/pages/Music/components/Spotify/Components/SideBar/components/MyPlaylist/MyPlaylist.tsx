import { Playlist } from "../../../../../../models/Music/Playlist"

interface MyPlaylistProps {
    playList: Playlist
}

export const MyPlaylist: React.FC<MyPlaylistProps> = ({ playList }) => {
    return (
        <div className='flex gap-2'>
            <img src={playList.images[0].url} alt='library' className='max-w-[50px] max-h-[50px] object-cover' />
            <div className='flex flex-col'>
                <p className='font-semibold lg:text-base text-sm'>{playList.name}</p>
                <p className='lg:text-sm text-xs'>My Playlist</p>
            </div>
        </div>
    )
}
