export const useFullscreen = (callback) => {
    const element = useRef();
    const setIsFull = (isFull) => {
        if (callback && typeof callback === "function") {
            callback(isFull);
        }
    };
    const triggerFull = () => {
        if (element.current) {
            if (element.current.requestFullscreen) {
                element.current.requestFullscreen();
            } else if (element.current.mozRequestFullscreen) {
                element.current.mozRequestFullscreen();
            } else if (element.current.webkitRequestFullscreen) {
                element.current.webkitRequestFullscreen();
            } else if (element.current.msRequestFullscreen) {
                element.current.msRequestFullscreen();
            }
            setIsFull(true);
        }
    };
    const exitFull = () => {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.exitFullscreen();
        } else if (document.msExitFullscreen) {
            document.exitFullscreen();
        }
        setIsFull(false);
    };
    return { element, triggerFull, exitFull };
};