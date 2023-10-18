import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const Slideshow = ({images}) => {

    const imgs = [
        "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
        "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    ];

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
