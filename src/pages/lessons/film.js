import { useLocation, useParams } from "react-router-dom";

export function Film() {
  const location = useLocation();
  const { banner, url, title,content } = location.state || {};
  return (
    <div>
      <div className="film-item">
            <div className="avatar-film" style={{backgroundImage: `url(${banner})`}}/>
            <div className="content-film">
                <div>
                    <a href={url}>{title}</a>
                </div>
                <div>{content}</div>
            </div>
        </div>
    </div>
  );
}
