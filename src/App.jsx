import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Home } from "./components/Home"

export const App = () => {
  return (
    <main className="
      lg:py-0 lg:px-20
    ">
      <Header />
      <Home /> 
      <Footer />
    </main>
    )
}
