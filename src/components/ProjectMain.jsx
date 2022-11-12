import './ProjectMain.scss';

export default function ProjectMain({title, img, imgName, link, content, date}){
    return(
        <section className='project-bg'>
                <img src={"./images/" + img + ".jpg"} alt={imgName} />
                <h1>{title}</h1>
        </section>

    )
}