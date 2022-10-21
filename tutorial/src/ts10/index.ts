const Notificatione={
    Success:0,
    Error:1,
    Warning:2,
    Information:3
};
//200iq
function sendNotificiation(notificationType:keyof typeof Notificatione){
    const selectedNotification=Notificatione[notificationType];

    switch(selectedNotification){
        case Notificatione.Success: console.log("SUCCESS NOT"); break;
        case Notificatione.Error: console.error("ERROR NOTIFICATION"); break;
        case Notificatione.Information:console.info("Info Notification"); break;
        case Notificatione.Warning:console.warn("WARN NOTIFICATION"); break;
    
    }
}

sendNotificiation("Warning");


//enum kullanımı - her zaman readonly'dir!

enum Notificationa{
    Success=25, //=string veya number alabilir.(sadece bunlar) Notification.Success.valueOf() ile degeri alınır
    Error,
    Warning,
    Information,
}
function sendNotificiationa(notificationType:Notificationa){

    switch(notificationType){
        case Notificatione.Success: console.log("SUCCESS NOT"); break;
        case Notificatione.Error: console.error("ERROR NOTIFICATION"); break;
        case Notificatione.Information:console.info("Info Notification"); break;
        case Notificatione.Warning:console.warn("WARN NOTIFICATION"); break;
    
    }
}

sendNotificiationa(Notificationa.Information)