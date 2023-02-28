import Head from 'next/head';
import { NextPage } from 'next';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import WorkExperience from '@/components/WorkExperience';
import Skills from '@/components/Skills';

const Home: NextPage = () => {

  return (
    <header className='bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white h-screen snap-y 
                    snap-mandatory overflow-scroll z-0'>
      <Head>
        <title>Mike Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Header />

      <section id='hero' className='snap-start'>
        <Hero />

      </section>

      <section id='about' className='snap-center'>
        <About />
      </section>

        <section className='snap-center' id='experience'>
          <WorkExperience />
          
        </section>

      <section id='skills' className='snap-start '>
        <Skills />

      </section>

      <section id='projects' className='snap-start'>
        <Projects
      </section>

      {/* Contact Me */}
      
    </header>
  )
}

export default Home;