import React from 'react';
// @ts-ignore
import { Link } from 'react-router-dom';

import '../styles.css';

export default function Layout () {
    return (
        <div className="Home">
            <p className="Title-Text">GBrain</p>
            <div className="content">
                <div className="circlesBorder"></div>
                <div className="options">
                    <Link to="trailtest" className="option">
                        <p className="Title-Text-Medium">Teste de Trilha</p>
                    </Link>
                    <Link to="trailtest" className="option">
                        <p className="Title-Text-Medium">Treinar</p>
                    </Link>
                    <Link to="trailtest" className="option">
                        <p className="Title-Text-Medium">Opções</p>
                    </Link>
                </div>
                <div className="circlesBorder"></div>
            </div>
        </div>
    );
}