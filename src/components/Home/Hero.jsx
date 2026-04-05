export const Hero = () => {
    return (
        <section className="hero">
            <div className="caption">
                <img src="images/star.png" alt="star" />
                <span>Award-Winning Design Agency</span>
            </div>
            <h1>We Build Iconic Brands</h1>
            <p className="info">A creative agency designing digital experiences for
                tomorrow. We blend high-end aesthetics with
                powerful strategy to craft legendary digital
                products.
            </p>
            <div className="button">
                <button className="project">
                    <span>View Projects</span>
                    <img src="images/arrow.png" alt="right arrow" />
                </button>
                <button className="expert">Our Expertise</button>
            </div>
        </section>
    )
}