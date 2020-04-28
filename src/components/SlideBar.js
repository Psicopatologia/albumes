import React, { Component } from "react";

class SlideBar extends Component {
    render() {
        let cl = "h-100 d-flex align-items-center justify-content-center flex-wrap overflow-auto col-" + this.props.w;
        cl += this.props.d ? " bg-dark ":"";
        return (
            <div className={cl}>
                {this.props.children}
            </div>
        )
    }
}

export default SlideBar;