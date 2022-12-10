import { useState, useEffect } from "react";
import axios from "axios";
import DeleteImage from "./UsunObraz";

const Galeria = (props) => {
  // states for storing images for gallery and loading state and errors
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState();
  const [errors, setErrors] = useState();

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
        file.map((download) => {});
        console.log(data);
      })
      .catch((error) => {
        setErrors(error);
      });
  };

  return (
    <>
      {file &&
        file.map((download) => {
          return (
            <>
              <img
                src={download.image}
              />
              <DeleteImage image={download.id} />
            </>
          );
        })}
    </>
  );
};

export default Galeria;
