import Head from 'next/head'
import Link from 'next/link'
import Contact from '../components/Contact'
import Hero from '../components/Hero'
import Nav from '../components/Nav'
import Projects from '../components/Projects'
import Stacks from '../components/Stacks'
import {FiTwitter, FiLinkedin, FiGithub} from 'react-icons/fi';

export default function Home() {
  return (
    <div>
      <Head>
        <title>ife.eth</title>
        <meta name="description" content="Monanu Ifenna a Fullstack Software & Blockchain  Engineer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Nav />
        <Hero />
        <Projects />
        <Stacks />
        <Contact />
        <div className='w-full px-8 py-6 mt-4 flex items-center bg-[#2D3748]'>
             <div className='max-w-[50%] mx-auto flex justify-around'> 
                <Link href='https://twitter.com/pascalmonanu'>
                  <a target='_blank'>
                    <FiTwitter className='text-white text-2xl mr-8' />
                  </a>
                </Link>
                <Link href='https://www.linkedin.com/in/ifenna-monanu-449898198/'>
                  <a target='_blank'>
                    <FiLinkedin className='text-white text-2xl' />
                  </a>
                </Link>
                <Link href='https://github.com/Ifenna-Pascal'>
                  <a target='_blank'>
                    <FiGithub className='text-white text-2xl' />
                  </a>
                </Link>
             </div>
        </div>
      </main>
    </div>
  )
}
