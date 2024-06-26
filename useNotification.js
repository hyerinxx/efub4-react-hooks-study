export const useNotification = (title, options) => {
    if (!("Notification" in window)) return;
    const fireNotif = () => {
        if (Notification.permission !== "granted") Notification.requestPermission();
        if (Notification.permission === "granted") new Notification(title, options);
        else return;
    };
    return fireNotif;
};