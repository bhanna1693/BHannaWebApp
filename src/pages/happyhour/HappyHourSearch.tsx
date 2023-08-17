import React, {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {HappyHourSearch, happyHourSearchSchema} from "../../schemas/happy-hour-search-schema";
import useGetCompositeBusinessesQuery from "../../api/happyhour/get-composite-businesses";
import HappyHourCard from "./HappyHourCard";

export const HappyHourSearchPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [formState, setFormState] = useState<HappyHourSearch>({
        search: searchParams.get("search") || "",
        location: searchParams.get("location") || ""
    })

    useEffect(() => {
        setFormState({
            search: searchParams.get("search") || "",
            location: searchParams.get("location") || ""
        })
    }, [searchParams])

    const {data, isLoading} = useGetCompositeBusinessesQuery(formState, happyHourSearchSchema.isValidSync(formState))

    const handleSubmit = (values: HappyHourSearch) => {
        // Handle form submission
        setSearchParams(values)
    }


    return (
        <>
            <h2 className="text-center">Search for a Happy Hour near you!</h2>
            <div className="flex justify-center">
                <Formik initialValues={formState}
                        validationSchema={happyHourSearchSchema}
                        onSubmit={handleSubmit}>
                    <Form>
                        <div className="join join-vertical lg:join-horizontal">
                            <Field id={"location"} name={"location"} type={"text"}
                                   className="input input-bordered join-item"
                                   placeholder="City, State"/>

                            <Field id={"search"} name={"search"} type={"text"}
                                   className="input input-bordered join-item"
                                   placeholder="Business name"/>
                            <button className="btn btn-primary join-item"
                                    type={"submit"} disabled={isLoading}>
                                Search

                                {isLoading && (
                                    <span className="loading loading-bars loading-xs"></span>
                                )}
                            </button>
                        </div>
                        <div>
                            <ErrorMessage name="location"/>
                        </div>
                        <div>
                            <ErrorMessage name={"search"}/>
                        </div>
                    </Form>
                </Formik>
            </div>

            {!data ? (
                <h3>Start by adding a location and searching for a business</h3>
            ) : (
                <>
                    <h3>Results found: {data.length}</h3>
                    {data.map((b) => <HappyHourCard b={b} key={b.yelpBusiness.id}/>)}
                </>
            )}
        </>
    )
}
