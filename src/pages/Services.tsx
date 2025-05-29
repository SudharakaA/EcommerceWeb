
import { Shield, CreditCard, Truck, HeadphonesIcon, Star, Users, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: 'Buyer Protection',
      description: 'Shop with confidence knowing every purchase is protected by our comprehensive buyer protection program.',
      features: [
        'Money back guarantee',
        'Secure payment processing',
        'Dispute resolution',
        'Fraud protection'
      ],
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: CreditCard,
      title: 'Secure Payments',
      description: 'Multiple payment options with bank-level security to ensure your financial information is always safe.',
      features: [
        'PayPal integration',
        'Credit & debit cards',
        'Bank transfers',
        'Cryptocurrency support'
      ],
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Truck,
      title: 'Global Shipping',
      description: 'Fast and reliable shipping options to get your items delivered safely anywhere in the world.',
      features: [
        'Express delivery',
        'International shipping',
        'Package tracking',
        'Insurance coverage'
      ],
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: HeadphonesIcon,
      title: '24/7 Customer Support',
      description: 'Our dedicated support team is always ready to help you with any questions or concerns.',
      features: [
        'Live chat support',
        'Phone assistance',
        'Email support',
        'Help center'
      ],
      color: 'bg-orange-100 text-orange-600'
    },
    {
      icon: Star,
      title: 'Quality Assurance',
      description: 'We maintain high standards to ensure you receive authentic, high-quality products.',
      features: [
        'Seller verification',
        'Product authentication',
        'Quality reviews',
        'Return policy'
      ],
      color: 'bg-yellow-100 text-yellow-600'
    },
    {
      icon: Users,
      title: 'Seller Services',
      description: 'Comprehensive tools and support to help sellers grow their business on our platform.',
      features: [
        'Listing optimization',
        'Analytics dashboard',
        'Marketing tools',
        'Business insights'
      ],
      color: 'bg-indigo-100 text-indigo-600'
    }
  ];

  const sellerFeatures = [
    {
      title: 'Easy Listing',
      description: 'List your items in minutes with our intuitive interface and bulk upload tools.',
      icon: '📝'
    },
    {
      title: 'Marketing Tools',
      description: 'Promote your listings with featured placements and targeted advertising options.',
      icon: '📢'
    },
    {
      title: 'Analytics Dashboard',
      description: 'Track your performance with detailed insights and sales analytics.',
      icon: '📊'
    },
    {
      title: 'Inventory Management',
      description: 'Manage your stock levels and automate inventory updates across channels.',
      icon: '📦'
    }
  ];

  const pricingPlans = [
    {
      name: 'Basic',
      price: 'Free',
      description: 'Perfect for occasional sellers',
      features: [
        'Up to 10 free listings/month',
        'Basic seller tools',
        'Standard support',
        'Mobile app access'
      ],
      buttonText: 'Get Started',
      popular: false
    },
    {
      name: 'Pro',
      price: '$19.99',
      period: '/month',
      description: 'For growing businesses',
      features: [
        'Unlimited listings',
        'Advanced analytics',
        'Priority support',
        'Marketing tools',
        'Bulk upload',
        'Custom branding'
      ],
      buttonText: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$99.99',
      period: '/month',
      description: 'For large-scale operations',
      features: [
        'Everything in Pro',
        'Dedicated account manager',
        'API access',
        'Custom integrations',
        'White-label options',
        'Volume discounts'
      ],
      buttonText: 'Contact Sales',
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6">
            Our Services
          </h1>
          <p className="text-xl lg:text-2xl opacity-90 max-w-3xl mx-auto">
            Comprehensive solutions designed to make buying and selling online 
            safe, easy, and profitable for everyone.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Offer</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From secure transactions to global shipping, we provide everything you need 
              for a successful online marketplace experience.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className={`p-4 rounded-full w-16 h-16 mb-6 flex items-center justify-center ${service.color}`}>
                  <service.icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seller Services */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Seller Tools & Features</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to build and grow your online business successfully.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sellerFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Plan</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Flexible pricing options to match your business needs and growth stage.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index} 
                className={`rounded-2xl p-8 shadow-lg relative ${
                  plan.popular 
                    ? 'bg-gradient-to-br from-blue-600 to-purple-600 text-white border-4 border-blue-200' 
                    : 'bg-white border border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center">
                  <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                    {plan.name}
                  </h3>
                  <p className={`mb-6 ${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                    {plan.description}
                  </p>
                  <div className="mb-8">
                    <span className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className={`text-lg ${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                        {plan.period}
                      </span>
                    )}
                  </div>
                  
                  <ul className="space-y-3 mb-8 text-left">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className={`h-5 w-5 mr-3 ${
                          plan.popular ? 'text-blue-200' : 'text-green-500'
                        }`} />
                        <span className={plan.popular ? 'text-blue-100' : 'text-gray-700'}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-white text-blue-600 hover:bg-blue-50' 
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
                  >
                    {plan.buttonText}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
            Join millions of users who trust Innocart for their online marketplace needs. 
            Start buying or selling today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8">
              Start Selling
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8">
              Browse Products
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
