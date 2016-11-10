import React, { Component, PropTypes } from 'react';
import {
  Text,
  StyleSheet,
  ListView,
  View
} from 'react-native';
import { connect } from 'react-redux'
import ListItem from './ListItem'

class LibraryList extends Component {

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      dataSource: ds.cloneWithRows(this.props.libraries)
    }
  }

  render() {
    return <ListView
      dataSource={this.state.dataSource}
      renderRow={this.renderRow}
    />;
  }

  renderRow(library) {
    return <ListItem {...library} />
  }
}

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: '#fff',
    alignSelf: 'stretch',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5,
    flex: 1
  },
  errorStyle :{
    alignSelf: 'center',
    fontSize: 20,
    color: '#ff0000'
  }
});

const mapStateToProps = state => {
    return {
      libraries: state.libraries
    };
};

export default connect(mapStateToProps)(LibraryList);
