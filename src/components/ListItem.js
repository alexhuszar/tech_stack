import React, { Component, PropTypes } from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  LayoutAnimation,
  UIManager,
  Platform
} from 'react-native';
import { connect } from 'react-redux'
import { CardSection } from './common'
import * as actions from '../actions'

class ListItem extends Component {

  componentWillUpdate(){
    if(Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental &&
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
    LayoutAnimation.spring()
  }

  render () {
    const { titleStyle } = styles;
    const {title, id} = this.props;

    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectLibrary(id)}
      >
        <View>
          <CardSection>
            <Text style={titleStyle}>{title}</Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }

  renderDescription() {
    if(this.props.expanded) {
      return (
        <CardSection>
          <Text style={{flex:1}}>
            {this.props.description}
          </Text>
        </CardSection>
      )
    }
  }
}

const styles = StyleSheet.create({
  titleStyle: {
    paddingLeft: 15,
    fontSize: 18
  }
});

const mapStateToProps = (state, ownProps) => {

  const expanded = state.selectedLibraryId === ownProps.id;

  return {
    expanded
  };
};

export default connect(mapStateToProps, actions)(ListItem)
