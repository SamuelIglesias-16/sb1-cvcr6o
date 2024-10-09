import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CookieCard from './components/CookieCard';
import CookieModal from './components/CookieModal';

interface Cookie {
  id: number;
  name: string;
  image: string;
}

const featuredCookies: Cookie[] = [
  { id: 1, name: 'Caramel Chocolate Chip Cookie', image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
  { id: 2, name: 'Chocolate Chip Cookie', image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
  { id: 3, name: 'Coffee Chocolate Chip Cookie', image: 'https://images.unsplash.com/photo-1606312619070-d48b4c652a52?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
  { id: 4, name: 'Double Chocolate Chip Cookie', image: 'https://images.unsplash.com/photo-1619149651177-b09092806f1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
];

function App() {
  const [selectedCookie, setSelectedCookie] = useState<Cookie | null>(null);

  const openModal = (cookie: Cookie) => {
    setSelectedCookie(cookie);
  };

  const closeModal = () => {
    setSelectedCookie(null);
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const handleIntersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    const elements = document.querySelectorAll('.scroll-transition');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <Header />
      <main className="flex-grow">
        <section className="relative h-screen flex items-center justify-center">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')" }}></div>
          <div className="absolute inset-0 bg-brown opacity-30"></div>
          <div className="relative z-10 text-center text-cream">
            <h1 className="font-amatic text-7xl mb-6 animate-fadeIn">Welcome to Nordic Cookie Treats</h1>
            <p className="text-2xl mb-10 font-quicksand animate-slideUp">Indulge in the finest Scandinavian cookies</p>
            <a href="#catalog" className="btn btn-primary text-xl animate-bounce">Shop All</a>
          </div>
        </section>

        <section id="catalog" className="py-20 bg-cream">
          <div className="container mx-auto px-6">
            <h2 className="font-amatic section-title text-brown scroll-transition">Our Featured Cookies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              {featuredCookies.map((cookie, index) => (
                <div key={cookie.id} className={`scroll-transition delay-${index}`}>
                  <CookieCard {...cookie} onClick={() => openModal(cookie)} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="ingredients" className="py-20 bg-brown text-cream">
          <div className="container mx-auto px-6">
            <h2 className="font-amatic section-title scroll-transition">Our Premium Ingredients</h2>
            <p className="text-center max-w-2xl mx-auto text-lg scroll-transition">We use only the finest, locally-sourced ingredients to create our delicious cookies. From organic flour to premium chocolate, every component is carefully selected to ensure the best taste and quality.</p>
          </div>
        </section>

        <section id="mission" className="py-20 bg-cream">
          <div className="container mx-auto px-6">
            <h2 className="font-amatic section-title text-brown scroll-transition">Our Mission</h2>
            <p className="text-center max-w-2xl mx-auto text-lg scroll-transition">At Nordic Cookie Treats, our mission is to bring the warmth and comfort of Scandinavian baking to homes around the world. We strive to create cookies that not only taste delicious but also evoke the cozy feeling of 'hygge' with every bite.</p>
          </div>
        </section>
      </main>
      <Footer />
      {selectedCookie && (
        <CookieModal cookie={selectedCookie} onClose={closeModal} />
      )}
    </div>
  );
}

export default App;