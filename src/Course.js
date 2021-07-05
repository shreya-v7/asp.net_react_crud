import React,{Component} from 'react';
import {Table} from 'react-bootstrap';

import {Button,ButtonToolBar} from 'react-bootstrap';
import { AddCourseModal } from './AppCourseModal';

export class Course extends Component{

    constructor(props){
        super(props);
        this.state={crs:[], addModalShow:false}
    }

    refreshList(){
        fetch(process.env.REACT_APP_API+'course')
        .then(response=>response.json())
        .then(data=>{
            this.setState({crs:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    render(){
        const {crs}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        return(
            <div>
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <th>Course ID</th>
                        <th>Course Name</th>
                        <th>Options</th>
                    </thead>
                    <tbody>
                        {crs.map(c=>
                            <tr key={c.CourseId}>
                                <td>{c.CourseId}</td>
                                <td>{c.CourseName}</td>
                                <td>Edit/Delete</td>
                            </tr>
                            )}
                    </tbody>
                </Table>

                <ButtonToolBar>
                    <Button variant='primary' onClick={()=>this.setState({addModalShow:true})}>
                        Add Course
                    </Button>
                    <AddCourseModal show={this.state.addModalShow} onHide={addModalClose}></AddCourseModal>
                </ButtonToolBar>
            </div>

            
        )
    }

}