import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaCalendarAlt, FaUser, FaTags, FaShare, FaComment } from 'react-icons/fa';

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'fitness', name: 'Fitness Tips' },
    { id: 'nutrition', name: 'Nutrition' },
    { id: 'workouts', name: 'Workouts' },
    { id: 'lifestyle', name: 'Lifestyle' },
    { id: 'success', name: 'Success Stories' },
  ];

  const blogPosts = [
    {
      id: 1,
      title: '10 Essential Exercises for Beginners',
      excerpt: 'Starting your fitness journey? Here are the fundamental exercises you need to know.',
      category: 'workouts',
      author: 'John Smith',
      date: '2024-04-15',
      readTime: '5 min read',
      image: '/blog1.jpg',
      tags: ['beginner', 'exercises', 'fitness'],
      comments: 12,
    },
    {
      id: 2,
      title: 'The Science of Muscle Growth',
      excerpt: 'Understanding how muscles grow and how to optimize your training for maximum gains.',
      category: 'fitness',
      author: 'Sarah Johnson',
      date: '2024-04-12',
      readTime: '8 min read',
      image: '/blog2.jpg',
      tags: ['muscle growth', 'science', 'training'],
      comments: 8,
    },
    {
      id: 3,
      title: 'Meal Prep Guide for Busy Professionals',
      excerpt: 'Learn how to prepare healthy meals in advance to stay on track with your nutrition goals.',
      category: 'nutrition',
      author: 'Mike Wilson',
      date: '2024-04-10',
      readTime: '6 min read',
      image: '/blog3.jpg',
      tags: ['meal prep', 'nutrition', 'healthy eating'],
      comments: 15,
    },
    {
      id: 4,
      title: 'From Couch to 5K: A Success Story',
      excerpt: 'Follow one member\'s journey from being sedentary to completing their first 5K run.',
      category: 'success',
      author: 'Emily Davis',
      date: '2024-04-08',
      readTime: '7 min read',
      image: '/blog4.jpg',
      tags: ['success story', 'running', 'motivation'],
      comments: 20,
    },
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900 text-white">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: 'url(/blog-hero.jpg)' }}></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Fitness Blog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            Expert advice, success stories, and the latest fitness trends
          </motion.p>
        </div>
      </section>

      {/* Search and Categories */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="relative w-full md:w-96">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm ${
                    selectedCategory === category.id
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <span className="flex items-center mr-4">
                      <FaCalendarAlt className="mr-1" />
                      {post.date}
                    </span>
                    <span className="flex items-center">
                      <FaUser className="mr-1" />
                      {post.author}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <FaTags className="text-gray-400" />
                      {post.tags.map((tag, index) => (
                        <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center text-sm text-gray-500">
                        <FaComment className="mr-1" />
                        {post.comments}
                      </span>
                      <button className="text-gray-500 hover:text-indigo-600">
                        <FaShare />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-12 bg-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
          <p className="text-lg mb-6">Subscribe to our newsletter for the latest fitness tips and articles</p>
          <div className="max-w-md mx-auto">
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-l-md focus:outline-none text-gray-900"
              />
              <button className="bg-indigo-800 text-white px-6 py-2 rounded-r-md hover:bg-indigo-900">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog; 