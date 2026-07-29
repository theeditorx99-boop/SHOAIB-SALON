import { GrainOverlay } from '@/components/GrainOverlay'
import { Header } from '@/components/shoaib/Header'
import { Hero } from '@/components/shoaib/Hero'
import { DealsGallery } from '@/components/shoaib/DealsGallery'
import { BookingSection } from '@/components/shoaib/BookingSection'
import { LocationMarquee } from '@/components/shoaib/LocationMarquee'
import { Footer } from '@/components/shoaib/Footer'

export default function Deals() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-clip selection:bg-black selection:text-white">
      <GrainOverlay />
      <Header />
      <main>
        <Hero headline="OUR CURRENT DEALS & OFFERS" />
        <DealsGallery />
        <BookingSection />
        <LocationMarquee />
      </main>
      <Footer />
    </div>
  )
}
