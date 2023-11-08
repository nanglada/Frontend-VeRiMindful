import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import Navbar from "../page/Navbar";

export default function CreatePost() {
  let { category } = useParams();
  let [post, setPost] = useState("");
  let [error, setError] = useState<any>(null);
  let navigate = useNavigate();
  let [imageName, setImageName] = useState<File>();

  async function setImage(event: React.ChangeEvent<HTMLInputElement>) {
    let files = event.target.files || [];
    let file = files[0];
    setImageName(file);
  }

  async function sumbit(event: any) {
    event.preventDefault();
    try {
      const form = new FormData();
      console.log(post);
      const json = new Blob([JSON.stringify(post)], {
        type: "application/json",
      });
      form.append("post", json);
      if (imageName) {
        form.append("image", imageName);
      }

      // let res = await axios.post("/post/", form, {
      //     headers: { "Authorization": token }
      // });
      //navigate(`/publicacion/${category}/${res.data.data.id}`);
    } catch (e) {
      let message = (e as any)?.response?.data?.error || "Ocurrió un error.";
      // setError(
      //     <Alert variant="danger">
      //         {message}
      //     </Alert>
      // );
    }
  }

  const rteChange = (content: any, delta: any, source: any, editor: any) => {
    post = editor.getHTML();
  };

  const modules = {
    toolbar: [
      [{ size: [false, "large", "huge"] }],
      ["bold", "italic", "underline"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ align: [] }],
      ["clean"],
      ["link"],
    ],
  };

  const formats = [
    "size",
    "bold",
    "italic",
    "underline",
    "list",
    "bullet",
    "align",
    "link",
  ];

  return (
    <>
      <Navbar />

      <div className="grid justify-center grid-cols-1 mx-32 place-items-center mt-8">
      <h1 className="text-2xl text-orange1 ">Agregar nuevo artículo</h1>
      <br></br>
      <form onSubmit={sumbit} >
        <label>
          Agregar foto: 
        </label>
        <br/>
        <input accept="image/*" type="file" onChange={setImage} className="mb-6 mt-1" />
        
        <ReactQuill
          theme="snow"
          modules={modules}
          formats={formats}
          className="w-164 h-96"
          onChange={rteChange}
        />

        <div className="grid place-items-center mt-16">
          <button className="bg-transparent grid place-items-start border border-black py-2 px-4 mb-8 transition ease-in-out delay-100 hover:bg-black hover:text-white">
            <p className="font-title font-normal">INGRESAR</p>
          </button>
        </div>
      </form>
      </div>
    </>
  );
}
