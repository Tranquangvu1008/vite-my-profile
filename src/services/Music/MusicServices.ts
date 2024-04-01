import ApiService from "../index";

export const loginSpotify = async () => {
    const userInfo = await ApiService.get("/me",
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem('token'),
            },
        }
    );
    return userInfo.data;
};
