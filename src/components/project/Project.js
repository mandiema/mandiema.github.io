export default function Project({image, title, description}) {
    return (
        <section>
            <img src={image} alt="" height="200vh" width="350vh"></img>
            <h2>{title}</h2>
            <p>{description}</p>
        </section>
    )
}

// goal: create project grid 