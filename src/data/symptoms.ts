import { Thermometer, Brain, Settings as Lungs, Pill, HeartPulse, Frown, UserRound, Eye, Bone, Droplets } from 'lucide-react';

export interface Symptom {
  id: string;
  name: string;
  icon: any;
  relatedSymptoms: string[];
  description: string;
}

export const symptoms: Symptom[] = [
  {
    id: 'fever',
    name: 'Fever',
    icon: Thermometer,
    description: 'Elevated body temperature',
    relatedSymptoms: [
      'chills',
      'sweating',
      'headache',
      'muscle aches',
      'fatigue',
      'weakness',
      'loss of appetite'
    ]
  },
  {
    id: 'cough',
    name: 'Cough',
    icon: Lungs,
    description: 'Sudden expulsion of air',
    relatedSymptoms: [
      'dry cough',
      'wet cough',
      'sore throat',
      'runny nose',
      'chest pain',
      'wheezing',
      'shortness of breath',
      'mucus production'
    ]
  },
  {
    id: 'headache',
    name: 'Headache',
    icon: Brain,
    description: 'Pain in the head or neck region',
    relatedSymptoms: [
      'migraine',
      'tension headache',
      'cluster headache',
      'sinus pain',
      'dizziness',
      'sensitivity to light',
      'nausea'
    ]
  },
  {
    id: 'stomach-pain',
    name: 'Stomach Pain',
    icon: Pill,
    description: 'Discomfort in the abdominal region',
    relatedSymptoms: [
      'nausea',
      'vomiting',
      'diarrhea',
      'constipation',
      'bloating',
      'indigestion',
      'loss of appetite',
      'cramping'
    ]
  },
  {
    id: 'joint-pain',
    name: 'Joint Pain',
    icon: Bone,
    description: 'Pain in joints and surrounding tissues',
    relatedSymptoms: [
      'stiffness',
      'swelling',
      'reduced mobility',
      'inflammation',
      'warmth in joints',
      'redness',
      'weakness'
    ]
  },
  {
    id: 'skin-issues',
    name: 'Skin Issues',
    icon: Droplets,
    description: 'Problems affecting the skin',
    relatedSymptoms: [
      'rash',
      'itching',
      'redness',
      'swelling',
      'hives',
      'dry skin',
      'blisters',
      'burning sensation'
    ]
  },
  {
    id: 'eye-problems',
    name: 'Eye Problems',
    icon: Eye,
    description: 'Issues affecting vision or eye comfort',
    relatedSymptoms: [
      'blurred vision',
      'eye pain',
      'redness',
      'watery eyes',
      'sensitivity to light',
      'itching',
      'burning sensation'
    ]
  },
  {
    id: 'fatigue',
    name: 'Fatigue',
    icon: UserRound,
    description: 'Feeling of tiredness or exhaustion',
    relatedSymptoms: [
      'weakness',
      'sleepiness',
      'low energy',
      'difficulty concentrating',
      'muscle weakness',
      'headache',
      'dizziness'
    ]
  }
];