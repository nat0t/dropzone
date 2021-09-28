import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';


class ImageList extends React.Component {
    constructor(props) {
        super(props);
    }

    renderImages = () => {
        return this.props.imageList
            .map(image => (
                <Grid item xs={2}>
                    <img src={image.image} alt={image.name} />
                </Grid>
            ));
    }

    render() {
        return (
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    {this.renderImages()}
                </Grid>
            </Box>
        );
    }
}


export default ImageList;
