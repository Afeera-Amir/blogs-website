import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CreateBlog from './pages/CreateBlog';
import ViewBlogs from './pages/ViewBlog';
import BlogDetail from './components/BlogDetail';

const App = () => {
  return (
    <Router>
      <div className="bg-blue-300 min-h-screen">
        <nav className="bg-slate-700 shadow-md p-4">
          <div className="max-w-4xl mx-auto flex justify-between font-bold">
            <Link to="/create-blog" className="text-blue-300 hover:underline">Create Blog</Link>
            <Link to="/view-blogs" className="text-blue-300 hover:underline">View Blogs</Link>
          </div>
        </nav>
        <div className="max-w-4xl mx-auto mt-8">
          <Routes>
            <Route exact path="/" element={<CreateBlog />} />
            <Route path="/create-blog" element={<CreateBlog />} />
            <Route path="/view-blogs" element={<ViewBlogs />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;

