import '../App.css';
function HeroTitle(props) {
    return(
        <div className='flex flex-row'>
            <p className="text-6xl inline-block min-h-max md:text-left text-center flex-1">Hi, I'm <span className="font-bold nowrap">Aidan 👋 </span></p>
        </div>
    )
}

export default HeroTitle