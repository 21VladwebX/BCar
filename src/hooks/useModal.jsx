import React, {useState} from 'react';

const useModal = (shouldShow = false) => {
    const [isShowing, toggleModalVisibility] = useState(shouldShow);

    return {
        isShowing,
        toggle: toggleModalVisibility
    }
}

export default useModal;
