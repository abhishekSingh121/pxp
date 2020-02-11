import React from "react"
import ReactPlayer from 'react-player'
import './VideoComponent.css'
import {Row,Col} from 'reactstrap'
import LocalVideo from '../videos/trailer_hd.mp4';
export default class VideoComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
            fileURL: [LocalVideo]
        }
    }
    onSelect = (event, i) => {
        const file = event.target.files[0];
        var fileData = URL.createObjectURL(file);
        const files = this.state.fileURL;
        files[i] = fileData
        this.setState({
            fileURL: files
        })
    }
    renderVideo = (index) => {
        return <div className='header'>
            <div className="wrapper">
                <div className="video">
                    <ReactPlayer
                        url={this.state.fileURL[index]}
                        // url={this.state.fileURL[index]}
                        playing={false}
                        controls={true}
                        width="100%"
                        height="200px"
                    />
                </div>
                {/* <video src={LocalVideo} /> */}
                <div className='text m-4'>
                    <div className='title'>
                        Demo Story 1
                    </div>
                    <span className='description'>
                        In publishing and graphic design, lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a "
                    </span>
                    <div className='discover'>
                        <a href="Discover">
                            Discover...
                        </a>
                    </div>
                    {/* <input type="file" name="video" accept="video/*" label="Select"
                        onChange={file => this.onSelect(file, index)} /> */}
                </div>
            </div>
        </div>
    }
    render() {
        return (
                <Row className='mb-3'>
                    <Col>
                    <div className='box-shadow'>
                    {this.renderVideo(0)}
                    </div>
                    
                    </Col>
                    <Col>
                    <div className='box-shadow'>
                    {this.renderVideo(1)}
                    </div>
                    
                    </Col>
                    <Col>
                    <div className='box-shadow'>
                    {this.renderVideo(2)}
                    </div>
                    </Col>
                </Row>
               

        )
    }
}
