import React, { Component } from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";
import { PropTypes } from "prop-types";

class Hoop extends Component {
  render() {
    return (
      <View
        style={[
          styles.hoopContainer,
          {
            bottom: this.props.y
          }
        ]}
      >
        <Image
          source={require("../assets/recycle.png")}
          style={styles.hoopContained}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  hoopContainer: {
    position: "absolute",
    left: Dimensions.get("window").width / 2 - 179 / 2,
    width: 179,
    height: 112,
    alignItems: "center"
  },
  hoopContained: {
    width: 120,
    height: 160,
    marginTop: 38
  }
});

Hoop.defaultProps = {
  y: 0
};

Hoop.propTypes = {
  y: PropTypes.number
};

export default Hoop;
