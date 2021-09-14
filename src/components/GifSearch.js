import React from 'react' 


export default class GifSearch extends React.Component {
    constructor() {
        super()
        this.state = {
            value: ''
        }
    }

    updateState = (e) => {
        this.setState({
            value: e.target.value
        })
    }
    render() {

        return(
            <div>
                <form onSubmit={(e) => {
                    e.preventDefault()
                    this.setState({value: ''})
                    this.props.callback(this.state.value)}}>
                    <input onChange={(e) => this.updateState(e)}type='text' value={this.state.value}></input>
                </form>
            </div>
        )
    }
}