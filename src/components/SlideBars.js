import React, { Component } from "react";
import Image from './Image';
import { ImagesContext } from '../context/imagesContext';
import SlideBar from "./SlideBar"
import Modal from "./Modal"

export default class SlideBars extends Component {
    state = {
        isModalOpen: false
    }
    render() {
        const { getAlbums, getAlbum, setOpenImage } = this.context;

        return (
            <div className="container-fluid">
                <div className="row vh-100">
                    <SlideBar w="2" d={true}>
                        <button type="button" onClick={getAlbums} className="btn btn-secondary rounded-pill w-75">Albums</button>
                    </SlideBar>
                    <SlideBar w="2">
                        <ImagesContext.Consumer>
                            {
                                context => (
                                    context.albums.map(album => (
                                        <Image outline={context.openAlbum.length > 0 ? album.id === context.openAlbum[0].albumId : false} key={album.id} f={() => getAlbum(album.id)} src={album.url}></Image>
                                    ))
                                )
                            }
                        </ImagesContext.Consumer>
                    </SlideBar>
                    <SlideBar w="8">
                        <ImagesContext.Consumer>
                            {
                                context => (
                                    context.openAlbum.map(img => (
                                        <Image key={img.id} src={img.url} f={() => {setOpenImage(img.url);this.setState({isModalOpen:true})}}></Image>
                                    ))
                                )
                            }
                        </ImagesContext.Consumer>
                    </SlideBar>
                </div>
                <ImagesContext.Consumer>
                    {
                        context => (
                            <Modal url={context.openImage} show={this.state.isModalOpen} f={()=> this.setState({isModalOpen:false})} />
                        )
                    }
                </ImagesContext.Consumer>
            </div >
        );
    }
}

SlideBars.contextType = ImagesContext