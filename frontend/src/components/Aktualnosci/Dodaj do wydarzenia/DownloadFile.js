import { useState, useEffect } from "react";
import axios from "axios";
import DeleteFile from "./UsunPlik";


const DownloadFile = (props) => {

    // states for storing files to download and loading state and errors
    const [file, setFile] = useState(null)
    const [isLoading, setIsLoading] = useState()
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
            file.map((download) => {
                console.log(download.file)
            })
            console.log(data)
        })
            .catch((error) => {
                setErrors(error);
            })
    }



    return (
        <>
            {file && file.map((download) => {
                return (
                    <>
                        <a href={download.file}>link</a>
                        <DeleteFile file={download.id}/>

                    </>
                )
            })}
        </>
    )
}

export default DownloadFile