declare const _default: Job;
export default _default;
declare type Job = {
    timer: string | null;
    name: string;
    status: 'active' | 'inactive' | 'pending' | 'aborted';
};
