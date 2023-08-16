export const environment: {
    isProd: boolean;
    BASE_URL: string,
    AUTH0_DOMAIN: string;
    AUTH0_CLIENT_ID: string;
    AUTH0_AUDIENCE: string;
} = {
    isProd: process.env.NODE_ENV! === "production",
    BASE_URL: process.env.REACT_APP_BASE_URL!,
    AUTH0_DOMAIN: process.env.REACT_APP_AUTH0_DOMAIN!,
    AUTH0_CLIENT_ID: process.env.REACT_APP_AUTH0_CLIENT_ID!,
    AUTH0_AUDIENCE: process.env.REACT_APP_AUTH0_AUDIENCE!,
}
