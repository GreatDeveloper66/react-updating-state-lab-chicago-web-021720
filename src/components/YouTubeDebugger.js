// Code YouTubeDebugger Component Here
import React from 'react';
export default class YouTubeDebugger extends React.Component {
  constructor(props){
    super();
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }
  handleResolution = () => {
    this.setState({
      settings: {
      ...this.state.settings,
      video: {
        ...this.state.settings.video,
        resolution: '720p'
      }
    }
  })
  }
  handleBitRate = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

  render(){
    return <div>
      <button className="bitrate" onClick={this.handleBitRate}>Change Bitrate</button>
      <button className="resolution" onClick={this.handleResolution}>Change Resolution</button>
    </div>


  }
}
