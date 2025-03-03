import { createContext, useContext, useState, ReactNode } from 'react';
import { diseases } from '../data/diseases';

interface AIResponse {
  type: 'medical' | 'skincare' | 'wellness';
  recommendation: string;
  products?: {
    name: string;
    description: string;
    price: number;
    usage: string;
  }[];
  specialists?: {
    type: string;
    reason: string;
    priority: 'high' | 'medium' | 'low';
  }[];
  lifestyle?: string[];
}

interface AIContextType {
  isLoading: boolean;
  getAIResponse: (query: string, category: string) => Promise<AIResponse>;
  recentResponses: AIResponse[];
}

const AIContext = createContext<AIContextType | undefined>(undefined);

// Helper function to find matching symptoms
function findMatchingSymptoms(query: string) {
  const symptoms = diseases.flatMap(disease => disease.symptoms);
  return symptoms.filter(symptom => 
    query.toLowerCase().includes(symptom.toLowerCase())
  );
}

// Helper function to find matching diseases
function findMatchingDiseases(symptoms: string[]) {
  return diseases.filter(disease => 
    symptoms.some(symptom => disease.symptoms.includes(symptom))
  );
}

interface SuggestionType {
  recommendation: string;
  products?: {
    name: string;
    description: string;
    price: number;
    usage: string;
  }[];
  specialists?: {
    type: string;
    reason: string;
    priority: 'high' | 'medium' | 'low';
  }[];
  lifestyle?: string[];
}

const skincareSuggestions: Record<string, SuggestionType> = {
  'acne': {
    recommendation: 'Based on your concerns about acne, here are some targeted recommendations.',
    products: [
      {
        name: 'Clear Skin Cleanser',
        description: 'Gentle cleanser with salicylic acid',
        price: 299.99,
        usage: 'Use twice daily, morning and night'
      },
      {
        name: 'Spot Treatment Gel',
        description: 'Contains benzoyl peroxide for acne treatment',
        price: 199.99,
        usage: 'Apply directly to spots as needed'
      }
    ],
    specialists: [
      {
        type: 'Dermatologist',
        reason: 'For professional acne treatment and skincare routine',
        priority: 'medium'
      }
    ],
    lifestyle: [
      'Keep your face clean and avoid touching it frequently',
      'Stay hydrated and maintain a balanced diet',
      'Change pillowcases regularly',
      'Avoid heavy makeup that can clog pores'
    ]
  },
  'aging': {
    recommendation: 'For anti-aging concerns, here\'s a comprehensive care plan.',
    products: [
      {
        name: 'Anti-Aging Serum',
        description: 'With retinol and peptides',
        price: 499.99,
        usage: 'Apply in the evening before moisturizer'
      },
      {
        name: 'Day Protection Cream',
        description: 'SPF 50 with antioxidants',
        price: 399.99,
        usage: 'Apply every morning'
      }
    ],
    specialists: [
      {
        type: 'Aesthetic Dermatologist',
        reason: 'For advanced anti-aging treatments',
        priority: 'low'
      }
    ],
    lifestyle: [
      'Use sun protection daily',
      'Stay hydrated',
      'Get adequate sleep',
      'Eat foods rich in antioxidants'
    ]
  },
  'dryness': {
    recommendation: 'To address skin dryness, here\'s a moisturizing routine.',
    products: [
      {
        name: 'Hydrating Cleanser',
        description: 'Cream cleanser with ceramides',
        price: 249.99,
        usage: 'Use twice daily'
      },
      {
        name: 'Intensive Moisturizer',
        description: 'Rich cream with hyaluronic acid',
        price: 349.99,
        usage: 'Apply morning and night'
      }
    ],
    specialists: [
      {
        type: 'Dermatologist',
        reason: 'For skin barrier assessment',
        priority: 'low'
      }
    ],
    lifestyle: [
      'Use a humidifier',
      'Avoid hot showers',
      'Drink plenty of water',
      'Eat foods rich in healthy fats'
    ]
  }
};

