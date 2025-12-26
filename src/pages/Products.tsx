import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Snowflake, Package, Truck, Clock, MapPin, ShoppingCart } from "lucide-react";
import iceBagsImage from "@/assets/ice-bags.jpg";
import crushedIceImage from "@/assets/crushed-ice.jpg";

const Products = () => {
  const products = [
    {
      name: "Premium Ice Cubes",
      description: "Crystal-clear, food-grade ice cubes perfect for beverages and cooling. Made from purified water for maximum clarity and purity.",
      image: iceBagsImage,
      sizes: ["5kg bags", "10kg bags", "20kg bags"],
      bestFor: "Restaurants, bars, hotels, events",
    },
    {
      name: "Crushed Ice",
      description: "Finely crushed ice ideal for cocktails, smoothies, and display purposes. Quick-cooling and easy to handle.",
      image: crushedIceImage,
      sizes: ["5kg bags", "10kg bags", "Custom sizes"],
      bestFor: "Bars, cafes, food displays",
    },
    {
      name: "Bulk Orders",
      description: "Large-scale ice supply for events, festivals, and wholesale requirements. Custom packaging and delivery schedules available.",
      image: iceBagsImage,
      sizes: ["50kg+", "100kg+", "Custom volumes"],
      bestFor: "Events, wholesalers, large venues",
    },
  ];

  const deliveryInfo = [
    {
      icon: MapPin,
      title: "Delivery Areas",
      description: "Nairobi and surrounding counties. Extended coverage available for large orders.",
    },
    {
      icon: Clock,
      title: "Delivery Times",
      description: "Same-day delivery for orders placed before 2 PM. Next-day delivery also available.",
    },
    {
      icon: Package,
      title: "Minimum Orders",
      description: "Retail: 5kg minimum. Wholesale: 50kg minimum. Event orders: Custom arrangements.",
    },
    {
      icon: Truck,
      title: "Cold Chain",
      description: "Insulated delivery vehicles ensure your ice arrives frozen solid, maintaining quality.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Products & Services
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Premium ice products for every need, delivered fresh and frozen
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Ice Products</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose from our range of premium ice products, all made with purified water
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {products.map((product, index) => (
              <Card 
                key={index}
                className="overflow-hidden border-2 hover:shadow-ice transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <Snowflake className="w-5 h-5 text-primary mr-2" />
                    <h3 className="text-2xl font-bold">{product.name}</h3>
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Available Sizes:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.sizes.map((size, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                        >
                          {size}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Best For:</h4>
                    <p className="text-sm text-muted-foreground">{product.bestFor}</p>
                  </div>

                  <Link to="/order" className="block">
                    <Button className="w-full shadow-frost">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Order Now
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Information */}
      <section className="py-20 bg-gradient-frost">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Delivery Information</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Fast, reliable delivery to keep your ice frozen and fresh
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {deliveryInfo.map((info, index) => (
              <Card 
                key={index}
                className="border-2 hover:shadow-frost transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-ice rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{info.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {info.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Special Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center animate-fade-in">
              Special Services
            </h2>

            <div className="space-y-6">
              <Card className="border-l-4 border-l-primary animate-fade-in-up">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-3">Event Ice Supply</h3>
                  <p className="text-muted-foreground mb-4">
                    Planning a wedding, festival, or corporate event? We provide bulk ice supply 
                    with flexible delivery schedules. Our team works with you to ensure adequate 
                    quantities and timely delivery throughout your event.
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Custom delivery schedules</li>
                    <li>On-site freezer stocking</li>
                    <li>Event quantity planning assistance</li>
                    <li>Competitive bulk pricing</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-primary animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-3">Wholesale Supply</h3>
                  <p className="text-muted-foreground mb-4">
                    Regular ice needs for your business? Join our wholesale program for 
                    consistent supply, preferential pricing, and dedicated account management. 
                    Perfect for restaurants, hotels, bars, and retail stores.
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Volume-based discounts</li>
                    <li>Scheduled regular deliveries</li>
                    <li>Flexible payment terms</li>
                    <li>Priority service</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-primary animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-3">Custom Orders</h3>
                  <p className="text-muted-foreground mb-4">
                    Have special requirements? We accommodate custom orders including specific 
                    packaging, delivery times, or quantity needs. Contact us to discuss your 
                    unique requirements.
                  </p>
                  <Link to="/order">
                    <Button className="mt-4">Request Custom Order</Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-ice text-white">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Order?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Get in touch today for quotes, bulk orders, or to set up regular delivery schedules
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/order">
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-white text-primary hover:bg-white/90 shadow-ice"
              >
                Place an Order
              </Button>
            </Link>
            <a href="https://wa.me/254700000000" target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg" 
                variant="outline"
                className="w-full sm:w-auto bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
              >
                WhatsApp Quote
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
