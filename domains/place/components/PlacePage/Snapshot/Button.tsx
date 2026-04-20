import React from "react";
import {Button as MantineButton, ButtonProps as MantineButtonProps} from "@mantine/core";
import {ACFModel} from "@/domains/place/types";

interface ButtonProps extends MantineButtonProps, Pick<ACFModel, 'phone'> {
}

export default function Button(props: ButtonProps) {
    const {phone, ...rest} = props;

    return (
        <MantineButton
            component={'a'}
            href={`tel:${phone}`}
            size={'lg'}
            {...rest}
        >
            Ruf uns jetzt an
        </MantineButton>
    )
}