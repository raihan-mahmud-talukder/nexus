import { Capability } from "./Home/Capability"
import { Feature } from "./Home/Feature"
import { Hero } from "./Home/Hero"

export const Home = () => {
    return (
        <main>
            <Hero />
            <Feature />
            <Capability />
        </main>
    )
}