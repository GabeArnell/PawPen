/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function DogInfo(props) {
  const { Dog, dogs, overrides, ...rest } = props;
  return (
    <View
      width="252px"
      height="245px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "DogInfo")}
    >
      <Text
        fontFamily="Comic Sans MS"
        fontSize="xx-large"
        fontWeight="700"
        color="rgba(220,119,119,1)"
        lineHeight="62.5px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="229px"
        height="52px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="0px"
        left="11px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={dogs?.Name}
        {...getOverrideProps(overrides, "Title")}
      ></Text>
      <Icon
        width="228px"
        height="0px"
        viewBox={{ minX: 0, minY: 0, width: 228, height: 1 }}
        paths={[
          {
            d: "M0 0L228 0L228 -1L0 -1L0 0Z",
            stroke: "rgba(0,0,0,1)",
            fillRule: "nonzero",
            strokeWidth: 1,
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="61px"
        left="12px"
        {...getOverrideProps(overrides, "Divider")}
      ></Icon>
      <Text
        fontFamily="Gaegu"
        fontSize="20px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="25px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="228px"
        height="64px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="71px"
        left="12px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={dogs?.Description}
        {...getOverrideProps(overrides, "Doggy information goes here!")}
      ></Text>
      <Image
        width="37px"
        height="37px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="208px"
        left="1px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src="https://icons.iconarchive.com/icons/iynque/ios7-style/1024/Phone-icon.png"
        {...getOverrideProps(overrides, "Phone 1")}
      ></Image>
      <Text
        fontFamily="Inter"
        fontSize="25px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="30.25568199157715px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="208px"
        height="37px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="208px"
        left="45px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={dogs?.Phone}
        {...getOverrideProps(overrides, "XXX-XXX-XXX")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="15px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="18.15340805053711px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="208px"
        height="37px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="173px"
        left="45px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={dogs?.Email}
        {...getOverrideProps(overrides, "XXXX@gmail.com")}
      ></Text>
      <Image
        width="38px"
        height="38px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="172px"
        left="0px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        srcSet="https://freepngimg.com/download/iphone/68607-email-computer-iphone-icons-download-free-image.png"
        {...getOverrideProps(overrides, "emailicon 1")}
      ></Image>
      <Text
        fontFamily="Inter"
        fontSize="15px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="18.15340805053711px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="220px"
        height="36px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="133px"
        left="16px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={dogs?.City}
        {...getOverrideProps(overrides, "City: XXXXXXXXXXXXXX")}
      ></Text>
    </View>
  );
}
