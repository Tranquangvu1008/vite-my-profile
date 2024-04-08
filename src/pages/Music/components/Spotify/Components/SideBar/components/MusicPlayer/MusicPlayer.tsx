import './MusicPlayer.scss';
import albumCover from '../../../../../../assets/images/album_cover.png'
import { BsFillPauseCircleFill, BsShuffle } from 'react-icons/bs';
import { CgPlayTrackNext, CgPlayTrackPrev } from 'react-icons/cg';
import { FiRepeat } from 'react-icons/fi';
import { FaVolumeDown, FaVolumeUp } from 'react-icons/fa';

function MusicPlayer() {
    return (
        <div className="music-player">
            <div className="album-cover">
                <img src={albumCover} alt="Album Cover" />
            </div>
            <div className="song-info">
                <div className="song-title">JUNOON</div>
                <div className="artist-name">MITRAZ</div>
            </div>
            <div className='flex items-center justify-center gap-8'>
                <div className="shuffle">
                    <BsShuffle />
                </div>
                <div className="text-[2rem]">
                    <CgPlayTrackPrev onClick={() => { }} />
                </div>
                <div className="text-[2rem]">
                    {/* {playerState ? (
                        <BsFillPauseCircleFill onClick={() => { }} />
                    ) : (
                        <BsFillPlayCircleFill onClick={() => { }} />
                    )} */}
                    <BsFillPauseCircleFill onClick={() => { }} />
                </div>
                <div className="text-[2rem]">
                    <CgPlayTrackNext onClick={() => { }} />
                </div>
                <div className="repeat">
                    <FiRepeat />
                </div>
            </div>
            <div className='flex justify-end pt-4 gap-1'>
                <FaVolumeDown />
                <input className='rounded-[2rem] leading-[0.5rem]' type="range" onMouseUp={(e) => { }
                    // setVolume(e)
                } min={0} max={100
                } />
                <FaVolumeUp />
            </div>
        </div>
    );
}

export default MusicPlayer;