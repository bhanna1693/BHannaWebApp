import React from "react";
import * as yup from "yup";
import {ErrorMessage, Field, Form, Formik} from "formik";

interface CheckForSpecialsButtonGroupProps {
    onClick: (businessUrl: string) => void,
    businessUrl: string,
    isLoading: boolean
}

const validationSchema = yup.object().shape({
    businessUrl: yup.string().required("Website URL is required.").url("URL must be formatted correctly. ex) https://restaurant.com"),
});

type ButtonActionSchema = yup.InferType<typeof validationSchema>;

export const CheckForSpecialsButtonAction: React.FunctionComponent<CheckForSpecialsButtonGroupProps> = ({
                                                                                                            businessUrl,
                                                                                                            onClick,
                                                                                                            isLoading
                                                                                                        }) => {


    const handleSubmit = (values: { businessUrl: string }) => {
        onClick(values.businessUrl)
    };

    function isValid(values: ButtonActionSchema) {
        return validationSchema.isValidSync(values);
    }

    return <>
        <Formik initialValues={{businessUrl: businessUrl}}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}>
            {props => {
                return <Form>
                    <div className="text-center">
                        <div>
                            <div>
                                <label className="label-text" htmlFor={"businessUrl"}>Enter business URL where specials
                                    are
                                    located</label>
                                <Field id={"businessUrl"} name={"businessUrl"} type={"businessUrl"}
                                       className="input input-bordered w-full max-w-md"
                                       placeholder="https://restaurant.com/specials"/>
                            </div>
                            <ErrorMessage name={"businessUrl"}/>
                        </div>

                        <div className="pt-5">
                            <button type="submit" className={"btn btn-primary"}
                                    disabled={!isValid(props.values) || isLoading}>
                                Click to check for specials
                                {isLoading && (
                                    <span className="loading loading-bars loading-xs"></span>
                                )}
                            </button>
                        </div>
                    </div>
                </Form>
            }}
        </Formik>
    </>;
};
