/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import { Component } from 'react';
import StockButton from './components/StockButton';
import API from './components/API';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.changeIndex = this.changeIndex.bind(this)
    this.state = {
      stockName: 'Apple',
      stockCode: 'AAPL',
    }
    const initIndex = async () => {
      await this.changeIndex(this.state.stockName, this.state.stockCode)
    }
    initIndex()
  }
  async changeIndex(stockName, stockCode) {
    try {
      const data = await API(stockCode);


      this.setState({
        stockName: stockName,
        stockCode: stockCode,
        stockIndex: data.stockIndex,
        stockChangeRaw: data.stockChangeRaw,
        stockChangePercent: data.stockChangePercent
      });
    } catch (error) {
      console.error('Error:', error);
    }
  }


  render() {
    let colorStyle = (this.state.stockChangeRaw && this.state.stockChangeRaw[0] == '-') ? { color: 'red' } : { color: 'green' }
    return (
      <View style={styles.container} >
        <View style={styles.header}>
          <Text style={styles.stockName}>{this.state.stockName}</Text>
          <Text style={styles.stockIndex}>{this.state.stockIndex}</Text>
          <Text style={[styles.stockChange, colorStyle]}>{this.state.stockChangeRaw}&#40;{this.state.stockChangePercent}%&#41;</Text>
        </View>
        <View style={styles.footer}>
          <StockButton name="Apple" code="AAPL" onPress={this.changeIndex} />
          <StockButton name="Google" code="GOOG" onPress={this.changeIndex} />

          <StockButton name="Microsoft" code="MSFT" onPress={this.changeIndex} />

          <StockButton name="Meta" code="META" onPress={this.changeIndex} />

          <StockButton name="Alibaba" code="BABA" onPress={this.changeIndex} />


        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stockName: {
    fontSize: 30
  },
  stockIndex: {
    fontSize: 80
  },
  stockChange: {
    fontSize: 40
  },
});

