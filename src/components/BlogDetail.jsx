import React from 'react';
import { useParams } from 'react-router-dom';

const BlogDetail = () => {
  const { id } = useParams();
  const blogs = JSON.parse(localStorage.getItem('blogs')) || [];
  const blog = blogs.find((blog) => blog.id.toString() === id);

  console.log(blog.image)

  if (!blog) {
    return <div className="max-w-4xl mx-auto mt-8 p-4 bg-white shadow-md rounded-lg">Blog not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto my-8 p-4 bg-white shadow-md rounded-lg text-center">
      <h2 className="text-2xl font-bold mb-4">{blog.title}</h2>
      <div>
        <img src={`http://localhost:4000/images/${blog.image}`} alt="blog image" className='w-[500px] my-8 mx-auto' />
      </div>
      {/* <div dangerouslySetInnerHTML={{ __html: blog.content }} /> */}
      <div><p className='text-xl'>{blog.content}</p></div>
    </div>
  );
};

export default BlogDetail;
