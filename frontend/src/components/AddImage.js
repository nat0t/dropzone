import React from 'react';
import { DropzoneArea } from 'material-ui-dropzone';


class AddImage extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(files) {
        this.props.onChange(files);
    }

    render() {
        return (
            <DropzoneArea
                acceptedFiles={['image/*']}
                dropzoneText={"Drag and drop an image here or click"}
                onChange={this.handleChange}
                filesLimit={1}
            />
        );
    }
}


export default AddImage;
