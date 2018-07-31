import React, { Component } from 'react';
import imgFB from './facebook.png';
import imgInsta from './instagram.png';
import imgTw from './twitter.png';
import './Footer.css';

class Footer extends Component {

  clicar(){
    prompt("Digite seu email para que possamos enchê-lo de SPAM e mailmarketing!");
  }

  render() {
    return (
      <footer>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga officia maiores modi alias perferendis obcaecati a maxime quam. Ut autem cupiditate ipsum sapiente cumque iusto nihil esse suscipit. Quod, quia!</p>
        <div className = "container">  
          <button onClick={this.clicar}>Entre em contato !</button>
          <div className = "social">
            <img className = "social-icon" src={imgFB} alt="Facebook" />
            <img className = "social-icon" src={imgInsta} alt="Instagram" />
            <img className = "social-icon" src={imgTw} alt="Twitter" />
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;