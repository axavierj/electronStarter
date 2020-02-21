import React from 'react'
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap'
const { ipcRenderer } = window.require('electron');

const MainForm = () => {
    const handelSubmit = (event) => {
        event.preventDefault()
        console.log(event.target, ipcRenderer);
    }
    return ( 
        <Form onSubmit={handelSubmit}>
            <Form.Group controlId="testInput">
                <Form.Label>Input 1</Form.Label>
                <Form.Control type="Text" placeholder="enter text" />
            </Form.Group>
            <Form.Group controlId="testInput2">
                <Form.Label>Input 2</Form.Label>
                <Form.Control type="Text" placeholder="enter text" />
            </Form.Group>
            <Form.Group controlId="testInput3">
                <Form.Label>Input 3</Form.Label>
                <Form.Control type="Text" placeholder="enter text" />
            </Form.Group>
            <Button type="submit">Submit</Button>
        </Form>
     )
}
 
export default MainForm