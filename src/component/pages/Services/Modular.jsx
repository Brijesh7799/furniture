import Header from "../Header";
import Footer from "../Footer";
import './Modular.scss';

const Modular = () => {
  return (
    <>
      <Header />
      <Product /> {/* Make sure you import Product if used */}
      <div className="content">
        <h2>Modular Kitchen</h2>
      </div>
      <Footer />
    </>
  );
};

export default Modular;
