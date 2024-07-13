import { useState,useRef } from 'react';

import '../styles/Header.css'

export default function Header() {

    const [isExecuted, setIsExecuted] = useState(false);
    
    const welcomeBull = useRef(null)
    const yellowBubble = useRef(null)
    const chatBull = useRef(null)
    const profChen = useRef(null)

    setTimeout(() => {
        welcomeBull.current.style.display = "none";
    }, 10000);     
    const bubbleClickYellow = () => {
        isExecuted ? null : (
        setIsExecuted(true),
        yellowBubble.current.style.boxShadow = "2px 4px 4px rgba(0, 0, 0, 0.2) inset, 4px 8px 8px rgba(0, 0, 0, 0.3) inset,6px 12px 12px rgba(0, 0, 0, 0.2) inset",
        welcomeBull.current.style.display = "none",
        chatBull.current.style.display = "flex",
        profChen.current.style.display = "flex",

        setTimeout(() => {
            chatBull.current.style.display = "none";
            profChen.current.style.display = "none";
        }, 9000));
    };
    const handleClickCloseProf = () => {
        chatBull.current.style.display = "none";
        profChen.current.style.display = "none";
    };
    const handleClickCloseWelcome = () => {
        welcomeBull.current.style.display = "none";
    };

    return (
        <>
            <div className="header">
                <div className="cercles-white-blue">
                    <div className="cercle-blanc">
                        <div className="cercle-int-bleu">
                            <div id='profChen' ref={profChen} />
                        </div>
                    </div>
                </div>
                <div className='cercle-line'>
                    <div className="cercles-3">
                        <div className="mini-cercle" />
                        <div className="mini-cercle" id='yellowBubble' ref={yellowBubble} onClick={bubbleClickYellow} />
                        <div className="mini-cercle" />
                    </div>
                    <div id="chatBull" ref={chatBull}>
                            <p>Prof.Chen:</p>
                            <p>Salutations, dresseur ! Félicitations pour avoir terminé le Pokédex! Continuez à explorer et à partager votre amour pour les Pokémon !</p>
                            <button type='button' className='icon-close-chat' id='closeProf' onClick={handleClickCloseProf}>&#x2716;</button>
                        </div>
                        <div id="welcomeBull" ref={welcomeBull}>
                            <p>Un nouveau message a été enregistré sur votre Pokédex !</p>
                            <p>Cliquez sur le bouton lumineux*</p>
                            <button type='button' className='icon-close-chat' id='closeWelcome' onClick={handleClickCloseWelcome}>&#x2716;</button>
                        </div>
                    <div className="hr-phone"><hr/><hr/><hr/></div>
                </div>
                <div className="title-header"><h1>P O K E D E X</h1></div>
            </div>
            <div className="title-mob-tablette"><h2>P O K E D E X</h2></div>
        </>
    )
}