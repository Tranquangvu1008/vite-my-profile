
export default function LoginPage({ collapsed }: any) {
    const handleClick = async () => {
        const client_id = "7600e7b6d594423fa6d00a48a7dadb5b";
        const redirect_uri = "http://localhost:5173/music";
        const api_uri = "https://accounts.spotify.com/authorize";
        const scope = [
            "user-read-private",
            "user-read-email",
            "user-modify-playback-state",
            "user-read-playback-state",
            "user-read-currently-playing",
            "user-read-recently-played",
            "user-top-read",
        ];
        window.location.href = `${api_uri}?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope.join(
            " "
        )}&response_type=token&show_dialog=true`;
    };
    return (
        <div className={`flex justify-center items-center flex-col h-screen-minus-64 bg-[#1db954] gap-10 ${!collapsed ? 'px-2' : 'px-8'}`}>
            <img className={`sm:max-w-md ${!collapsed ? 'max-w-[100%]' : 'max-w-[90%]'}`}
                src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Black.png"
                alt="spotify"
            />
            <button className={`sm:px-[3rem] px-[10%] rounded-[5rem] bg-black text-[#49f585] sm:text-[1rem] cursor-pointer 
            ${!collapsed ? 'py-[0.7rem] text-[0.7rem]' : 'py-[1rem] text-[0.8rem]'}`}
                onClick={handleClick}>Connect Spotify</button>
        </div>
    );
}