import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MessageCircle, MapPin } from "lucide-react";

const Order = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    phone: "",
    email: "",
    location: "",
    productType: "",
    quantity: "",
    deliveryDate: "",
    deliveryTime: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `New Ice Order Request:
Name: ${formData.name}
Business: ${formData.businessName || 'N/A'}
Phone: ${formData.phone}
Email: ${formData.email}
Location: ${formData.location}
Product: ${formData.productType}
Quantity: ${formData.quantity}
Delivery Date: ${formData.deliveryDate}
Delivery Time: ${formData.deliveryTime}
Message: ${formData.message || 'N/A'}`;

    const whatsappUrl = `https://wa.me/254700000000?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    toast({
      title: "Order request sent!",
      description: "We'll contact you shortly to confirm your order.",
    });

    // Reset form
    setFormData({
      name: "",
      businessName: "",
      phone: "",
      email: "",
      location: "",
      productType: "",
      quantity: "",
      deliveryDate: "",
      deliveryTime: "",
      message: "",
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Order Fresh Ice
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Fill out the form below or contact us directly via WhatsApp for quick orders
            </p>
          </div>
        </div>
      </section>

      {/* Order Form Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Order Form */}
            <Card className="border-2 shadow-frost animate-fade-in-up">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6">Place Your Order</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      placeholder="John Doe"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="businessName">Business Name (Optional)</Label>
                    <Input
                      id="businessName"
                      value={formData.businessName}
                      onChange={(e) => handleChange('businessName', e.target.value)}
                      placeholder="Your Business"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      placeholder="+254 700 000 000"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      placeholder="your@email.com"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="location">Delivery Location *</Label>
                    <Input
                      id="location"
                      required
                      value={formData.location}
                      onChange={(e) => handleChange('location', e.target.value)}
                      placeholder="Nairobi, Kenya"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="productType">Product Type *</Label>
                    <Select 
                      required
                      value={formData.productType}
                      onValueChange={(value) => handleChange('productType', value)}
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select product type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ice-cubes">Premium Ice Cubes</SelectItem>
                        <SelectItem value="crushed-ice">Crushed Ice</SelectItem>
                        <SelectItem value="bulk">Bulk Order</SelectItem>
                        <SelectItem value="event">Event Supply</SelectItem>
                        <SelectItem value="wholesale">Wholesale Order</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="quantity">Quantity (kg) *</Label>
                    <Input
                      id="quantity"
                      required
                      value={formData.quantity}
                      onChange={(e) => handleChange('quantity', e.target.value)}
                      placeholder="e.g., 20kg"
                      className="mt-1"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="deliveryDate">Delivery Date *</Label>
                      <Input
                        id="deliveryDate"
                        type="date"
                        required
                        value={formData.deliveryDate}
                        onChange={(e) => handleChange('deliveryDate', e.target.value)}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="deliveryTime">Preferred Time</Label>
                      <Input
                        id="deliveryTime"
                        type="time"
                        value={formData.deliveryTime}
                        onChange={(e) => handleChange('deliveryTime', e.target.value)}
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Additional Notes</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      placeholder="Any special instructions or requirements..."
                      className="mt-1"
                      rows={4}
                    />
                  </div>

                  <Button type="submit" className="w-full shadow-frost" size="lg">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Send Order via WhatsApp
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    By submitting this form, you'll be redirected to WhatsApp to complete your order.
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <Card className="border-2 hover:shadow-frost transition-all">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Quick Contact</h3>
                  
                  <div className="space-y-6">
                    <a 
                      href="https://wa.me/254700000000"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start space-x-4 p-4 rounded-lg hover:bg-muted transition-colors group"
                    >
                      <div className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <MessageCircle className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">WhatsApp Orders</h4>
                        <p className="text-sm text-muted-foreground">
                          Quick orders via WhatsApp
                        </p>
                        <p className="text-sm font-medium text-primary mt-1">
                          Click to chat →
                        </p>
                      </div>
                    </a>

                    <a 
                      href="tel:+254700000000"
                      className="flex items-start space-x-4 p-4 rounded-lg hover:bg-muted transition-colors"
                    >
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">Phone</h4>
                        <p className="text-sm text-muted-foreground">
                          +254 700 000 000
                        </p>
                      </div>
                    </a>

                    <a 
                      href="mailto:info@icekinns.co.ke"
                      className="flex items-start space-x-4 p-4 rounded-lg hover:bg-muted transition-colors"
                    >
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">Email</h4>
                        <p className="text-sm text-muted-foreground">
                          info@icekinns.co.ke
                        </p>
                      </div>
                    </a>

                    <div className="flex items-start space-x-4 p-4 rounded-lg">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">Location</h4>
                        <p className="text-sm text-muted-foreground">
                          Nairobi, Kenya
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 bg-gradient-frost">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Order Information</h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Same-day delivery for orders before 2 PM</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Minimum order: 5kg for retail, 50kg for wholesale</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Payment on delivery or mobile money accepted</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Special rates for bulk and recurring orders</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Free quote consultation for large events</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Order;
