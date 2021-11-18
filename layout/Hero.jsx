
const Hero = () => {
  return (
    <section className="hero">

      <div className="bg-video">
        <video className="bg-video__content" autoPlay muted loop>
        <source src='/assets/videos/HeroMediumBitRate.mp4' type='video/mp4' />
        Your browser is not supported
        </video>
      </div>
      <div className="u-center-text hero__header">
        <h1 className="heading">Digital transformation is a game changer <br></br>We help you Adapt</h1>
      </div>
      <div className="hero__btn">
        <button className="btn">
          get in touch
        </button>
      </div>
    </section>
  )
}

export default Hero
