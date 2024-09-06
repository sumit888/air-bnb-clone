import banner from "../assets/banner-grid.png"

function Hero(){
    return(
        <section class="hero">
            <img src={banner} alt="hero-section" className="hero--photo" />
             <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}

export default Hero