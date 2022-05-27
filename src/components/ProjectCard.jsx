function ProjectCard(props) {
    return (
        <div className="bg-bg md:mx-32 xl:mx-64 mx-12 my-8 rounded-xl p-12">
            <div className="flex flex-col justify-center">

                <div className="flex sm:flex-row flex-col sm:justify-between justify-center sm:space-x-8 w-full">
                    <div className="flex flex-col space-y-4 my-auto">
                        <p className="text-xl sm:text-left text-center">{props.title}</p>
                        <p className="text-sm sm:text-left text-center">{props.description}</p>
                        <ProjectLink link={props.link} />
                    </div>
                    <div className="flex shrink-0 my-auto justify-center sm:order-last order-first">
                        <img
                            src={props.img}
                            className={props.img_styling + " h-full w-32 rounded-lg sm:order-last order-first mb-4"}
                            alt={props.title + " screenshot"}
                            />
                    </div> 
                </div>
            </div>
        </div>
    )
}

function ProjectLink(props) {
    if (props.link) {
        return (
            <a href={props.link} className="sm:text-left text-center text-primary mt-4">
                View on GitHub
            </a>
        )
    }
}

export default ProjectCard;