import { Dna } from 'react-loader-spinner';
import { createPortal } from 'react-dom';

const loaderRoot = document.querySelector('#for-loader');

const Loader = () => {
  return createPortal(
    <div className="OverlayLoader">
      <div className="Modal">
        <Dna
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      </div>
    </div>,
    loaderRoot
  );
};

export default Loader;
