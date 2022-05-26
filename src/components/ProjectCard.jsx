function ProjectCard(props) {
    return (
        <div className="bg-bg mx-16 my-12 rounded-lg">
            <p>{props.title}</p>
            <p>{props.description}</p>
            <img src={props.img}/>
        </div>
    )
}

export default ProjectCard;