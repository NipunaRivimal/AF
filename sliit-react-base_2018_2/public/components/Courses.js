import React,{Component} from 'react';
import {Container,ListGroup,ListGroupItem,Button} from 'reactstrap';

class Courses extends Component{
    constructor(props){
        super(props);
        this.state ={
            courses :[],
            subjects:[]
        }
    }

    componentDidMount() {
        fetch('http://localhost:3000/api/courses/get-courses')
            .then(res => {
                return res.json();
            })
            .then(json  => {
                console.log(json);
                this.setState({
                    courses: json
                })
            })
    };
    render(){
        return(
            <Container>
                    <Button>Add Course</Button>
                <ListGroup>
                    {this.state.courses.map(courses => (
                        <ListGroupItem key={courses.id}>

                            <h2>{courses.name}</h2>
                            <h6>Code - {courses.code}</h6>
                            <h6>Pass Mark - {courses.passMark}</h6>
                            <h6>Lecturer in Charge - {courses.lecturerInCharge}</h6>
                            <h6>Subjects - {courses.subjects} </h6>


                        </ListGroupItem>
                    ))}
                </ListGroup>

            </Container>
        );
    }
}

export default Courses;