import {useQuery} from "@tanstack/react-query";
import apiService from "../api";
import {HappyHourSearch} from "../../schemas/happy-hour-search-schema";
import {CompositeBusinessDto} from "../../models/composite-business-dto";
import useAccessToken from "../useAccessToken";

const fetchCompositeBusinesses = async (search: HappyHourSearch, token: string): Promise<CompositeBusinessDto[]> => {
    return await apiService.get<CompositeBusinessDto[]>("/yelp/businesses/search", {
        accessToken: token,
        queryParams: search,
    });
}

const useGetCompositeBusinessesQuery = (search: HappyHourSearch, enabled: boolean = true) => {
    const {token} = useAccessToken()

    const queryKey: string[] = ['businesses', ...Object.values(search)]
    return useQuery({
        queryKey: queryKey,
        queryFn: () => fetchCompositeBusinesses(search, token),
        enabled: enabled,
        refetchOnMount: query => query.isStale()
    })
}

export default useGetCompositeBusinessesQuery
