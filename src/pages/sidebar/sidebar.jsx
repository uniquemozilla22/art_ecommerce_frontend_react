import React , {  useState  }  from 'react';
import classes from "./sidebar.module.css";
import {Link} from "react-router-dom";
import { Accordion } from "react-bootstrap";

const Sidebar = () => {

  return (
    <>
    <Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header>Category</Accordion.Header>
    <Accordion.Body>
    <ul className={classes.categoryDropdown}>
          <li><Link to="/dashboard" className='w-100'>Category 1</Link></li>
          <li><Link to="/dashboard" className='w-100'>Category 2</Link></li>
          <li><Link to="/dashboard" className='w-100'>Category 3</Link></li>
          <li><Link to="/dashboard" className='w-100'>Category 4</Link></li>
          <li><Link to="/dashboard" className='w-100'>Category 5</Link></li>
      </ul>
    </Accordion.Body>
  </Accordion.Item>
  </Accordion>
     
    </>
  );
};

export default Sidebar;
