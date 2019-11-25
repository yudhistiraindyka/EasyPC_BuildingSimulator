import React from 'react'
import TextBox from './TextBox'

class Manual extends React.Component {
    render() {
        const boxCenter = {
            display: "flex",
            textAlign: "center", 
            justifyContent:"center", 
            alignItems:"center"
        }

        return(
            <div style={boxCenter}>
                <TextBox content="Intel" />
                <TextBox content="AMD" />
            </div>
        )
    
    }
}

export default Manual