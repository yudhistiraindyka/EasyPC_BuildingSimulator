import React from "react"
import {withRouter, Link} from 'react-router-dom'

class TextBox extends React.Component { 

    render() {
        
        return (
            <div>        
            <button className="box" onClick={this.routeChange}> 
                {this.props.content}
            </button>
            <br />
            </div>
        )
    }
}

export default withRouter(TextBox)