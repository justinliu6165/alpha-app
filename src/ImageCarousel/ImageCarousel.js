import React from 'react';
import './ImageCarousel.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export default class ImageCarousel extends React.Component {
    constructor() {
        super();
        this.state = {
            imgIndex: 1,
            imgNum: 6
        }
    }

    prevSlide = () => {
        if (this.state.imgIndex === 1) {
            this.setState({ imgIndex: this.state.imgNum })
        } else {
            this.setState({ imgIndex: this.state.imgIndex - 1 })
        }
    }

    nextSlide = () => {
        if (this.state.imgIndex === this.state.imgNum) {
            this.setState({ imgIndex: 1 })
        } else {
            this.setState({ imgIndex: this.state.imgIndex + 1 })
        }
    }

    render() {

        const { imgIndex, imgNum } = this.state;

        const slide = <div className="img-wrapper">
            <img src={require(`../images/room${imgIndex}.jpg`)} alt='room' />
        </div>

        return (
            <section className="container-image-carousel">
                    <TransitionGroup className="carousel-box">
                        <CSSTransition
                            key={imgIndex}
                            in={true}
                            appear={true}
                            timeout={1000}
                            classNames='changeFade'
                        >
                            {slide}
                        </CSSTransition>
                    </TransitionGroup>
                <div className="arrow arrow-left" onClick={this.prevSlide}></div>
                <div className="arrow arrow-right" onClick={this.nextSlide}></div>
                <div>
                    <p>{imgIndex} / {imgNum}</p>
                </div>
            </section>
        )
    }
}