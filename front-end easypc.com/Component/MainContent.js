import React from "react"
import TextBox from './TextBox'
import {Link} from 'react-router-dom'

class MainContent extends React.Component {
    constructor() {
        super()
        this.state = {
            helpManual : "For experienced user", 
            helpPreset : "For newbee"
        }
        this.handleOver = this.handleOver.bind(this)
        this.routeChangeManual = this.routeChangeManual.bind(this)
    }


    handleOver()  {
         if (this.props.content === "Manual") {
             return (
                 <span className="tooltiptext">
                     {this.state.helpManual}
                 </span>
             )
         }else{
             return (
                 <span className="tooltiptext">
                     {this.state.helpPreset}
                 </span>
             )
         }
    }
    
    routeChangeManual() {
        let path ='./Manual'
        this.props.history.push(path)
    }

    routeChangePreset() {
        let path = './Preset'
        this.props.history.push(path)
    }


    render() {
        const boxCenter = {
            display: "flex",
            textAlign: "center", 
            justifyContent:"center", 
            alignItems:"center"
        }
        
        return (
        <div>
            <div style={boxCenter}>
                <h1> THIS IS HOME PAGE</h1>
            </div>
            <br />
            <h3>Still in progress...</h3>
        </div>
        )
    }
}

export default MainContent