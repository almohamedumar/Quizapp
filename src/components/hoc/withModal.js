import { Button } from "antd";
import React from "react";
import "./withModal.css";

const withModal = (Component) => {
    return (props) => {
        const {isOpen,toggleOpen,...otherProps}  = props;
        const className = isOpen ? "modal-container modal--visible" : "modal-container";
        return <div className={className}> <div className="modal">
            <div className="modal__body">
                <Component {...otherProps}/>
            </div>
            <div className="modal__footer">
        <Button type="primary" onClick={toggleOpen}>Accept &amp; Continue</Button>
            </div>
        </div>
        </div>
    }
}

export default withModal;