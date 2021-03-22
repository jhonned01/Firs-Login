import React, { useState, useContext } from "react";
import Layout from "../layout/Layout";
import { UserContext } from "../../context/UserContext";
import { addNote } from "../../firebase/client";
const Index = () => {
  const [Content, setContent] = useState("");
  const [Title, setTitle] = useState("");
  const { UserCredential } = useContext(UserContext);
  const [Loading, setLoading] = useState(null);

  const handleEvent = (e) => {
    setContent(e.target.value);
    console.log(Content);
  };
  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    console.log("que pasa puto");
    addNote({
      avatar: UserCredential.photoURL,
      content: Content,
      userID: UserCredential.uid,
      correo: UserCredential.email,
      title: Title,
    })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
        setLoading(false);
      });
  };

  const isButtonDisable = Content.length === 0 || Loading === true;

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center">
        <section className=" max-w-md w-full mx-auto">
          <form
            onSubmit={handleSubmit}
            className="mx-3 text-3xl font-semibold space-y-4  bg:white"
          >
            <div className="grid">
              <label
                value={Title}
                onChange={handleEventTitle}
                className="text-sm font-bold text-gray-600 focus:ring-blue-300"
              >
                Title
              </label>
              <input
                type="text"
                className="text-sm w-full p-2 border border-gray-300 rounded mt-1"
              />
            </div>
            <textarea
              onChange={handleEvent}
              className="ring-1 ring-gray-300 resize-none  w-full px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-blue-300"
              rows="4"
              placeholder="What do you do Nigga?"
              value={Content}
            ></textarea>
            <button
              className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md text-white text-sm disabled:opacity-30"
              disabled={isButtonDisable}
            >
              send
            </button>
          </form>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
