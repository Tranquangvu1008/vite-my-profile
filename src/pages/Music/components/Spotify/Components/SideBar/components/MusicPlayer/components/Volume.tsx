import { FaVolumeDown, FaVolumeUp } from 'react-icons/fa'
interface VolumeProps {
    volume: number;
    handleVolumeChange: (e: any) => void;
    handleVolume: () => void
}
export const Volume: React.FC<VolumeProps> = ({ volume, handleVolumeChange, handleVolume }) => {
    const onChangeHandleVolumeChange = (e: any) => {
        handleVolumeChange(e);
    }
    return (
        <div className='flex justify-end pt-4 pr-2 gap-1 items-center text'>
            <FaVolumeDown />
            <input
                className='rounded-[2rem] leading-[0.5rem] w-[50%] lg:h-4 h-2 cursor-pointer'
                type="range"
                min={0}
                max={100}
                value={volume}
                onChange={onChangeHandleVolumeChange}
                onMouseUp={handleVolume}
                onTouchEnd={handleVolume}
            />
            <FaVolumeUp />
        </div>
    )
}
