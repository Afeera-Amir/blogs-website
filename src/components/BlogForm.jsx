import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";

const BlogForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    // const blog = { title, content, id: Date.now() };
    // const blogs = JSON.parse(localStorage.getItem("blogs")) || [];
    // blogs.push(blog);
    // localStorage.setItem("blogs", JSON.stringify(blogs));
    // navigate("/view-blogs");
    // console.log(image);
  };

  return (
    <form action="http://localhost:4000/createblog" method="post" encType="multipart/form-data" className="max-w-4xl mx-auto mt-8 p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-blue-500">
        Create a New Blog
      </h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        name="title"
        className="w-full p-2 mb-4 border border-blue-300 rounded"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        name="content"
        rows={8}
        placeholder="write blog content"
        className="mb-4 p-2 border border-blue-300 w-full"
      ></textarea>
      <input
        type="file"
        accept="image/*"
        // onChange={(e) => setImage(e.target.value)}
        name="blogimage"
      />
      <button
        // onClick={handleSubmit}
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
};

export default BlogForm;
