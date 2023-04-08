import { useState } from "react";
import SearchBar from "./Components/SearchBar";
import ImageList from "./Components/ImageList";
import searchImages from "./Api";

function App() {
  const [images, setImages] = useState([]);
  const dataFetcher = async query => {
    const response = await searchImages(query);
    setImages(response);
  };
  return (
    <div>
      <SearchBar dataFetch={dataFetcher} />
      <ImageList images={images} />
    </div>
  );
}
export default App;
