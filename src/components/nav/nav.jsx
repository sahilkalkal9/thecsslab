import Image from "next/image"
import "../../app/globals.scss"
import "./nav.scss"
import logoLight from "../../images/logo-dark.png"

export default function Nav() {
    return (
        <div className="Nav">
            <div className="nav-box">
                <div className="logo-box">
                    <Image className="logo-img" src={logoLight} />
                    <p className="logoText">
                        The <br /> <span className="cssT">CSS</span> Lab
                    </p>
                </div>
            </div>
        </div>
    )
}