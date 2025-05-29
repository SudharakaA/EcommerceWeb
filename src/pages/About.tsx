
import { Users, Target, Award, Globe, Heart, Star } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  const stats = [
    { icon: Users, value: '500K+', label: 'Active Users' },
    { icon: Globe, value: '50+', label: 'Countries' },
    { icon: Award, value: '10M+', label: 'Products Sold' },
    { icon: Star, value: '4.9', label: 'Average Rating' }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b647?w=300&h=300&fit=crop&crop=face',
      bio: 'Former eBay executive with 15 years of e-commerce experience.'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      bio: 'Tech visionary who built scalable platforms for millions of users.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Design',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
      bio: 'Award-winning designer focused on creating intuitive user experiences.'
    },
    {
      name: 'David Kumar',
      role: 'VP of Operations',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      bio: 'Operations expert ensuring seamless transactions worldwide.'
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Customer First',
      description: 'Every decision we make starts with how it benefits our users and community.'
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'We constantly evolve our platform with cutting-edge technology and features.'
    },
    {
      icon: Award,
      title: 'Trust & Safety',
      description: 'Building a secure marketplace where everyone can buy and sell with confidence.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Connecting buyers and sellers across the world with seamless experiences.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6">
            About Innocart
          </h1>
          <p className="text-xl lg:text-2xl opacity-90 max-w-3xl mx-auto">
            We're revolutionizing online marketplace experiences by connecting buyers and sellers 
            worldwide through innovative technology and unmatched customer service.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <stat.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  Founded in 2018, Innocart began with a simple vision: to create the world's most 
                  trusted and user-friendly online marketplace. Our journey started when our founders 
                  experienced firsthand the frustrations of existing platforms.
                </p>
                <p>
                  We noticed that buyers struggled with trust issues, while sellers faced complex 
                  fee structures and poor customer support. This sparked our mission to build 
                  something better - a platform that truly serves both sides of the marketplace.
                </p>
                <p>
                  Today, Innocart is home to millions of unique items, from vintage treasures to 
                  cutting-edge electronics, all backed by our commitment to safety, transparency, 
                  and exceptional user experience.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop"
                alt="Our Story"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These core principles guide everything we do and shape the culture of our company.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg text-center">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <value.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The passionate people behind Innocart who work tirelessly to make your experience exceptional.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl lg:text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            To democratize commerce by providing everyone, everywhere with the tools and platform 
            they need to build successful businesses and find exactly what they're looking for.
          </p>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-2xl mx-auto">
            <p className="text-lg opacity-90">
              "We believe that when we empower individuals to succeed in their entrepreneurial 
              journey, we create a more connected and prosperous world for everyone."
            </p>
            <p className="mt-4 font-semibold">- Sarah Johnson, CEO & Founder</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
