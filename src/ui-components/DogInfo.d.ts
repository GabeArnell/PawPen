/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Dogs } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ViewProps } from "@aws-amplify/ui-react";
export declare type DogInfoProps = React.PropsWithChildren<Partial<ViewProps> & {
    Dog?: String;
    dogs?: Dogs;
} & {
    overrides?: EscapeHatchProps | undefined | null;
}>;
export default function DogInfo(props: DogInfoProps): React.ReactElement;
