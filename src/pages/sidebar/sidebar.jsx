import React , {  useState  }  from 'react';
import classes from "./sidebar.module.css";
import {Link} from "react-router-dom";
import { Accordion } from "react-bootstrap";
import FeatherIcon from 'feather-icons-react';

const Sidebar = () => {

  return (
    <>
    <div className="filterBar">

    <ul className={classes.filterList}>
        <li><FeatherIcon icon="eye" /> <span>View All</span></li>
        <li><FeatherIcon icon="list" /> <span>Products</span></li>
        <li><FeatherIcon icon="users" /> <span>Artist</span></li>
    </ul>
    
    

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



    <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
            <Accordion.Header>Tags</Accordion.Header>
            <Accordion.Body>
                <ul className={classes.tagsList}>
                    <li>Tag 1</li>
                    <li>Tag 1</li>
                    <li>Tag 1</li>
                    <li>Tag 1</li>
                    <li>Tag 1</li>
                    <li>Tag 1</li> 
                </ul>
            </Accordion.Body>
        </Accordion.Item>
    </Accordion>
    </div>



   
     
    </>
  );
};

export default Sidebar;
