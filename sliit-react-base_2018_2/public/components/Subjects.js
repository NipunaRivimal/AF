import React,{Component} from 'react';
import {Container,ListGroup,ListGroupItem,Button} from 'reactstrap';

class Subjects extends Component{
    constructor(props){
        super(props);
        this.state ={
            subjects:[]
        }
    }

    componentDidMount() {
        fetch('http://localhost:3000/api/subjects/get-subjects')
            .then(res => {
                return res.json();
            })
            .then(json  => {
                console.log(json);
                this.setState({
                    subjects: json
                })
            })
    };
    render(){
        return(
            <Container>
                <Button>Add Subject</Button>
                <ListGroup>
                    {this.state.subjects.map(subjects => (
                        <ListGroupItem key={subjects.id}>

                            <h2>{subjects.name}</h2>
                            {subjects.description}
                            <h6>Rs.{subjects.amount}</h6>

                        </ListGroupItem>
                    ))}
                </ListGroup>
            </Container>
        );
    }
}

export default Subjects;