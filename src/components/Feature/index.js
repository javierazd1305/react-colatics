import React, { Component } from 'react'
import Navbar from "./Navbar"
import axios from "axios"



export class index extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: [],
            errorMsg: ''
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log(response);
                this.setState({ posts: response.data })
            })
            .catch(error => {
                console.log(error);
                this.setState({ errorMsg: "Error retreiving data" })
            })
    }

    render() {
        const { posts, errorMsg } = this.state
        return (
            <div>
                <Navbar />
                <h1>HELLO 2</h1>
                <div className="second-page-header">
                    {
                        posts.length ?
                            posts.map(post => <div key={post.id}> {post.title} </div>) :
                            null
                    }
                    {errorMsg ? <div className="second-page-header">{errorMsg} </div> : null}
                </div>
            </div>
        )
    }
}

export default index
