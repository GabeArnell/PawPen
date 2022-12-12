/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Dogs } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type DogsUpdateFormInputValues = {
    Name?: string;
    Phone?: string;
    Email?: string;
    City?: string;
    Description?: string;
};
export declare type DogsUpdateFormValidationValues = {
    Name?: ValidationFunction<string>;
    Phone?: ValidationFunction<string>;
    Email?: ValidationFunction<string>;
    City?: ValidationFunction<string>;
    Description?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DogsUpdateFormOverridesProps = {
    DogsUpdateFormGrid?: FormProps<GridProps>;
    Name?: FormProps<TextFieldProps>;
    Phone?: FormProps<TextFieldProps>;
    Email?: FormProps<TextFieldProps>;
    City?: FormProps<TextFieldProps>;
    Description?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DogsUpdateFormProps = React.PropsWithChildren<{
    overrides?: DogsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    dogs?: Dogs;
    onSubmit?: (fields: DogsUpdateFormInputValues) => DogsUpdateFormInputValues;
    onSuccess?: (fields: DogsUpdateFormInputValues) => void;
    onError?: (fields: DogsUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: DogsUpdateFormInputValues) => DogsUpdateFormInputValues;
    onValidate?: DogsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function DogsUpdateForm(props: DogsUpdateFormProps): React.ReactElement;
