import { motion } from 'framer-motion';

export interface Deal {
  id: string;
  image: string;
  alt: string;
  caption?: string;
  ctaHref?: string;
}

const dealsData: Deal[] = [
  { id: '1', image: '/assets/deals/DEAL 1.jpeg', alt: 'Deal 1', ctaHref: '#booking' },
  { id: '2', image: '/assets/deals/DEAL 2.jpeg', alt: 'Deal 2', ctaHref: '#booking' },
  { id: '3', image: '/assets/deals/DEAL 3.jpeg', alt: 'Deal 3', ctaHref: '#booking' },
  { id: '4', image: '/assets/deals/DEAL 4.jpeg', alt: 'Deal 4', ctaHref: '#booking' },
  { id: '5', image: '/assets/deals/DEAL 5.jpeg', alt: 'Deal 5', ctaHref: '#booking' },
  { id: '6', image: '/assets/deals/DEAL 6.jpeg', alt: 'Deal 6', ctaHref: '#booking' },
  { id: '7', image: '/assets/deals/DEAL 7.jpeg', alt: 'Deal 7', ctaHref: '#booking' },
  { id: '8', image: '/assets/deals/DEAL 8.jpeg', alt: 'Deal 8', ctaHref: '#booking' },
  { id: '9', image: '/assets/deals/BARRAT 1 DAY PACKAGE.jpeg', alt: 'Barrat 1 Day Package', ctaHref: '#booking' },
  { id: '10', image: '/assets/deals/BARRAT DAY TREATMENTS.jpeg', alt: 'Barrat Day Treatments', ctaHref: '#booking' },
  { id: '11', image: '/assets/deals/MEHNDI DAY TREATMENTS.jpeg', alt: 'Mehndi Day Treatments', ctaHref: '#booking' },
  { id: '12', image: '/assets/deals/VALIMA DAY TREATMENTS.jpeg', alt: 'Valima Day Treatments', ctaHref: '#booking' },
  { id: '13', image: '/assets/deals/WEDDING PACKAGE EXCLUSIVE.jpeg', alt: 'Wedding Package Exclusive', ctaHref: '#booking' },
  { id: '14', image: '/assets/deals/WEDDING PACKAGE STANDARD.jpeg', alt: 'Wedding Package Standard', ctaHref: '#booking' },
];

export function DealsGallery() {
  const handleDealClick = (e: React.MouseEvent<HTMLAnchorElement>, href?: string) => {
    if (href === '#booking') {
      e.preventDefault();
      document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full bg-white py-24 md:py-40">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-7xl font-display font-bold uppercase tracking-tighter mb-4">
            Current Deals
          </h2>
          <p className="text-sm md:text-base font-mono uppercase tracking-widest text-gray-500">
            Exclusive Offers & Packages
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-8">
          {dealsData.map((deal, index) => (
            <motion.div
              key={deal.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative"
            >
              <a 
                href={deal.ctaHref || '#'} 
                onClick={(e) => handleDealClick(e, deal.ctaHref)}
                className="block aspect-[4/5] relative overflow-hidden bg-gray-100 cursor-pointer"
              >
                <img
                  src={deal.image}
                  alt={deal.alt}
                  loading={index > 3 ? "lazy" : "eager"}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="bg-white text-black px-6 py-3 text-xs uppercase tracking-widest font-mono font-bold">
                    Book Now
                  </span>
                </div>
              </a>
              {deal.caption && (
                <div className="mt-4 text-sm font-medium tracking-wide uppercase">
                  {deal.caption}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
