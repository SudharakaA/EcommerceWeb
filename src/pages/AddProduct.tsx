import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, X, Plus, DollarSign, Package, Calendar, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';

const AddProduct = () => {
  const { user, profile, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    condition: 'new',
    price: '',
    originalPrice: '',
    shipping: '',
    images: [] as string[],
    listingType: 'buy-now', // 'buy-now', 'auction', 'both'
    auctionDuration: '7', // days
    startingBid: '',
    reservePrice: '',
    quantity: '1',
    sku: '',
    brand: '',
    tags: ''
  });

  const [imageUpload, setImageUpload] = useState('');

  // Redirect if not authenticated or not a seller
  if (!isAuthenticated) {
    navigate('/');
    return null;
  }

  if (!profile?.is_seller) {
    toast({
      title: "Access Denied",
      description: "Only sellers can add products. Please register as a seller.",
      variant: "destructive"
    });
    navigate('/');
    return null;
  }

  const categories = [
    'electronics', 'fashion', 'home', 'sports', 'automotive', 
    'books', 'toys', 'jewelry', 'art', 'health'
  ];

  const conditions = [
    { value: 'new', label: 'New' },
    { value: 'used', label: 'Used - Like New' },
    { value: 'refurbished', label: 'Refurbished' }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title || !formData.category || !formData.price) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    if (formData.images.length === 0) {
      toast({
        title: "Images Required",
        description: "Please add at least one product image.",
        variant: "destructive"
      });
      return;
    }

    // Here you would normally send the data to your backend
    console.log('Product data:', formData);
    
    toast({
      title: "Product Added!",
      description: "Your product has been successfully listed.",
    });
    
    navigate('/products');
  };

  const addImage = () => {
    if (imageUpload.trim() && formData.images.length < 10) {
      setFormData({
        ...formData,
        images: [...formData.images, imageUpload.trim()]
      });
      setImageUpload('');
    }
  };

  const removeImage = (index: number) => {
    setFormData({
      ...formData,
      images: formData.images.filter((_, i) => i !== index)
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Add New Product</h1>
            <p className="text-gray-600">Create a listing for your product on our marketplace</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Basic Information */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-900 border-b pb-2">Basic Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <Label htmlFor="title">Product Title *</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    placeholder="Enter a descriptive title for your product"
                    className="mt-1"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="category">Category *</Label>
                  <Select value={formData.category} onValueChange={(value) => setFormData({...formData, category: value})}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category.charAt(0).toUpperCase() + category.slice(1)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="condition">Condition *</Label>
                  <Select value={formData.condition} onValueChange={(value) => setFormData({...formData, condition: value})}>
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {conditions.map((condition) => (
                        <SelectItem key={condition.value} value={condition.value}>
                          {condition.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="brand">Brand</Label>
                  <Input
                    id="brand"
                    value={formData.brand}
                    onChange={(e) => setFormData({...formData, brand: e.target.value})}
                    placeholder="Product brand"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="sku">SKU</Label>
                  <Input
                    id="sku"
                    value={formData.sku}
                    onChange={(e) => setFormData({...formData, sku: e.target.value})}
                    placeholder="Stock keeping unit"
                    className="mt-1"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  placeholder="Describe your product in detail..."
                  className="mt-1 min-h-[120px]"
                />
              </div>

              <div>
                <Label htmlFor="tags">Tags (comma separated)</Label>
                <Input
                  id="tags"
                  value={formData.tags}
                  onChange={(e) => setFormData({...formData, tags: e.target.value})}
                  placeholder="e.g. wireless, bluetooth, portable"
                  className="mt-1"
                />
              </div>
            </div>

            {/* Images */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-900 border-b pb-2">Product Images *</h2>
              
              <div className="space-y-4">
                <div className="flex gap-2">
                  <Input
                    value={imageUpload}
                    onChange={(e) => setImageUpload(e.target.value)}
                    placeholder="Enter image URL"
                    className="flex-1"
                  />
                  <Button type="button" onClick={addImage} disabled={formData.images.length >= 10}>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Image
                  </Button>
                </div>
                
                {formData.images.length > 0 && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {formData.images.map((image, index) => (
                      <div key={index} className="relative group">
                        <img
                          src={image}
                          alt={`Product ${index + 1}`}
                          className="w-full h-32 object-cover rounded-lg border"
                        />
                        <button
                          type="button"
                          onClick={() => removeImage(index)}
                          className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <X className="h-3 w-3" />
                        </button>
                        {index === 0 && (
                          <span className="absolute bottom-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded">
                            Main
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Pricing & Listing Type */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-900 border-b pb-2">Pricing & Listing Type</h2>
              
              <div>
                <Label className="text-base font-medium">Listing Type</Label>
                <RadioGroup 
                  value={formData.listingType} 
                  onValueChange={(value) => setFormData({...formData, listingType: value})}
                  className="mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="buy-now" id="buy-now" />
                    <Label htmlFor="buy-now">Fixed Price (Buy It Now)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="auction" id="auction" />
                    <Label htmlFor="auction">Auction Only</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="both" id="both" />
                    <Label htmlFor="both">Auction with Buy It Now</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {(formData.listingType === 'buy-now' || formData.listingType === 'both') && (
                  <>
                    <div>
                      <Label htmlFor="price">Price (LKR) *</Label>
                      <div className="relative mt-1">
                        <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                        <Input
                          id="price"
                          type="number"
                          value={formData.price}
                          onChange={(e) => setFormData({...formData, price: e.target.value})}
                          placeholder="0"
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="originalPrice">Original Price (optional)</Label>
                      <div className="relative mt-1">
                        <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                        <Input
                          id="originalPrice"
                          type="number"
                          value={formData.originalPrice}
                          onChange={(e) => setFormData({...formData, originalPrice: e.target.value})}
                          placeholder="0"
                          className="pl-10"
                        />
                      </div>
                    </div>
                  </>
                )}

                {(formData.listingType === 'auction' || formData.listingType === 'both') && (
                  <>
                    <div>
                      <Label htmlFor="startingBid">Starting Bid (LKR)</Label>
                      <div className="relative mt-1">
                        <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                        <Input
                          id="startingBid"
                          type="number"
                          value={formData.startingBid}
                          onChange={(e) => setFormData({...formData, startingBid: e.target.value})}
                          placeholder="0"
                          className="pl-10"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="auctionDuration">Auction Duration</Label>
                      <Select value={formData.auctionDuration} onValueChange={(value) => setFormData({...formData, auctionDuration: value})}>
                        <SelectTrigger className="mt-1">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 Day</SelectItem>
                          <SelectItem value="3">3 Days</SelectItem>
                          <SelectItem value="5">5 Days</SelectItem>
                          <SelectItem value="7">7 Days</SelectItem>
                          <SelectItem value="10">10 Days</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="reservePrice">Reserve Price (optional)</Label>
                      <div className="relative mt-1">
                        <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                        <Input
                          id="reservePrice"
                          type="number"
                          value={formData.reservePrice}
                          onChange={(e) => setFormData({...formData, reservePrice: e.target.value})}
                          placeholder="0"
                          className="pl-10"
                        />
                      </div>
                    </div>
                  </>
                )}

                <div>
                  <Label htmlFor="quantity">Quantity</Label>
                  <div className="relative mt-1">
                    <Package className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <Input
                      id="quantity"
                      type="number"
                      value={formData.quantity}
                      onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                      min="1"
                      className="pl-10"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Shipping */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900 border-b pb-2">Shipping Information</h2>
              
              <div>
                <Label htmlFor="shipping">Shipping Details</Label>
                <Input
                  id="shipping"
                  value={formData.shipping}
                  onChange={(e) => setFormData({...formData, shipping: e.target.value})}
                  placeholder="e.g., Free shipping, LKR 500 shipping, Pick up only"
                  className="mt-1"
                />
              </div>
            </div>

            {/* Submit Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t">
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate(-1)}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                List Product
              </Button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AddProduct;
