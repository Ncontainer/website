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
    {
      id: 4,
      title: 'How Much Does a Shipping Container Weigh? A Complete Guide to Container Weights',
      image: blogImage1,
      author: 'Neon Group',
      date: '01 Jan 025',
    },
    {
      id: 5,
      title: 'Understanding Container Markings: Shipping Container Numbers and Key Identifications Explained',
      image: blogImage2,
      author: 'Neon Group',
      date: '01 Jan 025',
    },
    {
      id: 6,
      title: 'Why CSC Standards Matter: A Complete Guide for Safe Container Transport',
      image: blogImage3,
      author: 'Neon Group',
      date: '01 Jan 025',
    },
    {
      id: 7,
      title: 'How Much Does a Shipping Container Weigh? A Complete Guide to Container Weights',
      image: blogImage1,
      author: 'Neon Group',
      date: '01 Jan 025',
    },
    {
      id: 8,
      title: 'Understanding Container Markings: Shipping Container Numbers and Key Identifications Explained',
      image: blogImage2,
      author: 'Neon Group',
      date: '01 Jan 025',
    },
    
  ];

  return (
    <div className="w-[90%] mx-auto py-4 sm:py-16 mt-6">
    
      
      {/* Blog Posts Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 w-full md:w-[90%] mx-auto">
        {blogPosts.map((post) => (
          <div key={post.id} className="rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-gray-50">
            <div className="rounded-lg h-56 md:h-56 lg:h-64 overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
              />
            </div>            <div className="p-3 md:p-6">
              <h3 className="text-sm md:text-xl font-bold mb-2 md:mb-4 line-clamp-2 hover:text-secondary transition-colors cursor-pointer">
                {post.title}
              </h3>
              <div className="flex items-center text-xs md:text-sm text-gray-600">
                <span className="mr-1 md:mr-2">By: {post.author}</span>
                <span className="w-1 h-1 bg-gray-400 rounded-full mx-1 md:mx-2"></span>
                <span>{post.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
  
    </div>
  );
};

export default Blog;