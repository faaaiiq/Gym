import { motion } from 'framer-motion';
import { FaDumbbell, FaHeartbeat, FaUsers, FaTrophy } from 'react-icons/fa';

const About = () => {
  // Team members data
  const teamMembers = [
    {
      name: 'Alex Thompson',
      role: 'Head Trainer',
      image: '/team/alex.jpg',
      bio: 'Certified personal trainer with 10+ years of experience in strength training and conditioning.',
      specialties: ['Strength Training', 'CrossFit', 'Olympic Lifting'],
    },
    {
      name: 'Emma Wilson',
      role: 'Yoga Instructor',
      image: '/team/emma.jpg',
      bio: '500-hour certified yoga instructor specializing in Vinyasa and restorative yoga.',
      specialties: ['Vinyasa Yoga', 'Restorative Yoga', 'Meditation'],
    },
    {
      name: 'Chris Brown',
      role: 'Fitness Coach',
      image: '/team/chris.jpg',
      bio: 'Expert in HIIT and functional training with a focus on athletic performance.',
      specialties: ['HIIT', 'Functional Training', 'Sports Performance'],
    },
    {
      name: 'Sarah Johnson',
      role: 'Nutritionist',
      image: '/team/sarah.jpg',
      bio: 'Registered dietitian specializing in sports nutrition and weight management.',
      specialties: ['Sports Nutrition', 'Weight Management', 'Meal Planning'],
    },
  ];

  // Milestones data
  const milestones = [
    {
      year: '2010',
      title: 'Founded',
      description: 'Started with a small space and big dreams',
    },
    {
      year: '2012',
      title: 'Expansion',
      description: 'Moved to a larger facility with more equipment',
    },
    {
      year: '2015',
      title: 'Team Growth',
      description: 'Expanded our team of certified trainers',
    },
    {
      year: '2018',
      title: 'Community',
      description: 'Reached 1000+ active members',
    },
    {
      year: '2020',
      title: 'Innovation',
      description: 'Launched virtual training programs',
    },
    {
      year: '2023',
      title: 'Excellence',
      description: 'Recognized as the best gym in the city',
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900 text-white">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: 'url(/about-hero.jpg)' }}></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Our Story
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            Transforming lives through fitness, one workout at a time
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-50 p-8 rounded-lg"
            >
              <div className="flex items-center mb-4">
                <FaHeartbeat className="text-4xl text-indigo-600 mr-4" />
                <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-gray-600">
                To empower individuals to achieve their fitness goals through personalized training,
                expert guidance, and a supportive community. We believe that everyone deserves
                access to quality fitness resources and the opportunity to transform their lives.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-50 p-8 rounded-lg"
            >
              <div className="flex items-center mb-4">
                <FaTrophy className="text-4xl text-indigo-600 mr-4" />
                <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-gray-600">
                To be the leading fitness destination that sets the standard for excellence
                in training, community building, and overall wellness. We envision a world
                where fitness is accessible, enjoyable, and transformative for everyone.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">Dedicated professionals committed to your success</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-indigo-600 font-semibold mb-2">{member.role}</p>
                  <p className="text-gray-600 mb-4">{member.bio}</p>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Specialties:</h4>
                    <ul className="space-y-1">
                      {member.specialties.map((specialty, i) => (
                        <li key={i} className="text-gray-600 flex items-center">
                          <FaDumbbell className="text-indigo-600 mr-2" />
                          {specialty}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">Key milestones in our fitness journey</p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-indigo-200"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                >
                  <div className="w-1/2">
                    <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
                      <div className="flex items-center mb-2">
                        <FaUsers className="text-indigo-600 mr-2" />
                        <span className="text-indigo-600 font-bold">{milestone.year}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 