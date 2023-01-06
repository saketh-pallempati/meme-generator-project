import TrollFace from '../Image/TrollFace.png';

function Header() {
    return (
        <header className="header">
            <img src={TrollFace} alt="" className = "header--img"/>
            <h2 className = "header--title">Meme Generator </h2>
            <h4 className = "header--sub">React Project </h4>
        </header>
    );
}
export default Header;