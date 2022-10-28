import { useState, useEffect } from "react";
import axios from "axios";
import List from "./list";

function Note() {
  const [notes, setNewNotes] = useState(null);
  const [formNote, setFormNote] = useState({
    title: "",
    content: "",
  });

  useEffect(() => {
    getNotes();
  }, []);

  function getNotes() {
    axios({
      method: "GET",
      url: "/api/aktualnoscis/",
    })
      .then((response) => {
        const data = response.data;
        setNewNotes(data);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
  }

  function createNote(event) {
    axios({
      method: "POST",
      url: "/api/aktualnoscis/",
      data: {
        title: formNote.title,
        content: formNote.content,
      },
    }).then((response) => {
      getNotes();
    });

    setFormNote({
      title: "",
      content: "",
    });

    event.preventDefault();
  }


  function handleChange(event) {
    const { value, name } = event.target;
    setFormNote((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  }

  return (
    <div className="">

      {notes &&
        notes.map((note) => (
          <List
            title={note.title}
          />
        ))}
    </div>
  );
}

export default Note;
