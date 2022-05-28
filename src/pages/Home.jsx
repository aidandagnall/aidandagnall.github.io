import { Parallax } from 'react-scroll-parallax';
import '../App.css';
import Contact from '../components/Contact';
import Hero from '../components/Hero'
import NavBar from '../components/NavBar';
import ProjectCard from '../components/ProjectCard';
import FitnessAppScreen from '../res/fitness_app_screen.png'
import AoC from '../res/aoc.png'

function Home(props) {
    return (
        <div className='relative bg-bg'>
            <div className="flex flex-col relative bg-bg">
                <div className="relative flex flex-col sm:h-screen h-min">

                    <NavBar className='bg-bg absolute z-30 top-0 inset-x-0'/>
                    <Parallax translateY={[-35, 40]} className='z-0 pointer-events-none'>
                        <Hero />
                    </Parallax>
                    <div className='home-wave-spacer home-wave z-30 sm:absolute sm:inset-x-0  sm:bottom-0 sm:mb-0 pointer-events-none'/>
                </div>

            <div className='bg-local bg-gradient-to-b from-primary to-[#82ac2c] z-50'>
                <div id="projects" className='flex flex-col pt-16 3xl:w-1/2 xl:w-2/3 lg:w-5/6 lg:mx-auto'>
                    <p className='text-3xl text-bg mx-auto -mb-4'>Projects</p>
                    <ProjectCard
                        title='Android Fitness Tracker'
                        description="A native android app developed in Kotlin to track a user's runs, walks and bike rides.
                        Utilises Google Maps API to show the location and route of each exercise, with statistics for easy analysis and a custom
                        tagging system for categorisation. Built to follow MVVM principles using Rooms for storage."
                        img={FitnessAppScreen}
                    />
                    <ProjectCard
                        title='eCommerce Site with Packt'
                        description="With a team of students, we developed a site for Packt's industry partners to easily browse their catalogue and make orders.
                        Built in Laravel to interact with their existing infrastructure."
                        img='https://www.packtpub.com/media/logo/stores/1/logo.png'
                        img_styling='rounded-none'
                    />
                    <ProjectCard
                        title='Advent of Code'
                        description='As a big fan of programming challenges, December is an exciting time of year. Advent
                        of Code is a series of coding challenges released daily during the lead up to Christmas. I have attempted
                        these in previous years in C, Python and Kotlin.'
                        img={AoC}
                        link='https://github.com/aidandagnall/advent'
                    />
                </div>

                <Contact/>
            </div>
            </div>
        </div>
    )
}

export default Home