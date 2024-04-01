
export default function LoginPage() {
    const handleClick = async () => {
        // const client_id = "7600e7b6d594423fa6d00a48a7dadb5b";
        // const redirect_uri = "http://localhost:5173/music";
        // const api_uri = "https://accounts.spotify.com/authorize";
        // const scope = [
        //     "user-read-private",
        //     "user-read-email",
        //     "user-modify-playback-state",
        //     "user-read-playback-state",
        //     "user-read-currently-playing",
        //     "user-read-recently-played",
        //     "user-top-read",
        // ];
        // window.location.href = `${api_uri}?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope.join(
        //     " "
        // )}&response_type=token&show_dialog=true`;
    };
    return (
        <div className="flex justify-center items-center flex-col h-screen-minus-64 bg-[#1db954] gap-20">
            <img className="h-[20vh]"
                src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Black.png"
                alt="spotify"
            />
            <button className="py-[1rem] px-[5rem] rounded-[5rem] bg-black text-[#49f585] text-[1.4rem] cursor-pointer" onClick={handleClick}>Connect Spotify</button>
        </div>
    );
}