import React from 'react';

export default class Service extends React.Component {

    constructor(props) {

        super(props);
        this.state = {
            bg: 'bg-black'
        };

        this.handleEnter = this.handleEnter.bind(this);
        this.handleLeave = this.handleLeave.bind(this);
    }

    handleEnter() {
        this.setState({bg: 'bg-success'});
        console.log('in box.');
    }
    handleLeave() {
        this.setState({bg: 'bg-black'});
        console.log('out of box.');
    }

    render() {
        let classes = `container minny maxxy ${this.state.bg}`
        return (
            <div>
                <div className="bThick"></div>
                <div className={classes}>
                    <div className="row">
                        <div
                            className="col-6 col-md-4 centerMobile p-5"
                            onMouseEnter={this.handleEnter}
                            onMouseLeave={this.handleLeave}>
                            <img
                                src={require('./images/view.png')}
                                className="img-fluid img-responsive smallRight topMobile"
                                alt=""/>
                        </div>
                        <div className="col-12 col-sm-6 col-md-8 px-0">
                            <img
                                src={require('./images/services.png')}
                                className="img-fluid img-responsive"
                                alt=""/>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}