import { useLayoutEffect } from 'react'
import { useStateProvider } from '../../../utils/StateProvider';
import { SET_TOKEN } from '../../../utils/Constants';

export const useToken = () => {
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
        }

        if (token) {
            dispatch({ type: SET_TOKEN, token });
        } else {
            getToken();
        }
    }, [dispatch, token]);

    return { token }
}
