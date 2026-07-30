import { GrainOverlay } from '@/components/GrainOverlay'
import { Header } from '@/components/shoaib/Header'
import { Hero } from '@/components/shoaib/Hero'
import { GalleryGrid } from '@/components/shoaib/GalleryGrid'
import { BookingSection } from '@/components/shoaib/BookingSection'
import { LocationMarquee } from '@/components/shoaib/LocationMarquee'
import { Footer } from '@/components/shoaib/Footer'
import { menGalleryData, womenGalleryData } from '@/data/galleryData'

export default function Gallery() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-clip selection:bg-black selection:text-white">
      <GrainOverlay />
      <Header />
      <main>
        <Hero headline="OUR WORK, IN FRAME" />
        <GalleryGrid title="Men's Portfolio" images={menGalleryData} />
        <GalleryGrid title="Women's Portfolio" images={womenGalleryData} />
        <BookingSection />
        <LocationMarquee />
      </main>
      <Footer />
    </div>
  )
}
