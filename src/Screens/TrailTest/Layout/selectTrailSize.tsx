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

    return (
        <div className="selectTrailSize">
            <div className="phaseInfo">
                <div className="circlesBorder"></div>
                <div className="content">
                    <h1 className="Title-Text-Medium">Duracao</h1>
                    <p className="Large-Text-Regular">A trilha pode ser mais curta ou mais longa, dependendo da sua escolha.</p>
                    <p className="Large-Text-Bold">Defina quantos elementos tera a trilha:</p>
                </div>
            </div>
        </div>
    );

}