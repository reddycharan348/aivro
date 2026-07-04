import React, { useEffect } from 'react';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const blogs = [
    {
      id: 1,
      title: "The Future of Spatial Computing and Web GIS",
      excerpt: "Explore how 3D mapping and spatial data are revolutionizing urban planning and enterprise resource management.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
      date: "Oct 24, 2026",
      author: "Engineering Team",
      category: "Technology"
    },
    {
      id: 2,
      title: "Optimizing Legacy Networks for Fiber Optic Deployment",
      excerpt: "A deep dive into the geospatial challenges of upgrading copper networks to FTTH architectures.",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=800&auto=format&fit=crop",
      date: "Nov 02, 2026",
      author: "Telecom Division",
      category: "Telecom"
    },
    {
      id: 3,
      title: "Why Modern Design Systems Matter for Enterprise Apps",
      excerpt: "How cohesive UI/UX components drastically reduce development cycles in large-scale web applications.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop",
      date: "Nov 15, 2026",
      author: "Design Team",
      category: "Design"
    }
  ];

  return (
    <div className="bg-[#f3f1ec] min-h-screen pt-40 pb-24 relative overflow-hidden">
      
      {/* Background blobs (Opposite colors splitted at corners) */}
      <div 
        className="absolute animate-blob z-0 pointer-events-none"
        style={{
          width: '600px',
          height: '600px',
          backgroundColor: '#3b82f6', /* blue */
          top: '-10%',
          left: '-10%',
          borderRadius: '60% 40% 50% 50% / 50% 60% 40% 50%',
          opacity: 0.5
        }}
      ></div>
      <div 
        className="absolute animate-blob-alt z-0 pointer-events-none"
        style={{
          width: '700px',
          height: '700px',
          backgroundColor: '#fcd34d', /* yellow */
          bottom: '-15%',
          right: '-15%',
          borderRadius: '40% 50% 60% 40% / 50% 40% 50% 60%',
          opacity: 0.6
        }}
      ></div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Insights & Engineering <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-green-500 to-pink-500">Blog</span>
          </h1>
          <p className="text-lg text-gray-600 font-medium leading-relaxed">
            Discover our latest research, project case studies, and engineering deep-dives from the forefront of digital solutions.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <article key={blog.id} className="group bg-white rounded-[2rem] overflow-hidden transition-all duration-500 border border-gray-200 hover:shadow-xl shadow-sm flex flex-col hover:-translate-y-2">
              <div className="h-56 overflow-hidden relative">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-md border border-white px-4 py-1.5 rounded-full text-xs font-bold text-gray-900 shadow-sm">
                  {blog.category}
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs font-bold text-gray-400 mb-4 uppercase tracking-wider">
                  <span className="flex items-center"><Calendar size={14} className="mr-1.5" /> {blog.date}</span>
                  <span className="flex items-center"><User size={14} className="mr-1.5" /> {blog.author}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-snug group-hover:text-green-600 transition-colors">
                  {blog.title}
                </h3>
                
                <p className="text-[15px] text-gray-600 font-medium leading-relaxed mb-6 flex-grow">
                  {blog.excerpt}
                </p>
                
                <Link to="/contact" className="inline-flex items-center text-sm font-bold text-green-600 group-hover:text-green-700 transition-colors mt-auto">
                  Read Article <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Blog;