const wellnessSuggestions: Record<string, SuggestionType> = {
  'stress': {
    recommendation: 'Here\'s a holistic approach to manage stress and improve wellbeing.',
    products: [
      {
        name: 'Calming Tea Blend',
        description: 'Herbal tea with chamomile and lavender',
        price: 149.99,
        usage: 'Drink 1-2 cups daily, especially in the evening'
      },
      {
        name: 'Stress Relief Supplements',
        description: 'Natural adaptogenic herbs',
        price: 299.99,
        usage: 'Take one capsule twice daily'
      }
    ],
    specialists: [
      {
        type: 'Mental Health Counselor',
        reason: 'For stress management techniques',
        priority: 'medium'
      },
      {
        type: 'Yoga Instructor',
        reason: 'For stress-relieving exercises',
        priority: 'low'
      }
    ],
    lifestyle: [
      'Practice daily meditation or deep breathing',
      'Maintain regular exercise routine',
      'Ensure 7-8 hours of sleep',
      'Set boundaries in work and personal life'
    ]
  },
  'sleep': {
    recommendation: 'To improve your sleep quality, consider these suggestions.',
    products: [
      {
        name: 'Sleep Support Formula',
        description: 'Natural sleep aid with melatonin',
        price: 249.99,
        usage: 'Take one tablet 30 minutes before bedtime'
      },
      {
        name: 'Relaxing Essential Oil',
        description: 'Lavender and chamomile blend',
        price: 179.99,
        usage: 'Use in a diffuser before bedtime'
      }
    ],
    specialists: [
      {
        type: 'Sleep Specialist',
        reason: 'For professional sleep assessment',
        priority: 'medium'
      }
    ],
    lifestyle: [
      'Maintain a consistent sleep schedule',
      'Create a relaxing bedtime routine',
      'Avoid screens before bedtime',
      'Keep bedroom cool and dark'
    ]
  },
  'nutrition': {
    recommendation: 'For better nutrition and dietary health, here are some suggestions.',
    products: [
      {
        name: 'Multivitamin Complex',
        description: 'Complete daily nutrients',
        price: 399.99,
        usage: 'Take one tablet daily with food'
      },
      {
        name: 'Protein Supplement',
        description: 'Plant-based protein blend',
        price: 499.99,
        usage: 'Mix one scoop with water or milk'
      }
    ],
    specialists: [
      {
        type: 'Nutritionist',
        reason: 'For personalized diet planning',
        priority: 'medium'
      },
      {
        type: 'Dietitian',
        reason: 'For specific dietary requirements',
        priority: 'medium'
      }
    ],
    lifestyle: [
      'Plan meals in advance',
      'Include variety of fruits and vegetables',
      'Stay hydrated throughout the day',
      'Read nutrition labels carefully'
    ]
  }
};

// Common health topics for fallback responses
const commonHealthTopics = [
  {
    topic: 'general health',
    recommendation: 'Maintaining good health involves balanced nutrition, regular exercise, adequate sleep, and stress management.',
    products: [
      {
        name: 'Daily Multivitamin',
        description: 'Complete vitamin and mineral supplement',
        price: 349.99,
        usage: 'Take one tablet daily with food'
      }
    ],
    specialists: [
      {
        type: 'General Physician',
        reason: 'For regular health check-ups and preventive care',
        priority: 'medium' as const
      }
    ],
    lifestyle: [
      'Aim for 30 minutes of exercise daily',
      'Eat a balanced diet rich in fruits and vegetables',
      'Get 7-8 hours of sleep each night',
      'Stay hydrated by drinking plenty of water'
    ]
  },
  {
    topic: 'headache',
    recommendation: 'Headaches can be caused by various factors including stress, dehydration, or eye strain.',
    products: [
      {
        name: 'Pain Relief Tablets',
        description: 'Fast-acting headache relief',
        price: 199.99,
        usage: 'Take one tablet as needed, not exceeding 3 tablets in 24 hours'
      }
    ],
    specialists: [
      {
        type: 'Neurologist',
        reason: 'For recurring or severe headaches',
        priority: 'medium' as const
      }
    ],
    lifestyle: [
      'Stay hydrated throughout the day',
      'Practice stress management techniques',
      'Maintain regular sleep patterns',
      'Take breaks from screen time'
    ]
  },
  {
    topic: 'diet',
    recommendation: 'A balanced diet is essential for overall health and wellbeing.',
    products: [
      {
        name: 'Digestive Enzyme Complex',
        description: 'Supports healthy digestion',
        price: 299.99,
        usage: 'Take one capsule with each meal'
      }
    ],
    specialists: [
      {
        type: 'Nutritionist',
        reason: 'For personalized diet planning',
        priority: 'medium' as const
      }
    ],
    lifestyle: [
      'Include a variety of fruits and vegetables daily',
      'Choose whole grains over refined carbohydrates',
      'Limit processed foods and added sugars',
      'Stay hydrated by drinking water throughout the day'
    ]
  }
];

