import { useState, useEffect } from "react";
import axios from "axios";
import DeleteFile from "./UsunPlik";


const DownloadFile = (props) => {

    // states for storing files to download and loading state and errors
    const [file, setFile] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [errors, setErrors] = useState()


    // when render use function to get files
    useEffect(() => {
        getFiles();
    }, [])

    // function fetching files to donwload from backend
    const getFiles = () => {
        setIsLoading(true);
        axios({
            method: "GET",
            url: "/api/files/",

        }).then((response) => {
            const data = response.data;
            setFile(data);
            console.log(file.length)

        })
            .catch((error) => {
                setErrors(error);
            })
    }

    //rerender after deleting
    const refreshedFiles = () => {

    }



    return (
        <>
            {file && file.map((download) => {
                return (
                    <>
                        <a href={download.file}>{download.file_name}</a>
                        <DeleteFile  file={download.id} getFiles={getFiles}/>

                    </>
                )
            })}
        </>
    )
}

export default DownloadFile