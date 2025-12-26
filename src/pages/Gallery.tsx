import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-ice.jpg";
import iceBagsImage from "@/assets/ice-bags.jpg";
import crushedIceImage from "@/assets/crushed-ice.jpg";
import productionImage from "@/assets/production.jpg";
import deliveryImage from "@/assets/delivery.jpg";

const Gallery = () => {
  const galleryItems = [
    {
      image: heroImage,
      title: "Crystal Clear Ice Cubes",
      description: "Premium quality ice cubes made from purified water",
    },
    {
      image: iceBagsImage,
      title: "Professional Packaging",
      description: "Hygienically sealed bags for maximum freshness",
    },
    {
      image: crushedIceImage,
      title: "Crushed Ice",
      description: "Perfect for cocktails and food displays",
    },
    {
      image: productionImage,
      title: "Modern Production Facility",
      description: "State-of-the-art equipment and quality control",
    },
    {
      image: deliveryImage,
      title: "Reliable Delivery",
      description: "Cold-chain logistics ensuring frozen delivery",
    },
    {
      image: iceBagsImage,
      title: "Event Supply",
      description: "Bulk ice supply for all your events",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Gallery
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              See our products, production facilities, and delivery in action
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {galleryItems.map((item, index) => (
              <Card
                key={index}
                className="overflow-hidden border-2 hover:shadow-ice transition-all duration-300 hover:-translate-y-2 group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Highlights */}
      <section className="py-20 bg-gradient-frost">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center animate-fade-in">
              What Makes Our Ice Special
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-2 animate-fade-in-up">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Purity & Clarity</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We use advanced filtration systems to ensure every ice cube is crystal 
                    clear and free from impurities. Our water treatment process removes all 
                    contaminants before freezing.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Hygiene Standards</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our production facility maintains food-grade hygiene standards with 
                    regular sanitization protocols. All equipment is stainless steel and 
                    FDA-approved materials.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Cold Chain Integrity</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    From production to delivery, we maintain strict temperature control. 
                    Our insulated delivery vehicles ensure your ice arrives frozen solid, 
                    maintaining perfect quality.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Professional Service</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our trained staff ensures proper handling at every stage. From order 
                    processing to final delivery, we maintain professionalism and attention 
                    to your specific requirements.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center animate-fade-in">
              What Our Clients Say
            </h2>

            <div className="space-y-6">
              <Card className="border-l-4 border-l-primary animate-fade-in-up">
                <CardContent className="p-6">
                  <p className="text-muted-foreground italic mb-4 leading-relaxed">
                    "Ice Kinns has been our go-to supplier for the past two years. Their ice 
                    quality is consistently excellent, and delivery is always on time. Highly 
                    recommended for any business that needs reliable ice supply."
                  </p>
                  <p className="font-bold">- Sarah M., Restaurant Owner</p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-primary animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                <CardContent className="p-6">
                  <p className="text-muted-foreground italic mb-4 leading-relaxed">
                    "We've used Ice Kinns for multiple large events. They handle bulk orders 
                    professionally and their ice quality is top-notch. The team is responsive 
                    and accommodating to our schedules."
                  </p>
                  <p className="font-bold">- James K., Event Coordinator</p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-primary animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <CardContent className="p-6">
                  <p className="text-muted-foreground italic mb-4 leading-relaxed">
                    "As a hotel manager, I need suppliers I can trust. Ice Kinns delivers 
                    pristine ice cubes every time, and their customer service is exceptional. 
                    They're true professionals in their field."
                  </p>
                  <p className="font-bold">- Mary W., Hotel Manager</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
