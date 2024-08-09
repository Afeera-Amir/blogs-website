import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const BlogList = () => {
 const [blogs, setBlogs] = useState([])
//  const blogs = JSON.parse(localStorage.getItem('blogs')) || [];

  useEffect(() => {
    async function getBlogs() {
      const response = await fetch('http://localhost:4000/getblogs')
      const data = await response.json()
      console.log(data)
      setBlogs(data)
      localStorage.setItem("blogs", JSON.stringify(data))
    }
    getBlogs()
  }, [])

  return (
    <div className="max-w-4xl mx-auto mt-8 p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-blue-600 border-b-2 pb-6 border-blue-200">Blogs</h2>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id} className="mb-2">
            <Link to={`/blog/${blog.id}`} className="text-blue-500 hover:underline text-lg">
              {blog.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
