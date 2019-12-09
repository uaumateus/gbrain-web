import React, { useState, useEffect } from 'react';
import shuffleArray from '../../utils';
import Layout from './Layout/';
import './styles.css';

export default function TrailTest () {
    const [classUser, setClassUser] = useState<string>("userInitial");
    const [valuesQuestions, setValuesQuestions] = useState<string[]>([]);
    const [currentPhase, setCurrentPhase] = useState<number>(0);
    const [actualPhase, setActualPhase] = useState<string[]>([]);

    useEffect(() => {
        generateNewPhase();
    }, []);

    function generateNewPhase(){
        if(currentPhase === 0){
            var momentValuesQuestions = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
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

    function validadeResponse(e: string){
        setTimeout(() => {
            setClassUser("userInitial");
        }, 700);
        switch(e){ //left: 0, top: 1, right: 2, bottom: 3
            case "left":
                if(actualPhase[0] === valuesQuestions[currentPhase]){
                    console.log("acertou")
                    setCurrentPhase(currentPhase+1);
                    generateNewPhase();
                }else
                    console.log("errou")
            break;
            case "top":
                if(actualPhase[1] === valuesQuestions[currentPhase]){
                    console.log("acertou")
                    setCurrentPhase(currentPhase+1);
                    generateNewPhase();
                }else
                    console.log("errou")
            break;
            case "right":
                if(actualPhase[2] === valuesQuestions[currentPhase]){
                    console.log("acertou")
                    setCurrentPhase(currentPhase+1);
                    generateNewPhase();
                }else
                    console.log("errou")
            break;
            case "bottom":
                if(actualPhase[3] === valuesQuestions[currentPhase]){
                    console.log("acertou")
                    setCurrentPhase(currentPhase+1);
                    generateNewPhase();
                }else
                    console.log("errou")
            break;
        }
    }

    function onKeyPressed(e: any){
        switch(e.keyCode){
            case 37:
                if(classUser === "userInitial"){
                    setClassUser("moveUserLeft");
                    validadeResponse("left");
                }
            break;
            case 38:
                if(classUser === "userInitial"){
                    setClassUser("moveUserTop");
                    validadeResponse("top");
                }
            break;
            case 39:
                if(classUser === "userInitial"){
                    setClassUser("moveUserRight");
                    validadeResponse("right");
                }
            break;
            case 40:
                if(classUser === "userInitial"){
                    setClassUser("moveUserBottom");
                    validadeResponse("bottom");
                }
            break;
        };
    }

    return (
        <Layout
            actualPhase={actualPhase}
            onKeyPressed={onKeyPressed}
            classUser={classUser}
        />
    );
}