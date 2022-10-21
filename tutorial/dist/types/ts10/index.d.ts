declare const Notificatione: {
    Success: number;
    Error: number;
    Warning: number;
    Information: number;
};
declare function sendNotificiation(notificationType: keyof typeof Notificatione): void;
declare enum Notificationa {
    Success = 0,
    Error = 1,
    Warning = 2,
    Information = 3
}
declare function sendNotificiationa(notificationType: Notificationa): void;
