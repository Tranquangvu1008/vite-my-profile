import { useState, useEffect } from "react";
import { playMusicSpotify } from "../../../../../../../services/Music/MusicServices";
import { useStateProvider } from "../../../../../../../utils/StateProvider";
import { Album } from "../../../../../models/Music/CurrentPlay";
import { Track } from "../../../../../models/Music/Track";
import { Artist } from "../../../../../models/Music/Artist";

export const useFetchApi = () => {
    const [{ topArtist, topTracks, newReleaseAlbum }] = useStateProvider();
    const [favArtist, setFavArtist] = useState<Artist[]>([])
    const [favTracks, setFavTracks] = useState<Track[]>([])
    const [newAlbum, setNewAlbum] = useState<Album[]>([])

    useEffect(() => {
        setFavArtist(topArtist.items)
        setFavTracks(topTracks.items)
        if (newReleaseAlbum) {
            setNewAlbum(newReleaseAlbum.items)
        }
    }, [topArtist, topTracks, newReleaseAlbum, newAlbum])

    const playMusic = async (type: string, uri: any) => {
        await playMusicSpotify(type, uri);
    };

    return { favArtist, favTracks, playMusic, newAlbum }
}
