import { useState } from 'react';

import '../styles/Header.css'

export default function Header() {
    // 10 secondes après l'ouverture de la page, si la yellowBubble n'a pas été 
    // cliquée, le message disparaît
    setTimeout(() => {
        welcomeBull.style.display = "none";
    }, 10000);
    // Création d'une constate qui va vérifie si le clique a déja était éffectuer pour ne pas le répeter 
    const [isExecuted, setIsExecuted] = useState(false);
    const bubbleClickYellow = () => {
        // Verifie si le State est vrai, si oui il ne renvoie rien, si non il renvoie le code*
        isExecuted ? null : (
        setIsExecuted(true),
        // La div yellowBull retrouve la même apparence que les autres boutons
        yellowBubble.style.boxShadow = "2px 4px 4px rgba(0, 0, 0, 0.2) inset, 4px 8px 8px rgba(0, 0, 0, 0.3) inset,6px 12px 12px rgba(0, 0, 0, 0.2) inset",
        // Le message de bienvenue disparaît 
        welcomeBull.style.display = "none",
        // L'image du Professeur Chen et son message apparaissent
        chatBull.style.display = "flex",
        profChen.style.display = "flex",
        // 9 secondes apres l'appel de la fonction le Prof.chen et son message disparaissent
        setTimeout(() => {
            chatBull.style.display = "none";
            profChen.style.display = "none";
        }, 9000));
    };
    // Au clique la fenetre de discussion et l'image du ProfChen disparaissent
    const handleClickCloseProf = () => {
        chatBull.style.display = "none";
        profChen.style.display = "none";
    };
    // Au clique la fenetre de discussion welcome disparait
    const handleClickCloseWelcome = () => {
        welcomeBull.style.display = "none";
    };

    return (
        <>
            <div className="header">
                <div className="cercles-white-blue">
                    <div className="cercle-blanc">
                        <div className="cercle-int-bleu">
                            <div id='profChen'></div>
                        </div>
                    </div>
                </div>
                <div className='cercle-line'>
                    <div className="cercles-3">
                        <div className="mini-cercle"></div>
                        <div className="mini-cercle" id='yellowBubble' onClick={bubbleClickYellow} ></div>
                        <div className="mini-cercle"></div>
                    </div>
                    <div id="chatBull">
                            <p>Prof.Chen:</p>
                            <p>Salutations, dresseur ! Félicitations pour avoir terminé le Pokédex! Continuez à explorer et à partager votre amour pour les Pokémon !</p>
                            <button type='button' className='icon-close-chat' id='closeProf' onClick={handleClickCloseProf}>&#x2716;</button>
                        </div>
                        <div id="welcomeBull">
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