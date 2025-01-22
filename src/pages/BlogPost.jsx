import React from 'react';
import { useParams } from 'react-router-dom';
import one from '../assets/1.jpeg';
import two from '../assets/1.jpeg';
import three from '../assets/1.jpeg';

const BlogPost = () => {
  const { slug } = useParams();

  const blogData = {
    'importance-of-electrical-safety': {
      title: 'The Importance of Electrical Safety',
      content:
        'Electrical safety is essential for every household and industrial environment. This post will cover the best practices...',
      image: one,  // Unique image for this post
    },
    'how-to-choose-right-components': {
      title: 'How to Choose the Right Electrical Components',
      content:
        'Choosing the right electrical components for your project is crucial. This post provides tips on how to make informed decisions...',
      image: two,  // Unique image for this post
    },
    'understanding-circuit-design': {
      title: 'Understanding Electrical Circuit Design',
      content:
        'A well-designed electrical circuit is key to efficient power distribution. This post will explain the key concepts...',
      image: three,  // Unique image for this post
    },
    // More blog data
  };

  const post = blogData[slug];

  if (!post) {
    return <div className="text-center py-12 text-xl">Blog post not found.</div>;
  }

  return (
    <div className="bg-gray-50 py-12">
      <section className="container mx-auto px-6 sm:px-12 max-w-4xl">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src={post.image}  // Unique image per post
            alt={post.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{post.title}</h1>
            <p className="text-gray-600 mb-6">{post.content}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
