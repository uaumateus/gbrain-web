import React from 'react';
import '../styles.css';

import Feedback from '../../../Components/Feedback';

interface Props {
  actualPhase: string[];
  onKeyPressed: (e: any) => void;
  classUser: string;
  currentPhase: number;
  valuesQuestions: string[];
  feedback: string;
}

export default function Layout ({
  actualPhase,
  onKeyPressed,
  classUser,
  currentPhase,
  valuesQuestions,
  feedback
} : Props) {

    return (
        <div tabIndex={0} className="TrailTest" onKeyDown={(e) => onKeyPressed(e)} >
            {feedback !== "" &&
              <Feedback feedback={feedback}/>
            }
            <div className="phaseInfo">
              <div className="circlesBorder"></div>
              <div className="content">
                <h1 className="Title-Text-Medium">Fase {currentPhase+1}</h1>
                
                {currentPhase === 0 ?
                  <p className="Large-Text-Regular">Pense na posição do número 1.</p>
                :
                  <>
                    <p className="Large-Text-Regular">Pense na posição do próximo elemento da sequência.</p>
                    <p className="Large-Text-Bold">O último selecionado foi:</p>
                    <p className="PrevItem-Text-Regular">{valuesQuestions[currentPhase-1]}</p>
                  </>
                }
              </div>
              <div className="circlesBorder"></div>
            </div>
            <div className="trails">
                <div><p></p></div>
                <div className="cardOption"><p className="Card-Text-Bold">{actualPhase[1]}</p></div>
                <div><p></p></div>
                <div className="cardOption"><p className="Card-Text-Bold">{actualPhase[0]}</p></div>
                <div className="cardUser">
                  <div><p></p></div>
                  <div>
                    {classUser === "moveUserTop" ?
                      <i className="material-icons arrowActive">arrow_upward</i>
                    :
                      <i className="material-icons">arrow_upward</i>
                    }
                  </div>
                  <div><p></p></div>
                  <div>
                    {classUser === "moveUserLeft" ?
                      <i className="material-icons arrowActive">arrow_back</i>
                    :
                      <i className="material-icons">arrow_back</i>
                    }
                  </div>
                  <div><p className="userInitial"></p></div>
                  <div>
                    {classUser === "moveUserRight" ?
                      <i className="material-icons arrowActive">arrow_forward</i>
                    :
                      <i className="material-icons">arrow_forward</i>
                    }
                  </div>
                  <div><p></p></div>
                  <div>
                    {classUser === "moveUserBottom" ?
                      <i className="material-icons arrowActive">arrow_downward</i>
                    :
                      <i className="material-icons">arrow_downward</i>
                    }
                  </div>
                  <div><p></p></div>
                </div>
                <div className="cardOption"><p className="Card-Text-Bold">{actualPhase[2]}</p></div>
                <div><p></p></div>
                <div className="cardOption"><p className="Card-Text-Bold">{actualPhase[3]}</p></div>
                <div><p></p></div>
            </div>
        </div>
    );

}