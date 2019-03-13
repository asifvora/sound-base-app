import React, { Component } from 'react'
import { WebView, View } from 'react-native'
import { Loader } from '../Components/Loader'

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends Component {

  constructor(props) {
    super(props);
    this.state = { visible: true };
  }

  hideSpinner() {
    this.setState({ visible: false });
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        {this.state.visible && <Loader visible={this.state.visible} />}
        <WebView
          onLoad={() => this.hideSpinner()}
          source={{ uri: 'https://zoya.tk/#/' }}
        />
      </View>
    )
  }
}
