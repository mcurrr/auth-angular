import { Route, RouteLinks } from './types';

export const ROUTS: Route[] = [
    { link: RouteLinks.LOG_IN, title: 'login' },
    { link: RouteLinks.REGISTRATION, title: 'registration' },
];

export const MESSAGES = {
    errors: {
        login: {
            title: 'Oops! Something went wrong',
            message: 'Error occured during registration',
        },
    },
    success: {
        login: {
            title: 'Congrats',
            message: "You've successfuly register. Now you can log in",
        },
    },
};
