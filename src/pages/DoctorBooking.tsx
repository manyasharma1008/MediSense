import { useState, useEffect } from 'react';
import { Search, Calendar, Clock, MapPin, Star, ChevronRight } from 'lucide-react';
import { useHealth } from '../context/HealthContext';

interface Doctor {
  id: string;
  name: string;
  specialty: string;
  icon: string;
  experience: string;
  rating: number;
  nextAvailable: string;
  location: string;
}

function DoctorBooking() {
  const [searchQuery, setSearchQuery] = useState('');
  const { currentDiagnosis, selectedDoctor } = useHealth();
  const [filteredDoctors, setFilteredDoctors] = useState<Doctor[]>([]);

  const doctors: Doctor[] = [
    {
      id: 'general',
      name: 'General Physician',
      specialty: 'General Medicine',
      icon: '👨‍⚕️',
      experience: '10+ years',
      rating: 4.8,
      nextAvailable: 'Today',
      location: 'Downtown Medical Center'
    },
    {
      id: 'dermatologist',
      name: 'Dermatologist',
      specialty: 'Skin Care',
      icon: '👩‍⚕️',
      experience: '8+ years',
      rating: 4.9,
      nextAvailable: 'Tomorrow',
      location: 'Skin & Beauty Clinic'
    },
    {
      id: 'pediatrician',
      name: 'Pediatrician',
      specialty: 'Children\'s Health',
      icon: '👶',
      experience: '12+ years',
      rating: 4.7,
      nextAvailable: 'Today',
      location: 'Children\'s Medical Center'
    },
    {
      id: 'gynecologist',
      name: 'Gynecologist',
      specialty: 'Women\'s Health',
      icon: '👩',
      experience: '15+ years',
      rating: 4.9,
      nextAvailable: 'Tomorrow',
      location: 'Women\'s Wellness Center'
    },
    {
      id: 'cardiologist',
      name: 'Cardiologist',
      specialty: 'Heart Care',
      icon: '❤️',
      experience: '20+ years',
      rating: 4.8,
      nextAvailable: 'Next Week',
      location: 'Heart Institute'
    },
    {
      id: 'ent',
      name: 'ENT Specialist',
      specialty: 'Ear, Nose, Throat',
      icon: '👂',
      experience: '9+ years',
      rating: 4.7,
      nextAvailable: 'Today',
      location: 'ENT Care Center'
    }
  ];

  useEffect(() => {
    let filtered = [...doctors];
    
    // Filter based on diagnosis if available
    if (currentDiagnosis) {
      const recommendedSpecialties = currentDiagnosis.recommendedDoctors.map(d => d.specialty.toLowerCase());
      filtered = filtered.filter(doctor => 
        recommendedSpecialties.includes(doctor.specialty.toLowerCase())
      );
    }

    // Filter based on search query
    if (searchQuery) {
      filtered = filtered.filter(doctor =>
        doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doctor.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Sort by priority if diagnosis is available
    if (currentDiagnosis) {
      filtered.sort((a, b) => {
        const priorityA = currentDiagnosis.recommendedDoctors.find(
          d => d.specialty.toLowerCase() === a.specialty.toLowerCase()
        )?.priority || 'low';
        const priorityB = currentDiagnosis.recommendedDoctors.find(
          d => d.specialty.toLowerCase() === b.specialty.toLowerCase()
        )?.priority || 'low';
        
        const priorityOrder = { high: 0, medium: 1, low: 2 };
        return priorityOrder[priorityA] - priorityOrder[priorityB];
      });
    }

    setFilteredDoctors(filtered);
  }, [currentDiagnosis, searchQuery, selectedDoctor]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Navigation spacer */}
      <div className="h-20"></div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Search and Doctor List */}
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
              Secure and hassle-free
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-700 mt-2">
                online consultation booking
              </span>
            </h1>

            {currentDiagnosis && (
              <div className="mb-8 p-4 bg-blue-50 rounded-xl">
                <h2 className="font-semibold text-blue-800">Based on your symptoms</h2>
                <p className="text-blue-600">Recommended specialists for: {currentDiagnosis.name}</p>
              </div>
            )}

            {/* Search Bar */}
            <div className="relative max-w-xl mt-8">
              <input
                type="text"
                placeholder="Search doctors, specialties..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 rounded-full border-2 border-blue-100 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 pr-12 text-lg shadow-lg"
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-blue-500 h-6 w-6" />
            </div>

            {/* Doctor List */}
            <div className="mt-8 space-y-4">
              {filteredDoctors.map((doctor) => (
                <button
                  key={doctor.id}
                  className="w-full bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group"
                  onClick={() => {
                    // Open booking modal or navigate to booking page
                    alert(`Booking appointment with ${doctor.name}`);
                  }}
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-4xl">{doctor.icon}</div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                            {doctor.name}
                          </h3>
                          <p className="text-sm text-gray-600">{doctor.specialty}</p>
                        </div>
                        <ChevronRight className="h-5 w-5 text-blue-500 transform group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                      <div className="mt-2 flex items-center space-x-4 text-sm text-gray-600">
                        <span className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 mr-1" />
                          {doctor.rating}
                        </span>
                        <span className="flex items-center">
                          <Clock className="h-4 w-4 text-blue-500 mr-1" />
                          {doctor.nextAvailable}
                        </span>
                        <span className="flex items-center">
                          <MapPin className="h-4 w-4 text-blue-500 mr-1" />
                          {doctor.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1651008376811-b90baee60c1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                alt="Doctor consultation"
                className="rounded-2xl shadow-2xl w-full object-cover h-[600px]"
              />
            </div>

            {/* Floating Action Button */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
              <button className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                <Calendar className="h-6 w-6" />
                <span className="font-medium text-lg">
                  Book Appointment
                </span>
              </button>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-100 rounded-full -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-50 rounded-full -z-10"></div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default DoctorBooking;