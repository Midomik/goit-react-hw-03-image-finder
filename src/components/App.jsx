import { Component } from 'react';
import axios from 'axios';
import css from './App.module.css';

import { Searchbar } from './Searchbar/Searchbar';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Modal } from './Modal/Modal';
import 'basiclightbox/dist/basicLightbox.min.css';
export class App extends Component {
  state = {
    searchQuery: '',
    posts: null,
    isLoading: false,
    page: 1,
    totalHits: 0,
    isOpenModal: false,
    modalData: null,
    error: null,
  };
  fetchPosts = query => {
    if (this.state.searchQuery !== query) {
      this.setState({ searchQuery: query, page: 1, posts: [] });
    }
  };
  async componentDidUpdate(_, prevState) {
    if (
      prevState.searchQuery !== this.state.searchQuery ||
      prevState.page !== this.state.page
    ) {
      try {
        this.setState({ isLoading: true });
        const API_KEY = '39444105-d76e704d7b0040e55e99f4aff';
        const { data } = await axios.get(
          `https://pixabay.com/api/?q=${this.state.searchQuery}&page=${this.state.page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
        );
        this.setState({
          posts: [...this.state.posts, ...data.hits],
          totalHits: data.totalHits,
        });
      } catch (error) {
        this.setState({ error: error.message });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  loadMore = async () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };
  openModal = dataModal => {
    this.setState({ isOpenModal: true, modalData: dataModal });
  };
  closeModal = () => {
    this.setState({ isOpenModal: false, modalData: null });
  };

  render() {
    let isVisibleButton = false;
    if (
      this.state.totalHits > 12 &&
      Math.ceil(this.state.totalHits / 12) > this.state.page
    ) {
      isVisibleButton = true;
    }
    return (
      <div className={css.main_container}>
        <Searchbar getQuery={this.fetchPosts} />
        <ImageGallery
          data={this.state.posts ? this.state.posts : null}
          openModal={this.openModal}
        />
        {this.state.isLoading && <Loader />}
        {isVisibleButton && <Button load={this.loadMore} />}
        {this.state.isOpenModal && (
          <Modal
            closeModal={this.closeModal}
            modalData={this.state.modalData}
          />
        )}
      </div>
    );
  }
}
