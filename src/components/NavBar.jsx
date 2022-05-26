import '../App.css';

function NavBar(props) {
    return (
        <div className="flex flex-row justify-end space-x-16 py-8 px-16">
            <a href='#projects'>Projects</a>
            <a href='#contact'>Contact</a>
        </div>
    )
}

export default NavBar