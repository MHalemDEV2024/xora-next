import  Header  from '../../components/layout/Header'
import Hero from '../section/Hero'
import  Features  from '../section/Features'

export default function Home() {
  return (
    <main className="overflow-hidden">  
      <Header/>
      <Hero/>
      <Features/>
    </main>
  )
}