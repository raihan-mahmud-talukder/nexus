import { features } from "../../data/features"

export const Features = () => {
    return (
        <section className="feature">
            <h2>Featured Work</h2>
            <p>
                Explore our latest collection of premium digital products, immersive 3D experiences, and iconic brand identities.
            </p>
            <div>
                {features.map((item, index) => <Feature features={item} key={index} />)}
            </div>
        </section>
    )
}

const Feature = ({ features }) => {
    return (
        <aside>
            <div className="container">
                <img src={features.imgage} alt={features.title} />
            </div>
            <div className="background">
                <div>
                    <h3>{features.title}</h3>
                    <span>{features.caption}</span>
                </div>
                <img src='images/features/arrow.png' />
            </div>
        </aside>
    )
}