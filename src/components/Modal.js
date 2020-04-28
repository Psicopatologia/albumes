import React, { Component } from "react";

class Modal extends Component {
    render() {
        let cl = `modal ${this.props.show ? " d-block" : " d-none"}`;
        return (
            <div className={cl} onClick={this.props.f}>
                <button type="button" class="close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <div className="modal-dialog modal-dialog-centered justify-content-center">
                    <img src={this.props.url} alt="" />

                </div>
            </div>
        )
    }
}

export default Modal;