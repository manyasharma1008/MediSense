import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bot, Stethoscope, Pill, Activity } from 'lucide-react';
import AIChat from '../components/AIChat';

function HomePage() {
  const [showChat, setShowChat] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Navigation spacer */}
      <div className="h-20"></div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-black text-gray-900 mb-6">
              Fast, accurate, and reliable healthcare guidance,
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-700">
              At your fingertips
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Access world-class healthcare services from the comfort of your home. 
            Check symptoms, consult doctors, and order medications online.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
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

        {/* AI Chat Feature */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 md:p-12 text-white">
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
          <div className="mt-8">
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