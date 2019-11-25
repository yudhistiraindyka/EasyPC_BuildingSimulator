import React from "react"
import TextBox from "./TextBox"

const boxCenter = {
    display: "flex",
    textAlign: "center", 
    justifyContent:"center", 
    alignItems:"center"
}

class CenterBox extends React.Component {
    render() {
        return (
        <div style={boxCenter}>
        </div>
        )
    }
}

export default CenterBox