import React from 'react';
import { Link } from 'react-router-dom';
import { ChefHat, Leaf, Clock, UtensilsCrossed } from 'lucide-react';

function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1543362906-acfc16c67564?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
            alt="Hero background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Healthy Meals,<br />
            Delivered Fresh
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Delicious chef-prepared meals customized to your preferences and delivered right to your door.
          </p>
          <Link
            to="/contact"
            className="bg-emerald-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-emerald-700 transition-colors inline-block"
          >
            Start Your Journey
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Why Choose PrepPerfect?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <ChefHat className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Expert Chefs</h3>
              <p className="text-gray-600">
                Our professional chefs craft each meal with precision and care.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Fresh Ingredients</h3>
              <p className="text-gray-600">
                We source only the freshest, highest-quality ingredients to make your meal prep easy.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Flexible Delivery</h3>
              <p className="text-gray-600">
                Choose delivery times that work best for your schedule.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">This Week's Menu</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
                title: "Quinoa Buddha Bowl",
                description: "Fresh vegetables, quinoa, and tahini dressing"
              },
              {
                image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288",
                title: "Grilled Salmon",
                description: "Wild-caught salmon with roasted vegetables"
              },
              {
                image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe",
                title: "Chicken Power Bowl",
                description: "Grilled chicken, mixed grains, and fresh greens"
              }
            ].map((meal, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img
                  src={`${meal.image}?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80`}
                  alt={meal.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{meal.title}</h3>
                  <p className="text-gray-600">{meal.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Healthy Journey?</h2>
          <p className="text-xl mb-8">Join thousands of satisfied customers who have transformed their meal routine.</p>
          <Link
            to="/contact"
            className="bg-white text-emerald-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;