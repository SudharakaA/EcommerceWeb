
import { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ProductSearch from '../components/ProductSearch';
import ProductCard from '../components/ProductCard';
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import { mockProducts } from '../data/mockProducts';

const Index = () => {
  const [filteredProducts, setFilteredProducts] = useState(mockProducts);

  const handleSearch = (query: string, filters: any) => {
    let filtered = mockProducts;
    
    if (query) {
      filtered = filtered.filter(product => 
        product.title.toLowerCase().includes(query.toLowerCase()) ||
        product.seller.toLowerCase().includes(query.toLowerCase())
      );
    }

    if (filters.category !== 'all') {
      filtered = filtered.filter(product => product.category === filters.category);
    }

    if (filters.priceRange !== 'all') {
      const [min, max] = filters.priceRange.split('-').map((p: string) => 
        p.includes('+') ? Infinity : parseInt(p)
      );
      filtered = filtered.filter(product => {
        if (max === Infinity) return product.price >= min;
        return product.price >= min && product.price <= max;
      });
    }

    if (filters.sortBy === 'price-low') {
      filtered = [...filtered].sort((a, b) => a.price - b.price);
    } else if (filters.sortBy === 'price-high') {
      filtered = [...filtered].sort((a, b) => b.price - a.price);
    } else if (filters.sortBy === 'ending') {
      filtered = [...filtered].sort((a, b) => {
        if (a.isAuction && !b.isAuction) return -1;
        if (!a.isAuction && b.isAuction) return 1;
        return 0;
      });
    }

    setFilteredProducts(filtered);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <Hero />
      
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProductSearch onSearch={handleSearch} />
          
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Featured Products ({filteredProducts.length})
            </h2>
            <div className="text-sm text-gray-600">
              Showing all results
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      <Categories />
      <Footer />
    </div>
  );
};

export default Index;
