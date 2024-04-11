import './MusicPlayer.scss';
import { BsFillPauseCircleFill, BsFillPlayCircleFill, BsShuffle } from 'react-icons/bs';
import { CgPlayTrackNext, CgPlayTrackPrev } from 'react-icons/cg';
import { FiRepeat } from 'react-icons/fi';
import { FaVolumeDown, FaVolumeUp } from 'react-icons/fa';
import { Artist2 } from '../../../../../../../../models/Music/CurrentPlay';
import { getCurrentPlaying, pausePlayerSpotify, setSeekToPosition, setVolumePlayer, startPlayerSpotify } from '../../../../../../../../services/Music/MusicServices';
import { useStateProvider } from '../../../../../../../../utils/StateProvider';
import { SET_CURRENT_PLAYING } from '../../../../../../../../utils/Constants';
import { useEffect, useState } from 'react';
import { Player } from '../../../../../../../../models/Music/Player';
import { formatTime } from '../../../../../../../../helpers/helpers';
import debounce from 'lodash.debounce';
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
    }, [dispatch, isDrag, allowUpdateFromAPI, timeInterval]);

    const handlePositionChange = (e: any) => {
        setIsDrag(true);
        setTempPosition(Number(e.target.value));
        setTimeout(() => {
            setAllowUpdateFromAPI(false);
        }, 500);
    };

    const handleSeek = debounce(async () => {
        await setSeekToPosition(tempPosition);
        setIsDrag(false);
        setTimeout(() => {
            setAllowUpdateFromAPI(true);
        }, 500);
    }, 500);

    const handleVolumeChange = (e: any) => {
        setIsDrag(true);
        setVolume(Number(e.target.value));
        setTimeout(() => {
            setAllowUpdateFromAPI(false);
        }, 500)
    };

    const handleVolume = debounce(async () => {
        await setVolumePlayer(volume);
        setIsDrag(false);
        setTimeout(() => {
            setAllowUpdateFromAPI(true);
        }, 500);
    }, 500);

    const startPlayer = async () => {
        await startPlayerSpotify();
    }

    const pausePlayer = async () => {
        await pausePlayerSpotify();
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
                    <p className='w-[60px]'>{formatTime(playbackState.progress_ms)}</p>
                    <input
                        className='rounded-[2rem] leading-[0.5rem] w-full'
                        type="range"
                        value={tempPosition}
                        min={0}
                        max={playbackState.item.duration_ms}
                        onChange={handlePositionChange}
                        onMouseUp={handleSeek}
                        onTouchEnd={handleSeek}
                    />
                    <p className='w-[60px]'>{formatTime(playbackState.item.duration_ms)}</p>
                </div>
                <div className='flex items-center justify-center gap-8'>
                    <div className="shuffle">
                        <BsShuffle />
                    </div>
                    <div className="text-[2rem]">
                        <CgPlayTrackPrev onClick={() => { }} />
                    </div>
                    <div className="text-[2rem]">
                        {playing.is_playing ? (
                            <BsFillPauseCircleFill onClick={() => { pausePlayer() }} />
                        ) : (
                            <BsFillPlayCircleFill onClick={() => { startPlayer() }} />
                        )}
                    </div>
                    <div className="text-[2rem]">
                        <CgPlayTrackNext onClick={() => { }} />
                    </div>
                    <div className="repeat">
                        <FiRepeat />
                    </div>
                </div>
                <div className='flex justify-end pt-4 pr-2 gap-1 items-center text'>
                    <FaVolumeDown />
                    <input
                        className='rounded-[2rem] leading-[0.5rem]'
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