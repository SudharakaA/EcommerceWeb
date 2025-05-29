
import { useState } from 'react';
import { X, Mail, Lock, User, Phone, Store } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTab?: 'login' | 'register';
}

const AuthModal = ({ isOpen, onClose, defaultTab = 'login' }: AuthModalProps) => {
  const [activeTab, setActiveTab] = useState(defaultTab);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    accountType: 'buyer', // 'buyer' or 'seller'
    businessName: '',
    businessDescription: '',
    agreeToTerms: false
  });
  const { login, register } = useAuth();
  const { toast } = useToast();

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (activeTab === 'register' && !formData.agreeToTerms) {
      toast({ 
        title: "Terms Required", 
        description: "Please agree to the terms and conditions.",
        variant: "destructive"
      });
      return;
    }

    setLoading(true);

    try {
      if (activeTab === 'login') {
        await login(formData.email, formData.password);
        toast({ title: "Welcome back!", description: "You've successfully logged in." });
      } else {
        await register({
          ...formData,
          isSeller: formData.accountType === 'seller'
        });
        toast({ 
          title: "Account created!", 
          description: `Welcome to our marketplace as a ${formData.accountType}! Please check your email to verify your account.` 
        });
      }
      onClose();
      setFormData({
        name: '',
        email: '',
        password: '',
        phone: '',
        accountType: 'buyer',
        businessName: '',
        businessDescription: '',
        agreeToTerms: false
      });
    } catch (error: any) {
      console.error('Auth error:', error);
      
      let errorMessage = "Something went wrong. Please try again.";
      
      if (error.message?.includes('Invalid login credentials')) {
        errorMessage = "Invalid email or password. Please try again.";
      } else if (error.message?.includes('User already registered')) {
        errorMessage = "An account with this email already exists. Please sign in instead.";
      } else if (error.message?.includes('Password should be at least')) {
        errorMessage = "Password should be at least 6 characters long.";
      } else if (error.message?.includes('Invalid email')) {
        errorMessage = "Please enter a valid email address.";
      } else if (error.message) {
        errorMessage = error.message;
      }
      
      toast({ 
        title: "Error", 
        description: errorMessage,
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold">
            {activeTab === 'login' ? 'Sign In' : 'Create Account'}
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b">
          <button
            onClick={() => setActiveTab('login')}
            className={`flex-1 py-3 px-4 text-sm font-medium ${
              activeTab === 'login' 
                ? 'border-b-2 border-blue-500 text-blue-600' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Sign In
          </button>
          <button
            onClick={() => setActiveTab('register')}
            className={`flex-1 py-3 px-4 text-sm font-medium ${
              activeTab === 'register' 
                ? 'border-b-2 border-blue-500 text-blue-600' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Register
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {activeTab === 'register' && (
            <>
              {/* Account Type Selection */}
              <div className="space-y-3">
                <Label className="text-sm font-medium">Account Type</Label>
                <RadioGroup 
                  value={formData.accountType} 
                  onValueChange={(value) => setFormData({...formData, accountType: value})}
                  className="flex space-x-6"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="buyer" id="buyer" />
                    <Label htmlFor="buyer" className="flex items-center cursor-pointer">
                      <User className="h-4 w-4 mr-2" />
                      Buyer
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="seller" id="seller" />
                    <Label htmlFor="seller" className="flex items-center cursor-pointer">
                      <Store className="h-4 w-4 mr-2" />
                      Seller
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Full Name */}
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="pl-10"
                  required
                />
              </div>

              {/* Business Details for Sellers */}
              {formData.accountType === 'seller' && (
                <>
                  <div className="relative">
                    <Store className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <Input
                      type="text"
                      placeholder="Business/Store Name"
                      value={formData.businessName}
                      onChange={(e) => setFormData({...formData, businessName: e.target.value})}
                      className="pl-10"
                    />
                  </div>
                  <Input
                    type="text"
                    placeholder="Brief business description"
                    value={formData.businessDescription}
                    onChange={(e) => setFormData({...formData, businessDescription: e.target.value})}
                  />
                </>
              )}
            </>
          )}

          {/* Email */}
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="pl-10"
              required
            />
          </div>

          {/* Password */}
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              className="pl-10"
              required
            />
          </div>

          {activeTab === 'register' && (
            <>
              {/* Phone Number */}
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="pl-10"
                />
              </div>

              {/* Terms and Conditions */}
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="terms"
                  checked={formData.agreeToTerms}
                  onCheckedChange={(checked) => 
                    setFormData({...formData, agreeToTerms: checked as boolean})
                  }
                  className="mt-1"
                />
                <label htmlFor="terms" className="text-sm text-gray-600 leading-relaxed">
                  I agree to the{' '}
                  <span className="text-blue-600 hover:underline cursor-pointer">
                    Terms of Service
                  </span>{' '}
                  and{' '}
                  <span className="text-blue-600 hover:underline cursor-pointer">
                    Privacy Policy
                  </span>
                  {formData.accountType === 'seller' && (
                    <>, and understand the seller responsibilities and fees</>
                  )}
                </label>
              </div>
            </>
          )}

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? 'Loading...' : activeTab === 'login' ? 'Sign In' : `Create ${formData.accountType} Account`}
          </Button>

          {/* Benefits Info for Registration */}
          {activeTab === 'register' && (
            <div className="bg-gray-50 rounded-lg p-4 text-sm">
              <h4 className="font-medium mb-2">
                {formData.accountType === 'buyer' ? 'Buyer Benefits:' : 'Seller Benefits:'}
              </h4>
              <ul className="text-gray-600 space-y-1">
                {formData.accountType === 'buyer' ? (
                  <>
                    <li>• Save favorite items and sellers</li>
                    <li>• Faster checkout process</li>
                    <li>• Order tracking and history</li>
                    <li>• Exclusive deals and notifications</li>
                  </>
                ) : (
                  <>
                    <li>• List unlimited products</li>
                    <li>• Access to seller analytics</li>
                    <li>• Promotional tools and features</li>
                    <li>• Direct customer communication</li>
                  </>
                )}
              </ul>
            </div>
          )}

          <div className="text-center text-sm text-gray-600">
            {activeTab === 'login' ? (
              <>
                Don't have an account?{' '}
                <button
                  type="button"
                  onClick={() => setActiveTab('register')}
                  className="text-blue-600 hover:underline font-medium"
                >
                  Sign up
                </button>
              </>
            ) : (
              <>
                Already have an account?{' '}
                <button
                  type="button"
                  onClick={() => setActiveTab('login')}
                  className="text-blue-600 hover:underline font-medium"
                >
                  Sign in
                </button>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthModal;
