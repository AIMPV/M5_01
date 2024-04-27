const Home = () => {
  return (
    <div className="container text-center my-5">
      <div className="d-flex flex-column mb-5">
        <div className="display-4 mb-3">Bienvenido a <span className="fw-bold">Happy Cake</span></div>
        <div className="fs-4">El lugar de los pasteles felices</div>
      </div>
      <img width={200} src="/assets/imgs/cake.svg"></img>
    </div>
  )
}

export default Home;