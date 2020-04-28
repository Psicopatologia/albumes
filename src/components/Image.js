import React, { Component } from "react";

class Image extends Component {
  render() {
    console.log(this.props.outline)
    let cl = "div-img p-2 "
    if(this.props.outline) {
      cl += "border border-primary";
    }
    return (
      <div className={cl} onClick={this.props.f}>
        <img src={this.props.src} alt="" />
      </div>
    )
  }
}

export default Image;