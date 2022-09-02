import Socials from "./Socials"

function Contact(props) {
    return(
        <div id="contact" className="h-96 flex justify-center items-center">

            <div className="bg-bg w-fit mx-auto mb-12 rounded-full px-12 py-4 text-center">
                <p className="text-2xl my-2">Want to get in touch?</p>
                <p className='text-xl'>Contact me via <a className='text-primary' href="mailto:contact@aidandagnall.com">email</a> or on my socials</p>

                <div className="flex flex-row justify-center my-2">
                    <Socials />
                </div>
            </div>
        </div>
    )
}

export default Contact