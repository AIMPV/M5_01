import NotFoundImg from '/assets/imgs/notfound.jpg';

const NotFound = () => {
  return (
    <div className="container text-center my-5">
      <img className="w-sm-100" src={NotFoundImg}></img>
    </div>
  )
}

export default NotFound;