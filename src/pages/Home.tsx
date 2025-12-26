import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Snowflake, Truck, Shield, Phone, Mail, MapPin } from "lucide-react";
import heroImage from "../assets/hero-ice.jpg";

const Home = () => {
  const features = [
    {
      icon: Snowflake,
      title: "Premium Quality",
      description: "Crystal-clear ice cubes made from purified water, ensuring the highest quality and purity standards.",
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Reliable delivery service across Kenya. Your ice arrives fresh and frozen, exactly when you need it.",
    },
    {
      icon: Shield,
      title: "Food-Grade Safety",
      description: "Hygienic production processes with strict quality controls. Safe for all your beverage and cooling needs.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Fresh ice cubes"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/80 to-primary/60" />
        </div>
        
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Pure Freshness — Delivered Cold
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Kenya's most trusted supplier of premium ice cubes for events, businesses, and wholesale orders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/order">
                <Button size="lg" className="w-full sm:w-auto text-lg shadow-ice hover:scale-105 transition-transform">
                  Order Fresh Ice Today
                </Button>
              </Link>
              <Link to="/products">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full sm:w-auto text-lg bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
                >
                  View Products
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-frost">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose Ice Kinns?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We deliver more than just ice — we deliver quality, reliability, and trust.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="border-2 hover:shadow-ice transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-ice rounded-full flex items-center justify-center mx-auto mb-6 shadow-frost">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Committed to Excellence
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Ice Kinns Limited is Kenya's premier ice cube manufacturer and distributor. 
                We combine state-of-the-art production facilities with rigorous quality control 
                to deliver the freshest, purest ice cubes to businesses and events across the country.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our commitment to hygiene, reliability, and customer satisfaction has made us 
                the trusted choice for hotels, restaurants, events, and wholesalers nationwide.
              </p>
              <Link to="/about">
                <Button size="lg" variant="outline" className="shadow-frost">
                  Learn More About Us
                </Button>
              </Link>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute -inset-4 bg-gradient-ice rounded-3xl blur-xl opacity-20" />
              <Card className="relative overflow-hidden shadow-ice">
                <CardContent className="p-0">
                  <div className="aspect-square bg-gradient-frost flex items-center justify-center">
                    <Snowflake className="w-32 h-32 text-primary animate-float" />
                  </div>
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
            Ready to Place Your Order?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Get fresh, high-quality ice cubes delivered to your location. 
            Contact us today for wholesale pricing and bulk orders.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/order">
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-white text-primary hover:bg-white/90 shadow-ice"
              >
                Order Now
              </Button>
            </Link>
            <a href="https://wa.me/254700000000" target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg" 
                variant="outline"
                className="w-full sm:w-auto bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
              >
                WhatsApp Us
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Preview Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h2>
            <p className="text-xl text-muted-foreground">
              We're here to serve you with the best ice solutions in Kenya
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="hover:shadow-frost transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold mb-2">Phone</h3>
                <p className="text-muted-foreground">+254 700 000 000</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-frost transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold mb-2">Email</h3>
                <p className="text-muted-foreground">info@icekinns.co.ke</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-frost transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold mb-2">Location</h3>
                <p className="text-muted-foreground">Nairobi, Kenya</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
