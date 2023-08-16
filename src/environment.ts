export const environment: {
    isProd: boolean;
    BASE_URL: string,
    MY_COOKIE: string;
    AUTH0_DOMAIN: string;
    AUTH0_CLIENT_ID: string;
} = {
    isProd: process.env.NODE_ENV! === "production",
    BASE_URL: process.env.REACT_APP_BASE_URL!,
    MY_COOKIE: process.env.REACT_APP_AUTH_COOKIE ?? "bhannaAuthToken",
    AUTH0_DOMAIN: process.env.REACT_APP_AUTH0_DOMAIN!,
    AUTH0_CLIENT_ID: process.env.REACT_APP_AUTH0_CLIENT_ID!,
}
