import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from 'react-router-dom';
import { Button, Table } from 'react-bootstrap';
import user from "./Users";

const Home = () => {
  let navigate = useNavigate();
  const setId = (id, name, skill, mobile) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("skill", skill);
    localStorage.setItem("mobile", mobile);
  }
  const deleted = (id) => {
    let index = user.map((e) => {
      return e.id;
    }).indexOf(id);
    user.splice(index, 1);
    navigate('/');
  }
  return (
    <div className='table-wrp'>
      <Table striped size="sm" className='m-auto'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Skill</th>
            <th>Mobile</th>
          </tr>
        </thead>
        <tbody>
          {
            user.map((item) => {
              return (
                <tr>
                  <td>
                    {item.name}
                  </td>
                  <td>
                    {item.skill}
                  </td>
                  <td>
                    {item.mobile}
                  </td>
                  <td>
                    <Link to={'/edit'}>
                      <Button variant='primary' onClick={(e) => setId(item.id, item.name, item.skill, item.mobile)}>
                        Edit
                      </Button>
                    </Link>
                  </td>
                  <td>
                    {/* <Link to={'/delete'}> */}
                      <Button variant='danger' onClick={(e) => deleted(item.id)}>
                        Delete
                      </Button>
                    {/* </Link> */}
                  </td>

                </tr>
              )
            })
          }
        </tbody>
      </Table>
      <Link to={"/create"} className='d-grid gap-2 create-btn' style={{ "textDecoration": "none" }}>
        <Button variant='success' size="md">Create Record</Button>
      </Link>
    </div >
  )
}

export default Home