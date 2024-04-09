import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

export default class StockButton extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.button}
                onPress={() => {
                    this.props.onPress(
                        this.props.name,
                        this.props.code
                    )
                }}>
                <Text>{this.props.name}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        margin: 10,
        borderWidth: 1,
        width: 100,
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightgray',
    },
});


