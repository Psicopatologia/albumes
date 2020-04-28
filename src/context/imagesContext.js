import React, { Component } from 'react'

const ImagesContext = React.createContext()

class ImagesProvider extends Component {
  state = {
    albums: [],
    openAlbum: [],
    openImage: "",
    isModalOpen:false
  }

  getAlbums = async () => {
    let response = await fetch("https://dwaapi.juvasquez88.now.sh/api/albums");
    if (response.ok) {
      this.setState({
        albums: await response.json()
      })
    } else {
      alert("HTTP-Error: " + response.status);
    }
  }

  getAlbum = async (id) => {
    let response = await fetch(`https://dwaapi.juvasquez88.now.sh/api/photos?albumId=${id}`);
    if (response.ok) {
      this.setState({
        openAlbum: await response.json()
      })
    } else {
      alert("HTTP-Error: " + response.status);
    }
  }

  setOpenImage = (img) => {
    this.setState({
      openImage: img
    })
  }

  render() {
    const { children } = this.props

    // share this.state with its consumers (children)
    return (
      <ImagesContext.Provider value={{
        ...this.state,
        getAlbums: this.getAlbums,
        getAlbum: this.getAlbum,
        setOpenImage: this.setOpenImage
      }}>
        {children}
      </ImagesContext.Provider>
    )
  }
}

const ImagesConsumer = ImagesContext.Consumer

export { ImagesContext, ImagesProvider, ImagesConsumer }