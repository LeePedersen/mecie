import React from 'react';
import './css/App.css';
import Header from './components/header';
// import Menu from './components/menu';
import Paintings from './components/paintings';
import About from './components/about';
import Contact from './components/contact';
import ViewImage from './components/viewImage';
import Error404 from './components/Error404';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      useMenu: false,
    }
  }

  // componentDidMount() {
  //   window.addEventListener("resize", this.resize.bind(this));
  //   this.resize();
  // }

  // resize() {
  //   const currentUseMenu = (window.innerWidth <= 768);
  //   if (currentUseMenu !== this.state.useMenu) {
  //     this.setState({useMenu: currentUseMenu});
  //   }
  // }

  // componentWillUnmount() {
  //     window.removeEventListener("resize", this.resize.bind(this));
  // }

  render() {
    return (
      <div>
        <BrowserRouter>
         <Header />
          <Routes>
            <Route exact path='/' element={<Paintings/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='*'  exact={true} element={<Error404/>} />
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
