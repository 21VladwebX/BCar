import React, {useState} from 'react';
// import Modal from "components/common/Modal";
import Modal from "../../common/Modal";

const Login = () => {
    const [showModal, toggleModalVisibility] = useState(false);

    return (
        <div>
            <span onClick={()=>{toggleModalVisibility(!showModal)}}>Login</span>
            <Modal shouldShowModal={showModal}>
                <p> Form should be here</p>
            </Modal>
        </div>
    );
}

export default Login;
