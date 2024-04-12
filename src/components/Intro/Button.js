import './Button.css'

export default function Button({link, title}) {
    return (
        <div id="button"> 
            <a href={link} target="_blank">{title}</a>   
        </div>
    )
}