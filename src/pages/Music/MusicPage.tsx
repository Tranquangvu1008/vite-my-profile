import LoginPage from "./components/Login/LoginPage";
import { useOutletContext } from "react-router-dom";
import { OutletContextType } from "../../interface";
import { useToken } from "./hooks/useToken";
import { SpotifyPage } from "./components/Spotify";
import { Metadata } from "../../components/Metadata/Metadata";

const MusicPage = () => {
    const { collapsed } = useOutletContext<OutletContextType>();
    const { token } = useToken();
    return (
        <div>
            <Metadata title="Music" description="Spotify in my life " />
            {token ? <SpotifyPage /> : <LoginPage collapsed={collapsed} />}
        </div>
    )
}

export default MusicPage;