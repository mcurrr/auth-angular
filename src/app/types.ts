export enum RouteLinks {
    LOG_IN = 'login',
    REGISTRATION = 'registration',
}

export interface Route {
    link: RouteLinks.LOG_IN | RouteLinks.REGISTRATION;
    title: string;
}

export enum ApiUrlNames {
    LOGIN = 'login',
    REGISTRATION = 'registration',
}

export type ApiUrl = ApiUrlNames.LOGIN | ApiUrlNames.REGISTRATION;

export interface AuthDialogData {
    success: boolean;
    error: boolean;
}

export interface ModalData {
    title: string;
    message?: string;
    details?: string;
    buttons?: LinkedButton[];
}

interface LinkedButton {
    link: RouteLinks;
    title: string;
}
