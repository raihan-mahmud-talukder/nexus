import { features } from "../../data/features"

export const Features = () => {
    return (
        <section className='
            px-4 py-10 md:py-40 md:px-0
        '>
            <h2 className="
                font-bold tracking-tighter
                text-3xl md:text-5xl text-center">
                Featured Work</h2><br />
            <p className="
                text-lg text-[#8A98A6] m-auto
                max-w-lg mb-5 px-2 text-center">
                Explore our latest collection of premium digital products, immersive 3D experiences, and iconic brand identities.
            </p>
            <br />
            <div className="
                flex flex-col gap-5 items-center
                md:flex-row md:flex-wrap md:justify-center md:items-start">
                {features.map((item, index) => <Feature features={item} key={index} />)}
            </div>
        </section>
    )
}

const Feature = ({ features }) => {
    return (
        <aside className="
            rounded-lg md:rounded-xl border border-[#0F1420]
            relative">
            <img
                className="rounded-lg md:rounded-xl"
                src={features.imgage} alt={features.title} />
            <div className="
                pt-6 pb-5 px-5 w-full
                md:pt-8 md:pb-6 md:px-6
                flex justify-between
                absolute bottom-1">
                <div className="
                    flex flex-col gap-1">
                    <h3 className="
                        font-semibold text-xl
                    ">{features.title}</h3>
                    <span className="
                        text-sm text-[#8A98A6]
                    ">{features.caption}</span>
                </div>
                <img
                    className="w-12 h-12 rounded-3xl"
                    src='images/features/arrow.png' alt='arrow' />
            </div>
        </aside>
    )
}