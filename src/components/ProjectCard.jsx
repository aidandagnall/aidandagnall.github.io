function ProjectCard(props) {
    return (
        <div className="bg-bg md:mx-32 sm:mx-12 mx-6 my-6 rounded-xl md:p-12 p-8">
            <div className="flex flex-col justify-center">

                <div className="flex sm:flex-row flex-col sm:justify-between justify-center sm:space-x-8 w-full">
                    <div className="flex flex-col space-y-4 my-auto">
                        <p className="text-xl sm:text-left text-center">{props.title}</p>
                        <p className="text-sm sm:text-left text-center">{props.description}</p>
                    </div>
                    <div className="flex shrink-0 my-auto justify-center sm:order-last order-first">
                        <img
                            src={props.img}
                            className={props.img_styling + " h-full w-32 rounded-lg sm:order-last order-first mb-4"}
                            alt={props.title + " screenshot"}
                            />
                    </div> 
                </div>
                <ProjectTags tags={props.tags} />
                <ProjectLink link={props.link} />
            </div>
        </div>
    )
}

function ProjectTags(props) {
    if (props.tags) {
        return <div className="flex flex-row flex-wrap mt-1 justify-center sm:justify-start">
            {props.tags.map((tag) =>
                <div class="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-medium rounded-full mx-1 my-2">
                    <p>
                        {tag}
                    </p>
                </div>
            )}
        </div>
    }
}

function ProjectLink(props) {
    if (props.link) {
        return (
            <a href={props.link} className="sm:text-left text-center text-primary mt-2">
                View on GitHub
            </a>
        )
    }
}

export default ProjectCard;