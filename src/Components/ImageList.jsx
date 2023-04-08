import ImageShow from "./ImageShow";
import "./ImageList.css"
function ImageList({ images }) {
  const renderedImages = images.map(el => <ImageShow key={el.id} image={el} />);
  return <div className="image-list">{renderedImages}</div>;
}
export default ImageList;
