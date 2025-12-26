import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

const FAQ = () => {
  const deliveryFaqs = [
    {
      question: "What areas do you deliver to?",
      answer: "We deliver across Nairobi and surrounding counties including Kiambu, Machakos, and Kajiado. For orders outside these areas, please contact us for custom delivery arrangements. Large bulk orders may qualify for extended coverage.",
    },
    {
      question: "How quickly can I get my ice delivered?",
      answer: "We offer same-day delivery for orders placed before 2:00 PM. Orders placed after 2:00 PM will be delivered the next business day. For urgent orders, please contact us via WhatsApp or phone, and we'll do our best to accommodate your timeline.",
    },
    {
      question: "What is the minimum order quantity?",
      answer: "For retail customers, the minimum order is 5kg. Wholesale customers have a minimum order of 50kg. Event and bulk orders can be customized based on your specific needs. Contact us for volume pricing and special arrangements.",
    },
    {
      question: "How much does delivery cost?",
      answer: "Delivery fees vary based on location and order size. Most orders within Nairobi have a flat delivery fee, which will be quoted when you place your order. Large orders over 100kg may qualify for free delivery. Contact us for specific pricing.",
    },
  ];

  const productFaqs = [
    {
      question: "What makes your ice cubes different from others?",
      answer: "Our ice cubes are made from purified water using advanced filtration systems, ensuring crystal-clear, tasteless ice. We maintain strict hygiene standards in our food-grade production facility and use only FDA-approved equipment. The result is pure, clean ice that's perfect for beverages and food service.",
    },
    {
      question: "Is your ice safe for beverages?",
      answer: "Absolutely! Our ice is food-grade and safe for all beverage and food applications. We follow strict quality control and hygiene protocols throughout the production process. Our facility is regularly inspected, and we maintain comprehensive quality documentation.",
    },
    {
      question: "How long will the ice stay frozen?",
      answer: "When stored properly in a freezer at -18°C or below, our ice will remain frozen indefinitely. In a cooler or insulated container, it can last 24-48 hours depending on ambient temperature and how often the container is opened. We deliver ice in insulated packaging to minimize melting during transit.",
    },
    {
      question: "Can I get custom ice sizes or shapes?",
      answer: "Currently, we offer standard ice cubes and crushed ice. For large events or commercial clients with specific requirements, we may be able to accommodate custom orders. Please contact us with your specific needs, and we'll work with you to find a solution.",
    },
  ];

  const orderFaqs = [
    {
      question: "What payment methods do you accept?",
      answer: "We accept cash on delivery, M-Pesa, bank transfer, and for established business clients, we offer credit terms. Payment is typically due upon delivery unless prior arrangements have been made for wholesale accounts.",
    },
    {
      question: "Can I set up regular scheduled deliveries?",
      answer: "Yes! We offer scheduled delivery services for businesses with regular ice needs. This is perfect for restaurants, hotels, and bars. Contact us to set up a delivery schedule that works for your business, and enjoy preferential wholesale pricing.",
    },
    {
      question: "How do I track my order?",
      answer: "Once your order is confirmed, our team will provide you with estimated delivery time. For same-day orders, we'll contact you when the delivery is on the way. You can also reach out via WhatsApp or phone anytime to check on your order status.",
    },
    {
      question: "What is your cancellation policy?",
      answer: "Orders can be cancelled or rescheduled up to 2 hours before the scheduled delivery time without charge. For last-minute cancellations, please contact us as soon as possible. We'll do our best to accommodate changes to your order.",
    },
  ];

  const eventFaqs = [
    {
      question: "Do you provide ice for large events?",
      answer: "Yes! We specialize in event ice supply for weddings, festivals, corporate functions, and more. We can provide bulk quantities with flexible delivery schedules, including multiple deliveries throughout your event if needed. Contact us early to discuss your event requirements and get a custom quote.",
    },
    {
      question: "Can you deliver ice throughout an event?",
      answer: "Absolutely! For long events, we can schedule multiple deliveries to ensure you never run out of ice. We'll work with your event timeline to deliver fresh ice when you need it, and we can adjust quantities based on your actual usage.",
    },
    {
      question: "Do you offer event planning support?",
      answer: "While we're ice specialists rather than full-service event planners, we're happy to help you estimate how much ice you'll need based on your guest count, event duration, and planned use. Our experience with hundreds of events helps us guide you to the right quantities.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Everything you need to know about ordering and receiving fresh ice
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Delivery FAQs */}
            <div className="animate-fade-in-up">
              <h2 className="text-3xl font-bold mb-6">Delivery Information</h2>
              <Card>
                <CardContent className="p-6">
                  <Accordion type="single" collapsible className="w-full">
                    {deliveryFaqs.map((faq, index) => (
                      <AccordionItem key={index} value={`delivery-${index}`}>
                        <AccordionTrigger className="text-left">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </div>

            {/* Product FAQs */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <h2 className="text-3xl font-bold mb-6">Product Quality</h2>
              <Card>
                <CardContent className="p-6">
                  <Accordion type="single" collapsible className="w-full">
                    {productFaqs.map((faq, index) => (
                      <AccordionItem key={index} value={`product-${index}`}>
                        <AccordionTrigger className="text-left">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </div>

            {/* Ordering FAQs */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-3xl font-bold mb-6">Orders & Payment</h2>
              <Card>
                <CardContent className="p-6">
                  <Accordion type="single" collapsible className="w-full">
                    {orderFaqs.map((faq, index) => (
                      <AccordionItem key={index} value={`order-${index}`}>
                        <AccordionTrigger className="text-left">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </div>

            {/* Event FAQs */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <h2 className="text-3xl font-bold mb-6">Events & Large Orders</h2>
              <Card>
                <CardContent className="p-6">
                  <Accordion type="single" collapsible className="w-full">
                    {eventFaqs.map((faq, index) => (
                      <AccordionItem key={index} value={`event-${index}`}>
                        <AccordionTrigger className="text-left">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-gradient-frost">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl font-bold mb-6">Still Have Questions?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Our team is here to help! Contact us via phone, email, or WhatsApp,
              and we'll be happy to answer any questions about our products or services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/254700000000" target="_blank" rel="noopener noreferrer">
                <Card className="hover:shadow-frost transition-all cursor-pointer">
                  <CardContent className="p-6">
                    <p className="font-bold mb-2">WhatsApp</p>
                    <p className="text-muted-foreground">Quick response guaranteed</p>
                  </CardContent>
                </Card>
              </a>
              <a href="tel:+254700000000">
                <Card className="hover:shadow-frost transition-all cursor-pointer">
                  <CardContent className="p-6">
                    <p className="font-bold mb-2">Phone</p>
                    <p className="text-muted-foreground">+254 700 000 000</p>
                  </CardContent>
                </Card>
              </a>
              <a href="mailto:info@icekinns.co.ke">
                <Card className="hover:shadow-frost transition-all cursor-pointer">
                  <CardContent className="p-6">
                    <p className="font-bold mb-2">Email</p>
                    <p className="text-muted-foreground">info@icekinns.co.ke</p>
                  </CardContent>
                </Card>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
