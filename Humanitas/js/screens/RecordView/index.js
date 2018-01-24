
import React, { Component } from "react";
import { TouchableOpacity, Dimensions, View, StyleSheet,WebView  } from "react-native";


class RecordView extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      title: 'Record',
      headerTintColor: 'white',
      headerStyle:{  
        backgroundColor: 'blue', 
      },
    };
  };

  constructor (props) {
    super(props);
    this.state = {
      
    };
  }
  
  render() {
    return (
      <View style = {styles.container}>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
});

export default RecordView;
