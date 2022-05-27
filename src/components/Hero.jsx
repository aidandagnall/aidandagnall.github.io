import '../App.css';
import Socials from "./Socials"
import profile from "../res/ProfilePicture.JPG"
import HeroTitle from './HeroTitle';
import HeroSubtitle from './HeroSubtitle';
function Hero(props) {
    return(
        <div className="flex justify-center">
            <div className="w-4/5 flex sm:flex-row flex-col justify-evenly sm:h-screen h-min sm:space-x-24 sm:order-first order-last sm:pb-72">
                <div className="flex flex-col justify-around self-center space-y-4 sm:ml-8 ml-8">
                    <HeroTitle/>
                    <HeroSubtitle/>
                    <Socials />
                </div>
                <div className="flex rounded-full sm:h-auto justify-around self-center aspect-square border-solid border-2 border-black sm:order-last order-first my-4 sm:mx-8 mb-8">
                    <img className="rounded-full aspect-square sm:max-w-xs max-w-[16rem] sm:w-auto w-auto max-w-4 justify-center self-center object-contain drop-shadow-lg align-middle border-none" src={profile} alt="Aidan" />
                </div>
            </div>
        </div>
    )
}

export default Hero