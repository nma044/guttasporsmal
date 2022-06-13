import "../App.css";
import React, { useState } from "react";

let questions = [
    "Hvem har mest milf mor?",
    "Hvem har den diggeste søsteren?",
    "Hvem av er mest skitten?",
    "Hvem klarer ikke å chugge?",
    "Hvem har mest draget?",
    "Hvem hadde du vært homo for?",
    "Hvem hadde sett best ut som motsatt kjønn?"
    ];

let challenges = [
    "Chugge resten av drikka",
    "Ta 10 pushups",
    "Dele ut 5 slurker",
    "Utfordre noen til armbakk",
    "Storytime!",
    "Ta av et klesplagg"
    ];
/*
let colors = [
    color:cornflowerblue;
    color:deeppink;
    color:goldenrod;
    color:lightcoral;
    color:lightseagreen;
    color:mediumpurple;
    color:rosybrown;
    color:violet;
]
*/
questions.sort(() => Math.random() - 0.5);
challenges.sort(() => Math.random() - 0.5);

function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";

    document.body.style.background = bgColor;
}


function Snusboks(props){
    random_bg_color();
    const [count, setCount] = useState(0);
    const [isChallenge, setChallenge] = useState(false);
    const [challengeCount, setChallengeCount] = useState(-1);

    const next = () => {
        random_bg_color();
        let numb = Math.random();
        if (numb < 0.1){
            setChallenge(true);
            setChallengeCount(challengeCount + 1)
        }
        else{
            setCount(count + 1);
            setChallenge(false);
        }
    }

    const previous = () => {
        if(count>0) {setCount(count - 1);
        random_bg_color();
        }
    }
    challenges.sort(() => Math.random() - 0.5);
    return(
        <div>
            <button onClick={previous} className="prev">forrige spørsmål</button>
            <button onClick={next} className="next">Neste spørsmål</button>
            <p className="quest">{isChallenge ? "Utfordring!" :"Spørsmål "+ (count+1) + " av 100"}</p>
            <h3 className="quest">{isChallenge ? challenges[challengeCount] : questions[count]}</h3>
        </div>
    )
}


export default Snusboks;