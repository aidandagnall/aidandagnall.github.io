import '../App.css';
import Hero from '../components/Hero'
import NavBar from '../components/NavBar';
import ProjectCard from '../components/ProjectCard';

function Home(props) {
    return (
        <div>
            <div className="relative bg-bg sm:h-screen h-min">
                <NavBar />
                <Hero />
                <div className='home-wave-spacer home-wave z-30 sm:absolute sm:inset-x-0 md:-bottom-10 sm:bottom-0 sm:mb-0'/>
            </div>
            <div className='bg-primary sm:pt-0 pt-8'>
                <div className='flex flex-col pt-16'>
                    <ProjectCard
                        title='Project 1'
                        description='My Sample Project'
                        img='https://source.unsplash.com/random/400x400'
                    />

                    <ProjectCard
                        title='Project 1'
                        description='My Sample Project'
                        img='https://source.unsplash.com/random/400x400'
                    />
                </div>
            </div>
        </div>
    )
}

export default Home