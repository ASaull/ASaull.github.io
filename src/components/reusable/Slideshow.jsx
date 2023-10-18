import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const Slideshow = ({images}) => {

    return (
        <Slide>
            {images.map((image) =>(
                <div className="each-slide-effect">
                    <div style={{ backgroundImage: `url(${image.image})` }}>
                        <span>{image.caption}</span>
                    </div>
                </div>
            ))}
        </Slide>
    );
}

export default Slideshow;
