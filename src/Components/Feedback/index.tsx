import React from 'react';
import './styles.css';

interface Props {
    feedback: string;
}

function Feedback ({ feedback } : Props) {
    return (
        <div className="Feedback">
            {feedback === "check" &&
                <div className="check">
                    <i className="material-icons">check</i>
                </div>
            }
            {feedback === "error" &&
                <div className="error">
                    <i className="material-icons">close</i>
                </div>
            }
        </div>
    );
}

export default Feedback;