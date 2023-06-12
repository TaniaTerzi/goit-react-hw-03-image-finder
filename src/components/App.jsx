// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };

import React, { Component } from "react";
import axios from "axios";

import { ImageGallery } from './ImageGallery/ImageGallery.js'
import css from '../components/styles.css'


const baseURL = "https://pixabay.com/api/";
const key = '35754310-dc9731ff73d92a01be2931609';

export class App extends Component {
  state = {
    images: [],
  };

  async componentDidMount() {
    const response = await axios.get(`${baseURL}?q=cat&page=1&key=${key}&image_type=photo&orientation=horizontal&per_page=12`);
    this.setState({ images: response.data.hits });
  }

  render() {
    const { images } = this.state;
    return (
      <div className={css.App}>
        {images.length > 0 ? <ImageGallery images={images} /> : null}
      </div>
    );
  }
};