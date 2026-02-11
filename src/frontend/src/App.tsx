import { useEffect } from 'react';
import { Phone, MapPin, Book, Pencil, Ruler, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const products = [
    {
      icon: Book,
      title: 'Notebooks & Journals',
      description: 'Premium quality notebooks, diaries, and journals for all your writing needs.',
    },
    {
      icon: Pencil,
      title: 'Writing Instruments',
      description: 'Pens, pencils, markers, and highlighters from trusted brands.',
    },
    {
      icon: Ruler,
      title: 'School Supplies',
      description: 'Complete range of school and office stationery essentials.',
    },
    {
      icon: Palette,
      title: 'Art Supplies',
      description: 'Colors, brushes, and art materials for creative minds.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/assets/generated/subrin-logo.dim_512x512.png"
              alt="Subrin Kitab Pasal Logo"
              className="h-10 w-10 object-contain"
            />
            <span className="font-serif text-xl font-bold text-primary">Subrin Kitab Pasal</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection('home')}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('products')}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('location')}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Location
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Contact
            </button>
          </nav>
          <a href="tel:9888888888" className="hidden md:block">
            <Button variant="default" size="sm" className="gap-2">
              <Phone className="h-4 w-4" />
              Call Us
            </Button>
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section id="home" className="relative overflow-hidden bg-gradient-to-b from-accent/30 to-background py-16 md:py-24">
          <div className="container">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-primary">
                    Subrin Kitab Pasal
                  </h1>
                  <p className="text-xl text-muted-foreground md:text-2xl">
                    Your trusted stationery shop in Makalbari, Kathmandu
                  </p>
                </div>
                <p className="text-base text-muted-foreground md:text-lg max-w-xl">
                  Discover a wide range of quality stationery, books, and office supplies. From students to professionals, we have everything you need to write, create, and succeed.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    onClick={() => scrollToSection('products')}
                    className="gap-2"
                  >
                    Explore Products
                  </Button>
                  <a href="tel:9888888888">
                    <Button size="lg" variant="outline" className="gap-2 w-full sm:w-auto">
                      <Phone className="h-5 w-5" />
                      9888888888
                    </Button>
                  </a>
                </div>
              </div>
              <div className="relative aspect-video lg:aspect-auto lg:h-[400px] rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="/assets/generated/subrin-hero.dim_1600x700.png"
                  alt="Subrin Kitab Pasal Shop"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="py-16 md:py-24 bg-background">
          <div className="container">
            <div className="text-center space-y-4 mb-12">
              <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl text-primary">
                Our Products
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                We offer a comprehensive selection of stationery and supplies for all your needs
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {products.map((product, index) => (
                <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <product.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{product.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{product.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24 bg-accent/20">
          <div className="container">
            <div className="text-center space-y-4 mb-12">
              <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl text-primary">
                About Us
              </h2>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                <div className="space-y-4 text-muted-foreground text-lg">
                  <p>
                    Founded by <span className="font-semibold text-foreground">Subrin Shrestha</span>, Subrin Kitab Pasal has been serving the Kathmandu community with quality stationery products for years. We pride ourselves on offering a carefully curated selection of notebooks, writing instruments, school supplies, and art materials.
                  </p>
                  <p>
                    Whether you're a student preparing for exams, an artist seeking quality materials, or a professional looking for office supplies, we have everything you need under one roof. Our knowledgeable staff is always ready to help you find exactly what you're looking for.
                  </p>
                  <p className="font-medium text-foreground">
                    Visit us today and experience the difference of shopping at a store that truly cares about quality and customer service.
                  </p>
                </div>
                <div className="flex flex-col items-center gap-3 pt-4">
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 border-background shadow-lg">
                    <img
                      src="/assets/generated/founder-photo.dim_600x800.png"
                      alt="Founder of Subrin Kitab Pasal"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <p className="font-serif text-lg font-bold text-primary">Subrin Shrestha</p>
                    <p className="text-sm text-muted-foreground">Founder</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section id="location" className="py-16 md:py-24 bg-background">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <div className="text-center space-y-4 mb-12">
                <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl text-primary">
                  Visit Our Store
                </h2>
                <p className="text-muted-foreground text-lg">
                  Find us in Makalbari, Kathmandu
                </p>
              </div>
              <Card className="border-2">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-xl">Subrin Kitab Pasal</h3>
                      <p className="text-muted-foreground text-lg">
                        Makalbari, Kathmandu
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Conveniently located and easily accessible
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24 bg-accent/20">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <div className="text-center space-y-4 mb-12">
                <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl text-primary">
                  Get In Touch
                </h2>
                <p className="text-muted-foreground text-lg">
                  Have questions? We're here to help!
                </p>
              </div>
              <Card className="border-2">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-3 flex-1">
                      <h3 className="font-semibold text-xl">Call Us</h3>
                      <a
                        href="tel:9888888888"
                        className="text-2xl font-bold text-primary hover:underline block"
                      >
                        9888888888
                      </a>
                      <p className="text-sm text-muted-foreground">
                        Our friendly staff is ready to assist you with any inquiries about our products and services.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/30">
        <div className="container py-8 md:py-12">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <img
                  src="/assets/generated/subrin-logo.dim_512x512.png"
                  alt="Subrin Kitab Pasal Logo"
                  className="h-8 w-8 object-contain"
                />
                <span className="font-serif text-lg font-bold text-primary">Subrin Kitab Pasal</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Your trusted stationery shop in Makalbari, Kathmandu
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold">Location</h4>
              <p className="text-sm text-muted-foreground flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Makalbari, Kathmandu
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold">Contact</h4>
              <a
                href="tel:9888888888"
                className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-2 transition-colors"
              >
                <Phone className="h-4 w-4" />
                9888888888
              </a>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
            <p>
              © {new Date().getFullYear()}. Built with <span className="text-destructive">♥</span> using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium hover:underline"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
