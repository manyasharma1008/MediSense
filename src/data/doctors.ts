export interface Doctor {
    id: string;
    name: string;
    specialty: string;
    subspecialties: string[];
    experience: string;
    education: string;
    languages: string[];
    rating: number;
    reviews: number;
    nextAvailable: string;
    location: string;
    consultationFee: number;
    icon: string;
    conditions: string[];
  }
  
  export const doctors: Doctor[] = [
    {
      id: 'general1',
      name: 'Dr. Sarah Johnson',
      specialty: 'General Physician',
      subspecialties: ['Family Medicine', 'Preventive Care'],
      experience: '15+ years',
      education: 'MBBS, MD (Internal Medicine)',
      languages: ['English', 'Hindi'],
      rating: 4.8,
      reviews: 245,
      nextAvailable: 'Today',
      location: 'Downtown Medical Center',
      consultationFee: 500,
      icon: '👩‍⚕️',
      conditions: ['Common Cold', 'Fever', 'Flu', 'General Checkup']
    },
    {
      id: 'neuro1',
      name: 'Dr. Michael Chen',
      specialty: 'Neurologist',
      subspecialties: ['Headache Medicine', 'Sleep Medicine'],
      experience: '12+ years',
      education: 'MBBS, MD (Neurology), DM (Neurology)',
      languages: ['English', 'Mandarin'],
      rating: 4.9,
      reviews: 189,
      nextAvailable: 'Tomorrow',
      location: 'Brain & Spine Center',
      consultationFee: 1200,
      icon: '👨‍⚕️',
      conditions: ['Migraine', 'Epilepsy', 'Sleep Disorders']
    },
    {
      id: 'gastro1',
      name: 'Dr. Priya Patel',
      specialty: 'Gastroenterologist',
      subspecialties: ['Digestive Disorders', 'Liver Disease'],
      experience: '10+ years',
      education: 'MBBS, MD (Internal Medicine), DM (Gastroenterology)',
      languages: ['English', 'Hindi', 'Gujarati'],
      rating: 4.7,
      reviews: 156,
      nextAvailable: 'Today',
      location: 'Digestive Health Institute',
      consultationFee: 1000,
      icon: '👩‍⚕️',
      conditions: ['Gastroenteritis', 'IBS', 'Acid Reflux']
    },
    {
      id: 'rheum1',
      name: 'Dr. James Wilson',
      specialty: 'Rheumatologist',
      subspecialties: ['Autoimmune Disorders', 'Joint Diseases'],
      experience: '20+ years',
      education: 'MBBS, MD (Internal Medicine), DM (Rheumatology)',
      languages: ['English'],
      rating: 4.9,
      reviews: 278,
      nextAvailable: 'Next Week',
      location: 'Arthritis & Rheumatology Center',
      consultationFee: 1500,
      icon: '👨‍⚕️',
      conditions: ['Rheumatoid Arthritis', 'Osteoarthritis', 'Lupus']
    }
  ];