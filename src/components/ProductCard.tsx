
import { useState } from 'react';
import { Heart, Eye, Clock, User, Star, ShoppingCart, Gavel } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';

interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  originalPrice?: number;
  image: string;
  seller: string;
  rating: number;
  bids?: number;
  timeLeft?: string;
  isAuction?: boolean;
  isBuyNow?: boolean;
  condition: 'new' | 'used' | 'refurbished';
  shipping: string;
  watchers?: number;
  category?: string;
}

const ProductCard = ({ 
  id, title, price, originalPrice, image, seller, rating, bids, 
  timeLeft, isAuction, isBuyNow, condition, shipping, watchers, category 
}: ProductCardProps) => {
  const [isWatching, setIsWatching] = useState(false);
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    addToCart({
      id,
      title,
      price,
      image,
      sellerId: '1',
      sellerName: seller
    });
    toast({
      title: "Added to Cart",
      description: `${title} has been added to your cart.`,
    });
  };

  const handleBuyNow = () => {
    handleAddToCart();
    // Navigate to checkout (would implement routing here)
    toast({
      title: "Proceeding to Checkout",
      description: "Redirecting to secure checkout...",
    });
  };

  const handlePlaceBid = () => {
    toast({
      title: "Bid Placed",
      description: "Your bid has been placed successfully!",
    });
  };

  const getCategoryColor = (cat?: string) => {
    switch (cat) {
      case 'electronics': return 'bg-blue-500';
      case 'fashion': return 'bg-pink-500';
      case 'home': return 'bg-green-500';
      case 'sports': return 'bg-orange-500';
      case 'books': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border hover:shadow-lg transition-all duration-300 group">
      <div className="relative overflow-hidden rounded-t-lg">
        <img 
          src={image} 
          alt={title}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {category && (
            <Badge className={`${getCategoryColor(category)} text-white capitalize`}>
              {category}
            </Badge>
          )}
          {isAuction && <Badge className="bg-red-500">Auction</Badge>}
          {condition === 'new' && <Badge className="bg-green-500">New</Badge>}
          {originalPrice && (
            <Badge variant="destructive">
              {Math.round(((originalPrice - price) / originalPrice) * 100)}% OFF
            </Badge>
          )}
        </div>

        {/* Watch button */}
        <button
          onClick={() => setIsWatching(!isWatching)}
          className="absolute top-3 right-3 p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
        >
          <Heart className={`h-5 w-5 ${isWatching ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
        </button>

        {/* Quick view */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <Button variant="secondary" size="sm">
            <Eye className="h-4 w-4 mr-2" />
            Quick View
          </Button>
        </div>
      </div>

      <div className="p-4">
        {/* Title */}
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-blue-600 cursor-pointer">
          {title}
        </h3>

        {/* Price */}
        <div className="flex items-center gap-2 mb-2">
          <span className="text-2xl font-bold text-green-600">
            LKR {price.toLocaleString()}
          </span>
          {originalPrice && (
            <span className="text-lg text-gray-400 line-through">
              LKR {originalPrice.toLocaleString()}
            </span>
          )}
        </div>

        {/* Auction info */}
        {isAuction && (
          <div className="bg-gray-50 rounded-lg p-3 mb-3">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-1">
                <Gavel className="h-4 w-4 text-gray-600" />
                <span>{bids || 0} bids</span>
              </div>
              <div className="flex items-center gap-1 text-red-600">
                <Clock className="h-4 w-4" />
                <span className="font-medium">{timeLeft || '2d 5h'}</span>
              </div>
            </div>
          </div>
        )}

        {/* Seller info */}
        <div className="flex items-center gap-2 mb-3">
          <User className="h-4 w-4 text-gray-500" />
          <span className="text-sm text-gray-600">{seller}</span>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{rating}</span>
          </div>
        </div>

        {/* Additional info */}
        <div className="text-sm text-gray-600 mb-4">
          <div>Condition: <span className="capitalize font-medium">{condition}</span></div>
          <div>{shipping}</div>
          {watchers && (
            <div className="flex items-center gap-1 mt-1">
              <Eye className="h-4 w-4" />
              <span>{watchers} watching</span>
            </div>
          )}
        </div>

        {/* Action buttons */}
        <div className="space-y-2">
          {isAuction ? (
            <Button onClick={handlePlaceBid} className="w-full">
              <Gavel className="h-4 w-4 mr-2" />
              Place Bid
            </Button>
          ) : (
            <Button onClick={handleAddToCart} variant="outline" className="w-full">
              <ShoppingCart className="h-4 w-4 mr-2" />
              Add to Cart
            </Button>
          )}
          
          {isBuyNow && (
            <Button onClick={handleBuyNow} className="w-full">
              Buy It Now
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
