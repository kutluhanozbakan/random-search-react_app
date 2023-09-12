import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bulma/css/bulma.css";
import SearchHeader from "./SearchHeader";
import axios from "axios";
import searchImages from "./api";
import ImagesList from "./components/imagesList";

function App() {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    try {
      const result = await searchImages(term);
      if (Array.isArray(result) && result.length > 0) {
        // result içindeki her bir resmi ayrı ayrı ekleyin
        result.forEach((image) => {
          setImages((prevImages) => [...prevImages, image]);
        });
      }
    } catch (error) {
      console.error("searchImages hata:", error);
    }
  };

  return (
    <>
      <div className="App">
        <SearchHeader search={handleSubmit} />
        <div className="searchDiv">
          <ImagesList imagesPlaceholder={images} />
        </div>
      </div>
    </>
  );
}

export default App;
