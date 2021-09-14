import React from 'react' 

import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'
export default class GifListContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            gifs: []
        }
    }

    updateState = (data) => {
        this.setState({
            gifs: data
        }, () => console.log(this.state))
    }
    getData = (query) => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(response => response.json())
        .then(data => {
            
            let gifSet = data.data.slice(0, 3).map((gif, index) => {
                if (index <= 2)  return (gif.images.original.url)
            })
            console.log(gifSet)
            this.updateState(gifSet)
        })
    }
    render() {
        
        return (
            <div>
                <GifSearch callback={this.getData}/>
                <GifList data={this.state.gifs} />
                
            </div>
            )
    }
}