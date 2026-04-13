import { capabilities } from "../../data/capabilities"

export const Capabilities = () => {
    return (
        <section className="
            px-4 py-20 md:py-40
        ">
            <h2 className="
                text-3xl md:5xl
                font-bold tracking-tighter
                text-center align-middle
            ">Our Capabilities</h2>
            <br />
            <p className="
                max-w-lg px-2 m-auto w-screen
                text-lg font-normal text-center text-[#8A98A6]
            ">
                We are a multi-disciplinary studio leveraging future- ready technologies to craft industry-leading platforms.
            </p>
            <br /><br />
            <div className="
                flex flex-col gap-6 sm: items-center
                md:flex-row md:flex-wrap md:justify-center
            ">
            {capabilities.map((item, index) => {
                return <Capability key={index} capability={item} />
            })}
            </div>
        </section>
    )
}

const Capability = ({capability}) => {
    return (
        <article className="
            pt-5 px-5 pb-4
            md:pt-8 md:px-8 md:pb-10
            flex flex-col items-start gap-6
            rounded-lg md:rounded-xl
            border border-white border-opacity-10
            backdrop-blur-xl w-96 lg:h-72
        ">
            <img className="
                w-16 h-16 rounded-lg
            " src={capability.icon} alt={capability.title} />
            <h4 className="
                font-semibold text-2xl
            ">{capability.title}</h4>
            <p className="
                text-base font-normal text-[#8a98a6]
            ">{capability.description}</p>
        </article>
)
}