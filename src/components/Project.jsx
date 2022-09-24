import './Project.scss';

export default function Project({title, img, imgName, link, content}){

    return(
        <section className='project'>
            <section className='left'>
                <h1>{title}</h1>
                <img src={"./images/" + img + ".jpg"} alt={imgName} />
            </section>
            <section className='right'>
                <p>{content}</p>
                <ul className='liList'>

                </ul>
                <a href={link}>{link}</a>
            </section>

        </section>


    )
}