import React, {Component} from 'react'


class DateTimePanel extends Component{

    constructor(props){
        super(props);
        this.state = {
            showTime : new Date().toLocaleTimeString(),
            showDate  : new Date().toDateString()
        }
    }

    componentDidMount() {
        this.intervalID = setInterval(() => this.tick(),1000);
      }

      componentWillUnmount() {
        clearInterval(this.intervalID);
      }

      tick() {
        this.setState({
            showTime : new Date().toLocaleTimeString(),
            showDate  : new Date().toDateString()
        });
      }

    render(){
        return(
            <div className="panel-one box-panel-one">
                <p id="panel-one-time">{this.state.showTime}</p>
                <p id="panel-one-date">{this.state.showDate}</p>
            </div>
            
        );
    }
}

export default DateTimePanel