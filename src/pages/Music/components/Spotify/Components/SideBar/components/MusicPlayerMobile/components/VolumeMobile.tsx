import { FaVolumeDown, FaVolumeUp } from 'react-icons/fa'
interface VolumeMobileProps {
    volume: number;
    handleVolumeChange: (e: any) => void;
    handleVolume: () => void
}
export const VolumeMobile: React.FC<VolumeMobileProps> = ({ volume, handleVolumeChange, handleVolume }) => {
    const onChangeHandleVolumeChange = (e: any) => {
        handleVolumeChange(e);
    }
    return (
        <div className='flex gap-1 items-center justify-center sm:w-auto w-full cursor-pointer'>
            <FaVolumeDown />
            <input
                className='rounded-[2rem] leading-[0.5rem] w-[50%] lg:h-4 h-2'
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
