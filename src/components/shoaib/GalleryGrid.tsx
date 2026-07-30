import { motion } from 'framer-motion';
import { GalleryImage } from '@/data/galleryData';

interface GalleryGridProps {
  title: string;
  images: GalleryImage[];
}

export function GalleryGrid({ title, images }: GalleryGridProps) {
  if (!images || images.length === 0) return null;

  return (
    <section className="w-full bg-white text-black py-16 md:py-24">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10">
        <h2 className="font-display font-bold leading-none tracking-tighter text-5xl md:text-7xl uppercase mb-12">
          {title}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {images.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (i % 5) * 0.1 }}
              className="aspect-[4/5] overflow-hidden bg-gray-100 group relative"
            >
              <img 
                src={img.image} 
                alt={img.alt} 
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
