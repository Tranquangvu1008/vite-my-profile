import { PlayCircleOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Track } from "../../../../../../../models/Music/Track";

interface FavoriteTrackProps {
    value: Track;
    playMusic: (type: string, uri: any) => Promise<any>;
}

export const FavoriteTrack: React.FC<FavoriteTrackProps> = ({ value, playMusic }) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = async () => {
        setIsClicked(true);
        await playMusic("track", value.uri);
        setTimeout(() => {
            setIsClicked(false);
        }, 600);
    };

    return (
        <div className='text-center'>
            <div className='mx-auto relative group mb-[10px]'>
                <img src={value.album.images[0].url} alt='artist' className='sm:w-[210px] w-[110px] object-contain rounded-lg mx-auto shadow-xl' />
                <PlayCircleOutlined onClick={handleClick} className={`hidden group-hover:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[3rem] opacity-60 ${isClicked ? 'animate-zoomOutAndIn' : ''}`} />
            </div>
            <h4 className='font-semibold sm:text-[18px] text-[14px]'>{value.name}</h4>
            <p className='font-light sm:text-[16px] text-[12px]'>{value.artists[0].name}</p>
        </div>
    );
};