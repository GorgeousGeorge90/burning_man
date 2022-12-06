import styles from './Main.module.scss';
import pic1 from './../../assets/img/img1.png';
import pic2 from './../../assets/img/img2.png';
import pic3 from './../../assets/img/img3.png';

const Main = ()=> {
    return (<div className={styles.main}>
                <div className={styles.about}>
                    <div className={styles.about_container}>
                        <div className={styles.title}>
                            <h1>About the event</h1>
                        </div>
                        <div className={styles.content}>
                            <article>
                                <h3>Rebuilding the society</h3>
                                <p>
                                    Burning Man is a network of people inspired by the values
                                    reflected in the Ten Principles and united in the pursuit of
                                    a more creative and connected existence in the world.
                                    Throughout the year we work to build Black Rock City, home of the
                                    largest annual Burning Man gathering, and nurture the
                                    distinctive culture emerging from that experience.
                                </p>
                            </article>
                            <article>
                                <h3>This drives us</h3>
                                <p>
                                    Burning Man Project will bring experiences to people in
                                    grand, awe-inspiring and joyful ways that lift the human
                                    spirit, address social problems, and inspire a sense of
                                    culture, community, and civic engagement. Burning Man provides
                                    infrastructural tools and frameworks to support local communities
                                    in applying the Ten Principles through six interconnected program
                                    areas, including Arts, Civic Involvement, Culture, Education,
                                    Philosophical Center, and Social Enterprise.
                                </p>
                            </article>
                        </div>
                        <div className={styles.pictures}>
                            <img src={pic1} alt='pic1'/>
                            <img src={pic2} alt='pic2'/>
                            <img src={pic3} alt='pic3'/>
                        </div>
                    </div>
                </div>
                <footer>
                    <div className={styles.footer_container}>
                        <span>©1989-2020 burning man project</span>
                        <span>WAYUP & Андрей Гаврилов</span>
                    </div>
                </footer>
        </div>)
}

export default Main