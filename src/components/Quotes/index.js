import React, { Component } from "react";

export default class Quotes extends Component {
    render() {
        return (
        <div className="flex flex-col items-center justify-center bg-gradient-to-r from-green-400 to-blue-600 shadow-md" style={{ height: "200px" }}>
            <h3 className="font-bold text-xl">{this.props.quotes}</h3>
            <p>-{this.props.author}</p>
            <img
            src={this.props.image}
            alt="logo3.png"
            className="h-40 w-40 object-right position-static  "
            />
        </div>
        );
    }
}