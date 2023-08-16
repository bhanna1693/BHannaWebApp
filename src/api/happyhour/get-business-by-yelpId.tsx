import {useQuery} from "@tanstack/react-query";
import {Business, SpecialCheckStatus} from "../../models/business";
import apiService from "../api";
import useAccessToken from "../useAccessToken";

const fetchBusinessByYelpId = async (yelpId: string, includeSpecials: boolean, token: string): Promise<Business> => {
    return await apiService.get<Business>(`/business/${yelpId}`, {
        queryParams: {includeSpecials}, accessToken: token
    });
}

const useGetBusinessByYelpIdQuery = (yelpId: string, includeSpecials: boolean, enabled: boolean) => {
    const {token} = useAccessToken()

    const queryKey: string[] = ['business', yelpId]
    return useQuery({
        queryKey: queryKey,
        queryFn: () => fetchBusinessByYelpId(yelpId, includeSpecials, token),
        enabled: enabled,
        refetchInterval: (data) => {
            return data?.specialCheckStatus !== SpecialCheckStatus.PENDING ? false : 5000
        }
    })
}

export default useGetBusinessByYelpIdQuery
