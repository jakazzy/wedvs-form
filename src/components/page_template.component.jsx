import Card from "react-bootstrap/Card";
import Root from "./stepper/stepperRoot";


const PageTemplate = (props) => {
    return (
        <Card 
        className="shadow-lg" 
        style={{ width: "50vw", height: "64vh", margin: "10rem auto"}} 
        key={props.userData.step} 
        step={props.userData.step}>
            <Card.Header as="h5">Featured</Card.Header>
            <Root key={ props.userData.step }/>
            <Card.Header as="h4" 
            style={{ backgroundColor: '#bef4da', color: "#7ba69c" }} 
            className="text-center">Step - {props.userData.step}
            </Card.Header>
            <Card.Body>
                { props.children }

            </Card.Body>
        </Card>
    )
}

export default PageTemplate
