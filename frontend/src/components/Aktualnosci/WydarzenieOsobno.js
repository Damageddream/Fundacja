import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const WydarzenieOsobno = () => {

    const location = useLocation()
    const [aktualnosci, setNewAktualnosci] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
  
    useEffect(() => {
      getAktulanosci();
    }, []);
  
    function getAktulanosci() {
      setIsLoading(true);
      axios({
        method: "GET",
        url: `/api/aktualnoscis/${location.state}/`,
      })
        .then((response) => {
          const data = response.data;
          setNewAktualnosci(data);
        })
        .catch((error) => {
          if (error.response) {
            setError(error.response);
            setError(error.response.status);
            setError(error.response.headers);
          }
        });
      setIsLoading(false);
    }
    return (
        <div>
            {aktualnosci.title}
        </div>
    )
}

export default WydarzenieOsobno