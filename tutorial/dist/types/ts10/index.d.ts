declare const Notificatione: {
    Success: number;
    Error: number;
    Warning: number;
    Information: number;
};
declare function sendNotificiation(notificationType: keyof typeof Notificatione): void;
declare enum Notificationa {
    Success = 25,
    Error = 26,
    Warning = 27,
    Information = 28
}
declare function sendNotificiationa(notificationType: Notificationa): void;
