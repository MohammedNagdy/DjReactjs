import React, { Component } from 'react';
import {Container, Row} from 'react-bootstrap';
import ReactAplayer from 'react-aplayer';
import 'aplayer/dist/APlayer.min.css';
import APlayer from 'aplayer';


import axios from 'axios';
import './Music.css';

class Music extends Component {


	Styles = {
		image : {
			height: 100,
			width: 100
		}
	}

  // event binding example
  onPlay = () => {
  	this.ap.play();
    console.log('on play');
  };
 
  onPause = () => {
  	this.ap.pause();
    console.log('on pause');
  };
 
  // example of access aplayer instance
  onInit = ap => {
    this.ap = ap;
  };
 
  render() {
    const props = {
      theme: '#F57F17',
      type: '.mp3',
      lrcType: 3,
      audio: [
        {
          name: '光るなら',
          artist: 'Goose house',
          url: 'https://moeplayer.b0.upaiyun.com/aplayer/hikarunara.mp3',
          cover: 'https://moeplayer.b0.upaiyun.com/aplayer/hikarunara.jpg',
          theme: '#ebd0c2'
        }
      ]
    };
 
    return (
			<div className="main">
				<Container>
					<Row>
						<div md="13">
							<h3>New Tracks</h3>
						</div>
						</Row>
						<Row>
						<div className="marg" md="4">
							<a href="#" className="album-poster" height="100" width="100">
							<img className="photo" src="https://www.snappysnaps.co.uk/media/wysiwyg/snappy-snaps/photo-printing/photo-printing-online/corporate-2-column-banner-prints-phone-min.jpg"/>
							</a>
							<h4>Albm</h4>
						</div>
						<div className="marg" md="4">
							<a href="#" className="album-poster">
							<img className="photo" src="https://www.snappysnaps.co.uk/media/wysiwyg/snappy-snaps/photo-printing/photo-printing-online/corporate-2-column-banner-prints-phone-min.jpg"/>
							</a>
							<h4>Albm</h4>
						</div>
						<div className="marg" md="4">
							<a href="#" className="album-poster">
							<img className="photo" src="https://www.snappysnaps.co.uk/media/wysiwyg/snappy-snaps/photo-printing/photo-printing-online/corporate-2-column-banner-prints-phone-min.jpg"/>
							</a>
							<h4>Albm</h4>
						</div>
						<div className="marg" md="4">
							<a href="#" className="album-poster">
							<img className="photo" src="https://www.snappysnaps.co.uk/media/wysiwyg/snappy-snaps/photo-printing/photo-printing-online/corporate-2-column-banner-prints-phone-min.jpg"/>
							</a>
							<h4>Albm</h4>
						</div>
						<div className="marg" md="4">
							<a href="#" className="album-poster">
							<img className="photo" src="https://www.snappysnaps.co.uk/media/wysiwyg/snappy-snaps/photo-printing/photo-printing-online/corporate-2-column-banner-prints-phone-min.jpg"/>
							</a>
							<h4>Albm</h4>
						</div>
						<div className="marg" md="4">
							<a href="#" className="album-poster">
							<img className="photo" src="https://www.snappysnaps.co.uk/media/wysiwyg/snappy-snaps/photo-printing/photo-printing-online/corporate-2-column-banner-prints-phone-min.jpg"/>
							</a>
							<h4>Albm</h4>
						</div>
						<div className="marg" md="4">
							<a href="#" className="album-poster">
							<img className="photo" src="https://www.snappysnaps.co.uk/media/wysiwyg/snappy-snaps/photo-printing/photo-printing-online/corporate-2-column-banner-prints-phone-min.jpg"/>
							</a>
							<h4>Albm</h4>
						</div>
						<div className="marg" md="4">
							<a href="#" className="album-poster">
							<img className="photo" src="https://www.snappysnaps.co.uk/media/wysiwyg/snappy-snaps/photo-printing/photo-printing-online/corporate-2-column-banner-prints-phone-min.jpg"/>
							</a>
							<h4>Albm</h4>
						</div>
						<div className="marg" md="4">
							<a href="#" className="album-poster">
							<img className="photo" src="https://www.snappysnaps.co.uk/media/wysiwyg/snappy-snaps/photo-printing/photo-printing-online/corporate-2-column-banner-prints-phone-min.jpg"/>
							</a>
							<h4>Albm</h4>
						</div>
					</Row>
				</Container>

			    <ReactAplayer
			      {...props}
			      onInit={this.onInit}
			      onPlay={this.onPlay}
			      onPause={this.onPause}
			    />
			    {/* example of access aplayer instance API */}
			    <button onClick={() => this.ap.toggle()}>toggle</button>
			</div>	
		)
	}
}


export default Music