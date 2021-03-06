import Card from "react-bootstrap/Card";
import Root from "./stepper/stepperRoot";
import ChatIcon from './chat_icon/chat_icon.component'


const PageTemplate = (props) => {
    return (
        <Card 
        className="shadow-lg" 
        style={{ width: "50vw", minHeight: "72vh", margin: "8rem auto", borderRadius: '0.5rem', position: 'relative'}} 
        key={props.userData.step} 
        step={props.userData.step}>
            <div className="chat-container" 
            ><ChatIcon /></div>
            <Root key={ props.userData.step }
            step={props.userData.step}
            />
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
