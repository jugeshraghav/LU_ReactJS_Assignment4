import React,{useState} from 'react'
import Icon from "./Components/Icon"


// import react-toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import reactstrap
import {Container,Card,CardBody,Row,Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

import "./style.css";

const tiktacArray = new Array(9).fill("") 
const App = () => {
    let [isCross,setISCross] = useState(true)
    let [winMessage,SetWinMessage] = useState("")

    const palyAgain = () => {
        setISCross(true)
        SetWinMessage("")
        tiktacArray.fill("")
    }

    const findwinner=()=>{
       if(tiktacArray[0]===tiktacArray[1] && tiktacArray[0]===tiktacArray[2] && tiktacArray[0]!==""){
           SetWinMessage(tiktacArray[0]+" has won")
       }
       else if(tiktacArray[3]===tiktacArray[4] && tiktacArray[3]===tiktacArray[5] && tiktacArray[3]!==""){
        SetWinMessage(tiktacArray[3]+" has won")
       }
       else if(tiktacArray[6]===tiktacArray[7] && tiktacArray[6]===tiktacArray[8] && tiktacArray[6]!==""){
        SetWinMessage(tiktacArray[6]+" has won")
       }
       else if(tiktacArray[0]===tiktacArray[3] && tiktacArray[0]===tiktacArray[6] && tiktacArray[0]){
        SetWinMessage(tiktacArray[0]+" has won")
       }
       else if(tiktacArray[1]===tiktacArray[4] && tiktacArray[1]===tiktacArray[7] && tiktacArray[1]){
        SetWinMessage(tiktacArray[1]+" has won")
       }
       else if(tiktacArray[2]===tiktacArray[5] && tiktacArray[2]===tiktacArray[8] && tiktacArray[2]){
        SetWinMessage(tiktacArray[2]+" has won")
       }
       else if(tiktacArray[2]===tiktacArray[4] && tiktacArray[2]===tiktacArray[6] && tiktacArray[2]){
        SetWinMessage(tiktacArray[2]+" has won")
       }
       else if(tiktacArray[0]===tiktacArray[4] && tiktacArray[0]===tiktacArray[8] && tiktacArray[0]){
        SetWinMessage(tiktacArray[0]+" has won")
       }
    }


    const changeItems =(index) => {
        if(winMessage){
            return toast("Game has already got over",{type:"sucess"})
        }
        if(tiktacArray[index]===""){
            tiktacArray[index] = isCross ? "cross" : "circle"
            setISCross(!isCross)
        }
        else{
            return toast("Open your eyes dude where are you tapping",{type:"error"})
        }
        findwinner();
    }
  
    return(
        <Container className="p-5">
            <ToastContainer position="bottom-center" ></ToastContainer>
            <Row>
                <Col md={6} className="offset-md-3" >

                    {
                        winMessage? (
                            <div>
                                <h1>
                                {winMessage}
                                </h1>
                                <button onClick={ palyAgain} >Play Again</button>
                            </div>
                        ) : (
                            <h1>
                                {isCross? "Cross's Turn":"Circle's Turn"}
                            </h1>
                        )
                    }

                    <div className="grid">
                        {tiktacArray.map((value,index)=>(
                            <Card onClick={()=>changeItems(index)}>
                                <CardBody className="box">
                                    <Icon choice={tiktacArray[index]}/>
                                </CardBody>
                            </Card>
                        ))}
                    </div>

                </Col>
            </Row>
        </Container>
    )
}

export default App

