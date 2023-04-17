import './ProjectCard.css'
export default function ProjectCard(props) {
    return (

        <div className="projectCard">
            <a href={props.link} target='_blank' rel='noreferrer'>
            <img src={props.img} draggable= "false" className='pointer card_style' alt="" />
            </a>
        </div>
    )
}