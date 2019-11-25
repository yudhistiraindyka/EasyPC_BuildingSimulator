import React from 'react'
import TextBox from './TextBox'
import SelectBox from './SelectBox'

class Manual extends React.Component {
    render() {
        const boxCenter = {
            display: "flex",
            textAlign: "center", 
            justifyContent:"center", 
            alignItems:"center"
        }

        return(
            <div>
                <SelectBox />
                <br /><br /><br /><br />
                <SelectBox />

            </div>
        )
    
    }
}

export default Manual