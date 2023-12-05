import astronout2 from "/astronout2.png";
import astronout1 from "/astronout.png";
import bg from "/bg.jpg";
import Navbar from "./Navbar";
import "../styles.css";

function Home() {
  return (
    <div
      id="home"
      style={{ backgroundImage: `url(${bg})` }}
      className=" bg-center bg-cover bg-no-repeat h-screen flex flex-col "
    >
      <Navbar />
      <div className="wrapper flex justify-between items-center h-screen w-full px-20 lg:justify-center lg:px-6">
        <div className="content lg:text-center">
          <div className="flex justify-center">
            <h1 className="text-white text-5xl font-bold">
              Hi! Welcome to Saber's <br />
              Digital Universe!
            </h1>
          </div>
        </div>
        <div className="image banner-astronout lg:hidden absolute w-[300px] flex ">
          <img className="w-96 ast-img" src={astronout2} alt="" />
        </div>
        <div className="image banner-astronout1 lg:hidden absolute w-[300px] flex ">
          <img className="w-96 ast-img" src={astronout1} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;
