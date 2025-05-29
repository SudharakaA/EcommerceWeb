
import { useState } from 'react';
import { Search, Filter, SlidersHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface ProductSearchProps {
  onSearch: (query: string, filters: any) => void;
}

const ProductSearch = ({ onSearch }: ProductSearchProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('all');
  const [sortBy, setSortBy] = useState('relevance');
  const [priceRange, setPriceRange] = useState('all');

  const handleSearch = () => {
    onSearch(searchQuery, {
      category,
      sortBy,
      priceRange
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Input
            placeholder="Search for anything..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 h-12 text-lg"
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
          />
        </div>
        
        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger className="w-full lg:w-48 h-12">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="electronics">Electronics</SelectItem>
            <SelectItem value="fashion">Fashion</SelectItem>
            <SelectItem value="home">Home & Garden</SelectItem>
            <SelectItem value="sports">Sports</SelectItem>
            <SelectItem value="books">Books</SelectItem>
          </SelectContent>
        </Select>

        <Select value={priceRange} onValueChange={setPriceRange}>
          <SelectTrigger className="w-full lg:w-48 h-12">
            <SelectValue placeholder="Price Range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Any Price</SelectItem>
            <SelectItem value="0-5000">LKR 0 - 5,000</SelectItem>
            <SelectItem value="5000-15000">LKR 5,000 - 15,000</SelectItem>
            <SelectItem value="15000-50000">LKR 15,000 - 50,000</SelectItem>
            <SelectItem value="50000+">LKR 50,000+</SelectItem>
          </SelectContent>
        </Select>

        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="w-full lg:w-48 h-12">
            <SelectValue placeholder="Sort By" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="relevance">Best Match</SelectItem>
            <SelectItem value="price-low">Price: Low to High</SelectItem>
            <SelectItem value="price-high">Price: High to Low</SelectItem>
            <SelectItem value="newest">Newest First</SelectItem>
            <SelectItem value="ending">Ending Soon</SelectItem>
          </SelectContent>
        </Select>

        <Button onClick={handleSearch} className="h-12 px-8">
          <Search className="h-5 w-5 mr-2" />
          Search
        </Button>
      </div>
    </div>
  );
};

export default ProductSearch;
