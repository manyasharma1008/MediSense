import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bot, Stethoscope, Pill, Activity, Search, ChevronDown } from 'lucide-react';
import AIChat from '../components/AIChat';

function HomePage() {
  const [showChat, setShowChat] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Navigation spacer */}
      <div className="h-20"></div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6">
                Your Health,
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-700">
                  Our Priority
                </span>
              </h1>
              
              {/* Search Bar */}
              <div className="mt-10 relative max-w-xl">
                <div className="flex items-center">
                  <div className="relative flex-grow">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                      type="text"
                      placeholder="I'd like to find out"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-12 pr-4 py-4 rounded-l-full border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 text-gray-700"
                    />
                  </div>
                  <div className="relative">
                    <select 
                      className="h-full py-4 pl-4 pr-10 border-2 border-l-0 border-gray-200 bg-white text-gray-700 focus:outline-none focus:border-blue-500 appearance-none"
                    >
                      <option>what MediSense will bring to my health</option>
                      <option>about symptom checking</option>
                      <option>about doctor consultations</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-r-full transition-colors duration-300">
                    Learn more
                  </button>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-blue-100 rounded-full absolute -z-10 w-[120%] h-[120%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
              <img 
                src="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Family healthcare" 
                className="rounded-3xl shadow-xl w-full h-auto object-cover z-10 relative"
              />
            </div>
          </div>
        </div>

        {/* Blue Divider */}
        <div className="h-2 bg-blue-600 w-full my-8 rounded-full"></div>

        {/* Services Grid */}
        <div className="py-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Symptom Checker Card */}
            <Link 
              to="/symptom-checker"
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                <Activity className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold mt-4 text-gray-900">Symptom Checker</h3>
              <p className="mt-2 text-gray-600">
                Check your symptoms and get instant health guidance from our AI-powered system.
              </p>
              <div className="mt-4 flex items-center text-blue-600 font-medium">
                Check Symptoms
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </div>
            </Link>

            {/* Doctor Consultation Card */}
            <Link 
              to="/consultation"
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                <Stethoscope className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold mt-4 text-gray-900">Doctor Consultation</h3>
              <p className="mt-2 text-gray-600">
                Book video consultations with experienced doctors for personalized care.
              </p>
              <div className="mt-4 flex items-center text-blue-600 font-medium">
                Book Now
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </div>
            </Link>

            {/* Order Medications Card */}
            <Link 
              to="/medications"
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                <Pill className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold mt-4 text-gray-900">Order Medications</h3>
              <p className="mt-2 text-gray-600">
                Get your prescribed medications delivered right to your doorstep.
              </p>
              <div className="mt-4 flex items-center text-blue-600 font-medium">
                Order Now
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </div>
            </Link>
          </div>
        </div>

        {/* AI Chat Feature */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 md:p-12 text-white mb-16">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                24/7 AI Health Assistant
              </h2>
              <p className="text-blue-100 text-lg max-w-xl">
                Get instant answers to your health questions from our advanced AI chatbot. 
                Available anytime, anywhere.
              </p>
              <button 
                onClick={() => setShowChat(!showChat)}
                className="mt-6 bg-white text-blue-600 px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300 flex items-center"
              >
                <Bot className="mr-2 h-5 w-5" />
                {showChat ? 'Close Chat' : 'Chat Now'}
              </button>
            </div>
            <div className="w-full md:w-1/3">
              <img 
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
                alt="AI Health Assistant"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>

        {/* AI Chat Section */}
        {showChat && (
          <div className="mt-8 mb-16">
            <div className="max-w-4xl mx-auto">
              <AIChat />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default HomePage;