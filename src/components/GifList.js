import React from 'react' 


export default class GifList extends React.Component {
    
    renderGifs = () => {
        
        return this.props.data.map((gif, index) => <li key={index}><img src={gif} /></li>)
    }

    render() {
        
        return( 
            <ul>
                {this.renderGifs()}
            </ul>
        )
    }
}