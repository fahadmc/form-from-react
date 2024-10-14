

import logo from "../../assets/w3schools_logo_500_04AA6D.webp"
import search from "../../assets/download (5).svg/"
import plus from "../../assets/download (6).svg/"
import graduate from "../../assets/download (1).svg/"
import spaces from "../../assets/download (3).svg/"
import get from"../../assets/download (7).svg/"
import './Header.css'

function Header() {
    return (
        <div className="parent">
            <div className="parent1">
            {/* <div className="div1"> */}
                <nav >
                    <ul className="ul1">
                        <img className="img1" src={logo} alt="Task1/src/assets/w3schools_logo_500_04AA6D.webp" />
                        <li className="li5">Tutorial<select></select></li>
                        <li className="li5">Exercise<select></select></li>
                        <li className="li5">Certificates<select></select></li>
                        <li className="li5">Services<select></select></li>
                        <div className="searchdiv">
                            <li> <input type="text" className="search" placeholder="Search..." />
                                <img className="img2" src={search} alt="Task1/src/assets/download (5).svg" /></li>
                        </div>

                    </ul>
                </nav>
            {/* </div> */}
            <div className="div2">
                <nav className="nav2">
                    <ul className="ul2">
                        <li className="li1">
                            <img src={plus} alt="Task1/src/assets/download (6).svg" />
                             Plus
                        </li>
                        <li className="li2">
                            <img src={graduate} alt="Task1/src/assets/download (1).svg" />
                            For Teachers
                        </li>
                        <li className="li3">
                            <img className="imgspace" src={spaces} alt="Task1/src/assets/download (3).svg" />
                            Spaces
                        </li>
                        <li className="li4">
                            <img src={get} alt="Task1/src/assets/download (7).svg" />
                            Get Certified
                        </li>
                        <div className="divbtn">
                        <button className="btn1">
                            Sign Up
                        </button>
                        <button className="btn2">Log in</button></div>
                    </ul>

                </nav>
                </div>

            </div>
            <nav>
                <ul className="ul3">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JAVASCRIPT</li>
                    <li>SQL</li>
                    <li>PYTHON</li>
                    <li>JAVA</li>
                    <li>PHP</li>
                    <li>HOW TO</li>
                    <li>W3.CSS</li>
                    <li>C</li>
                    <li>C++</li>
                    <li>C#</li>
                    <li>BOOTSTRAP</li>
                    <li>REACT</li>
                    <li>MYSQL</li>
                    <li>JQUERY</li>
                    <li>EXCEL</li>
                    <li>XML</li>
                    <li>DJANGO</li>
                    <li>NUMPY</li>
                    <li>PANDAS</li>
                    <li>NODE JS</li>
                </ul>
            </nav>
        </div>
    )
}
export default Header