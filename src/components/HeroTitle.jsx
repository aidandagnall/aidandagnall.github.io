import '../App.css';
function HeroTitle(props) {
    return(
        <div className='flex sm:flex-row flex-col my-auto justify-contents-start inline-block'>
                <p className="text-6xl min-h-max sm:text-left tracking-wide text-center pr-2 nowrap animate-none">Hi, I'm</p>
                <div className='flex flex-row sm:mx-0 mx-auto nowrap tracking-wide overflow-hidden'>
                    <span className="font-bold text-6xl min-h-max sm:text-left text-center text-secondary">Aidan</span>
                    <div className="text-6xl min-h-max animate-wiggle pl-2 hover:animate-wiggle"> 👋</div>
                </div>
        </div>
    )
}

export default HeroTitle