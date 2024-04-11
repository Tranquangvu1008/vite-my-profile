export const formatTime = (milliseconds: number | undefined): any => {
    if (milliseconds) {
        const seconds = Math.floor(milliseconds / 1000);
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${padTo2Digits(minutes)}:${padTo2Digits(remainingSeconds)}`;
    }
};

const padTo2Digits = (num: number) => num.toString().padStart(2, '0');