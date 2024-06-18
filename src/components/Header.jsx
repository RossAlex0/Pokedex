import '../styles/Header.css'

export default function Header() {
    const bubbleClickRed = () => {
        // La div yellowBull retrouve la même apparence que les autres boutons
        yellowBubble.style.boxShadow = "4px 8px 4px 2px rgba(0, 0, 0, 0.452) inset";
        // Le message de bienvenue disparaît 
        welcomeBull.style.display = "none";
        // L'image du Professeur Chen et son message apparaissent
        chatBull.style.display = "flex";
        profChen.style.display = "flex";
        // 9 secondes apres l'appel de la fonction le Prof.chen et son message disparaissent
        setTimeout(() => {
            chatBull.style.display = "none";
            profChen.style.display = "none";
        }, 9000)
    };

    return (
        <>
            <div className="header">
                <div className="cercles-white-blue">
                    <div className="cercle-blanc">
                        <div className="cercle-int-bleu">
                            <div id='profChen'>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='cercle-line'>
                    <div className="cercles-3">
                        <div className="mini-cercle"></div>
                        <div className="mini-cercle" id='yellowBubble' onClick={bubbleClickRed}></div>
                        <div className="mini-cercle"></div>
                    </div>
                    <div id="chatBull">
                            <p>Prof.Chen:</p>
                            <p>Salutations, dresseur ! Félicitations pour avoir terminé le Pokédex! Continuez à explorer et à partager votre amour pour les Pokémon !</p>
                        </div>
                        <div id="welcomeBull">
                            <p>Vous avez un nouveau message sur votre répondeur Pokédex !</p>
                            <p>Cliquez sur le boutton lumineu*</p>
                        </div>
                    <div className="hr-phone"><hr/><hr/><hr/></div>
                </div>
                <div className="title-header"><h1>P O K E D E X</h1></div>
            </div>
            <div className="title-mob-tablette"><h2>P O K E D E X</h2></div>
        </>
    )
}