
import { useState, useEffect } from 'react';
import { Filter, Grid, List, Search, SlidersHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { mockProducts } from '../data/mockProducts';

const Products = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filteredProducts, setFilteredProducts] = useState(mockProducts);

  const categories = [
    'all',
    'electronics',
    'fashion',
    'home',
    'sports',
    'automotive',
    'books',
    'toys',
    'jewelry',
    'art'
  ];

  const handleSearch = () => {
    let filtered = mockProducts;
    
    if (searchQuery) {
      filtered = filtered.filter(product => 
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.seller.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Sort products
    if (sortBy === 'price-low') {
      filtered = [...filtered].sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      filtered = [...filtered].sort((a, b) => b.price - a.price);
    } else if (sortBy === 'newest') {
      filtered = [...filtered].sort((a, b) => parseInt(b.id) - parseInt(a.id));
    } else if (sortBy === 'ending') {
      filtered = [...filtered].sort((a, b) => {
        if (a.isAuction && !b.isAuction) return -1;
        if (!a.isAuction && b.isAuction) return 1;
        return 0;
      });
    }

    setFilteredProducts(filtered);
  };

  // Apply filters whenever search parameters change
  useEffect(() => {
    handleSearch();
  }, [searchQuery, selectedCategory, sortBy]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-4">
            Discover Amazing Products
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Browse through millions of unique items from trusted sellers worldwide
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Bar */}
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search for anything..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12 text-lg"
              />
            </div>
            <Button onClick={handleSearch} className="h-12 px-8 bg-blue-600 hover:bg-blue-700">
              Search
            </Button>
          </div>

          {/* Filters and Controls */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="flex flex-wrap gap-4">
              <div className="min-w-[200px]">
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category === 'all' ? 'All Categories' : category.charAt(0).toUpperCase() + category.slice(1)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="min-w-[180px]">
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="ending">Ending Soon</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button variant="outline" className="flex items-center gap-2">
                <SlidersHorizontal className="h-4 w-4" />
                More Filters
              </Button>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600 mr-2">View:</span>
              <div className="flex border rounded-lg overflow-hidden">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className="rounded-none"
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className="rounded-none"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Results Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              {searchQuery ? `Results for "${searchQuery}"` : 'All Products'} ({filteredProducts.length})
            </h2>
            
            {filteredProducts.length > 0 && (
              <div className="text-sm text-gray-600">
                Showing {filteredProducts.length} of {mockProducts.length} results
              </div>
            )}
          </div>

          {/* Products Grid/List */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-gray-400 mb-4">
                <Search className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search criteria or browse our categories
              </p>
              <Button onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setSortBy('featured');
              }}>
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className={viewMode === 'grid' 
              ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              : "space-y-4"
            }>
              {filteredProducts.map((product) => (
                <div key={product.id} className={viewMode === 'list' ? 'border rounded-lg p-4 bg-white' : ''}>
                  <ProductCard {...product} />
                </div>
              ))}
            </div>
          )}

          {/* Load More */}
          {filteredProducts.length > 0 && (
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Load More Products
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {categories.slice(1).map((category, index) => (
              <div
                key={category}
                className="group cursor-pointer text-center"
                onClick={() => {
                  setSelectedCategory(category);
                  handleSearch();
                }}
              >
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 mb-4 group-hover:shadow-lg transition-shadow">
                  <div className="text-3xl mb-2">
                    {['📱', '👕', '🏠', '⚽', '🚗', '📚', '🧸', '💎', '🎨'][index]}
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
