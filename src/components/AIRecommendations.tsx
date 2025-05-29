
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AIRecommendations = () => {
  const categories = [
    {
      title: 'Gaming accessories',
      items: [
        { name: 'Headsets', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop' },
        { name: 'Keyboards', image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=100&h=100&fit=crop' },
        { name: 'Computer mice', image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=100&h=100&fit=crop' },
        { name: 'Chairs', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=100&h=100&fit=crop' }
      ],
      link: 'See more'
    },
    {
      title: 'Shop deals in Fashion',
      items: [
        { name: 'Items under $50', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=100&h=100&fit=crop', price: 'under $50' },
        { name: 'Tops under $25', image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=100&h=100&fit=crop', price: 'under $25' },
        { name: 'Dresses under $30', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=100&h=100&fit=crop', price: 'under $30' },
        { name: 'Shoes under $50', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=100&h=100&fit=crop', price: 'under $50' }
      ],
      link: 'See all deals'
    },
    {
      title: 'Shop for your home essentials',
      items: [
        { name: 'Cleaning Tools', image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=100&h=100&fit=crop' },
        { name: 'Home Storage', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=100&h=100&fit=crop' },
        { name: 'Home Decor', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=100&h=100&fit=crop' },
        { name: 'Bedding', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=100&h=100&fit=crop' }
      ],
      link: 'Discover more in Home'
    },
    {
      title: 'Top categories in Kitchen appliances',
      items: [
        { name: 'Cooker', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=100&h=100&fit=crop' },
        { name: 'Coffee', image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=100&h=100&fit=crop' },
        { name: 'Pots and Pans', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=100&h=100&fit=crop' },
        { name: 'Kettles', image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=100&h=100&fit=crop' }
      ],
      link: 'Explore all products in Kitchen'
    }
  ];

  const featuredProducts = [
    {
      id: 1,
      name: 'Limited Time Deal - Internet Store Casual Cotton Denim',
      price: '₹499',
      originalPrice: '₹899',
      discount: '44%',
      image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=200&h=250&fit=crop',
      colors: ['black', 'blue', 'gray', 'green', 'red']
    },
    {
      id: 2,
      name: 'Limited Time Deal - Ceriz Men\'s Boy Tone Classic',
      price: '₹299',
      originalPrice: '₹599',
      discount: '50%',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200&h=250&fit=crop',
      colors: ['white', 'blue', 'black', 'gray']
    },
    {
      id: 3,
      name: 'Limited Time Deal - PERFECT PANT Women High Low Waist Pleated',
      price: '₹399',
      originalPrice: '₹799',
      discount: '50%',
      image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=200&h=250&fit=crop',
      colors: ['black', 'blue', 'gray', 'navy']
    },
    {
      id: 4,
      name: 'Limited Time Deal - IndiGreen Women\'s Casual Gaming Long Sleeve',
      price: '₹499',
      originalPrice: '₹999',
      discount: '50%',
      image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=200&h=250&fit=crop',
      colors: ['green', 'black', 'gray', 'blue']
    },
    {
      id: 5,
      name: 'Limited Time Deal - Buttoned Men\'s T-Shirts Premium Cotton',
      price: '₹299',
      originalPrice: '₹599',
      discount: '50%',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200&h=250&fit=crop',
      colors: ['white', 'black', 'gray', 'blue']
    },
    {
      id: 6,
      name: 'Limited Time Deal - Altherani & Gentle Men Fit Blary Altherani',
      price: '₹599',
      originalPrice: '₹1199',
      discount: '50%',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200&h=250&fit=crop',
      colors: ['white', 'blue', 'black', 'gray']
    }
  ];

  return (
    <section className="py-8 bg-gradient-to-br from-slate-200 to-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-2xl font-normal text-gray-600 mb-6">
            AI Recommendations Section
          </h2>

          {/* Search Bar */}
          <div className="flex items-center max-w-2xl mx-auto mb-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search An Item"
                className="w-full pl-4 pr-12 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
              />
              <Button size="sm" className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-600 hover:bg-gray-700">
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {categories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-4 text-sm">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-3 mb-4">
                {category.items.map((item, idx) => (
                  <div key={idx} className="text-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-16 object-cover rounded-lg mb-2"
                    />
                    <p className="text-xs text-gray-600">{item.name}</p>
                    {item.price && (
                      <p className="text-xs text-blue-600 font-medium">{item.price}</p>
                    )}
                  </div>
                ))}
              </div>
              <a href="#" className="text-blue-600 text-xs hover:underline">
                {category.link}
              </a>
            </div>
          ))}
        </div>

        {/* Special Offer Banner */}
        <div className="relative bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 rounded-2xl p-6 mb-8 overflow-hidden">
          <div className="relative z-10">
            <div className="bg-yellow-300 text-black px-3 py-1 rounded-full text-sm font-bold inline-block mb-2">
              ⚡ SPECIAL OFFER
            </div>
            <h3 className="text-2xl font-bold text-white mb-1">UP TO 50% OFF</h3>
          </div>
          <div className="absolute right-4 top-4 text-white/20 text-6xl font-bold">
            %
          </div>
        </div>

        {/* Featured Products */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {featuredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden group hover:shadow-md transition-shadow">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
                  {product.discount}% Limited time deal
                </div>
              </div>
              <div className="p-3">
                <h4 className="text-xs text-gray-800 mb-2 line-clamp-2">
                  {product.name}
                </h4>
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-lg font-bold text-gray-900">{product.price}</span>
                  <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                </div>
                <div className="flex space-x-1 mb-3">
                  {product.colors.map((color, idx) => (
                    <div
                      key={idx}
                      className={`w-3 h-3 rounded-full border border-gray-300`}
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
                <Button className="w-full bg-gray-700 hover:bg-gray-800 text-white text-xs py-2">
                  BUY NOW
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIRecommendations;
