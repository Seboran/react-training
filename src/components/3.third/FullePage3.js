import React from "react";
import { Typography } from "../../../node_modules/@material-ui/core";
import MainPoints from "../MainPoints";

export default function FullPage3() {
    return (
        <div>
        <Typography variant="display2">Morale de cette histoire</Typography>
        <MainPoints points={[
            "Ne jamais modifier this.state directement",
            "Il faut aimer l'ECMAScript 6 (ou ES6)",
            "Il faut aimer écrire librement",
            <a href="https://reactjs.org/">https://reactjs.org/</a>,
            <a href="https://openclassrooms.com/">https://openclassrooms.com/</a>,
            <a href="https://github.com/Seboran/react-training">https://github.com/Seboran/react-training</a>
        ]}/>
        
        </div>
    )
}