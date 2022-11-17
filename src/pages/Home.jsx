import { Parallax } from 'react-scroll-parallax';
import '../App.css';
import Contact from '../components/Contact';
import Hero from '../components/Hero'
import NavBar from '../components/NavBar';
import ProjectCard from '../components/ProjectCard';
import Android from '../res/android-icon.png'
import SurgecrossIcon from '../res/surgecross.jpg'
import LabMonitorIcon from '../res/app-logo.png'
import NottinghamIcon from '../res/nottingham_cropped.png'
import AoC from '../res/aoc.png'

function Home(props) {
    return (
        <div className='relative bg-bg overscroll-none'>
            <div className="flex flex-col relative bg-bg">
                <div className="relative flex flex-col sm:h-screen h-min">

                    {/* <div className='py-4 h-8'>
                        <NavBar/>
                    </div> */}

                    <Parallax translateY={[-35, 40]} className='z-0 pointer-events-none'>
                        <Hero />
                    </Parallax>
                    <div className='home-wave-spacer home-wave z-30 sm:absolute sm:inset-x-0  sm:bottom-0 sm:mb-0 pointer-events-none'/>
                </div>

            <div className='bg-local bg-gradient-to-b from-primary to-[#82ac2c] z-50'>
                <div id="work" className='flex flex-col pt-16 3xl:w-1/2 xl:w-2/3 lg:w-5/6 lg:mx-auto'>
                    <p className='text-3xl text-bg mx-auto -mb-4'>Work</p>
                    <ProjectCard
                        title={["Surgecross Software", <br/>,"Full-stack Software Engineer"]}
                        description={[
                            <p className='text-lg'>Apr 2022 - Nov 2022</p>,
                            <p className='my-1'>
                            Developed a cross-platform mobile application and
                            accompanying back-end in a small dedicated team.
                            </p>,
                            <p className='my-1'>
                                Utilised BLoC state management to create reusable,
                                stateful components adhering to design
                                specification.
                            </p>,
                            <p className='my-1'>
                                Designed and developed robust, scalable
                                microservices to provide endpoints for the
                                application.
                            </p>
                            
                        ]}
                        img={SurgecrossIcon}
                        tags={['Flutter', 'Java', 'Kotlin', 'Spring Boot', 'React']}
                    />
                </div>
                <div id="education" className='flex flex-col pt-16 3xl:w-1/2 xl:w-2/3 lg:w-5/6 lg:mx-auto'>
                    <p className='text-3xl text-bg mx-auto -mb-4'>Education</p>
                    <ProjectCard
                        title={[<span className='nowrap'>MSci Computer Science</span>, " at the ", <span className='nowrap'>University of Nottingham</span>]}
                        description={[
                            <p className='text-xl'>2019-2023</p>,
                            <p className='my-1'>Achieved a First class in my dissertation on the Optimisation of Infrastructure Supporting Hybrid Electric Aircraft.</p>,
                            <p className='my-1'>Undertaken a wide range of modules, covering software engineering, security, robotics, networking, and algorithms.</p>,
                            ]}
                        img={NottinghamIcon}
                    />
                </div>
                <div id="projects" className='flex flex-col pt-16 3xl:w-1/2 xl:w-2/3 lg:w-5/6 lg:mx-auto'>
                    <p className='text-3xl text-bg mx-auto -mb-4'>Projects</p>
                    <ProjectCard
                        title="Lab Monitor"

                        description={[
                            <p>As some rooms in UoN's Computer Science department are often booked out for labs, I
                        wanted a way to plan my day so I could avoid certain rooms at busy times.  To address this, I
                        created a cross platform mobile/web app built in Flutter to display current status of labs in
                        the Computer Science department at University of Nottingham. </p>,
                        <br/>,
                        <p>Currently available on <a className= 'text-primary font-semibold' href='https://apps.apple.com/gb/app/lab-monitor/id6443952035'>iOS</a> and <a className='text-primary font-semibold' href='https://play.google.com/store/apps/details?id=com.aidandagnall.lab_monitor'>Android</a>!</p>,
                        ]}
                        
                        img={LabMonitorIcon}
                        img_styling='rounded-3xl'
                        link='https://github.com/aidandagnall/lab_monitor_client'
                        tags={['Flutter', 'Kotlin', 'Ktor', 'JWT', 'Exposed', 'MySQL', 'MongoDB']}
                    />
                    <ProjectCard
                        title='Android Fitness Tracker'
                        description="A native android app developed in Kotlin to track a user's runs, walks and bike rides.
                        Utilises Google Maps API to show the location and route of each exercise, with statistics for easy analysis and a custom
                        tagging system for categorisation. Built to follow MVVM principles using Rooms for storage."
                        img={Android}
                        img_styling='object-scale-down'
                        tags={['Kotlin', 'Android', 'Google Maps API', 'Rooms' ]}
                    />
                    <ProjectCard
                        title='eCommerce Site with Packt'
                        description="With a team of other students, we developed a site for Packt's industry partners to easily browse their catalogue and make orders.
                        Built in Laravel to interact with their existing infrastructure, using JWTs for authentication."
                        img='https://www.packtpub.com/images/logo-new.svg'
                        img_styling='rounded-none'
                        tags={['Laravel', 'Postgres', 'JWT', 'Docker', 'TailwindCSS']}
                    />
                    <ProjectCard
                        title='Advent of Code'
                        description='As a big fan of programming challenges, December is an exciting time of year. Advent
                        of Code is a series of coding challenges released daily during the lead up to Christmas. In 2021, I
                        created a leaderboard to compete against other members of the CS department, which was a great way
                        to create connections across year groups with shared interests.'
                        img={AoC}
                        link='https://github.com/aidandagnall/advent'
                        tags={['C', 'Python', 'Kotlin']}
                    />
                </div>

                <Contact/>
            </div>
            </div>
        </div>
    )
}

export default Home