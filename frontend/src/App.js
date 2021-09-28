import React, { Component } from "react";
import './App.css';
import axios from "axios";
import ImageList from "./components/ImageList.js"
import AddImage from "./components/AddImage.js"


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'imageList': [],
        };
        this.backendAddress = 'http://localhost:8000/';
        this.handleDropzoneChange = this.handleDropzoneChange.bind(this);
    }

    loadData() {
        axios
            .get(this.backendAddress + 'api/images/')
            .then(response => {
                this.setState(
                { 'imageList': response.data }
                );
            }).catch(error => {
                console.log(error);
            });
    }

    componentDidMount() {
        this.loadData();
    }

    handleDropzoneChange(files) {
        files.map(file => {
            let formData = new FormData();
            formData.append("title", file.name);
            formData.append("image", file);
            axios
                .post(this.backendAddress + 'api/images/', formData, {
                    headers: {
                        'content-type': 'multipart/form-data'
                    }
                }).then(response => {
                    this.loadData();
                }).catch(error => {
                    console.log(error);
                });
            return "";
            });
    }

    render() {
        return(
            <React.Fragment>
                <AddImage
                    onChange={this.handleDropzoneChange}
                />
                <ImageList
                    imageList={this.state.imageList}
                />
            </React.Fragment>
        );
    }
}


export default App;
