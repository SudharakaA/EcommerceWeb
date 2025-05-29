
import { ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm opacity-90">Trusted by 50k+ customers</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Discover Your
                <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  Perfect Style
                </span>
              </h1>
              
              <p className="text-lg lg:text-xl opacity-90 max-w-lg">
                Shop the latest trends in fashion, electronics, and lifestyle products. 
                Free shipping on orders over $50.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8">
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                View Collections
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div>
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm opacity-75">Products</div>
              </div>
              <div>
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm opacity-75">Support</div>
              </div>
              <div>
                <div className="text-2xl font-bold">Free</div>
                <div className="text-sm opacity-75">Shipping</div>
              </div>
            </div>
          </div>

          {/* Right content - Product showcase */}
          <div className="relative animate-scale-in">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=600&fit=crop&crop=center"
                alt="Featured Product"
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto hover:scale-105 transition-transform duration-500"
              />
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
                Sale!
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur-sm text-gray-800 p-4 rounded-xl shadow-lg">
                <div className="font-semibold">Premium Headphones</div>
                <div className="text-sm text-gray-600">Starting at $99</div>
              </div>
            </div>
            
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-3xl transform rotate-6 scale-110"></div>
          </div>
        </div>
      </div>
      
      {/* Wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" className="w-full h-12 fill-slate-50">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
