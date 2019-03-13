'use strict';

import React, { Component } from "react";
import { View } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

class Loader extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Spinner visible={this.props.visible} color={this.props.color ? this.props.color : '#32908e'} />
            </View >
        );
    }
}

export default Loader;
