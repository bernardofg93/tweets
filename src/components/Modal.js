import React from 'react';
import { Modal as ModalB } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { openCloseAddTweetModalAction } from '../actions/modalsActions';

export const Modal = (props) => {
    const { children } = props;

    const dispatch = useDispatch();
    const closeModal = state => dispatch(openCloseAddTweetModalAction(state));

    //acceder al valor con useSelector
    const isOpenModal = useSelector(state => state.modals.stateModalAddTweet);
    console.log(isOpenModal);
    
    return (
        <ModalB
            show={isOpenModal}
            size="lg"
            centered
            onHide={() => closeModal(false)}
        >
            {children}
        </ModalB>
    )
}