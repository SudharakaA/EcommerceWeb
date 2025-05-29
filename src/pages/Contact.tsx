
import { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Clock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    category: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-4">
            Get Help & Support
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            We're here to help! Contact our support team for any questions about buying, selling, or using our platform.
          </p>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Clock className="h-8 w-8 text-blue-600 mb-2" />
              <div className="text-2xl font-bold text-gray-900">24/7</div>
              <div className="text-sm text-gray-600">Customer Support</div>
            </div>
            <div className="flex flex-col items-center">
              <MessageCircle className="h-8 w-8 text-green-600 mb-2" />
              <div className="text-2xl font-bold text-gray-900">&lt;1hr</div>
              <div className="text-sm text-gray-600">Average Response</div>
            </div>
            <div className="flex flex-col items-center">
              <Users className="h-8 w-8 text-purple-600 mb-2" />
              <div className="text-2xl font-bold text-gray-900">50k+</div>
              <div className="text-sm text-gray-600">Happy Customers</div>
            </div>
            <div className="flex flex-col items-center">
              <Phone className="h-8 w-8 text-orange-600 mb-2" />
              <div className="text-2xl font-bold text-gray-900">98%</div>
              <div className="text-sm text-gray-600">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Send us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category *
                  </label>
                  <Select value={formData.category} onValueChange={(value) => setFormData({...formData, category: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="buying">Buying Help</SelectItem>
                      <SelectItem value="selling">Selling Help</SelectItem>
                      <SelectItem value="account">Account Issues</SelectItem>
                      <SelectItem value="payment">Payment Problems</SelectItem>
                      <SelectItem value="shipping">Shipping Questions</SelectItem>
                      <SelectItem value="technical">Technical Support</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <Input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full"
                    placeholder="Brief description of your issue"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full resize-none"
                    placeholder="Please provide as much detail as possible..."
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Methods */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Other Ways to Reach Us
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Phone Support</h4>
                      <p className="text-gray-600">+94 77 543 9120</p>
                      <p className="text-sm text-gray-500">Available 24/7</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Email Support</h4>
                      <p className="text-gray-600">support@innocart.lk</p>
                      <p className="text-sm text-gray-500">Response within 1 hour</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-100 p-3 rounded-full">
                      <MessageCircle className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Live Chat</h4>
                      <p className="text-gray-600">Chat with our team</p>
                      <Button variant="outline" size="sm" className="mt-2">
                        Start Chat
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Frequently Asked Questions
                </h3>
                
                <div className="space-y-4">
                  <details className="group">
                    <summary className="flex justify-between items-center font-medium text-gray-900 cursor-pointer">
                      How do I return an item?
                      <span className="transition group-open:rotate-180">⌄</span>
                    </summary>
                    <p className="mt-2 text-gray-600 text-sm">
                      You can return most items within 30 days of delivery. Go to "My eBay" → "Purchase history" → "Return this item".
                    </p>
                  </details>
                  
                  <details className="group">
                    <summary className="flex justify-between items-center font-medium text-gray-900 cursor-pointer">
                      How do I track my order?
                      <span className="transition group-open:rotate-180">⌄</span>
                    </summary>
                    <p className="mt-2 text-gray-600 text-sm">
                      Once your item ships, you'll receive a tracking number via email. You can also track orders in "My eBay".
                    </p>
                  </details>
                  
                  <details className="group">
                    <summary className="flex justify-between items-center font-medium text-gray-900 cursor-pointer">
                      What payment methods do you accept?
                      <span className="transition group-open:rotate-180">⌄</span>
                    </summary>
                    <p className="mt-2 text-gray-600 text-sm">
                      We accept PayPal, credit cards, debit cards, and bank transfers for most transactions.
                    </p>
                  </details>
                </div>
                
                <Button variant="outline" className="mt-6 w-full">
                  View All FAQs
                </Button>
              </div>

              {/* Location */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <MapPin className="h-6 w-6 mr-2" />
                  Our Location
                </h3>
                <div className="bg-gray-100 rounded-xl h-48 flex items-center justify-center mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?w=400&h=200&fit=crop"
                    alt="Sri Lanka Office"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="text-gray-600">
                  <p className="font-medium">Innocart Headquarters</p>
                  <p>123 Business District</p>
                  <p>Colombo 03, Sri Lanka</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
