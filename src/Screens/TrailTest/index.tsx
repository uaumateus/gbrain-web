import React, { useState, useEffect } from 'react';
import shuffleArray from '../../utils';
import Layout from './Layout';
import './styles.css';
import SelectTrailSize from './Layout/selectTrailSize';

export default function TrailTest (props: any) {
    const [trailSize, setTrailSize] = useState<number>(4);
    const [startTrail, setStartTrail] = useState<boolean>(false);
    const [classUser, setClassUser] = useState<string>("");
    const [valuesQuestions, setValuesQuestions] = useState<string[]>([]);
    const [currentPhase, setCurrentPhase] = useState<number>(0);
    const [actualPhase, setActualPhase] = useState<string[]>([]);
    const [feedback, setFeedback] = useState<string>("");

    useEffect(() => {
        generateNewPhase();
    }, [startTrail]);

    function generateNewPhase(){
        if(startTrail){
            if(currentPhase === 0){
                var momentValuesQuestions = [];
                if(props.match.params.type === "beginner"){
                    for(var i = 1; i <= trailSize; i++){
                        momentValuesQuestions.push(i.toString());
                    }
                }
                else if(props.match.params.type === "advanced"){
                    const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "X", "W", "Y", "Z"];
                    let auxLetter = 0, auxNumber = 1;
                    for(var i = 0; i < trailSize; i++){
                        if(i > 0 && i % 2 !== 0){
                            momentValuesQuestions[i] = letters[auxLetter];
                            auxLetter++;
                        }else{
                            momentValuesQuestions[i] = auxNumber.toString();
                            auxNumber++;
                        }
                    }
                }
                console.log(momentValuesQuestions)
                setValuesQuestions(momentValuesQuestions);
                let momentArray = [momentValuesQuestions[currentPhase], momentValuesQuestions[currentPhase+1], momentValuesQuestions[currentPhase+2], momentValuesQuestions[currentPhase+3]];
                setActualPhase(shuffleArray(momentArray));
            }
            else{
                if(currentPhase <= valuesQuestions.length-4){
                    let momentArray = [valuesQuestions[currentPhase], valuesQuestions[currentPhase+1], valuesQuestions[currentPhase+2], valuesQuestions[currentPhase+3]];
                    setActualPhase(shuffleArray(momentArray));
                }else
                    setActualPhase(shuffleArray(actualPhase));
            }
        }
    }

    function validadeResponse(e: string){
        setTimeout(() => {
            setClassUser("");
        }, 500);
        var feedbackValue = null;
        switch(e){ //left: 0, top: 1, right: 2, bottom: 3
            case "left":
                if(actualPhase[0] === valuesQuestions[currentPhase]){
                    feedbackValue = true;
                    setTimeout(() => {
                        setCurrentPhase(currentPhase+1);
                        generateNewPhase();
                    }, 3000);
                }else
                    feedbackValue = false;
            break;
            case "top":
                if(actualPhase[1] === valuesQuestions[currentPhase]){
                    feedbackValue = true;
                    setTimeout(() => {
                        setCurrentPhase(currentPhase+1);
                        generateNewPhase();
                    }, 3000);
                }else
                    feedbackValue = false;
            break;
            case "right":
                if(actualPhase[2] === valuesQuestions[currentPhase]){
                    feedbackValue = true;
                    setTimeout(() => {
                        setCurrentPhase(currentPhase+1);
                        generateNewPhase();
                    }, 3000);
                }else
                    feedbackValue = false;
            break;
            case "bottom":
                if(actualPhase[3] === valuesQuestions[currentPhase]){
                    feedbackValue = true;
                    setTimeout(() => {
                        setCurrentPhase(currentPhase+1);
                        generateNewPhase();
                    }, 3000);
                }else
                    feedbackValue = false;
            break;
        }
        if(feedbackValue)
            setTimeout(() => {
                setFeedback("check");
            }, 500);
        else
            setTimeout(() => {
                setFeedback("error");
            }, 500);

        setTimeout(() => {
            setFeedback("");
        }, 3000);
    }

    function onKeyPressed(e: any){
        switch(e.keyCode){
            case 37:
                if(classUser === ""){
                    setClassUser("moveUserLeft");
                    validadeResponse("left");
                }
            break;
            case 38:
                if(classUser === ""){
                    setClassUser("moveUserTop");
                    validadeResponse("top");
                }
            break;
            case 39:
                if(classUser === ""){
                    setClassUser("moveUserRight");
                    validadeResponse("right");
                }
            break;
            case 40:
                if(classUser === ""){
                    setClassUser("moveUserBottom");
                    validadeResponse("bottom");
                }
            break;
        };
    }

    return (
        <>
            {startTrail ?
                <Layout
                    actualPhase={actualPhase}
                    onKeyPressed={onKeyPressed}
                    classUser={classUser}
                    currentPhase={currentPhase}
                    valuesQuestions={valuesQuestions}
                    feedback={feedback}
                />
            :
                <SelectTrailSize 
                    trailSize={trailSize}
                    setTrailSize={setTrailSize}
                    setStartTrail={setStartTrail}
                />
            }
        </>
    );
}