import React from 'react';
import axios from 'axios';
import PhotoDetail from './photoDetail';
class Lifecycle extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
           photos: []
        }
    }

    componentWillMount() {
        this.getAllPhotos()
    }

    componentDidMount() {
        console.log(this.props)
    }

    getAllPhotos = () => {
        axios.get("https://jsonplaceholder.typicode.com/photos")
            .then(response => {
                console.log(response)
                console.log(response.data)
                this.setState({ photos: response.data })
                console.log(this.state.photos)
            }, error => {
                console.log(error)
            })
    }

    renderAllPhotos = () => {
        return this.state.photos.map(photo => {
            return (
                <PhotoDetail
                    key={photo.id}
                    id={photo.id}
                    albumId={photo.albumId}
                    title={photo.title}
                >
                </PhotoDetail>
            )
        })
    }

    render() {
        return (
            <div>
                <div>
                    <table border="1">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>ALBUM ID</th>
                                <th>TITLE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderAllPhotos()}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Lifecycle;