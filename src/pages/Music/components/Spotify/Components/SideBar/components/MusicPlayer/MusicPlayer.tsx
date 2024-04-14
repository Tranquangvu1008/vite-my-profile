import './MusicPlayer.scss';
import { BsFillPauseCircleFill, BsFillPlayCircleFill, BsShuffle } from 'react-icons/bs';
import { CgPlayTrackNext, CgPlayTrackPrev } from 'react-icons/cg';
import { FaVolumeDown, FaVolumeUp } from 'react-icons/fa';
import { Artist2 } from '../../../../../../models/Music/CurrentPlay';
import { formatTime } from '../../../../../../../../helpers/helpers';
import { TbRepeat, TbRepeatOnce } from 'react-icons/tb';
import { useOutletContext } from 'react-router-dom';
import { OutletContextType } from '../../../../../../../../interface';
import { useControlPlayer } from '../../hooks/useControlPlayer';
import { Volume } from './components/Volume';

export const MusicPlayer = () => {
    const { collapsed } = useOutletContext<OutletContextType>();
    const { playbackState, handlePositionChange, handleSeek, handleVolumeChange, handleVolume, startPlayer,
        pausePlayer, nextPlayer, previousPlayer, repeatPlayer, shufflePlayer, playing, tempPosition, volume } = useControlPlayer();

    return (
        playbackState ?
            <div className="rounded-[20px] bg-transparent px-1 py-5 shadow-custom">
                <div >
                    <img className="rounded-[10px] w-[70%] mx-auto" src={playbackState.item.album.images[0].url} alt="Album Cover" />
                </div >
                <div className="text-center my-[10px]">
                    <div className="lg:text-base text-sm">{playbackState.item.name}</div>
                    <div className="lg:text-base text-sm">{playbackState.item.artists.map((value: Artist2) => value.name).join(", ")}</div>
                </div>
                <div className='flex lg:flex-row flex-col justify-center pb-4 px-2 gap-1 text-center items-center'>
                    <p className='lg:block hidden lg:w-[60px] w-[40px] lg:text-sm text-xs'>{formatTime(playbackState.progress_ms) ?? '00:00'}</p>
                    <input
                        className='rounded-[2rem] leading-[0.5rem] w-full lg:h-4 h-2 cursor-pointer'
                        type="range"
                        value={tempPosition}
                        min={0}
                        max={playbackState.item.duration_ms}
                        onChange={handlePositionChange}
                        onMouseUp={handleSeek}
                        onTouchEnd={handleSeek}
                    />
                    <p className='lg:block hidden lg:w-[60px] w-[40px] lg:text-sm text-xs'>{formatTime(playbackState.item.duration_ms)}</p>
                    <div className='lg:hidden flex justify-between w-full pt-1'>
                        <p className='lg:w-[60px] w-[40px] lg:text-sm text-xs text-start'>{formatTime(playbackState.progress_ms) ?? '00:00'}</p>
                        <p className='lg:w-[60px] w-[40px] lg:text-sm text-xs text-end'>{formatTime(playbackState.item.duration_ms)}</p>
                    </div>
                </div>
                <div className={`flex items-center justify-center  ${collapsed ? 'xl:gap-6 lg:gap-4 gap-2' : 'xl:gap-4 lg:gap-2 gap-1'}`}>
                    <div className="lg:text-[1rem] text-[0.7rem]">
                        <BsShuffle className={`cursor-pointer ${playbackState.shuffle_state && 'text-[#0075FF]'}`} onClick={() => { shufflePlayer(!playbackState.shuffle_state) }} />
                    </div>
                    <div className="xl:text-[2rem] lg:text-[1.5rem] text-[1.2rem]">
                        <CgPlayTrackPrev className='cursor-pointer' onClick={() => { previousPlayer() }} />
                    </div>
                    <div className="xl:text-[2rem] lg:text-[1.5rem] text-[1.2rem]">
                        {playing.is_playing ? (
                            <BsFillPauseCircleFill className='cursor-pointer' onClick={() => { pausePlayer() }} />
                        ) : (
                            <BsFillPlayCircleFill className='cursor-pointer' onClick={() => { startPlayer() }} />
                        )}
                    </div>
                    <div className="xl:text-[2rem] lg:text-[1.5rem] text-[1.2rem]">
                        <CgPlayTrackNext className='cursor-pointer' onClick={() => { nextPlayer() }} />
                    </div>
                    <div className="lg:text-[1rem] text-[0.7rem]">
                        {playbackState.repeat_state === 'off'
                            ? <TbRepeat className='cursor-pointer' onClick={() => { repeatPlayer('context') }} />
                            : playbackState.repeat_state === 'track'
                                ? <TbRepeatOnce className='cursor-pointer text-[#0075FF]' onClick={() => { repeatPlayer('off') }} />
                                : <TbRepeat className='cursor-pointer text-[#0075FF]' onClick={() => { repeatPlayer('track') }} />
                        }

                    </div>
                </div>
                <Volume volume={volume} handleVolume={handleVolume} handleVolumeChange={handleVolumeChange} />
            </div >
            : null

    );
}

export default MusicPlayer;

