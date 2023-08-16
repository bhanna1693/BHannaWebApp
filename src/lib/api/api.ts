import {environment} from "../../environment";

class HttpError extends Error {
    status: number;
    statusText: string;

    constructor(status: number, statusText: string, message?: string) {
        super(message || statusText);
        this.name = 'HttpError';
        this.status = status;
        this.statusText = statusText;
    }
}

interface RequestOptions {
    accessToken: string;
    queryParams?: { [k: string]: any };
    headers?: { [k: string]: string };
}

const defaultRequestOptions: () => RequestOptions = () => {
    return {accessToken: ""}
};

async function get<T = any>(url: string, options: RequestOptions = defaultRequestOptions()): Promise<T> {
    const headers: { [k: string]: string } = {
        'Content-Type': 'application/json',
        ...(options.accessToken && {'Authorization': `Bearer ${options.accessToken}`}),
        ...(options.headers || {}),
    };

    url = url.includes("mock") ? url : environment.BASE_URL + url;
    if (options.queryParams) {
        const qp = new URLSearchParams();
        Object.keys(options.queryParams).forEach(key => qp.append(key, options.queryParams![key]));
        url = `${url}?${qp.toString()}`;
    }

    const response = await fetch(url, {
        headers: headers,
    });

    if (!response.ok) {
        const error = await response.json()
        throw new HttpError(response.status, response.statusText, error?.message);
    }

    return response.json();
}

async function post<T = any, R = any>(url: string, body: T, options: RequestOptions = defaultRequestOptions()): Promise<R> {
    const headers: { [k: string]: string } = {
        'Content-Type': 'application/json',
        ...(options.accessToken && {'Authorization': `Bearer ${options.accessToken}`}),
        ...(options.headers || {}),
    };

    const response = await fetch(`${environment.BASE_URL}${url}`, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(body),
    });

    if (!response.ok) {
        const error = await response.json()
        throw new HttpError(response.status, response.statusText, error?.message);
    }

    return response.json();
}

// Export the API service functions
const apiService = {
    get,
    post,
    // Add other methods here
};

export default apiService;
