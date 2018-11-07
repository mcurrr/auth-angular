export enum RouteLinks {
    LOG_IN = 'login',
    REGISTRATION = 'registration',
}

export interface Route {
    link: RouteLinks.LOG_IN | RouteLinks.REGISTRATION;
    title: string;
}
