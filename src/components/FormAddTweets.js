import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addTweetsAction } from '../actions/tweetsAction';
import {validationFormAddTweetAction} from '../actions/validationAction';
import {openCloseAddTweetModalAction} from '../actions/modalsActions';

import moment from 'moment';
import { uid } from 'uid';



export const FormAddTweets = (state) => {

    const [formValues, setFormValue] = useState({
        name: '',
        tweet: ''
    });

    const onChange = ({target}) => {
        setFormValue({
            ...formValues,
            [target.name]: target.value
        });
    }

    //redux dispatch
    const dispatch = useDispatch();
    const validateForm = state => dispatch(validationFormAddTweetAction(state));
    const addTweet = state => dispatch(addTweetsAction(state)); 

    //obtener el statdp de la validacion del formulario
    const  errorFormValue  = useSelector(state => state.validations.errorFormTweet); 

    const onSubmit = (e) => {
        e.preventDefault();
    
        //destructuring
        const {name, tweet} = formValues;

        if(!name || !tweet) {
            validateForm(true);
        }else{
            validateForm(false);
            addTweet({
                id: uid(),
                name,
                tweet,
                date: moment()
            });
            dispatch(openCloseAddTweetModalAction(false));
        }
    }


    return (
        <Form className="m-3" onChange={onChange} onSubmit={onSubmit}>
            <Form.Group className="text-center">
                <h1>Nuevo Tweet</h1>
            </Form.Group>
            <Form.Group>
                <Form.Control type="text" name="name" placeholder="Escribe tu nombre" />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    as="textarea"
                    name="tweet"
                    row="3"
                    placeholder="Escribe lo que quieres comunicar..."
                />
            </Form.Group>


            {errorFormValue && (
                <Alert variant="danger" className="mt-4">
                    Todos los campos son obligatorios
                </Alert>
            )}

            <Button varian="primary" type="submit">
                Enviar Tweet
            </Button>

        </Form>
    )
}


/*
            {errorFormValue && (
                <Alert variant="danger" className="mt-4">
                    Todos los campos son obligatorios
                </Alert>
            )}

            */