import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Award, Users, Target } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: CheckCircle2,
      title: "Quality Assurance",
      description: "Every ice cube meets our strict quality and purity standards.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in production, delivery, and customer service.",
    },
    {
      icon: Users,
      title: "Customer First",
      description: "Your satisfaction and trust are at the heart of everything we do.",
    },
    {
      icon: Target,
      title: "Reliability",
      description: "Consistent quality and on-time delivery you can count on.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About Ice Kinns Limited
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Kenya's trusted partner for premium ice cube production and delivery services.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 animate-fade-in-up">
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Ice Kinns Limited was founded with a simple yet powerful mission: to provide 
                  Kenyan businesses and consumers with the highest quality ice cubes, delivered 
                  fresh and on time, every time.
                </p>
                <p>
                  What started as a small operation has grown into one of Kenya's most trusted 
                  ice suppliers, serving restaurants, hotels, events, bars, and wholesale clients 
                  across the country. Our success is built on a foundation of quality, reliability, 
                  and exceptional customer service.
                </p>
                <p>
                  We understand that when you need ice, you need it to be pure, fresh, and 
                  delivered when promised. That's why we've invested in state-of-the-art 
                  production facilities and a robust delivery network to ensure we meet and 
                  exceed your expectations every single time.
                </p>
              </div>
            </div>

            {/* Mission & Vision */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="border-2 hover:shadow-frost transition-all duration-300 animate-fade-in-up">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-primary">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To deliver the purest, freshest ice cubes to our customers across Kenya, 
                    maintaining the highest standards of quality, hygiene, and reliability in 
                    every aspect of our operations.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:shadow-frost transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-primary">Our Vision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To be Kenya's leading ice cube supplier, recognized for uncompromising 
                    quality, exceptional service, and innovative solutions that meet the evolving 
                    needs of our diverse customer base.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-frost">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card 
                key={index}
                className="border-2 hover:shadow-ice transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-ice rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-8 text-center">Our Commitment to Quality</h2>
            
            <div className="space-y-6">
              <Card className="border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Purity Standards</h3>
                  <p className="text-muted-foreground">
                    We use only purified water in our ice production process, ensuring that 
                    every cube is crystal clear and free from impurities. Our water undergoes 
                    rigorous filtration and quality testing.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Hygiene Excellence</h3>
                  <p className="text-muted-foreground">
                    Our production facilities maintain the highest hygiene standards, with 
                    regular sanitization, food-grade equipment, and strict quality control 
                    protocols at every stage of production.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Reliable Delivery</h3>
                  <p className="text-muted-foreground">
                    With our modern cold-chain logistics and dedicated delivery fleet, we 
                    ensure your ice arrives frozen solid and on time, maintaining perfect 
                    quality from our facility to your location.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Customer Support</h3>
                  <p className="text-muted-foreground">
                    Our team is always ready to assist you with orders, inquiries, and custom 
                    requirements. We believe in building lasting relationships with every client 
                    through exceptional service.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
