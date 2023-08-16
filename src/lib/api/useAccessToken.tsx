import {useAuth0} from "@auth0/auth0-react";
import {useEffect, useState} from "react";

const useAccessToken = () => {
    const {getAccessTokenSilently} = useAuth0();
    const [token, setToken] = useState<string>("")
    useEffect(() => {
        (async () => {
            try {
                setToken(await getAccessTokenSilently());
            } catch (e) {
                // Handle errors such as `login_required` and `consent_required` by re-prompting for a login
                console.error(e);
            }
        })();
    }, [getAccessTokenSilently]);

    // @ts-ignore
    return {token};
}

export default useAccessToken
