import PropTypes from "prop-types";

import Header from "components/common/header";
import Footer from "components/common/footer";

import "styles/globals.css";

const App = ({ Component, pageProps }) => {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
};

App.propTypes = {
  pageProps: PropTypes.object,
  Component: PropTypes.func,
};

export default App;
