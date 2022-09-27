import './Project.scss';

export default function Project({title, img, imgName, link, content, date}){

    return(
        <section className='project'>
            <section className='left'>
                <h1>{title}</h1>
                <img src={"./images/" + img + ".jpg"} alt={imgName} />
            </section>
            <section className='right'>
                <p dangerouslySetInnerHTML={{__html:content}}></p>
                <section className="bottom">
                    <p>{date}</p>
                    <p>Lien vers le site Web : <a href={link}>{link}</a></p>
                </section>
            </section>

        </section>


    )
}