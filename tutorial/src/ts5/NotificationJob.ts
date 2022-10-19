export default {
 name:"Super Black Day",
 status:"active",
 timer:"Hello"
} as Job;

type Job={
    timer:string|null,
    name:string,
    status:'active'|'inactive'|'pending'|'aborted'
}