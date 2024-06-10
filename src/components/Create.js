import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { v4 as uuid } from "uuid";
import user from "./Users";
import { useNavigate } from 'react-router-dom';

const CreateRecord = () => {
    let history = useNavigate();
    const [name, setName] = useState("");
    const [skill, setSkill] = useState("");
    const [mobile, setMobile] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const ids = uuid();
        let uni = ids.slice(0, 8);
        let a = name,
            b = skill,
            c = mobile

        if (name === "" || skill === "" || mobile === "") {
            alert("Invalid details");
            return;
        }
        user.push({
            id: uni,
            name: a,
            skill: b,
            mobile: c
        })
        console.log(user);
        history("/");
    }
    return (
        <div className='form-wrp'>
            <Form>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Control type="text" placeholder="Enter Name" required onChange={(e) => setName(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="skill">
                    <Form.Control type="text" placeholder="Enter Skill" required onChange={(e) => setSkill(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="mobile">
                    <Form.Control type="number" placeholder="Enter Number" required onChange={(e) => setMobile(e.target.value)} />
                </Form.Group>
                <Button variant="success" type="submit" onClick={(e) => handleSubmit(e)}>
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default CreateRecord