// Function to generate a response for any query
function generateGenericResponse(query: string, category: string): SuggestionType {
  // Default response if nothing specific is found
  let response: SuggestionType = {
    recommendation: `Thank you for your question about ${category}. Here are some general recommendations.`,
    lifestyle: [
      'Maintain a balanced diet',
      'Exercise regularly',
      'Get adequate sleep',
      'Stay hydrated',
      'Manage stress effectively'
    ]
  };

  // Check for common health topics in the query
  for (const topic of commonHealthTopics) {
    if (query.toLowerCase().includes(topic.topic)) {
      return {
        recommendation: topic.recommendation,
        products: topic.products,
        specialists: topic.specialists,
        lifestyle: topic.lifestyle
      };
    }
  }

  // Generate category-specific responses
  if (category === 'medical') {
    response = {
      recommendation: 'Based on your query, here are some general health recommendations. For specific medical advice, please consult a healthcare professional.',
      specialists: [{
        type: 'General Physician',
        reason: 'For proper medical assessment',
        priority: 'medium' as const
      }],
      lifestyle: [
        'Maintain a balanced diet rich in fruits and vegetables',
        'Exercise regularly, aiming for at least 30 minutes daily',
        'Get 7-8 hours of sleep each night',
        'Stay hydrated by drinking plenty of water',
        'Manage stress through relaxation techniques'
      ]
    };
  } else if (category === 'skincare') {
    response = {
      recommendation: 'Here are some general skincare recommendations. For personalized advice, consider consulting a dermatologist.',
      products: [
        {
          name: 'Gentle Cleanser',
          description: 'Suitable for all skin types',
          price: 249.99,
          usage: 'Use twice daily, morning and night'
        },
        {
          name: 'Daily Moisturizer',
          description: 'With SPF 30 protection',
          price: 299.99,
          usage: 'Apply every morning after cleansing'
        }
      ],
      specialists: [{
        type: 'Dermatologist',
        reason: 'For personalized skincare advice',
        priority: 'low' as const
      }],
      lifestyle: [
        'Cleanse your face twice daily',
        'Always use sunscreen during the day',
        'Stay hydrated for healthy skin',
        'Get adequate sleep for skin regeneration'
      ]
    };
  } else if (category === 'wellness') {
    response = {
      recommendation: 'Here are some general wellness recommendations to improve your overall wellbeing.',
      products: [
        {
          name: 'Multivitamin Complex',
          description: 'Complete daily nutrients',
          price: 399.99,
          usage: 'Take one tablet daily with food'
        }
      ],
      specialists: [{
        type: 'Wellness Coach',
        reason: 'For personalized wellness planning',
        priority: 'low' as const
      }],
      lifestyle: [
        'Practice mindfulness or meditation daily',
        'Maintain a balanced diet rich in whole foods',
        'Exercise regularly for physical and mental health',
        'Ensure adequate sleep and rest',
        'Stay socially connected with friends and family'
      ]
    };
  }

  return response;
}

