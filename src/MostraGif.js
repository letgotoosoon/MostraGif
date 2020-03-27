import React, { Component } from 'react';

class MostraGif extends Component {

  state = {
   showGif: false
  }


    mostraGif = () => {
        this.setState({showGif: true})
    }

    escondeGif = () => {
        this.setState({showGif: false})
    }

  render() {
    return (
      <div>
          
        <button onClick={this.mostraGif}>Mostrar GIF</button>
        {this.state.showGif && <img src="https://img.buzzfeed.com/buzzfeed-static/static/2015-11/2/11/enhanced/webdr09/anigif_enhanced-21208-1446481436-2.gif" onClick={this.escondeGif}  alt="Gif"  />
        }
      </div>
    );
  }
}

export default MostraGif