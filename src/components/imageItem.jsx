function ImageItem({image}) {
    return ( 
       <div >
        <img className="imageListimg" alt={image.alt_description} src={image.urls.small}></img>
       </div>
     );
}

export default ImageItem;