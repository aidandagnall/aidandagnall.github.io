import { Parallax } from 'react-scroll-parallax';
import '../App.css';
import Contact from '../components/Contact';
import Hero from '../components/Hero'
import NavBar from '../components/NavBar';
import ProjectCard from '../components/ProjectCard';
import FitnessAppScreen from '../res/fitness_app_screen.png'
import SurgecrossIcon from '../res/surgecross.jpg'
import LabMonitorIcon from '../res/app-logo.png'
import NottinghamIcon from '../res/nottingham_cropped.png'
import AoC from '../res/aoc.png'

function Home(props) {
    return (
        <div className='relative bg-bg overscroll-none'>
            <div className="flex flex-col relative bg-bg">
                <div className="relative flex flex-col sm:h-screen h-min">

                    <NavBar className='bg-bg absolute z-30 top-0 inset-x-0'/>
                    <Parallax translateY={[-35, 40]} className='z-0 pointer-events-none'>
                        <Hero />
                    </Parallax>
                    <div className='home-wave-spacer home-wave z-30 sm:absolute sm:inset-x-0  sm:bottom-0 sm:mb-0 pointer-events-none'/>
                </div>

            <div className='bg-local bg-gradient-to-b from-primary to-[#82ac2c] z-50'>
                <div id="work" className='flex flex-col pt-16 3xl:w-1/2 xl:w-2/3 lg:w-5/6 lg:mx-auto'>
                    <p className='text-3xl text-bg mx-auto -mb-4'>Work</p>
                    <ProjectCard
                        title="Surgecross Software"
                        description={["Full-stack software engineer helping to create a cross-platform mobile application and accompanying back-end in a small dedicated team, currently working on ", <a className='text-primary font-semibold' href='https://gardia-app.com'>Gardia</a>, ", a gardening platform to help gardeners keep track of their plants and share their results."]}
                        img={SurgecrossIcon}
                    />
                </div>
                <div id="education" className='flex flex-col pt-16 3xl:w-1/2 xl:w-2/3 lg:w-5/6 lg:mx-auto'>
                    <p className='text-3xl text-bg mx-auto -mb-4'>Education</p>
                    <ProjectCard
                        title={[<span className='nowrap'>MSci Computer Science</span>, " at the ", <span className='nowrap'>University of Nottingham</span>]}
                        description={[
                            <p className='text-xl'>2019-2023</p>,
                            <p className='my-1'>Currently studying for my Integrated Masters</p>,
                            <p className='my-1'>Completed my dissertation on the Optimisation of the Infrastructure supporting Hybrid Electric Aircraft</p>,
                            ]}
                        img={NottinghamIcon}
                    />
                </div>
                <div id="projects" className='flex flex-col pt-16 3xl:w-1/2 xl:w-2/3 lg:w-5/6 lg:mx-auto'>
                    <p className='text-3xl text-bg mx-auto -mb-4'>Projects</p>
                    <ProjectCard
                        title="Lab Monitor"
                        description="As some rooms in UoN's Computer Science department are often booked out for labs, I wanted a way to plan my day so I could avoid certain rooms at busy times.
                        To address this, I created a cross platform mobile/web app built in Flutter to display current status of labs in
                        the Computer Science department at University of Nottingham. Back-end is built in Ktor using
                        MongoDB for storage. Shows the schedule for each room with an expected business level and allows users
                        to submit live reports to inform others."
                        img={LabMonitorIcon}
                        img_styling='rounded-3xl'
                        link='https://github.com/aidandagnall/lab_monitor_client'
                    />
                    <ProjectCard
                        title='Android Fitness Tracker'
                        description="A native android app developed in Kotlin to track a user's runs, walks and bike rides.
                        Utilises Google Maps API to show the location and route of each exercise, with statistics for easy analysis and a custom
                        tagging system for categorisation. Built to follow MVVM principles using Rooms for storage."
                        img={FitnessAppScreen}
                        img_styling='object-scale-down'
                    />
                    <ProjectCard
                        title='eCommerce Site with Packt'
                        description="With a team of other students, we developed a site for Packt's industry partners to easily browse their catalogue and make orders.
                        Built in Laravel to interact with their existing infrastructure, using JWTs for authentication."
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