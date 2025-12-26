import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, MessageCircle } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Order", href: "/order" },
    { name: "Gallery", href: "/gallery" },
    { name: "FAQ", href: "/faq" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-50 frost-effect border-b border-border">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-gradient-ice rounded-lg flex items-center justify-center shadow-frost">
                <span className="text-2xl font-bold text-primary-foreground">IK</span>
              </div>
              <span className="text-xl font-bold text-primary-dark group-hover:text-primary transition-colors">
                Ice Kinns Limited
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-4 py-2 rounded-md transition-all ${
                    isActive(item.href)
                      ? "bg-primary text-primary-foreground shadow-frost"
                      : "text-foreground hover:bg-muted"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="https://wa.me/254700000000"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="sm" className="ml-4 shadow-frost">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-md hover:bg-muted"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-2 animate-fade-in">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-md transition-all ${
                    isActive(item.href)
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-muted"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="https://wa.me/254700000000"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button size="sm" className="w-full">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp Order
                </Button>
              </a>
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/254700000000"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 group"
      >
        <div className="bg-[#25D366] text-white p-4 rounded-full shadow-ice hover:scale-110 transition-transform animate-float">
          <MessageCircle className="w-6 h-6" />
        </div>
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-primary-dark text-white px-3 py-2 rounded-md text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-frost">
          Order on WhatsApp
        </span>
      </a>

      {/* Footer */}
      <footer className="bg-primary-dark text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Ice Kinns Limited</h3>
              <p className="text-white/80">
                Kenya's trusted supplier of premium fresh ice cubes. Pure freshness delivered cold.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Quick Links</h3>
              <div className="space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block text-white/80 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Contact Us</h3>
              <div className="space-y-3 text-white/80">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5" />
                  <span>+254 700 000 000</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5" />
                  <span>info@icekinns.co.ke</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MessageCircle className="w-5 h-5" />
                  <a
                    href="https://wa.me/254700000000"
                    className="hover:text-white transition-colors"
                  >
                    WhatsApp Orders
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60 text-sm">
            <p>© {new Date().getFullYear()} Ice Kinns Limited. All rights reserved.</p>
            <p className="mt-2">
              Powered by{" "}
              <a
                href="https://tazikisolutions.com"
                className="text-white/80 hover:text-white transition-colors"
              >
                Taziki Solutions
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
