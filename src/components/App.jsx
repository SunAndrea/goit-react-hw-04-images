import { useState, useEffect } from 'react';

import { fetchApi } from 'assets/fetchApi';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
export const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState('idle');
  const [images, setImages] = useState([]);
  const [dataLength, setDataLength] = useState(null);

  useEffect(() => {
    setStatus('pending');

    if (query === '') {
      setStatus('resolved');
      setImages([]);
      setDataLength(null);

      return;
    } else if (page === 1) {
      fetchApi(query, page).then(data => {
        setImages(data.hits);
        setStatus('resolved');
        setDataLength(data.totalHits);
      });
    } else if (page !== 1) {
      fetchApi(query, page).then(data => {
        setImages([...images, ...data.hits]);
        setStatus('resolved');
        setDataLength(data.totalHits);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, query]);

  const onSubmitHandler = data => {
    setQuery(data);
    setPage(1);
  };

  const onLoadMore = () => {
    setStatus('pending');
    setPage(prevState => prevState + 1);
  };

  return (
    <>
      <Searchbar onSubmit={onSubmitHandler}></Searchbar>
      <div className="ImageGalleryWrapper">
        {status === 'pending' && <Loader></Loader>}
        <ImageGallery images={images}></ImageGallery>
        {images && dataLength >= 12 && <Button onClick={onLoadMore} />}
      </div>
    </>
  );
};
