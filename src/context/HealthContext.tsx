import { createContext, useContext, useState, ReactNode } from 'react';

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

interface HealthContextType {
  currentDiagnosis: Disease | null;
  setCurrentDiagnosis: (diagnosis: Disease | null) => void;
  selectedMedicines: Array<{ name: string; price: number }>;
  addToCart: (medicine: { name: string; price: number }) => void;
  removeFromCart: (medicineName: string) => void;
  cartTotal: number;
  selectedDoctor: string | null;
  setSelectedDoctor: (specialty: string | null) => void;
}

const HealthContext = createContext<HealthContextType | undefined>(undefined);

export function HealthProvider({ children }: { children: ReactNode }) {
  const [currentDiagnosis, setCurrentDiagnosis] = useState<Disease | null>(null);
  const [selectedMedicines, setSelectedMedicines] = useState<Array<{ name: string; price: number }>>([]);
  const [selectedDoctor, setSelectedDoctor] = useState<string | null>(null);

  const addToCart = (medicine: { name: string; price: number }) => {
    setSelectedMedicines(prev => [...prev, medicine]);
  };

  const removeFromCart = (medicineName: string) => {
    setSelectedMedicines(prev => prev.filter(m => m.name !== medicineName));
  };

  const cartTotal = selectedMedicines.reduce((total, med) => total + med.price, 0);

  return (
    <HealthContext.Provider
      value={{
        currentDiagnosis,
        setCurrentDiagnosis,
        selectedMedicines,
        addToCart,
        removeFromCart,
        cartTotal,
        selectedDoctor,
        setSelectedDoctor
      }}
    >
      {children}
    </HealthContext.Provider>
  );
}

export function useHealth() {
  const context = useContext(HealthContext);
  if (context === undefined) {
    throw new Error('useHealth must be used within a HealthProvider');
  }
  return context;
}