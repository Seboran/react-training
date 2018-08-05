import React from "react";
import { Typography } from "../../../node_modules/@material-ui/core";
import MainPoints from "../MainPoints";

export default function FullPage3() {
    return (
        <div>
        <Typography variant="display2">Morale de cette histoire</Typography>
        <MainPoints points={[
            "Ne jamais modifier this.state directement"
        ]}/>
        </div>
    )
}