export default function Project({image, title, description}) {
    return (
        <div>
            <img src={image} alt="" height="200vh" width="350vh"></img>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}

// goal: create project grid 