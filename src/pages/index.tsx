import  Header  from '../../components/layout/Header'
import Hero from '../section/Hero'
import  Features  from '../section/Features'
import Pricing from '../section/Pricing'
import Faq from '../section/Faq'
import Testimonials from '../section/Testimonials'
import Download from '../section/Download'
import Footer from '../../components/layout/Footer'

export default function Home() {
  return (
    <main className="overflow-hidden">  
      <Header/>
      <Hero/>
      <Features/>
      <Pricing/>
      <Faq/>
      <Testimonials/>
      <Download/>
      <Footer/>
    </main>
  )
}