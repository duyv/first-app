import React from 'react';

class LifeCycle extends React.Component {
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = { time: 0,contentLoading: [] };
    }
    
    componentDidMount() {
        setInterval(() => {
            if(this.state.time < 20) {
                console.log(this.state.time)
                this.setValue = this.setState((prevState) => {
                    return {...prevState,time: this.state.time + 2,contentLoading: [...prevState.contentLoading, <div className="box-loadingitem"></div>]}
                });
            }
        },1000)
    }
    componentWillUnmount() { 
        clearInterval(this.setValue)
    }

    render() {
        return (
            <div>
                <p>Count time: {this.state.time}</p>
                <div className="box-loading">
                    {this.state.contentLoading.length > 0 && this.state.contentLoading.map((value,index) => {
                        return (
                            <div key={index} className="box-item">
                                {value}
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}
export default LifeCycle