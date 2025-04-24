import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaShoppingCart, FaSearch, FaFilter, FaStar } from 'react-icons/fa';
import { PageWrapper } from '../components/layout/Layout';
import Section from '../components/common/Section';

const Store = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'supplements', name: 'Supplements' },
    { id: 'equipment', name: 'Equipment' },
    { id: 'apparel', name: 'Apparel' },
    { id: 'accessories', name: 'Accessories' },
  ];

  const products = [
    {
      id: 1,
      name: 'Protein Powder',
      category: 'supplements',
      price: 49.99,
      rating: 4.5,
      reviews: 128,
      image: '/protein-powder.jpg',
      description: 'High-quality whey protein for muscle recovery',
      inStock: true,
    },
    {
      id: 2,
      name: 'Dumbbell Set',
      category: 'equipment',
      price: 89.99,
      rating: 4.8,
      reviews: 256,
      image: '/dumbbells.jpg',
      description: 'Adjustable dumbbell set for home workouts',
      inStock: true,
    },
    {
      id: 3,
      name: 'Workout Tank',
      category: 'apparel',
      price: 29.99,
      rating: 4.2,
      reviews: 75,
      image: '/tank.jpg',
      description: 'Breathable workout tank for intense sessions',
      inStock: true,
    },
    {
      id: 4,
      name: 'Gym Bag',
      category: 'accessories',
      price: 39.99,
      rating: 4.6,
      reviews: 92,
      image: '/gym-bag.jpg',
      description: 'Spacious gym bag with multiple compartments',
      inStock: true,
    },
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <PageWrapper>
      <Section
        dark
        gradient
        pattern
        className="relative min-h-[40vh] flex items-center justify-center text-center"
      >
        <div className="max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-indigo-500 to-cyan-400"
          >
            Gym Store
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300"
          >
            Premium fitness equipment and supplements
          </motion.p>
        </div>
      </Section>

      <Section>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <div className="flex gap-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg ${
                    selectedCategory === category.id
                      ? 'bg-purple-500 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800 rounded-xl overflow-hidden"
              >
                <div className="h-64 relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white">{product.name}</h3>
                    <div className="flex items-center text-yellow-400">
                      <FaStar />
                      <span className="ml-1 text-white">{product.rating}</span>
                    </div>
                  </div>
                  <p className="text-gray-400 mb-4">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-white">${product.price}</span>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => addToCart(product)}
                      className="px-4 py-2 bg-purple-500 text-white rounded-lg flex items-center gap-2"
                    >
                      <FaShoppingCart />
                      Add to Cart
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </PageWrapper>
  );
};

export default Store; 