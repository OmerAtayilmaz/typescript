"use strict";
const Notificatione = {
    Success: 0,
    Error: 1,
    Warning: 2,
    Information: 3
};
//200iq
function sendNotificiation(notificationType) {
    const selectedNotification = Notificatione[notificationType];
    switch (selectedNotification) {
        case Notificatione.Success:
            console.log("SUCCESS NOT");
            break;
        case Notificatione.Error:
            console.error("ERROR NOTIFICATION");
            break;
        case Notificatione.Information:
            console.info("Info Notification");
            break;
        case Notificatione.Warning:
            console.warn("WARN NOTIFICATION");
            break;
    }
}
sendNotificiation("Warning");
//enum kullanımı - her zaman readonly'dir!
var Notificationa;
(function (Notificationa) {
    Notificationa[Notificationa["Success"] = 25] = "Success";
    Notificationa[Notificationa["Error"] = 26] = "Error";
    Notificationa[Notificationa["Warning"] = 27] = "Warning";
    Notificationa[Notificationa["Information"] = 28] = "Information";
})(Notificationa || (Notificationa = {}));
function sendNotificiationa(notificationType) {
    switch (notificationType) {
        case Notificatione.Success:
            console.log("SUCCESS NOT");
            break;
        case Notificatione.Error:
            console.error("ERROR NOTIFICATION");
            break;
        case Notificatione.Information:
            console.info("Info Notification");
            break;
        case Notificatione.Warning:
            console.warn("WARN NOTIFICATION");
            break;
    }
}
sendNotificiationa(Notificationa.Information);
console.log("WATCH MODE");
