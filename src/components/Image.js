import React, { Component } from "react";

class Image extends Component {
  render() {
    console.log(this.props.outline)
    let cl = " "
    if(this.props.outline) {
      cl += "border border-primary";
    }
    return (
      <div className="div-img p-2 " onClick={this.props.f}>
        <img className={cl}  src={this.props.src} alt="" />
      </div>
    )
  }
}

export default Image;