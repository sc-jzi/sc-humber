import {
  Image as JssImage,
  ImageField,
  Text,
  TextField
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

export type BannerProps = ComponentProps & {
    fields: {
        BannerImage: ImageField,
        BannerText: TextField
    }
}

const Banner = (props: BannerProps): JSX.Element => {
    return (
        <section className="slide-in-right-animation SectionGenericBlockItem-SlickSliderBlock section-padding section-padding-none in-view" style={{width: "100%"}}>
            <div className="container-npm">
                <div className="row no-gutters" style={{width: "100%"}}>
                    <div className="col-lg-12" style={{width: "100%"}}>
                        <div className="slick-slider-block full-width-slider slick-initialized slick-slider" id="slick-slider-block-0" data-slides-to-show="1" data-slides-arrows="1" data-slides-to-scroll="1" data-slides-autoplay="1" data-slides-autoplay-speed="" style={{marginBottom: 0, width: "100%"}}>
                            <div aria-live="polite" className="slick-list draggable">
                                <div className="slick-track" style={{opacity: 1 }}>
                                    <div className="slick-slide slick-active" data-slick-index="0" aria-hidden="false" style={{width: "100%"}}>
                                        <div className="banner-home-wrap-buttons customized no-btn-hover">
                                            <JssImage field={props.fields.BannerImage} />
                                            <div className="buttons">
                                                <div className="inner-wrap">
                                                    <h1 style={{color: "black"}}><Text field={props.fields.BannerText} /></h1>
                                                    <div className="bottom-links-wrp">
                                                        <a className="btn" style={{backgroundColor: '#004b78', color: '#fff'}} href="continuous-professional-learning/programs">Program Duration<span className="wsnw">&nbsp;</span></a> 
                                                        <a className="btn" style={{backgroundColor: '#004b78', color: '#fff'}}  href="continuous-professional-learning/courses">Fees & Financial Resources<span className="wsnw">&nbsp;</span></a> 
                                                        <a className="btn" style={{backgroundColor: '#004b78', color: '#fff'}}  href="continuous-professional-learning/micro-credentials">Language Requirements<span className="wsnw">&nbsp;</span></a>
                                                    </div>
                                                    <p><strong>Learn more about all <a className="btn btn-plain p-0 mt-0" style={{color: '#005173'}} href="continuous-professional-learning/search-all">professional learning options.</a></strong></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


export const Default = Banner;