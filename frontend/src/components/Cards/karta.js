import React from "react";
import '../../sass/components/karta.css'
const Karta = () => {
    return (
        <div className="container">
            <div className="card">
                <div className="slide slide1">
                    <div className="content">
                        <div className="icon">
                            <i className="fa fa-user-circle" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
                <div className="slide slide2">
                    <div className="content">
                        <h3>
                            Hello there!
                        </h3>
                        <p>Trust yourself and keep going.</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Karta;