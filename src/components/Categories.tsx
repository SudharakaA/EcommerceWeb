
import { Shirt, Smartphone, Home, Watch, Headphones, Camera } from 'lucide-react';

const categories = [
  { name: 'Fashion', icon: Shirt, color: 'from-pink-500 to-rose-500', count: '120+' },
  { name: 'Electronics', icon: Smartphone, color: 'from-blue-500 to-indigo-500', count: '85+' },
  { name: 'Home & Garden', icon: Home, color: 'from-green-500 to-emerald-500', count: '200+' },
  { name: 'Watches', icon: Watch, color: 'from-purple-500 to-violet-500', count: '45+' },
  { name: 'Audio', icon: Headphones, color: 'from-orange-500 to-red-500', count: '60+' },
  { name: 'Photography', icon: Camera, color: 'from-teal-500 to-cyan-500', count: '30+' },
];

const Categories = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our diverse range of products across multiple categories
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={category.name}
                className="group cursor-pointer animate-fade-in hover-scale"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br bg-gray-50 p-6 text-center transition-all duration-300 hover:shadow-xl">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${category.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  
                  <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                    {category.name}
                  </h3>
                  
                  <p className="text-sm text-gray-500">
                    {category.count} items
                  </p>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl bg-blue-600"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;
