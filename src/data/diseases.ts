export interface Disease {
    name: string;
    symptoms: string[];
    description: string;
    severity: 'mild' | 'moderate' | 'severe';
    recommendedMedicines: {
      name: string;
      dosage: string;
      price: number;
      description: string;
    }[];
    recommendedDoctors: {
      specialty: string;
      priority: 'high' | 'medium' | 'low';
      reason: string;
    }[];
  }
  
  export const diseases: Disease[] = [
    {
      name: 'Common Cold',
      symptoms: ['fever', 'cough', 'sore throat', 'runny nose', 'fatigue'],
      description: 'A viral infection of the upper respiratory tract that typically resolves within 7-10 days.',
      severity: 'mild',
      recommendedMedicines: [
        {
          name: 'Cold Relief Plus',
          dosage: '1 tablet every 6 hours',
          price: 199.99,
          description: 'Relieves multiple cold symptoms including fever and congestion'
        },
        {
          name: 'Cough Syrup',
          dosage: '10ml twice daily',
          price: 149.99,
          description: 'Suppresses cough and soothes throat irritation'
        }
      ],
      recommendedDoctors: [
        {
          specialty: 'General Physician',
          priority: 'medium',
          reason: 'For general assessment and treatment of symptoms'
        },
        {
          specialty: 'ENT Specialist',
          priority: 'low',
          reason: 'If symptoms persist or complications develop'
        }
      ]
    },
    {
      name: 'Migraine',
      symptoms: ['headache', 'sensitivity to light', 'nausea', 'dizziness'],
      description: 'A neurological condition causing severe headaches often accompanied by other symptoms.',
      severity: 'moderate',
      recommendedMedicines: [
        {
          name: 'Migraine Relief',
          dosage: '1 tablet at onset of migraine',
          price: 299.99,
          description: 'Fast-acting migraine pain relief'
        },
        {
          name: 'Anti-Nausea Tablets',
          dosage: '1 tablet as needed',
          price: 149.99,
          description: 'Reduces nausea associated with migraines'
        }
      ],
      recommendedDoctors: [
        {
          specialty: 'Neurologist',
          priority: 'high',
          reason: 'For proper diagnosis and treatment plan'
        },
        {
          specialty: 'Pain Management Specialist',
          priority: 'medium',
          reason: 'For managing chronic migraines'
        }
      ]
    },
    {
      name: 'Gastroenteritis',
      symptoms: ['stomach-pain', 'nausea', 'vomiting', 'diarrhea'],
      description: 'An intestinal infection causing inflammation of the digestive system.',
      severity: 'moderate',
      recommendedMedicines: [
        {
          name: 'Digestive Aid Plus',
          dosage: '1 tablet after meals',
          price: 249.99,
          description: 'Relieves stomach discomfort and aids digestion'
        },
        {
          name: 'Oral Rehydration',
          dosage: '1 sachet in water as needed',
          price: 99.99,
          description: 'Prevents dehydration due to diarrhea'
        }
      ],
      recommendedDoctors: [
        {
          specialty: 'Gastroenterologist',
          priority: 'high',
          reason: 'For specialized digestive system care'
        },
        {
          specialty: 'General Physician',
          priority: 'medium',
          reason: 'For initial assessment and treatment'
        }
      ]
    },
    {
      name: 'Rheumatoid Arthritis',
      symptoms: ['joint-pain', 'stiffness', 'swelling', 'reduced mobility', 'fatigue'],
      description: 'An autoimmune condition causing joint inflammation and pain.',
      severity: 'severe',
      recommendedMedicines: [
        {
          name: 'Arthritis Relief',
          dosage: '1 tablet twice daily',
          price: 399.99,
          description: 'Reduces joint pain and inflammation'
        },
        {
          name: 'Joint Support Plus',
          dosage: '1 capsule daily',
          price: 299.99,
          description: 'Supports joint health and mobility'
        }
      ],
      recommendedDoctors: [
        {
          specialty: 'Rheumatologist',
          priority: 'high',
          reason: 'For specialized arthritis treatment'
        },
        {
          specialty: 'Physical Therapist',
          priority: 'medium',
          reason: 'For mobility exercises and pain management'
        }
      ]
    }
  ];