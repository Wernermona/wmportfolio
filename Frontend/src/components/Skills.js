import photo1 from "../assets/img/figma.png";
import photo2 from "../assets/img/git.png";
import photo3 from "../assets/img/html.png";
import photo4 from "../assets/img/css.png";
import photo5 from "../assets/img/php.png";
import photo6 from "../assets/img/react.png";
import photo7 from "../assets/img/sql.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Compétences</h2>
                        <p>Voici les compétences que j'ai acquis durant ma formation<br></br> et l'ensemble de langages que je maitrise.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={photo1} className="figma" alt="skills" />
                                <h5>Figma</h5>
                            </div>
                            <div className="item">
                                <img src={photo2}  alt="skills" />
                                <h5>GitHub</h5>
                            </div>
                            <div className="item">
                                <img src={photo3} alt="skills" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={photo4} alt="skills" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={photo5} alt="skills" />
                                <h5>PHP</h5>
                            </div>
                            <div className="item">
                                <img src={photo6} alt="skills" />
                                <h5>React.Js</h5>
                            </div>
                            <div className="item">
                                <img src={photo7} alt="skills" />
                                <h5>SQL</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
