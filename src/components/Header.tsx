
import { useState } from 'react';
import { Search, ShoppingCart, Menu, User, Bell, Heart, LogOut, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useCart } from '@/contexts/CartContext';
import AuthModal from './AuthModal';
import CartSidebar from './CartSidebar';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showUserDetails, setShowUserDetails] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showCartSidebar, setShowCartSidebar] = useState(false);
  const { user, profile, logout, isAuthenticated, loading } = useAuth();
  const { totalItems } = useCart();
  const location = useLocation();

  const handleUserClick = () => {
    if (isAuthenticated) {
      setShowUserDetails(!showUserDetails);
    } else {
      setShowAuthModal(true);
    }
  };

  const handleLogout = () => {
    logout();
    setShowUserDetails(false);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Services', path: '/services' },
    { name: 'Contact Us', path: '/contact' }
  ];

  const isActiveRoute = (path: string) => {
    return location.pathname === path;
  };

  if (loading) {
    return (
      <header className="bg-slate-400/90 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <div className="bg-blue-500 p-2 rounded-lg">
                  <ShoppingCart className="h-6 w-6 text-white" />
                </div>
                <h1 className="text-xl font-bold text-white">Innocart</h1>
              </Link>
            </div>
            <div className="text-white">Loading...</div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <>
      <header className="bg-slate-400/90 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <div className="bg-blue-500 p-2 rounded-lg">
                  <ShoppingCart className="h-6 w-6 text-white" />
                </div>
                <h1 className="text-xl font-bold text-white">
                  Innocart
                </h1>
              </Link>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <Link key={item.name} to={item.path}>
                  <Button 
                    variant="ghost" 
                    className={`text-white hover:bg-white/10 hover:text-white rounded-full px-6 ${
                      isActiveRoute(item.path) ? 'bg-white/20' : ''
                    }`}
                  >
                    {item.name}
                  </Button>
                </Link>
              ))}
            </nav>

            {/* Right side icons */}
            <div className="flex items-center space-x-4">
              {isAuthenticated && profile?.is_seller && (
                <Link to="/add-product">
                  <Button variant="ghost" size="sm" className="text-white hidden md:flex">
                    <Plus className="h-5 w-5 mr-2" />
                    Sell Item
                  </Button>
                </Link>
              )}

              {isAuthenticated && (
                <>
                  <Button variant="ghost" size="sm" className="text-white relative">
                    <Bell className="h-5 w-5" />
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                      3
                    </span>
                  </Button>
                  
                  <Button variant="ghost" size="sm" className="text-white">
                    <Heart className="h-5 w-5" />
                  </Button>
                </>
              )}

              <Button 
                variant="ghost" 
                size="sm" 
                className="relative text-white"
                onClick={() => setShowCartSidebar(true)}
              >
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                    {totalItems}
                  </span>
                )}
              </Button>
              
              <div className="hidden md:flex items-center space-x-2 text-white cursor-pointer" onClick={handleUserClick}>
                <User className="h-5 w-5" />
                <span className="text-sm">
                  {isAuthenticated ? profile?.name?.split(' ')[0] || 'User' : 'Sign In'}
                </span>
              </div>

              <Button
                variant="ghost"
                size="sm"
                className="md:hidden text-white"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-white/20 animate-fade-in">
              <nav className="flex flex-col space-y-3">
                {navItems.map((item) => (
                  <Link key={item.name} to={item.path} onClick={() => setIsMenuOpen(false)}>
                    <span className={`text-white hover:text-blue-200 font-medium block ${
                      isActiveRoute(item.path) ? 'text-blue-200' : ''
                    }`}>
                      {item.name}
                    </span>
                  </Link>
                ))}
                {isAuthenticated && profile?.is_seller && (
                  <Link to="/add-product" onClick={() => setIsMenuOpen(false)}>
                    <span className="text-white hover:text-blue-200 font-medium flex items-center">
                      <Plus className="h-4 w-4 mr-2" />
                      Sell Item
                    </span>
                  </Link>
                )}
                <div className="flex items-center space-x-2 text-white pt-2" onClick={handleUserClick}>
                  <User className="h-5 w-5" />
                  <span className="text-sm">
                    {isAuthenticated ? profile?.name || 'User' : 'Sign In'}
                  </span>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* User Details Modal */}
      {showUserDetails && isAuthenticated && profile && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full">
            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                {profile.avatar ? (
                  <img src={profile.avatar} alt={profile.name} className="w-full h-full rounded-full object-cover" />
                ) : (
                  <User className="h-10 w-10 text-blue-600" />
                )}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{profile.name}</h3>
              <p className="text-gray-600 mb-4">
                {profile.is_seller ? 'Seller' : 'Buyer'} Account
              </p>
              <div className="space-y-2 text-left bg-gray-50 p-4 rounded-lg">
                <p><strong>Email:</strong> {profile.email}</p>
                {profile.phone && <p><strong>Phone:</strong> {profile.phone}</p>}
                <p><strong>Member Since:</strong> {new Date(profile.created_at).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
                {profile.is_seller && (
                  <>
                    {profile.business_name && <p><strong>Business:</strong> {profile.business_name}</p>}
                    <p><strong>Rating:</strong> {profile.rating}/5.0 ⭐</p>
                    <p><strong>Total Sales:</strong> {profile.total_sales}</p>
                  </>
                )}
                <p><strong>Verified:</strong> 
                  <span className={profile.verified ? "text-green-600" : "text-orange-600"}>
                    {profile.verified ? " ✓ Verified" : " Pending"}
                  </span>
                </p>
              </div>
              <div className="flex space-x-3 mt-6">
                <Button variant="outline" className="flex-1">
                  Edit Profile
                </Button>
                <Button 
                  onClick={handleLogout}
                  variant="outline"
                  className="flex-1 text-red-600 border-red-200 hover:bg-red-50"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
                <Button
                  onClick={() => setShowUserDetails(false)}
                  className="flex-1"
                >
                  Close
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      <AuthModal 
        isOpen={showAuthModal} 
        onClose={() => setShowAuthModal(false)} 
      />
      
      <CartSidebar 
        isOpen={showCartSidebar} 
        onClose={() => setShowCartSidebar(false)} 
      />
    </>
  );
};

export default Header;
