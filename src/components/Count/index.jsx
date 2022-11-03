// 该文件最终会被整合到 container 的 Count 容器中

import React, { Component } from 'react'
// import store from '../../redux/store'
// import { createIncreaseData, createDecreaseData, createMultiplyByData, createIncreaseAsyncData } from '../../redux/count_action'
import './index.css'

export default class Count extends Component {
  getCount = (state) => {
    console.log(state);
    return state.count
  }
  increase = () => {
    const { value } = this.selectDom;
    // store.dispatch(createIncreaseData(value * 1))
    this.props.jia(value * 1)
  }
  decrease = () => {
    const { value } = this.selectDom;
    // store.dispatch(createDecreaseData(value * 1))
    this.props.jian(value * 1)
  }
  multiplyBy = () => {
    const { value } = this.selectDom;
    // store.dispatch(createMultiplyByData(value * 1))
    this.props.cheng(value * 1)
  }
  asyncIncrease = () => {
    const { value } = this.selectDom;
    // store.dispatch(createIncreaseAsyncData(value * 1, 500))
    this.props.wait(value * 1, 500)
  }

  render() {
    return (
      <div>
        {/* <h2>当前求和为：{this.getCount(store.getState())}</h2> */}
        <h2>当前求和为：{this.props.count}</h2>
        <select name="" id="" className='select' ref={(r => this.selectDom = r)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>&nbsp;
        <button onClick={this.increase}>+</button>&nbsp;
        <button onClick={this.decrease}>-</button>&nbsp;
        <button onClick={this.multiplyBy}>multiplyBy +</button>&nbsp;
        <button onClick={this.asyncIncrease}>async +</button>
      </div>
    )
  }
}
