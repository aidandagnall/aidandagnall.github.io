import '../App.css';

function NavBar(props) {
    return (
        <div className="flex flex-row sm:justify-end justify-center space-evenly space-x-16 py-8 px-16">
            <a href='#work'>Work</a>
            <a href='#education'>Education</a>
            <a href='#projects'>Projects</a>
            <a href='#contact'>Contact</a>
        </div>
    )
}

export default NavBar