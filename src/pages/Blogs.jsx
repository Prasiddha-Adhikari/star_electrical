import React from 'react';
import { Link } from 'react-router-dom';
import one from '../assets/1.jpeg';
import two from '../assets/1.jpeg';  // Example for another image
import three from '../assets/1.jpeg'; // Example for another image

const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Importance of Electrical Safety',
      excerpt: 'Electrical safety is crucial for both residential and industrial environments...',
      slug: 'importance-of-electrical-safety',
      image: one, // Unique image for this post
    },
    {
      id: 2,
      title: 'How to Choose the Right Electrical Components',
      excerpt: 'Choosing the right electrical components can be tricky...',
      slug: 'how-to-choose-right-components',
      image: two, // Unique image for this post
    },
    {
      id: 3,
      title: 'Understanding Electrical Circuit Design',
      excerpt: 'A well-designed electrical circuit is key to efficient power distribution...',
      slug: 'understanding-circuit-design',
      image: three, // Unique image for this post
    },
    // Add more blog posts with different images if needed
  ];

  return (
    <div className="bg-gray-50 py-12">
      <section className="container mx-auto px-6 sm:px-12">
        <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-10">
          Our Blog
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={post.image} // Unique image per post
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link
                  to={`/blog/${post.slug}`}
                  className="text-blue-500 hover:text-blue-700 font-medium"
                >
                  Read more...
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blogs;
