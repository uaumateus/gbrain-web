import React from 'react';
// @ts-ignore
import { Link } from 'react-router-dom';

import '../styles.css';

export default function Layout () {
    return (
        <div className="TrailLevel">
            <p className="Title-Text">GBrain</p>
            <div className="content">
                <div className="circlesBorder"></div>
                <div className="options">
                    <Link to="trailtest" className="option">
                        <p className="Title-Text-Medium">Iniciante</p>
                    </Link>
                    <Link to="trailtest" className="option">
                        <p className="Title-Text-Medium">Avançado</p>
                    </Link>
                </div>
                <div className="circlesBorder"></div>
            </div>
        </div>
    );
}