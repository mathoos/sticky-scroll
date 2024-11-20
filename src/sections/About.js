import React, { useEffect, useRef, useState } from 'react';
import RubberWeb from "../img/rubber-web.svg";
import Star from "../img/star.svg";
import RubberHappy from "../img/rubber-happy.svg"; 
import RubberSunglasses from "../img/rubber-sunglasses.svg";

import './About.scss';

const About = () => {

    const firstParagraphRef = useRef(null);
    const secondParagraphRef = useRef(null);
    const thirdParagraphRef = useRef(null);
    const boutonRef = useRef(null);
    const boutonRef2 = useRef(null);

    const [imageSrc, setImageSrc] = useState(RubberWeb);
    const [visibleSections, setVisibleSections] = useState({
        firstVisible: false,
        secondVisible: false,
        thirdVisible: false,
    });

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: .5
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (entry.target === firstParagraphRef.current) {
                        setImageSrc(RubberWeb);
                        if (boutonRef.current) {
                            boutonRef.current.classList.remove('active');
                        }
                        if (boutonRef2.current) {
                            boutonRef2.current.classList.remove('active');
                        }
                        setVisibleSections(prev => ({ ...prev, firstVisible: true }));
                    } 
                    else if (entry.target === secondParagraphRef.current) {
                        setImageSrc(RubberHappy);
                        if (boutonRef.current) {
                            boutonRef.current.classList.add('active');
                        }
                        if (boutonRef2.current) {
                            boutonRef2.current.classList.remove('active');
                        }
                        setVisibleSections(prev => ({ ...prev, secondVisible: true }));
                    } 
                    else if (entry.target === thirdParagraphRef.current) {
                        setImageSrc(RubberSunglasses);
                        if (boutonRef.current) {
                            boutonRef.current.classList.add('active');
                        }
                        if (boutonRef2.current) {
                            boutonRef2.current.classList.add('active');
                        }
                        setVisibleSections(prev => ({ ...prev, thirdVisible: true }));
                    }
                } else {
                    // Si l'élément quitte le viewport, on garde la section visible.
                    if (entry.target === firstParagraphRef.current) {
                        setVisibleSections(prev => ({ ...prev, firstVisible: false }));
                    } else if (entry.target === secondParagraphRef.current) {
                        setVisibleSections(prev => ({ ...prev, secondVisible: false }));
                    } else if (entry.target === thirdParagraphRef.current) {
                        setVisibleSections(prev => ({ ...prev, thirdVisible: false }));
                    }
                }
            });
        }, observerOptions);

        const currentFirstRef = firstParagraphRef.current;
        const currentSecondRef = secondParagraphRef.current;
        const currentThirdRef = thirdParagraphRef.current;

        if (currentFirstRef) observer.observe(currentFirstRef);
        if (currentSecondRef) observer.observe(currentSecondRef);
        if (currentThirdRef) observer.observe(currentThirdRef);

        return () => {
            if (currentFirstRef) observer.unobserve(currentFirstRef);
            if (currentSecondRef) observer.unobserve(currentSecondRef);
            if (currentThirdRef) observer.unobserve(currentThirdRef);
        };
    }, []);

    

    return (
        <section className="about" id="about">


            <div className="sticky">

                <div className="sticky_container">
                    <figure className="sticky_container-img">
                        <img src={imageSrc} className="sticky_container-img--rubber" alt="Rubber Hose Web" />
                        <img src={Star} className="sticky_container-img--star" alt="Rubber Hose Web"/>
                        <img src={Star} className="sticky_container-img--star star2" alt="Rubber Hose Web"/>
                        <p className="bouton" ref={boutonRef}>Sérieuse</p>
                        <p className="bouton bouton_2" ref={boutonRef2}>Créative</p>
                    </figure>
                </div>

                <div className="sticky_scroll">
                    <div className={`sticky_scroll-txt ${visibleSections.firstVisible ? 'visible' : ''}`} ref={firstParagraphRef}>
                        <h4>Mon parcours d'étudiante&nbsp;.</h4>   
                        <p>
                            Diplômée d'une licence en Communication & Médias et titulaire d'un titre de 
                            Webdesigner, j'ai récemment achevé mon contrat d'alternance en agence de 
                            communication en tant que développeuse front-end.
                            <br/><br/>

                            Interview d'artistes et rédaction d'articles, maîtrise élémentaire de la suite 
                            Adobe et Figma, création de webdesign, optimisation SEO et intégration de 
                            sites web.<br/><br/>

                            J'ai acquis au cours de mon expérience une multitude de compétences qui 
                            se complètent, ce qui me permet de collaborer activement dans une équipe 
                            de communication.
                        </p>              
                    </div>
                    <div className={`sticky_scroll-txt ${visibleSections.secondVisible ? 'visible' : ''}`} ref={secondParagraphRef}>
                        <h4>Adaptation & curiosité&nbsp;.</h4>
                        <p>
                            De nature curieuse et autonome, j'aime découvrir et apprendre de nouveaux langages 
                            afin de pouvoir sélectionner au mieux les outils qui répondront au besoin spécifique 
                            d'un projet.<br/><br/> 
                            
                            Dans l'intention de faciliter les échanges et la coopération au sein de l'équipe de 
                            développement, et  pour mieux appréhender le métier dans sa globalité, je m'initie 
                            également au développement full-stack.<br/><br/> 

                            Je sais m'adapter et suivre les avancées technologiques qui sont en perpétuelle 
                            évolution, afin d'empêcher tout projet de devenir obsolète.
                        </p>
                    </div>
                    <div className={`sticky_scroll-txt ${visibleSections.thirdVisible ? 'visible' : ''}`} ref={thirdParagraphRef}>
                        <h4>Créativité & inspiration&nbsp;.</h4>
                        <p>
                            Âme créative,  j'ai toujours eu le besoin de m'exprimer autrement qu'à travers 
                            les mots. Musique, photographie, collages, dessin… J'aime penser que mon implication 
                            dans toute forme d'art accroît l'imagination et l'innovation.<br/><br/> 
                            
                            Observatrice et attentive, je me complais à contempler le monde qui m'entoure, 
                            véritable source d'inspiration inépuisable au quotidien.<br/><br/>
                            
                            Aujourd'hui, c'est dans la création de site internet que je m'exprime ; attentive 
                            au moindre détail, je donne le meilleur pour offrir à l'utilisateur une expérience 
                            unique, immersive et intuitive.
                        </p>
                    </div>
                </div>
            </div> 


        </section>
    ) 
}


export default About;