import  Header  from '../../components/layout/Header'
import Hero from '../section/Hero'
import  Features  from '../section/Features'
import Pricing from '../section/Pricing'

export default function Home() {
  return (
    <main className="overflow-hidden">  
      <Header/>
      <Hero/>
      <Features/>
      <Pricing/>
    </main>
  )
}