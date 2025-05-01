import { useState } from 'react';
import blogImage1 from "../images/blog1.png"
import blogImage2 from "../images/blog2.png"
import blogImage3 from "../images/blog3.png"
import blog from "../images/04.png"

const Blog = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  
  const handleSubmit = () => {
    if (email && email.includes('@')) {
      setIsSubmitted(true);
      setEmail('');
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };
  
  // Blog post data
  const blogPosts = [
    {
      id: 1,
      title: 'How Much Does a Shipping Container Weigh? A Complete Guide to Container Weights',
      image: blogImage1,
      author: 'Neon Group',
      date: '01 Jan 025',
    },
    {
      id: 2,
      title: 'Understanding Container Markings: Shipping Container Numbers and Key Identifications Explained',
      image: blogImage2,
      author: 'Neon Group',
      date: '01 Jan 025',
    },
    {
      id: 3,
      title: 'Why CSC Standards Matter: A Complete Guide for Safe Container Transport',
      image: blogImage3,
      author: 'Neon Group',
      date: '01 Jan 025',
    },
  ];

  return (
    <div className="w-[90%] mx-auto py-16 mt-6">
      {/* Blog Header */}
      <div className="text-center mb-12">
        <p className="text-[#ff8901] font-bold text-xl uppercase mb-2">BLOGS</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
          Browse our Blogs<br />& Articles
        </h2>
      </div>
      
      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 w-[90%] mx-auto">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-gray-100">
            <div className=" rounded-lg h-48 md:h-56 lg:h-64 overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
              />
            </div>
            <div className="p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-bold mb-4 line-clamp-2 hover:text-[#ff8901] transition-colors cursor-pointer">
                {post.title}
              </h3>
              <div className="flex items-center text-sm text-gray-600">
                <span className="mr-2">By: {post.author}</span>
                <span className="w-1 h-1 bg-gray-400 rounded-full mx-2"></span>
                <span>{post.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Newsletter Subscription */}
      <div className="bg-[#ff8901] rounded-lg overflow-hidden">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 p-6 md:p-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Subscribe to our Newsletter
            </h3>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-grow">
                <input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Email*"
                  className="w-full bg-transparent border-b border-white/70 pb-2 text-white placeholder-white/80 focus:outline-none focus:border-white"
                />
              </div>
              <button
                onClick={handleSubmit}
                className="px-8 py-2 bg-white text-[#ff8901] rounded-full font-medium hover:bg-white/90 transition-colors"
              >
                {isSubmitted ? "Thanks!" : "Submit"}
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 h-48 md:h-64">
            <img 
              src={blog} 
              alt="Container with analytics"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;