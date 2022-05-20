import { useLocation } from "react-router-dom";
import YouTube from "react-youtube";
import { useState } from "react";
var getYouTubeId = require("get-youtube-id");

const Detail = () => {
    const location = useLocation();
    const { name, image, video, link } = location.state || {};
    const [id] = useState(getYouTubeId(video));

    const opts = {
        height: "390",
        width: "640",
        playerVars: {
            autoplay: 0,
        },
    };
    return (
        <div className="container">
            <div className="form-add">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card" style={{ width: '18rem' }}>
                            <h3 className="card-title">{name}</h3>
                            <div className="card-body">
                                <img src={image} className="card-img-top" alt="poster" />
                                <a href={link} target={"_blank"} rel="noreferrer" className="btn btn-primary">Go to {name}</a>
                                <YouTube videoId={id} opts={opts} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Detail;