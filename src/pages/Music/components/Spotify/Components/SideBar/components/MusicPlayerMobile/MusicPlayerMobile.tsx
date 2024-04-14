import { BsFillPauseCircleFill, BsFillPlayCircleFill, BsShuffle } from "react-icons/bs";
import { CgPlayTrackNext, CgPlayTrackPrev } from "react-icons/cg";
// import { FaVolumeDown, FaVolumeUp } from "react-icons/fa";
import { TbRepeat, TbRepeatOnce } from "react-icons/tb";
import { useOutletContext } from "react-router-dom";
import { formatTime } from "../../../../../../../../helpers/helpers";
import { OutletContextType } from "../../../../../../../../interface";
import { Artist2 } from "../../../../../../models/Music/Track";
import { useControlPlayer } from "../../hooks/useControlPlayer";
import { VolumeMobile } from "./components/VolumeMobile";

export const MusicPlayerMobile = () => {
    const { collapsed } = useOutletContext<OutletContextType>();
    const { playbackState, handlePositionChange, handleSeek, handleVolumeChange, handleVolume, startPlayer,
        pausePlayer, nextPlayer, previousPlayer, repeatPlayer, shufflePlayer, playing, tempPosition, volume } = useControlPlayer();
    return (
        playbackState ?
            <div className="rounded-t-none bg-[#365C7F] px-2 py-2 shadow-custom flex sm:justify-between justify-center sm:gap-2 gap-1 h-[70px]">
                <div className="flex justify-start gap-2 items-center sm:w-auto w-full">
                    <div >
                        <img className="rounded-[10px] max-w-[50px] max-h-[50px] " src={playbackState.item.album.images[0].url} alt="Album Cover" />
                    </div >
                    <div className="overflow-hidden h-full">
                        <div className="lg:text-base sm:text-sm text-[0.8rem]">{playbackState.item.name}</div>
                        <div className="lg:text-sm sm:text-xs text-[0.7rem]">{playbackState.item.artists.map((value: Artist2) => value.name).join(", ")}</div>
                    </div>
                </div>
                <div className="flex sm:w-auto w-full">
                    <div className="flex flex-col gap-2 items-center justify-center">
                        <div className={`flex justify-center ${collapsed ? 'lg:gap-6 md:gap-4 gap-2' : 'lg:gap-4 md:gap-2 gap-1'}`}>
                            <div className="lg:text-[1rem] text-[0.7rem] self-center">
                                <BsShuffle className={`cursor-pointer ${playbackState.shuffle_state && 'text-[#0075FF]'}`} onClick={() => { shufflePlayer(!playbackState.shuffle_state) }} />
                            </div>
                            <div className="lg:text-[2rem] md:text-[1.5rem] sm:text-[1.2rem] text-[1rem]">
                                <CgPlayTrackPrev className="cursor-pointer" onClick={() => { previousPlayer() }} />
                            </div>
                            <div className="lg:text-[2rem] md:text-[1.5rem] sm:text-[1.2rem] text-[1rem]">
                                {playing.is_playing ? (
                                    <BsFillPauseCircleFill className="cursor-pointer" onClick={() => { pausePlayer() }} />
                                ) : (
                                    <BsFillPlayCircleFill className="cursor-pointer" onClick={() => { startPlayer() }} />
                                )}
                            </div>
                            <div className="lg:text-[2rem] md:text-[1.5rem] sm:text-[1.2rem] text-[1rem]">
                                <CgPlayTrackNext className="cursor-pointer" onClick={() => { nextPlayer() }} />
                            </div>
                            <div className="lg:text-[1rem] text-[0.7rem] self-center">
                                {playbackState.repeat_state === 'off'
                                    ? <TbRepeat className="cursor-pointer" onClick={() => { repeatPlayer('context') }} />
                                    : playbackState.repeat_state === 'track'
                                        ? <TbRepeatOnce className='cursor-pointer text-[#0075FF]' onClick={() => { repeatPlayer('off') }} />
                                        : <TbRepeat className='cursor-pointer text-[#0075FF]' onClick={() => { repeatPlayer('track') }} />
                                }

                            </div>
                        </div>
                        <div className='flex justify-center px-2 gap-1 items-center'>
                            <p className=' lg:w-[60px] w-[40px] lg:text-sm text-xs'>{formatTime(playbackState.progress_ms) ?? '00:00'}</p>
                            <input
                                className='rounded-[2rem] leading-[0.5rem] md:w-full w-[50%] lg:h-4 h-2 cursor-pointer'
                                type="range"
                                value={tempPosition}
                                min={0}
                                max={playbackState.item.duration_ms}
                                onChange={handlePositionChange}
                                onMouseUp={handleSeek}
                                onTouchEnd={handleSeek}
                            />
                            <p className=' lg:w-[60px] w-[40px] lg:text-sm text-xs'>{formatTime(playbackState.item.duration_ms)}</p>
                        </div>
                    </div>
                </div>
                <VolumeMobile volume={volume} handleVolume={handleVolume} handleVolumeChange={handleVolumeChange} />
            </div >
            : null
    );
}
