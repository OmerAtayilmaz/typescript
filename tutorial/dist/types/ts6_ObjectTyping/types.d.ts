export declare type User = {
    id: number;
    name: string;
    token: string;
    isActive: 'active' | 'inactive' | 'deleted';
    isVerified: boolean | 'email_verified' | 'number_verified';
    balance: number;
};
export declare type Product = Partial<{
    id: number;
    name: string;
    quantity: number;
    price: number;
}>;
export declare type PaymentOption = {
    id: number;
    name: string;
    status: 'valid' | 'invalid' | boolean;
    [options: string]: any;
};
export declare const WatchRecord: Record<number, {
    user: string;
    pass: string;
}>;
