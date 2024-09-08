import Header from "./components/Header"
import Hero from "./components/Hero"
import Card from "./components/Card.Jsx"
import cardImage from "./assets/images/katie-zaferes.png"
import weddingImage from "./assets/images/wedding-photography.png"
import mountainBike from "./assets/images/mountain-bike.png"
import data from "./components/data.js"



function App(){
  // const dataSet = data.map(function(joke){
  //   return <Card 
  //     img={props.img}
  //     rating={props.rating}
  //     reviewCount={props.reviewCount}
  //     location={props.location}
  //     title={props.title}
  //     price={props.price}
  //   />
  // })
  return(
    <>
      <Header />
      <Hero />
      

      <Card img="katie-zaferes.png" rating={5.0} reviewCount={6} location="Nepal" title="Life Lessons with Katie Zaferes" price={136} />
      <Card img={weddingImage} rating={4.0} reviewCount={5} location="India" title="Blissful wedding in the Himalayas" price={236} />
      <Card img={mountainBike} rating={4.5} reviewCount={4} location="Switzerland" title="Explore the rocky mountains" price={186} /> */
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
