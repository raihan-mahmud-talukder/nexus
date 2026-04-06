import { capabilities } from "../../data/capabilities"

export const Capabilities = () => {
    return (
        <section className="capability">
            <h2>Our Capabilities</h2>
            <p>
                We are a multi-disciplinary studio leveraging future- ready technologies to craft industry-leading platforms.
            </p>
            <div>
            {capabilities.map((item, index) => {
                return <Capability key={index} capability={item} />
            })}
            </div>
        </section>
    )
}

const Capability = ({capability}) => {
    return (
        <article>
            <img src={capability.icon} alt={capability.title} />
            <h4>{capability.title}</h4>
            <p>{ capability.description}</p>
        </article>
)
}