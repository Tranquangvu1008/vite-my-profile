import { useState, useEffect } from "react";
import { BsFillPauseCircleFill, BsFillPlayCircleFill, BsShuffle } from "react-icons/bs";
import { CgPlayTrackNext, CgPlayTrackPrev } from "react-icons/cg";
import { FaVolumeDown, FaVolumeUp } from "react-icons/fa";
import { TbRepeat, TbRepeatOnce } from "react-icons/tb";
import { useOutletContext } from "react-router-dom";
import { formatTime } from "../../../../../../../../helpers/helpers";
import { OutletContextType } from "../../../../../../../../interface";
import { Player } from "../../../../../../../../models/Music/Player";
import { Artist2 } from "../../../../../../../../models/Music/Track";
import { getCurrentPlaying, setSeekToPosition, setVolumePlayer, startPlayerSpotify, pausePlayerSpotify, nextPlayerSpotify, previousPlayerSpotify, repeatPlayerSpotify, shufflePlayerSpotify } from "../../../../../../../../services/Music/MusicServices";
import { SET_CURRENT_PLAYING } from "../../../../../../../../utils/Constants";
import { useStateProvider } from "../../../../../../../../utils/StateProvider";

export const MusicPlayerMobile = () => {
    const { collapsed } = useOutletContext<OutletContextType>();

    const [{ playing }, dispatch] = useStateProvider();
    const [playbackState, setPlaybackState] = useState<Player>();
    const [tempPosition, setTempPosition] = useState(0);
    const [volume, setVolume] = useState(0);
    const [isDrag, setIsDrag] = useState(false);
    const [allowUpdateFromAPI, setAllowUpdateFromAPI] = useState(true);
    const [timeInterval] = useState(500)

    useEffect(() => {
        const interval = setInterval(async () => {
            if (allowUpdateFromAPI) {
                try {
                    const data = await getCurrentPlaying();
                    if (data) {
                        setPlaybackState(data);
                        dispatch({ type: SET_CURRENT_PLAYING, playing: data });
                        if (!isDrag) {
                            setTempPosition(data.progress_ms);
                            setVolume(data.device.volume_percent);
                        }
                    }
                } catch (error) {
                    console.error('Lỗi khi lấy trạng thái phát nhạc:', error);
                }
            }
        }, timeInterval);

        return () => clearInterval(interval);
    }, [dispatch, isDrag, allowUpdateFromAPI, timeInterval, volume, tempPosition]);

    const handlePositionChange = (e: any) => {
        setIsDrag(true);
        setTempPosition(Number(e.target.value));
        setAllowUpdateFromAPI(false);
    };

    const handleSeek = async () => {
        await setSeekToPosition(tempPosition);
        await new Promise(resolve => setTimeout(resolve, 500));
        setIsDrag(false);
        setAllowUpdateFromAPI(true)
    }

    const handleVolumeChange = (e: any) => {
        setIsDrag(true);
        setVolume(Number(e.target.value));
        setAllowUpdateFromAPI(false);
    };

    const handleVolume = async () => {
        await setVolumePlayer(volume);
        await new Promise(resolve => setTimeout(resolve, 500));
        setIsDrag(false);
        setAllowUpdateFromAPI(true)
    }

    const startPlayer = async () => {
        await startPlayerSpotify();
    }

    const pausePlayer = async () => {
        await pausePlayerSpotify();
    }

    const nextPlayer = async () => {
        await nextPlayerSpotify();
    }

    const previousPlayer = async () => {
        await previousPlayerSpotify();
    }

    const repeatPlayer = async (state: string) => {
        await repeatPlayerSpotify(state);
    }

    const shufflePlayer = async (state: boolean) => {
        await shufflePlayerSpotify(state);
    }


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
                                <BsShuffle className={`${playbackState.shuffle_state && 'text-[#0075FF]'}`} onClick={() => { shufflePlayer(!playbackState.shuffle_state) }} />
                            </div>
                            <div className="lg:text-[2rem] md:text-[1.5rem] sm:text-[1.2rem] text-[1rem]">
                                <CgPlayTrackPrev onClick={() => { previousPlayer() }} />
                            </div>
                            <div className="lg:text-[2rem] md:text-[1.5rem] sm:text-[1.2rem] text-[1rem]">
                                {playing.is_playing ? (
                                    <BsFillPauseCircleFill onClick={() => { pausePlayer() }} />
                                ) : (
                                    <BsFillPlayCircleFill onClick={() => { startPlayer() }} />
                                )}
                            </div>
                            <div className="lg:text-[2rem] md:text-[1.5rem] sm:text-[1.2rem] text-[1rem]">
                                <CgPlayTrackNext onClick={() => { nextPlayer() }} />
                            </div>
                            <div className="lg:text-[1rem] text-[0.7rem] self-center">
                                {playbackState.repeat_state === 'off'
                                    ? <TbRepeat onClick={() => { repeatPlayer('context') }} />
                                    : playbackState.repeat_state === 'track'
                                        ? <TbRepeatOnce className='text-[#0075FF]' onClick={() => { repeatPlayer('off') }} />
                                        : <TbRepeat className='text-[#0075FF]' onClick={() => { repeatPlayer('track') }} />
                                }

                            </div>
                        </div>
                        <div className='flex justify-center px-2 gap-1 items-center'>
                            <p className=' lg:w-[60px] w-[40px] lg:text-sm text-xs'>{formatTime(playbackState.progress_ms) ?? '00:00'}</p>
                            <input
                                className='rounded-[2rem] leading-[0.5rem] md:w-full w-[50%] lg:h-4 h-2'
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
                <div className='flex gap-1 items-center justify-center sm:w-auto w-full'>
                    <FaVolumeDown />
                    <input
                        className='rounded-[2rem] leading-[0.5rem] w-[50%] lg:h-4 h-2'
                        type="range"
                        min={0}
                        max={100}
                        value={volume}
                        onChange={handleVolumeChange}
                        onMouseUp={handleVolume}
                        onTouchEnd={handleVolume}
                    />
                    <FaVolumeUp />
                </div>
            </div >
            : null
    );
}
