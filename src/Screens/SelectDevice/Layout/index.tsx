import React from 'react';
// @ts-ignore
import { Link } from 'react-router-dom';

import openbci from '../Assets/openbci.jpg';
import emotiv from '../Assets/emotiv.png';
import '../styles.css';

interface Props {
  loading: string;
  selectDevice:(e: string) => void;
}

export default function Layout ({
  loading,
  selectDevice
} : Props) {
    return (
        <div className="SelectDevice">
            <p className="Title-Text">GBrain</p>
            <div className="content">
                <div className="circlesBorder"></div>
                {loading === '' ? 
                      <div className="options">
                          <p className="Large-Text-Bold">Selecione o dispositivo que irá utilizar:</p>
                          <div>
                            <article className="option" onClick={() => selectDevice("emotiv")}>
                                <img src={emotiv} />
                                <p className="Title-Text-Medium">EPOC+</p>
                            </article>
                            <article className="option" onClick={() => selectDevice("openbci")}>
                                <img src={openbci} />
                                <p className="Title-Text-Medium">OpenBCI</p>
                            </article>
                          </div>
                      </div>
                  :
                  <div>
                    <p className="Large-Text-Bold">{loading}</p>
                  </div>
              }
              <div className="circlesBorder"></div>
          </div>
        </div>
    );
}