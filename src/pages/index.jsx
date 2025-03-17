import Nav from "@/components/nav/nav"
import "../app/globals.scss"
import Image from "next/image"
import heroImg from "../images/hero-img.png"
import fc from "../images/1.webp"
import tc from "../images/2.webp"
import thc from "../images/3.webp"
import foc from "../images/4.webp"

export default function Home() {
    return (
        <div className="Home">
            <div className="home-hero">
                <Nav />

                <div className="home-hero-box">
                    <div className="home-hero-left">
                        {/* <p className="subtext">
                            Welcome to The CSS Lab
                        </p> */}
                        <p className="tagline">
                            The <span className="gradient-text" >Ultimate</span> Lab for Front End <span className="gradient-text t2">Wizards</span>
                        </p>
                        <p className="subTagline">
                            Let's turn stylesheets into art
                        </p>
                        <button className="go">
                            Let's go!!
                        </button>
                    </div>
                    <div className="home-right">
                        <Image className="hero-img" src={heroImg} />
                    </div>
                </div>

            </div>

            <div className="home-lower">
                <div className="home-about-cards">
                    <div className="home-card">
                        <div className="home-card-left">

                            <p className="subtext">
                                Who we are ?
                            </p>
                            <p className="tagline tagCard">
                                The Playground for Modern Front-End Devs
                            </p>
                            <p className="subTagline subtagCard">
                                Where passionate coders decode the art of CSS
                            </p>
                            {/* <button className="go">
                                Let's go!!
                            </button> */}

                        </div>
                        <div className="home-card-right">
                            <Image src={fc} className="home-card-img" />
                        </div>
                    </div>
                    <div className="home-card">
                        <div className="home-card-left">
                            <p className="subtext">
                                What we believe ?
                            </p>
                            <p className="tagline tagCard">
                                Code it Clean, Craft it Bold
                            </p>
                            <p className="subTagline subtagCard">
                                We believe CSS isn't just styling — it's storytelling
                            </p>
                        </div>
                        <div className="home-card-right">
                            <Image src={tc} className="home-card-img" />
                        </div>
                    </div>
                    <div className="home-card">
                        <div className="home-card-left">
                            <p className="subtext">
                                What we do ?
                            </p>
                            <p className="tagline tagCard">
                                Master the Science Behind Stunning UIs
                            </p>
                            <p className="subTagline subtagCard">
                                From grids to gradients, animations to accessibility, we break it down and level you up
                            </p>
                        </div>
                        <div className="home-card-right">
                            <Image src={thc} className="home-card-img" />
                        </div>
                    </div>
                    <div className="home-card">
                        <div className="home-card-left">
                            <p className="subtext">
                                Why The CSS Lab ?
                            </p>
                            <p className="tagline tagCard">
                                Because Average Code Doesn’t Cut It
                            </p>
                            <p className="subTagline subtagCard">
                                We push boundaries so you can build interfaces that wow the world
                            </p>
                        </div>
                        <div className="home-card-right">
                            <Image src={foc} className="home-card-img" />
                        </div>
                    </div>
                    <div className="home-card" ></div>
                </div>
            </div>
        </div>
    )
}