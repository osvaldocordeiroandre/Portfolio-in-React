import React, { useEffect } from 'react';
import './main.css'
import { Typewriter } from 'react-simple-typewriter';
import "react-simple-typewriter"
import Aos from "aos";
import "aos/dist/aos.css";

function Main() {

    useEffect(() => {
        Aos.init({duration: 2000});
    }, [])

    return (

        <div>

            <div className='TypeMain'>
                <h1>
                    I'M A
                    <span className='TypeWri'>
                        <Typewriter
                            loop
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                            words={['DEVLOPER', 'DESIGNER', 'VIDEO EDITOR']}
                        />
                    </span>
                </h1>
            </div>

            <div className="content">

                <span data-aos="fade" className='span-content'>
                    Hello, my name is Osvaldo Cordeiro André, but you can call me ajk, I am 20 years old and I have been a video editor for more than 5 years, now I am getting involved in this world of programming, I have managed to learn Html, css, js and react.
                </span>

                <div className='Span-portuguese'>
                    <span data-aos="fade" className='span-content-portuguese'>
                        Olá, meu nome é Osvaldo Cordeiro André, mas pode me chamar de ajk, tenho 20 anos e sou editor de video a mais de 5 anos, agora estou me envolvendo neste mundo da programação, já consegui aprender bem Html, css, js ainda estou estudando, e estudo tambem react, tenho noções de designer, que mostrarei logo abaixo.
                    </span>
                </div>

            </div>

            <div className="designer-main">

                <img className='designer-img' src="https://ia601507.us.archive.org/21/items/meu-portifolio/meu%20portif%C3%B3lio.png" alt="Designer Exemplo" />

                <div className="designer-text-main">
                    <span className='span-designer'>Clean designer made for a clothing brand, a designer that shows elegance, and satisfaction, when looking.</span>

                    <section></section>

                    <div className='portuguese-version'>
                        <span data-aos="fade-left" className='span-designer-portuguese'>Designer clean feito para marca de roupas, um designer que demostra elegancia, e sotisficação, ao olhar.</span>
                    </div>

                </div>

                        </div>

                        <div className="etiqueta">

                            <div data-aos="fade" className='etiqueta-text'><span>Demostration of the logo made on a label, to demonstrate the value that the brand would have.</span>

                                <section></section>

                                <div className="etiqueta-text-2"><span>Demostração de logo feita em uma etiqueta, para demostrar o valor que a marca teria.</span></div>
                            </div>

                            <img data-aos="fade" className='etiqueta-img' src="https://ia801509.us.archive.org/24/items/etiqueta_202203/etiqueta.png" alt="Logo em Etiqueta" />

                        </div>

                        <div data-aos="fade-up" className="projects-main">
                            <h2 className='project'>MY PROJECTS</h2>
                        </div>
                        <section data-aos="fade-up" className='line2'></section>

                        <div data-aos="fade-up" className='projects-content'>
                            <div className="kyoto"><a target="_blank" href="https://osvaldocordeiroandre.github.io/Kyoto/"><img className='space' src="https://ia801504.us.archive.org/30/items/kyoto_202203/Kyoto.png" alt="Kyoto Project" /></a></div>
                            <div className="kyoto"><a target="_blank" href="https://osvaldocordeiroandre.github.io/NetflixInReact/"><img className='space' src="https://ia601403.us.archive.org/16/items/google-white/Netflix%20white.png" alt="Netflix Project" /></a></div>
                            <div className="kyoto"><a target="_blank" href="https://osvaldocordeiroandre.github.io/Google/"><img className='space' src="https://ia601403.us.archive.org/16/items/google-white/Google%20white.png" alt="Google Project" /></a></div>
                            <div className="kyoto"><a target="_blank" href="https://osvaldocordeiroandre.github.io/Calculadora/"><img className='space' src="https://ia601403.us.archive.org/16/items/google-white/calculadora%20white.png" alt="Calculadora Project" /></a></div>
                        </div>

                        <h2 data-aos="fade-right" className='Contact'>CONTACT</h2>
                        <section data-aos="fade-right" className='line2'></section>

                        <form data-aos="fade-right" action="https://formsubmit.co/ajknew2022@gmail.com" method='POST'>
                            <input type="text" name='Your Name' placeholder='Your Name...' required />
                            <input className='inputEmail' type="email" name="Your Email Addres" placeholder='Your Email Address...' required id="" />
                            <input type="hidden" name="_next" value="https://osvaldocordeiroandre.github.io/Portfolio-in-React/"/>
                            <textarea name="Message" placeholder='Your Message...' required cols="30" rows="10" id=""></textarea>
                            <button className='ButtonS' type="submit">SEND</button>
                        </form>

                    </div>

                    )
};

                    export default Main;
