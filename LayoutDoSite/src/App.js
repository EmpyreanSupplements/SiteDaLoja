import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from "./Components/NavbarComp";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Footer from "./Components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import findAll from "./produtos";
import { useState, useEffect } from "react";
import CardTeste from "./Card";

function App() {
  const [loading, setLoading] = useState(false);
  const [produtos, setProdutos] = useState([]);

  const fetchData = async () => {
    setLoading(true);

    const res = await findAll();

    setProdutos([...res]);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(produtos);
  return (
    <>
      <NavbarComp />
      <Carousel className="Carousel" slide={false}>
        <Carousel.Item>
          <img className="d-block w-100" src="Banner1.jpg" alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="Banner2.webp"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="Banner3.png" alt="Third slide" />
        </Carousel.Item>
      </Carousel>
      <br></br>
      <div className="container justify-content-center">
        <div className="row col-md-12 justify-content-center ">
          {produtos.slice(0, 4).map((product) => {
            return <CardTeste key={product.id} product={product} />;
          })}
        </div>
      </div>
      <br></br>

      <div className="container justify-content-center">
        <h1 className="promoções">PROMOÇÕES</h1>
      </div>

      <br></br>
      <Carousel className="carrossel">
        <Carousel.Item>
          <img className="d-block w-100" src="slider1.webp" alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="slider2.webp"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="slider3.webp" alt="Third slide" />
        </Carousel.Item>
      </Carousel>
      <br></br>
      <div className="container justify-content-center">
        <div className="row col-md-12 justify-content-center">
          {produtos.slice(4).map((product) => {
            return <CardTeste key={product.id} product={product} />;
          })}
        </div>
      </div>
      <br></br>
      <Carousel className="carrossel">
        <Carousel.Item>
          <img className="d-block w-100" src="banner5.jpg" alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="banner6.jpg" alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="banner7.jpg" alt="Third slide" />
        </Carousel.Item>
      </Carousel>
      <br></br>
      <Footer />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;
