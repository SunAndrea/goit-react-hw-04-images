import React, { Component } from 'react';

import { fetchApi } from 'assets/fetchApi';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
export class App extends Component {
  state = {
    images: [],
    query: null,
    status: 'idle',
    error: null,
    dataLength: null,
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.setState({ status: 'pending' });
      this.state.query === ''
        ? this.setState({ images: [], status: 'resolved', dataLength: null })
        : fetchApi(this.state.query, this.state.page).then(data => {
            this.setState({
              images: [...data.hits],
              status: 'resolved',
              dataLength: data.totalHits,
            });
          });
    } else if (prevState.page !== this.state.page) {
      this.setState({ status: 'pending' });

      this.state.query === ''
        ? this.setState({ images: [], status: 'resolved' })
        : fetchApi(this.state.query, this.state.page).then(data => {
            this.setState({
              images: [...this.state.images, ...data.hits],
              status: 'resolved',
              dataLength: data.totalHits,
            });
          });
    }
  }

  onSubmitHandler = data => {
    this.setState({
      query: data,
      page: 1,
    });
  };

  onLoadMore = () => {
    this.setState(prevState => ({
      status: 'pending',
      page: prevState.page + 1,
    }));
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.onSubmitHandler}></Searchbar>
        {this.state.status === 'pending' && <Loader></Loader>}
        <ImageGallery images={this.state.images}></ImageGallery>
        {this.state.images && this.state.dataLength >= 12 && (
          <Button onClick={this.onLoadMore} />
        )}
      </div>
    );
  }
}
