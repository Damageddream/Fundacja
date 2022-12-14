import { useState, useEffect } from "react";
import axios from "axios";
import DeleteImage from "./UsunObraz";
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css"

const Galeria = (props) => {
  // states for storing images for gallery and loading state and errors
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState();
  const [errors, setErrors] = useState();
  const [gallery, setGellery] = useState([]);

  // when render use function to get images
  useEffect(() => {
    getFiles();
  }, []);

  // function fetching photos to gallery from backend
  const getFiles = () => {
    setIsLoading(true);
    axios({
      method: "GET",
      url: "/api/photos/",
    })
      .then((response) => {
        const data = response.data;
        setFile(data);
        const Photos = []
        file.map((download) => {
          Photos.push({
            original: download.image,
            thumbnail: download.image,
          })
        setGellery(Photos)
        });

      })
      .catch((error) => {
        setErrors(error);
      });
  };

  return (
    <>
      <ImageGallery items={gallery} />
    </>
  );
};

export default Galeria;
