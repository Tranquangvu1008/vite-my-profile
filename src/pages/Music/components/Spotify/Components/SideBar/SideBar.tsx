import MusicPlayer from './components/MusicPlayer/MusicPlayer'
import artist from '/src/pages/Music/assets/images/artist.jpg'

export const SideBar = () => {
    return (
        <div className="flex-1 overflow-hidden">
            <div className="flex flex-col py-[30px] px-[30px] justify-between h-screen-minus-64 gap-5">
                <div>
                    <h4 className="font-semibold text-[20px]">Library</h4>
                    <div className='flex flex-col gap-3 pt-3'>
                        <div className='flex gap-2'>
                            <img src={artist} alt='library' className='max-w-[50px] max-h-[50px] w-[10vw] h-[10vw] object-cover' />
                            <div className='flex flex-col'>
                                <p className='font-semibold text-[16px]'>Best Trance Ever</p>
                                <p>Danh sách phát</p>
                            </div>
                        </div>
                        <div className='flex gap-2'>
                            <img src={artist} alt='library' className='max-w-[50px] max-h-[50px] w-[10vw] h-[10vw] object-cover' />
                            <div className='flex flex-col'>
                                <p className='font-semibold text-[16px]'>Best Trance Ever</p>
                                <p>Danh sách phát</p>
                            </div>
                        </div>
                        <div className='flex gap-2'>
                            <img src={artist} alt='library' className='max-w-[50px] max-h-[50px] w-[10vw] h-[10vw] object-cover' />
                            <div className='flex flex-col'>
                                <p className='font-semibold text-[16px]'>Best Trance Ever</p>
                                <p>Danh sách phát</p>
                            </div>
                        </div>
                        <div className='flex gap-2'>
                            <img src={artist} alt='library' className='max-w-[50px] max-h-[50px] w-[10vw] h-[10vw] object-cover' />
                            <div className='flex flex-col'>
                                <p className='font-semibold text-[16px]'>Best Trance Ever</p>
                                <p>Danh sách phát</p>
                            </div>
                        </div>
                    </div>
                </div>
                <MusicPlayer />
            </div>
        </div>
    )
}
