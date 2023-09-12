import ImageItem from "./imageItem";

function ImagesList({imagesPlaceholder}) {
  return (
    <>
      <div className="imageList">
        <div>{imagesPlaceholder.map((image, index) => {
            return <ImageItem key={index} image={image}/>
        })}</div>
      </div>
    </>
  );
}

export default ImagesList;
