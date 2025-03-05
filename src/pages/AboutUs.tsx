import { Users, Award, Clock, Globe, Heart, Shield, Sparkles } from 'lucide-react';

function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Navigation spacer */}
      <div className="h-20"></div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6">
                About
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-700">
                  MediSense
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                We're on a mission to make healthcare accessible, affordable, and convenient for everyone. 
                Our platform combines cutting-edge technology with medical expertise to provide you with 
                the best healthcare experience.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 bg-blue-100 px-4 py-2 rounded-full">
                  <Users className="h-5 w-5 text-blue-600" />
                  <span className="text-blue-800 font-medium">1M+ Users</span>
                </div>
                <div className="flex items-center space-x-2 bg-blue-100 px-4 py-2 rounded-full">
                  <Award className="h-5 w-5 text-blue-600" />
                  <span className="text-blue-800 font-medium">Award Winning</span>
                </div>
                <div className="flex items-center space-x-2 bg-blue-100 px-4 py-2 rounded-full">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <span className="text-blue-800 font-medium">24/7 Support</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-blue-100 rounded-full absolute -z-10 w-[120%] h-[120%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Medical team" 
                className="rounded-3xl shadow-xl w-full h-auto object-cover z-10 relative"
              />
            </div>
          </div>
        </div>

        {/* Our Story Section */}
        <div className="py-16 border-t border-gray-200">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-lg text-gray-600 mb-8">
              MediSense was founded in 2025 with a simple yet powerful vision: to transform how people access healthcare. 
              What started as a small team of doctors and engineers has grown into a comprehensive healthcare platform 
              serving millions of users worldwide.
            </p>
            <p className="text-lg text-gray-600">
              Our journey began during the global pandemic when we witnessed firsthand the challenges people faced in 
              accessing timely medical advice. We built MediSense to bridge this gap, leveraging technology to connect 
              patients with healthcare providers and resources, regardless of location or circumstances.
            </p>
          </div>
        </div>

        {/* Our Values */}
        <div className="py-16 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="h-14 w-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Patient-Centered Care</h3>
              <p className="text-gray-600">
                We put patients at the center of everything we do. Our services are designed to meet your needs, 
                preferences, and values, ensuring you receive the care you deserve.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="h-14 w-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Trust & Privacy</h3>
              <p className="text-gray-600">
                We maintain the highest standards of privacy and security. Your health information is protected 
                with advanced encryption and strict access controls.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="h-14 w-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Sparkles className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-600">
                We continuously innovate to improve healthcare delivery. Our AI-powered tools and intuitive 
                interfaces make managing your health simpler and more effective.
              </p>
            </div>
          </div>
        </div>

        {/* Our Team */}
        <div className="py-16 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Dr. Sarah Johnson" 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-900">Dr. Sarah Johnson</h3>
              <p className="text-blue-600 font-medium mb-4">Co-Founder & CEO</p>
              <p className="text-gray-600">
                Former Head of Digital Health at Mayo Clinic with 15+ years of experience in healthcare innovation.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <img 
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80" 
                alt="Michael Chen" 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-900">Michael Chen</h3>
              <p className="text-blue-600 font-medium mb-4">Co-Founder & CTO</p>
              <p className="text-gray-600">
                Former Engineering Lead at Google Health, specialized in AI and machine learning for healthcare.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <img 
                src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                alt="Dr. Priya Patel" 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-900">Dr. Priya Patel</h3>
              <p className="text-blue-600 font-medium mb-4">Chief Medical Officer</p>
              <p className="text-gray-600">
                Board-certified physician with expertise in telemedicine and digital health integration.
              </p>
            </div>
          </div>
        </div>

        {/* Global Impact */}
        <div className="py-16 border-t border-gray-200">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Global Impact</h2>
              <p className="text-lg text-gray-600 mb-6">
                MediSense is making healthcare accessible to millions of people across 30+ countries. 
                We're particularly proud of our work in underserved communities, where our platform has 
                helped bridge critical healthcare gaps.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded-xl shadow-md">
                  <p className="text-3xl font-bold text-blue-600">1M+</p>
                  <p className="text-gray-600">Active Users</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-md">
                  <p className="text-3xl font-bold text-blue-600">30+</p>
                  <p className="text-gray-600">Countries</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-md">
                  <p className="text-3xl font-bold text-blue-600">5,000+</p>
                  <p className="text-gray-600">Healthcare Providers</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-md">
                  <p className="text-3xl font-bold text-blue-600">24/7</p>
                  <p className="text-gray-600">Support</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <Globe className="h-64 w-64 text-blue-600 mx-auto opacity-20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" 
                  alt="Global impact" 
                  className="rounded-2xl shadow-xl max-w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Join Us CTA */}
        <div className="py-16 border-t border-gray-200">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Join the MediSense Family</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Experience healthcare reimagined. Sign up today and take the first step towards a healthier, 
              more convenient healthcare journey.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300 text-lg">
              Get Started Today
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AboutUs;