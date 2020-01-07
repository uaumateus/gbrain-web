import React from 'react';
import '../styles.css';

import Feedback from '../../../Components/Feedback';

interface Props {
  trailSize: number;
  setTrailSize: (e: number) => void;
  setStartTrail: (e: true) => void;
}

export default function SelectTrailSize ({
  trailSize,
  setTrailSize,
  setStartTrail
} : Props) {

    function upTrailSize() {
        setTrailSize(trailSize + 1);
    }

    function downTrailSize() {
        if(trailSize > 4)
            setTrailSize(trailSize - 1);
    }

    function startTrail() {
        setStartTrail(true);
    }

    return (
        <div className="selectTrailSize">
            <div className="phaseInfo">
                <div className="circlesBorder"></div>
                <div className="content">
                    <h1 className="Title-Text-Medium">Duração</h1>
                    <p className="Large-Text-Regular">A trilha pode ser mais curta ou mais longa, dependendo da sua escolha.</p>
                    <p className="Large-Text-Bold">Defina quantos elementos terá a trilha:</p>
                    <div className="amountControll">
                        <article className="arrowControll" onClick={downTrailSize}>
                            <i className="material-icons">arrow_downward</i>
                        </article>
                        <article className="valueAmount">
                            <p className="Large-Text-Regular">{trailSize}</p>
                        </article>
                        <article className="arrowControll" onClick={upTrailSize}>
                            <i className="material-icons">arrow_upward</i>
                        </article>
                    </div>
                    <button className="submit Large-Text-Regular" onClick={startTrail}>Iniciar</button>
                </div>
            </div>
        </div>
    );

}