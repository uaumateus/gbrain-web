import React from 'react';
import '../styles.css';

interface Props {
  actualPhase: string[];
  onKeyPressed: (e: any) => void;
  classUser: string;
}

export default function Layout ({
  actualPhase,
  onKeyPressed,
  classUser
} : Props) {

    return (
        <div tabIndex={0} className="Home" onKeyDown={(e) => onKeyPressed(e)} >
            <div className="trails">
                <div><p></p></div>
                <div><p>{actualPhase[1]}</p></div>
                <div><p></p></div>
                <div><p>{actualPhase[0]}</p></div>
                <div><p className={classUser}>o</p></div>
                <div><p>{actualPhase[2]}</p></div>
                <div><p></p></div>
                <div><p>{actualPhase[3]}</p></div>
                <div><p></p></div>
            </div>
        </div>
    );

}