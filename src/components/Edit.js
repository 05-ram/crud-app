import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import user from './Users';
import { Button, Form } from 'react-bootstrap';

const EditRecord = () => {
    let history = useNavigate();
    const [name, setName] = useState("");
    const [skill, setSkill] = useState("");
    const [mobile, setMobile] = useState("");
    const [id, setId] = useState("");

    let index = user.map((e) => {
        return e.id
    }).indexOf(id);
    console.log(index);

    useEffect(() => {
        setId(localStorage.getItem("id"));
        setName(localStorage.getItem("name"));
        setSkill(localStorage.getItem("skill"));
        setMobile(localStorage.getItem("mobile"));
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === "" || skill === "" || mobile === "") {
            alert("Invalid details");
            return;
        }

        let a = user[index];
        a.id = id;
        a.name = name;
        a.mobile = mobile;
        a.skill = skill;
        console.log(`id: ${id} name: ${name} mobile: ${mobile} skill: ${skill}`)
        history("/");
    }


    return (
        <div className='form-wrp'>
            <Form>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Control type="text" placeholder="Enter Name" required onChange={(e) => setName(e.target.value)} value={name} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="skill">
                    <Form.Control type="text" placeholder="Enter Skill" required onChange={(e) => setSkill(e.target.value)} value={skill} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="mobile">
                    <Form.Control type="number" placeholder="Enter Number" required onChange={(e) => setMobile(e.target.value)} value={mobile} />
                </Form.Group>
                <Button variant="success" type="submit"
                    onClick={(e) => handleSubmit(e)}
                >
                    Update
                </Button>
            </Form>
        </div>
    )
}

export default EditRecord