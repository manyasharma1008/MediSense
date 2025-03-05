import { useState, useEffect } from 'react';
import { Search, Bot, UserRound, Thermometer, Brain, Settings as Lungs, Pill, HeartPulse, Frown, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Symptom {
  id: string;
  name: string;
  icon: any;
  relatedSymptoms?: string[];
}

interface Disease {
  name: string;
  symptoms: string[];
  description: string;
  recommendedMedicines: {
    name: string;
    dosage: string;
    price: number;
  }[];
  recommendedDoctors: {
    specialty: string;
    priority: 'high' | 'medium' | 'low';
  }[];
}

function SymptomChecker() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [suggestedSymptoms, setSuggestedSymptoms] = useState<string[]>([]);
  const [diagnosis, setDiagnosis] = useState<Disease | null>(null);
  const [showResults, setShowResults] = useState(false);

  const symptoms: Symptom[] = [
    { 
      id: 'fever', 
      name: 'Fever', 
      icon: Thermometer,
      relatedSymptoms: ['chills', 'sweating', 'headache', 'muscle aches']
    },
    { 
      id: 'cough', 
      name: 'Cough', 
      icon: Lungs,
      relatedSymptoms: ['sore throat', 'runny nose', 'chest pain']
    },
    { 
      id: 'stress', 
      name: 'Stress', 
      icon: Brain,
      relatedSymptoms: ['anxiety', 'insomnia', 'irritability']
    },
    { 
      id: 'asthma', 
      name: 'Breathing Difficulty', 
      icon: Lungs,
      relatedSymptoms: ['wheezing', 'chest tightness', 'shortness of breath']
    },
    { 
      id: 'stomach-ache', 
      name: 'Stomach Ache', 
      icon: Pill,
      relatedSymptoms: ['nausea', 'vomiting', 'diarrhea']
    },
    { 
      id: 'leg-pain', 
      name: 'Leg Pain', 
      icon: HeartPulse,
      relatedSymptoms: ['swelling', 'numbness', 'weakness']
    },
    { 
      id: 'nausea', 
      name: 'Nausea', 
      icon: Frown,
      relatedSymptoms: ['vomiting', 'dizziness', 'stomach pain']
    },
    { 
      id: 'fatigue', 
      name: 'Fatigue', 
      icon: UserRound,
      relatedSymptoms: ['weakness', 'sleepiness', 'low energy']
    },
  ];

  const diseases: Disease[] = [
    {
      name: 'Common Cold',
      symptoms: ['fever', 'cough', 'sore throat', 'runny nose'],
      description: 'A viral infection of the upper respiratory tract.',
      recommendedMedicines: [
        { name: 'Cold Relief Plus', dosage: '1 tablet every 6 hours', price: 199.99 },
        { name: 'Cough Syrup', dosage: '10ml twice daily', price: 149.99 }
      ],
      recommendedDoctors: [
        { specialty: 'General Physician', priority: 'medium' },
        { specialty: 'ENT Specialist', priority: 'low' }
      ]
    },
    {
      name: 'Gastroenteritis',
      symptoms: ['stomach-ache', 'nausea', 'vomiting', 'diarrhea'],
      description: 'An intestinal infection marked by diarrhea, abdominal cramps, nausea, and vomiting.',
      recommendedMedicines: [
        { name: 'Digestive Aid', dosage: '1 tablet after meals', price: 299.99 },
        { name: 'Oral Rehydration', dosage: '1 sachet in water as needed', price: 99.99 }
      ],
      recommendedDoctors: [
        { specialty: 'Gastroenterologist', priority: 'high' },
        { specialty: 'General Physician', priority: 'medium' }
      ]
    },
    {
      name: 'Anxiety Disorder',
      symptoms: ['stress', 'anxiety', 'insomnia', 'irritability'],
      description: 'A mental health condition characterized by excessive worry and fear.',
      recommendedMedicines: [
        { name: 'Calm Mind', dosage: '1 tablet daily', price: 399.99 },
        { name: 'Sleep Aid', dosage: '1 tablet before bed', price: 299.99 }
      ],
      recommendedDoctors: [
        { specialty: 'Psychiatrist', priority: 'high' },
        { specialty: 'Psychologist', priority: 'high' }
      ]
    }
  ];

  useEffect(() => {
    if (searchQuery.length > 0) {
      const allSymptoms = symptoms.flatMap(s => 
        [s.name.toLowerCase(), ...(s.relatedSymptoms || [])].map(sym => sym.toLowerCase())
      );
      
      const filtered = allSymptoms.filter(s => 
        s.includes(searchQuery.toLowerCase()) && !selectedSymptoms.includes(s)
      );
      
      setSuggestedSymptoms(filtered);
    } else {
      setSuggestedSymptoms([]);
    }
  }, [searchQuery, selectedSymptoms]);

  const addSymptom = (symptom: string) => {
    if (!selectedSymptoms.includes(symptom)) {
      setSelectedSymptoms([...selectedSymptoms, symptom]);
      setSearchQuery('');
      setSuggestedSymptoms([]);
    }
  };

  const removeSymptom = (symptom: string) => {
    setSelectedSymptoms(selectedSymptoms.filter(s => s !== symptom));
  };

  const analyzeSymptomsAndDiagnose = () => {
    let bestMatch: Disease | null = null;
    let highestMatchCount = 0;

    diseases.forEach(disease => {
      const matchCount = disease.symptoms.filter(s => 
        selectedSymptoms.includes(s.toLowerCase())
      ).length;

      if (matchCount > highestMatchCount) {
        highestMatchCount = matchCount;
        bestMatch = disease;
      }
    });

    setDiagnosis(bestMatch);
    setShowResults(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-teal-50">
      {/* Navigation spacer */}
      <div className="h-20"></div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Text and Search */}
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
              Not Feeling Well?
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-700 mt-2">
                Let's Find Out What's Wrong!
              </span>
            </h1>

            {/* Search Bar */}
            <div className="relative max-w-xl mt-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Type your symptoms..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-4 rounded-full border-2 border-teal-100 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all duration-300 pr-12 text-lg shadow-lg"
                />
                <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-teal-500 h-6 w-6" />
              </div>

              {/* Search Suggestions */}
              {suggestedSymptoms.length > 0 && (
                <div className="absolute z-10 w-full mt-2 bg-white rounded-xl shadow-lg border border-teal-100">
                  {suggestedSymptoms.map((symptom, index) => (
                    <button
                      key={index}
                      onClick={() => addSymptom(symptom)}
                      className="w-full px-4 py-2 text-left hover:bg-teal-50 first:rounded-t-xl last:rounded-b-xl"
                    >
                      {symptom}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Selected Symptoms */}
            {selectedSymptoms.length > 0 && (
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-3">Selected Symptoms:</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedSymptoms.map((symptom, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-3 py-1 rounded-full bg-teal-100 text-teal-800"
                    >
                      {symptom}
                      <button
                        onClick={() => removeSymptom(symptom)}
                        className="ml-2 text-teal-600 hover:text-teal-800"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
                <button
                  onClick={analyzeSymptomsAndDiagnose}
                  className="mt-6 bg-gradient-to-r from-teal-600 to-teal-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Analyze Symptoms
                </button>
              </div>
            )}

            {/* Common Symptoms Grid */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4">Common Symptoms:</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {symptoms.map((symptom) => (
                  <button
                    key={symptom.id}
                    onClick={() => addSymptom(symptom.name.toLowerCase())}
                    className="flex flex-col items-center p-4 rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 group"
                  >
                    <div className="p-3 rounded-lg bg-teal-50 text-teal-600 group-hover:bg-teal-100 transition-colors duration-300">
                      <symptom.icon className="h-8 w-8" />
                    </div>
                    <span className="mt-2 font-medium text-gray-700 group-hover:text-teal-600 transition-colors duration-300 text-center">
                      {symptom.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Results */}
          {showResults && (
            <div className="bg-white rounded-2xl shadow-xl p-8">
              {diagnosis ? (
                <>
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Possible Condition</h2>
                    <div className="bg-teal-50 rounded-xl p-6">
                      <h3 className="text-xl font-semibold text-teal-800 mb-2">{diagnosis.name}</h3>
                      <p className="text-gray-600">{diagnosis.description}</p>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Recommended Medicines</h2>
                    <div className="space-y-4">
                      {diagnosis.recommendedMedicines.map((medicine, index) => (
                        <div key={index} className="bg-white rounded-xl border border-teal-100 p-4">
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-semibold text-gray-900">{medicine.name}</h4>
                              <p className="text-sm text-gray-600">{medicine.dosage}</p>
                            </div>
                            <Link
                              to="/medications"
                              className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors duration-300"
                            >
                              ₹{medicine.price}
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Recommended Specialists</h2>
                    <div className="space-y-4">
                      {diagnosis.recommendedDoctors.map((doctor, index) => (
                        <div key={index} className="bg-white rounded-xl border border-teal-100 p-4">
                          <div className="flex justify-between items-center">
                            <div>
                              <h4 className="font-semibold text-gray-900">{doctor.specialty}</h4>
                              <p className="text-sm text-gray-600">
                                Priority: <span className="capitalize">{doctor.priority}</span>
                              </p>
                            </div>
                            <Link
                              to="/consultation"
                              className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors duration-300"
                            >
                              Book Now
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <div className="text-center py-8">
                  <AlertCircle className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No Clear Diagnosis</h3>
                  <p className="text-gray-600 mb-6">
                    Based on the symptoms provided, we couldn't determine a specific condition. 
                    Please consult a healthcare professional for accurate diagnosis.
                  </p>
                  <Link
                    to="/consultation"
                    className="bg-teal-600 text-white px-6 py-3 rounded-full hover:bg-teal-700 transition-colors duration-300 inline-flex items-center"
                  >
                    <UserRound className="h-5 w-5 mr-2" />
                    Consult a Doctor
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default SymptomChecker;