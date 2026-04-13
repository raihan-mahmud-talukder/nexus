export const Hero = () => {
    return (
        <section className="
            py-10 md:py-40 flex flex-col items-center
        ">
            <div className="
                rounded-2xl border border-[#FFFFFF1A]
                flex justify-center items-center gap-2
                bg-[#0E1B2680] py-2 px-4 w-fit
            ">
                <img
                    className='w-4 h-4'
                    src="images/star.png" alt="star" />
                <span className="
                    font-semibold text-sm
                ">Award-Winning Design Agency</span>
            </div><br />
            <h1 className="
                font-extrabold text-center tracking-tighter
                text-5xl lg:text-6xl xl:text-8xl 2xl:text-9xl
                lg:px-28 max-w-[992px]
            ">We Build Iconic Brands</h1><br />
            <p className="
                text-[#8A98A6] text-center text-base lg:text-xl
                w-96 md:w-[600px] px-1 py-2">
                A creative agency designing digital experiences for
                tomorrow. We blend high-end aesthetics with
                powerful strategy to craft legendary digital
                products.
            </p><br />
            <div className="flex gap-4 flex-col md:flex-row py-2 ">
                <button className="
                    bg-[#7C3AED] rounded-2xl
                    flex justify-center items-center gap-1
                    text-white w-48 h-14
                ">
                    <span className="
                        font-semibold
                    ">View Projects</span>
                    <img
                        className="w-5 h-5"
                        src="images/arrow.png" alt="right arrow" />
                </button>
                <button className="
                    rounded-2xl py-4 px-8 bg-[#0E1B2680]
                    text-white w-48 h-14
                ">Our Expertise</button>
            </div>
        </section>
    )
}