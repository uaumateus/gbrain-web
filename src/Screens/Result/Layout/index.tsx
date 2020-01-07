import React from 'react';
// @ts-ignore
import { withRouter } from 'react-router-dom';

import '../styles.css';

function Layout (props: any) {

    function goHome (){
        props.history.push("/");
    }

    return (
        <div className="Result">
            <div className="content">
                <div className="circlesBorder"></div>
                <div className="options">
                    <p className="Title-Text-Medium">Parabéns</p>
                    <p className="Large-Text-Bold">Você conseguiu concluir a trilha!</p>
                    <button className="submit Large-Text-Regular" onClick={goHome}>Início</button>
                </div>
                <div className="circlesBorder"></div>
            </div>
        </div>
    );
}

export default withRouter(Layout);