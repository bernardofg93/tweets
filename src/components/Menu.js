import React from 'react';
import { Container, Navbar, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { openCloseAddTweetModalAction } from '../actions/modalsActions';


export const Menu = () => {

        // accedo al estado
       // const state = useSelector(state => state.modals);

        //disparo la accion
        const dispatch = useDispatch();

        const handleOpenModal = () => {
            dispatch(openCloseAddTweetModalAction(true));
        }


    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>
                    <img
                        alt="Tweets Simulator Redux"

                        width="30"
                        height="30"
                        className="d-inline-block aling-top mr-4"
                    />
                    Tweets Simulator REDUX
                </Navbar.Brand>
                <Button 
                    variant="outline-success"
                    onClick={handleOpenModal}
                >
                    Nuevo Tweet
                </Button>
            </Container>
        </Navbar>
    );
}
