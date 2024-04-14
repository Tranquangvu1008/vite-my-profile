export const formatTime = (milliseconds: number | undefined): any => {
    if (milliseconds) {
        const seconds = Math.floor(milliseconds / 1000);
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${padTo2Digits(minutes)}:${padTo2Digits(remainingSeconds)}`;
    }
};

const padTo2Digits = (num: number) => num.toString().padStart(2, '0');

export const loadSpotifyPlayer = (): Promise<any> => {
    return new Promise<void>((resolve, reject) => {
        const scriptTag = document.getElementById("spotify-player");

        if (!scriptTag) {
            const script = document.createElement("script");

            script.id = "spotify-player";
            script.type = "text/javascript";
            script.async = false;
            script.defer = true;
            script.src = "https://sdk.scdn.co/spotify-player.js";
            script.onload = () => resolve();
            script.onerror = (error: any) =>
                reject(new Error(`loadScript: ${error.message}`));

            document.head.appendChild(script);
        } else {
            resolve();
        }
    });
}