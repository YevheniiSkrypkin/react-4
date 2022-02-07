import React from "react";

class Progress extends React.Component {
    render() {
        const calcWidth = {
            width:this.props.percentage+"%"                
        }
        return (
            
            <div className="progress">
                <div style = {calcWidth} className="progress-bar" role="progressbar" aria-valuenow={this.props.percentage} aria-valuemin="0" aria-valuemax="100" aria-label="progressbar" >

                </div>
            </div>
        
        )
    }
}
export default Progress;