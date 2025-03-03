import { useState, useEffect } from 'react';
import { Search, ShoppingCart } from 'lucide-react';
import { useHealth } from '../context/HealthContext';

interface Medicine {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: 'medicine' | 'skincare' | 'wellness';
}

function Medications() {
  const [searchQuery, setSearchQuery] = useState('');
  const { currentDiagnosis, selectedMedicines, addToCart, removeFromCart, cartTotal } = useHealth();
  const [filteredMedicines, setFilteredMedicines] = useState<Medicine[]>([]);

  const suggestedMedicines: Medicine[] = [
    {
      id: 'med1',
      name: 'Green 500mg',
      price: 75.99,
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
      description: 'Daily health supplement',
      category: 'medicine'
    },
    {
      id: 'med2',
      name: 'Pain B Complex',
      price: 121.50,
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
      description: 'Pain relief capsules',
      category: 'medicine'
    },
    {
      id: 'med3',
      name: 'Arthival 100mg',
      price: 156.99,
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
      description: 'Joint pain tablet',
      category: 'medicine'
    }
  ];

  const limitedTimeDeals: Medicine[] = [
    {
      id: 'deal1',
      name: 'Vita-Mineral Plus',
      price: 299.99,
      image: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
      description: 'Was ₹399.99 | Save 25%',
      category: 'wellness'
    },
    {
      id: 'deal2',
      name: 'Protein Plus Pack',
      price: 499.99,
      image: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
      description: 'Was ₹699.99 | Save 30%',
      category: 'wellness'
    },
    {
      id: 'deal3',
      name: 'Pain Relief Mega',
      price: 199.99,
      image: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
      description: 'Was ₹299.99 | Save 33%',
      category: 'medicine'
    },
    {
      id: 'deal4',
      name: 'Immunity Booster',
      price: 399.99,
      image: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
      description: 'Was ₹599.99 | Save 33%',
      category: 'wellness'
    }
  ];

  useEffect(() => {
    let filtered = [...suggestedMedicines];
    
    // Add recommended medicines from diagnosis if available
    if (currentDiagnosis) {
      const diagnosisMedicines = currentDiagnosis.recommendedMedicines.map(med => ({
        id: `diag-${med.name.toLowerCase().replace(/\s+/g, '-')}`,
        name: med.name,
        price: med.price,
        image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
        description: med.dosage,
        category: 'medicine' as const
      }));
      filtered = [...diagnosisMedicines, ...filtered];
    }

    // Filter based on search query
    if (searchQuery) {
      filtered = filtered.filter(medicine =>
        medicine.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        medicine.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredMedicines(filtered);
  }, [currentDiagnosis, searchQuery]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Navigation spacer */}
      <div className="h-20"></div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top Navigation */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex space-x-6">
            <button className="text-blue-600 font-medium hover:text-blue-700">Medicine</button>
            <button className="text-gray-600 font-medium hover:text-blue-600">Skincare</button>
            <button className="text-gray-600 font-medium hover:text-blue-600">Wellness</button>
          </div>
          <div className="flex items-center space-x-4">
            <button className="relative">
              <ShoppingCart className="h-6 w-6 text-gray-600 hover:text-blue-600" />
              {selectedMedicines.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {selectedMedicines.length}
                </span>
              )}
            </button>
          </div>
        </div>

        {currentDiagnosis && (
          <div className="mb-8 p-4 bg-blue-50 rounded-xl">
            <h2 className="font-semibold text-blue-800">Recommended for: {currentDiagnosis.name}</h2>
            <p className="text-blue-600">We've highlighted medicines that may help with your condition</p>
          </div>
        )}

        {/* Search Bar */}
        <div className="relative max-w-xl mb-12">
          <input
            type="text"
            placeholder="Search medicines..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-6 py-4 rounded-full border-2 border-blue-100 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 pr-12 text-lg shadow-lg"
          />
          <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-blue-500 h-6 w-6" />
        </div>

        {/* Free Delivery Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 mb-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full">
            <img
              src="https://images.unsplash.com/photo-1582560475093-ba66accbc424?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
              alt="Delivery"
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <h2 className="text-3xl font-bold mb-2 relative z-10">Free Delivery</h2>
          <p className="text-xl text-blue-100 relative z-10">For Orders Up to ₹200</p>
        </div>

        {/* Suggested Medicines */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Suggested Medicines</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredMedicines.map((medicine) => (
              <div key={medicine.id} className="bg-white rounded-xl shadow-lg p-4">
                <img
                  src={medicine.image}
                  alt={medicine.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="font-semibold text-lg mb-2">{medicine.name}</h3>
                <p className="text-gray-600 mb-4">{medicine.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold">₹{medicine.price}</span>
                  <button
                    onClick={() => {
                      const isInCart = selectedMedicines.some(m => m.name === medicine.name);
                      if (isInCart) {
                        removeFromCart(medicine.name);
                      } else {
                        addToCart({ name: medicine.name, price: medicine.price });
                      }
                    }}
                    className={`${
                      selectedMedicines.some(m => m.name === medicine.name)
                        ? 'bg-red-600 hover:bg-red-700'
                        : 'bg-blue-600 hover:bg-blue-700'
                    } text-white px-4 py-2 rounded-lg transition-colors duration-300`}
                  >
                    {selectedMedicines.some(m => m.name === medicine.name)
                      ? 'Remove'
                      : 'Add to Cart'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Limited Time Deals */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Limited Time Deals</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {limitedTimeDeals.map((deal) => (
              <div key={deal.id} className="bg-white rounded-xl shadow-lg p-4">
                <img
                  src={deal.image}
                  alt={deal.name}
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <h3 className="font-semibold mb-2">{deal.name}</h3>
                <p className="text-sm text-red-500 mb-4">{deal.description}</p>
                <div className="flex justify-between items-center">
                  <span className="font-bold">₹{deal.price}</span>
                  <button
                    onClick={() => {
                      const isInCart = selectedMedicines.some(m => m.name === deal.name);
                      if (isInCart) {
                        removeFromCart(deal.name);
                      } else {
                        addToCart({ name: deal.name, price: deal.price });
                      }
                    }}
                    className={`${
                      selectedMedicines.some(m => m.name === deal.name)
                        ? 'bg-red-600 hover:bg-red-700'
                        : 'bg-blue-600 hover:bg-blue-700'
                    } text-white px-3 py-1 rounded-lg transition-colors duration-300 text-sm`}
                  >
                    {selectedMedicines.some(m => m.name === deal.name)
                      ? 'Remove'
                      : 'Add to Cart'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Cart Total */}
        {selectedMedicines.length > 0 && (
          <div className="fixed bottom-8 right-8 bg-white rounded-xl shadow-xl p-4">
            <div className="text-lg font-semibold mb-2">Cart Total: ₹{cartTotal.toFixed(2)}</div>
            <button
              onClick={() => {
                alert('Proceeding to checkout with total: ₹' + cartTotal.toFixed(2));
              }}
              className="w-full bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              Checkout
            </button>
          </div>
        )}
      </main>
    </div>
  );
}

export default Medications;