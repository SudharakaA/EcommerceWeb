
import { Star, ShoppingCart, Heart, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const products = [
  {
    id: 1,
    name: 'Premium Wireless Headphones',
    price: 29999,
    originalPrice: 37499,
    rating: 4.8,
    reviews: 324,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
    badge: 'Best Seller',
    badgeColor: 'bg-green-500',
  },
  {
    id: 2,
    name: 'Smart Watch Series X',
    price: 44999,
    originalPrice: 59999,
    rating: 4.9,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
    badge: 'New',
    badgeColor: 'bg-blue-500',
  },
  {
    id: 3,
    name: 'Professional Camera Lens',
    price: 82499,
    originalPrice: 97499,
    rating: 4.7,
    reviews: 89,
    image: 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=400&fit=crop',
    badge: 'Sale',
    badgeColor: 'bg-red-500',
  },
  {
    id: 4,
    name: 'Minimalist Backpack',
    price: 11999,
    originalPrice: 14999,
    rating: 4.6,
    reviews: 267,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop',
    badge: 'Popular',
    badgeColor: 'bg-purple-500',
  },
  {
    id: 5,
    name: 'Bluetooth Speaker Pro',
    price: 19499,
    originalPrice: 23999,
    rating: 4.5,
    reviews: 198,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop',
    badge: 'Limited',
    badgeColor: 'bg-orange-500',
  },
  {
    id: 6,
    name: 'Gaming Mechanical Keyboard',
    price: 22499,
    originalPrice: 29999,
    rating: 4.8,
    reviews: 445,
    image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=400&fit=crop',
    badge: 'Hot',
    badgeColor: 'bg-yellow-500',
  },
];

interface FeaturedProductsProps {
  addToCart: () => void;
}

const FeaturedProducts = ({ addToCart }: FeaturedProductsProps) => {
  const [likedProducts, setLikedProducts] = useState<number[]>([]);
  const [showUserDetails, setShowUserDetails] = useState(false);
  const { toast } = useToast();

  const toggleLike = (productId: number) => {
    setLikedProducts(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const handleBuyNow = (productName: string) => {
    addToCart();
    toast({
      title: "Added to Cart!",
      description: `${productName} has been added to your cart.`,
    });
  };

  const formatPrice = (price: number) => {
    return `Rs. ${price.toLocaleString()}`;
  };

  const handleUserClick = () => {
    setShowUserDetails(!showUserDetails);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium products
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden animate-fade-in hover-scale"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Badge */}
                <div className={`absolute top-4 left-4 ${product.badgeColor} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                  {product.badge}
                </div>

                {/* Like button */}
                <button
                  onClick={() => toggleLike(product.id)}
                  className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                >
                  <Heart
                    className={`h-5 w-5 transition-colors ${
                      likedProducts.includes(product.id)
                        ? 'text-red-500 fill-red-500'
                        : 'text-gray-600'
                    }`}
                  />
                </button>

                {/* Quick action overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button
                    onClick={() => handleBuyNow(product.name)}
                    className="bg-white text-gray-900 hover:bg-gray-100"
                  >
                    Quick Add
                    <ShoppingCart className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center space-x-2 mb-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-400 fill-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    {product.rating} ({product.reviews})
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-2xl font-bold text-gray-900">
                    {formatPrice(product.price)}
                  </span>
                  <span className="text-sm text-gray-500 line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                  <span className="text-sm text-green-600 font-semibold">
                    Save {formatPrice(product.originalPrice - product.price)}
                  </span>
                </div>

                {/* Buttons */}
                <div className="space-y-2">
                  <Button
                    onClick={() => handleBuyNow(product.name)}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                  >
                    Buy Now
                    <ShoppingCart className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    onClick={addToCart}
                    variant="outline"
                    className="w-full"
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8">
            View All Products
          </Button>
        </div>
      </div>

      {/* User Details Modal */}
      {showUserDetails && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full">
            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <User className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Himeth</h3>
              <p className="text-gray-600 mb-4">Premium Member</p>
              <div className="space-y-2 text-left">
                <p><strong>Email:</strong> himeth@example.com</p>
                <p><strong>Phone:</strong> +94 77 543 9120</p>
                <p><strong>Member Since:</strong> January 2024</p>
                <p><strong>Orders:</strong> 15 completed</p>
              </div>
              <Button
                onClick={() => setShowUserDetails(false)}
                className="mt-6 w-full"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default FeaturedProducts;
