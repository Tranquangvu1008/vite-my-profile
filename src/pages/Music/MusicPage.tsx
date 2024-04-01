import { useLayoutEffect } from "react";
import { SpotifyPage } from "./components/Spotify/SpotifyPage";
import LoginPage from "./components/Login/LoginPage";
import { useStateProvider } from "../../utils/StateProvider";
import { SET_TOKEN } from "../../utils/Constants";
import { useOutletContext } from "react-router-dom";
import { OutletContextType } from "../../interface";

export const MusicPage = () => {
    const { collapsed } = useOutletContext<OutletContextType>();

    const [{ token }, dispatch] = useStateProvider();
    useLayoutEffect(() => {
        const token = localStorage.getItem("token");

        const getToken = () => {
            const hash = window.location.hash;
            if (hash) {
                const token = hash.substring(1).split("&")[0].split("=")[1];
                if (token) {
                    dispatch({ type: SET_TOKEN, token });
                    localStorage.setItem("token", token);
                }
            }
            document.title = "Spotify";
        }

        if (token) {
            dispatch({ type: SET_TOKEN, token });
        } else {
            getToken();
        }
    }, [dispatch, token]);
    return (
        <div>
            {token ? <SpotifyPage /> : <LoginPage collapsed={collapsed} />}
        </div>
    )
}
