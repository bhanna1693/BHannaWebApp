import {useMutation, useQueryClient} from "@tanstack/react-query";
import {Business} from "../../models/business";
import apiService from "../../lib/api/api";
import {CreateBusinessRequest} from "../../schemas/create-business-request-schema";
import {updateBusinessesQueryCache, updateBusinessQueryCache} from "./update-business";
import useAccessToken from "../../lib/api/useAccessToken";

const createBusiness = async (req: CreateBusinessRequest, token: string): Promise<Business> => {
    return await apiService.post<CreateBusinessRequest, Business>("/business", req, {
        accessToken: token
    });
}

const useCreateBusiness = () => {
    const client = useQueryClient()
    const {token} = useAccessToken()

    return useMutation({
        mutationFn: (req: CreateBusinessRequest) => createBusiness(req, token),

        onSuccess: (result) => {
            updateBusinessQueryCache(client, result)
            updateBusinessesQueryCache(client, result)
        }
    })
}

export default useCreateBusiness
