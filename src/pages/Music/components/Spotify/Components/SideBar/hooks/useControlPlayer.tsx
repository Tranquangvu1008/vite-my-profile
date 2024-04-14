import { useEffect, useState } from 'react'
import { getCurrentPlaying, setSeekToPosition, setVolumePlayer, startPlayerSpotify, pausePlayerSpotify, nextPlayerSpotify, previousPlayerSpotify, repeatPlayerSpotify, shufflePlayerSpotify } from '../../../../../../../services/Music/MusicServices';
import { SET_CURRENT_PLAYING } from '../../../../../../../utils/Constants';
import { useStateProvider } from '../../../../../../../utils/StateProvider';
import { Player } from '../../../../../models/Music/Player';

export const useControlPlayer = () => {
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

    return {
        playbackState, handlePositionChange, handleSeek, handleVolumeChange, handleVolume, startPlayer,
        pausePlayer, nextPlayer, previousPlayer, repeatPlayer, shufflePlayer, playing, tempPosition, volume
    }
}
