import React from 'react';
import { Heart, Users, Target } from 'lucide-react';

function About() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
            alt="About hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Story</h1>
          <p className="text-xl max-w-2xl">
            We're on a mission to make healthy eating effortless and delicious.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                At PrepPerfect, we believe that everyone deserves access to healthy, delicious meals without the hassle of planning and preparation. Our journey began when we noticed how challenging it was for busy professionals to maintain a balanced diet while juggling their demanding schedules.
              </p>
              <p className="text-gray-600">
                We've assembled a team of passionate chefs, nutritionists, and food enthusiasts who work tirelessly to create meals that not only nourish your body but also delight your taste buds. Every recipe is crafted with care, using only the freshest ingredients sourced from local suppliers whenever possible.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {[
                {
                  icon: <Heart className="h-8 w-8 text-emerald-600" />,
                  title: "Passion for Health",
                  description: "We're committed to promoting healthier lifestyles through nutritious meals."
                },
                {
                  icon: <Users className="h-8 w-8 text-emerald-600" />,
                  title: "Community Focus",
                  description: "Supporting local suppliers and building lasting relationships with our customers."
                },
                {
                  icon: <Target className="h-8 w-8 text-emerald-600" />,
                  title: "Quality First",
                  description: "Uncompromising standards in ingredient selection and meal preparation."
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg">
                  <div className="flex-shrink-0">{item.icon}</div>
                  <div>
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
                name: "Sarah Johnson",
                role: "Executive Chef",
                bio: "With 15 years of culinary experience, Sarah leads our kitchen with creativity and passion."
              },
              {
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
                name: "David Chen",
                role: "Head of Operations",
                bio: "David ensures smooth delivery operations and maintains our high service standards."
              },
              {
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
                name: "Emily Rodriguez",
                role: "Nutritionist",
                bio: "Emily crafts balanced meal plans that meet various dietary requirements."
              }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img
                  src={`${member.image}?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80`}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-emerald-600 mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;