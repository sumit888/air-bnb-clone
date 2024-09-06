import Header from "./components/Header"
import Hero from "./components/Hero"
import Card from "./components/Card.Jsx"
import cardImage from "./assets/katie-zaferes.png"
import weddingImage from "./assets/wedding-photography.png"
import mountainBike from "./assets/mountain-bike.png"

function App(){
  return(
    <>
      <Header />
      <Hero />
      <Card img={cardImage} rating={5.0} reviewCount={6} country="Nepal" title="Life Lessons with Katie Zaferes" price={136} />
      <Card img={weddingImage} rating={4.0} reviewCount={5} country="India" title="Blissful wedding in the Himalayas" price={236} />
      <Card img={mountainBike} rating={4.5} reviewCount={4} country="Switzerland" title="Explore the rocky mountains" price={186} />
    </>
  )
}

export default App

/*
Challenge: Pass props to the Card component and display that data

- img ("katie-zaferes.png")
- rating ("5.0")
- reviewCount (6)
- country (Whatever you want)
- title ("Life Lessons with Katie Zaferes")
- price (136)

*/
