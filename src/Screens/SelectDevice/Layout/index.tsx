import React from 'react';
// @ts-ignore
import { Link } from 'react-router-dom';

import openbci from '../Assets/openbci.jpg';
import emotiv from '../Assets/emotiv.png';
import '../styles.css';

interface Props {
  loading: string;
  selectDevice:(e: string) => void;
  getUserLogin: () => void;
  isAuthorized: () => void;
}

export default function Layout ({
  loading,
  selectDevice,
  getUserLogin,
  isAuthorized
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
                  <div className="loading">
                    <p className="Large-Text-Bold">{loading}</p>
                    {loading !== 'Conectando dispositivo' &&
                      <>
                        {loading === "Nenhum usuário conectado. Entre com sua conta no EmotivApp e tente novamente!" &&
                          <button className="submit Large-Text-Regular" onClick={getUserLogin}>Continuar</button>
                        }
                        {loading === "Por favor autorize o GBrain no seu EmotivApp para proseguir." &&
                          <button className="submit Large-Text-Regular" onClick={isAuthorized}>Continuar</button>
                        }
                      </>
                    }
                  </div>
              }
              <div className="circlesBorder"></div>
          </div>
        </div>
    );
}