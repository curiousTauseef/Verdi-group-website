import React from 'react';

export default class Service extends React.Component {

    render() {
        return (
            <div>
            <div className="bThick"></div>
                <div className="container bg-gray minny maxxy">
                    <div className="row">
                        <div className="h-50 col-md-4 text-center p-5">
                            <h1 className="p-2">We are The Verdi Group!</h1>
                            <h3 className="px-3 mt-2 mx-5">We are an award-winning, full-service marketing
                                agency grounded in direct response. We're different—in a good kind of way. We
                                create unique, highly responsive direct mail, digital, email and print that
                                moves people to respond. We would love to help you achieve your goals!</h3>

                            <em className="px-3 mt-2 mx-4">The Verdi Group participated in Red Nose Day and
                                supported the movement to end child poverty.</em>
                        </div>

                        <img
                            src={require('./images/car.png')}
                            className="img-fluid img-responsive h-50 col-12 col-sm-6 col-md-8 px-0" alt="" />

                    </div>
                </div>

            </div>
        );
    }
}

// <div className="container bg-gray minny"> <div className="row"> </div> </div>