import React from 'react';

export default class Body extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this
      .toggle
      .bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <div className="row">
          <div className="minny">
            <img src={require('./images/light2.jpg')} className="img-fluid minny" alt=""/>
            <div className="bThick"></div>
            <img src={require('./images/exceed.png')} className="p-5 img-fluid minny" alt=""/>
            <div className="bThick"></div>
          </div>
        </div>

      </div>
    );
  }
}