export function AIProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(false);
  const [recentResponses, setRecentResponses] = useState<AIResponse[]>([]);

  const getAIResponse = async (query: string, category: string): Promise<AIResponse> => {
    setIsLoading(true);
    
    // Simulate AI processing time
    await new Promise(resolve => setTimeout(resolve, 1500));

    let response: AIResponse;

    try {
      // Process query and generate response based on category
      if (category === 'medical') {
        const matchedSymptoms = findMatchingSymptoms(query);
        const matchedDiseases = findMatchingDiseases(matchedSymptoms);

        if (matchedDiseases.length > 0) {
          const disease = matchedDiseases[0]; // Get the first matching disease
          
          // Ensure all required properties are present in the response
          const specialists = disease.recommendedDoctors.map(doc => ({
            type: doc.specialty || 'General Physician',
            reason: `Recommended for ${disease.name} treatment`,
            priority: (doc.priority || 'medium') as 'high' | 'medium' | 'low'
          }));
          
          response = {
            type: 'medical',
            recommendation: `Based on your symptoms, you may have ${disease.name}. ${disease.description}`,
            products: disease.recommendedMedicines.map(med => ({
              name: med.name,
              description: med.dosage,
              price: med.price,
              usage: med.dosage
            })),
            specialists: specialists
          };
        } else {
          // No specific disease matched, provide a generic medical response
          const genericResponse = generateGenericResponse(query, category);
          response = {
            type: 'medical',
            recommendation: genericResponse.recommendation,
            products: genericResponse.products,
            specialists: genericResponse.specialists || [],
            lifestyle: genericResponse.lifestyle
          };
        }
      } else if (category === 'skincare') {
        const skinConcern = Object.keys(skincareSuggestions).find(concern => 
          query.toLowerCase().includes(concern)
        );
        
        if (skinConcern) {
          const suggestion = skincareSuggestions[skinConcern];
          response = {
            type: 'skincare',
            recommendation: suggestion.recommendation,
            products: suggestion.products,
            specialists: suggestion.specialists || [],
            lifestyle: suggestion.lifestyle
          };
        } else {
          // No specific skin concern matched, provide a generic skincare response
          const genericResponse = generateGenericResponse(query, category);
          response = {
            type: 'skincare',
            recommendation: genericResponse.recommendation,
            products: genericResponse.products,
            specialists: genericResponse.specialists || [],
            lifestyle: genericResponse.lifestyle
          };
        }
      } else if (category === 'wellness') {
        const wellnessConcern = Object.keys(wellnessSuggestions).find(concern => 
          query.toLowerCase().includes(concern)
        );
        
        if (wellnessConcern) {
          const suggestion = wellnessSuggestions[wellnessConcern];
          response = {
            type: 'wellness',
            recommendation: suggestion.recommendation,
            products: suggestion.products,
            specialists: suggestion.specialists || [],
            lifestyle: suggestion.lifestyle
          };
        } else {
          // No specific wellness concern matched, provide a generic wellness response
          const genericResponse = generateGenericResponse(query, category);
          response = {
            type: 'wellness',
            recommendation: genericResponse.recommendation,
            products: genericResponse.products,
            specialists: genericResponse.specialists || [],
            lifestyle: genericResponse.lifestyle
          };
        }
      } else {
        // Fallback for unknown categories
        const genericResponse = generateGenericResponse(query, 'general');
        response = {
          type: 'medical',
          recommendation: genericResponse.recommendation,
          products: genericResponse.products,
          specialists: genericResponse.specialists || [],
          lifestyle: genericResponse.lifestyle
        };
      }
    } catch (error) {
      console.error("Error generating AI response:", error);
      // Fallback response in case of error
      response = {
        type: 'medical',
        recommendation: "I'm sorry, I couldn't process your request properly. Please try again or ask a different question.",
        specialists: [{
          type: 'General Physician',
          reason: 'For proper medical assessment',
          priority: 'medium' as const
        }]
      };
    }

    setIsLoading(false);
    setRecentResponses(prev => [response, ...prev].slice(0, 5));
    return response;
  };

  return (
    <AIContext.Provider value={{ isLoading, getAIResponse, recentResponses }}>
      {children}
    </AIContext.Provider>
  );
}

export function useAI() {
  const context = useContext(AIContext);
  if (context === undefined) {
    throw new Error('useAI must be used within an AIProvider');
  }
  return context;
}