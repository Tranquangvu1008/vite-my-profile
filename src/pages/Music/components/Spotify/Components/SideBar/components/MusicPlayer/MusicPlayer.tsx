import './MusicPlayer.scss';
import { BsFillPauseCircleFill, BsFillPlayCircleFill, BsShuffle } from 'react-icons/bs';
import { CgPlayTrackNext, CgPlayTrackPrev } from 'react-icons/cg';
import { FaVolumeDown, FaVolumeUp } from 'react-icons/fa';
import { Artist2 } from '../../../../../../../../models/Music/CurrentPlay';
import { getCurrentPlaying, nextPlayerSpotify, pausePlayerSpotify, previousPlayerSpotify, repeatPlayerSpotify, setSeekToPosition, setVolumePlayer, shufflePlayerSpotify, startPlayerSpotify } from '../../../../../../../../services/Music/MusicServices';
import { useStateProvider } from '../../../../../../../../utils/StateProvider';
import { SET_CURRENT_PLAYING } from '../../../../../../../../utils/Constants';
import { useEffect, useState } from 'react';
import { Player } from '../../../../../../../../models/Music/Player';
import { formatTime } from '../../../../../../../../helpers/helpers';
import { TbRepeat, TbRepeatOnce } from 'react-icons/tb';
interface MusicPlayerProps {
    // playing?: CurrentPlay
}

export const MusicPlayer: React.FC<MusicPlayerProps> = () => {
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

    useEffect(() => {

        console.log(playbackState);

    }, [playbackState])


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
            <div className="rounded-[20px] bg-transparent px-1 py-5 shadow-custom">
                <div >
                    <img className="rounded-[10px] w-[70%] mx-auto" src={playbackState.item.album.images[0].url} alt="Album Cover" />
                </div >
                <div className="text-center my-[10px]">
                    <div className="">{playbackState.item.name}</div>
                    <div className="">{playbackState.item.artists.map((value: Artist2) => value.name).join(", ")}</div>
                </div>
                <div className='flex justify-center pb-4 px-2 gap-1 text-center items-center'>
                    <p className='lg:w-[60px] w-[40px] lg:text-sm text-xs'>{formatTime(playbackState.progress_ms) ?? '00:00'}</p>
                    <input
                        className='rounded-[2rem] leading-[0.5rem] w-full lg:h-4 h-2'
                        type="range"
                        value={tempPosition}
                        min={0}
                        max={playbackState.item.duration_ms}
                        onChange={handlePositionChange}
                        onMouseUp={handleSeek}
                        onTouchEnd={handleSeek}
                    />
                    <p className='lg:w-[60px] w-[40px] lg:text-sm text-xs'>{formatTime(playbackState.item.duration_ms)}</p>
                </div>
                <div className='flex items-center justify-center xl:gap-6 lg:gap-4 gap-2'>
                    <div className="shuffle">
                        <BsShuffle className={`${playbackState.shuffle_state && 'text-[#0075FF]'}`} onClick={() => { shufflePlayer(!playbackState.shuffle_state) }} />
                    </div>
                    <div className="xl:text-[2rem] lg:text-[1.7rem] text-[1.5rem]">
                        <CgPlayTrackPrev onClick={() => { previousPlayer() }} />
                    </div>
                    <div className="xl:text-[2rem] lg:text-[1.7rem] text-[1.5rem]">
                        {playing.is_playing ? (
                            <BsFillPauseCircleFill onClick={() => { pausePlayer() }} />
                        ) : (
                            <BsFillPlayCircleFill onClick={() => { startPlayer() }} />
                        )}
                    </div>
                    <div className="xl:text-[2rem] lg:text-[1.7rem] text-[1.5rem]">
                        <CgPlayTrackNext onClick={() => { nextPlayer() }} />
                    </div>
                    <div className="text-[1rem]">
                        {playbackState.repeat_state === 'off'
                            ? <TbRepeat onClick={() => { repeatPlayer('context') }} />
                            : playbackState.repeat_state === 'track'
                                ? <TbRepeatOnce className='text-[#0075FF]' onClick={() => { repeatPlayer('off') }} />
                                : <TbRepeat className='text-[#0075FF]' onClick={() => { repeatPlayer('track') }} />
                        }

                    </div>
                </div>
                <div className='flex justify-end pt-4 pr-2 gap-1 items-center text'>
                    <FaVolumeDown />
                    <input
                        className='rounded-[2rem] leading-[0.5rem] w-full lg:h-4 h-2'
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

export default MusicPlayer;

