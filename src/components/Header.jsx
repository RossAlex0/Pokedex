import '../styles/Header.css'

export default function Header() {
    return (
        <>
            <div className="header">
                <div className="cercles-white-blue">
                    <div className="cercle-blanc"><div className="cercle-int-bleu"></div></div>
                </div>
                <div className='cercle-line'>
                    <div className="cercles-3">
                        <div className="mini-cercle"></div>
                        <div className="mini-cercle"></div>
                        <div className="mini-cercle"></div>
                    </div>
                    <div className="hr-phone"><hr/><hr/><hr/></div>
                </div>
                <div className="title-header"><h1>P O K E D E X</h1></div>
            </div>
            <div className="title-mob-tablette"><h2>P O K E D E X</h2></div>
        </>
    )
}