import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

type Image = {
    url: string;
    caption: string;
};

type SlideshowProps = {
    images: Image[];
};

const Slideshow = ({images}: SlideshowProps) => {
    return (
        <Slide>
            {images.map((image) => (
                <div className="each-slide-effect">
                    <div style={{backgroundImage: `url(${image.url})` }}>
                        <span>{image.caption}</span>
                    </div>
                </div>
            ))}
        </Slide>
    );
}

export default Slideshow;