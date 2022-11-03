import React, { Component } from 'react'
import { connect } from 'react-redux'
// import CountUI from '../../components/Count'
import { createIncreaseData, createDecreaseData, createMultiplyByData, createIncreaseAsyncData } from '../../redux/actions/count'
import './index.css'

class Count extends Component {
  increase = () => {
    const { value } = this.selectDom;
    this.props.jia(value * 1)
  }
  decrease = () => {
    const { value } = this.selectDom;
    this.props.jian(value * 1)
  }
  multiplyBy = () => {
    const { value } = this.selectDom;
    this.props.cheng(value * 1)
  }
  asyncIncrease = () => {
    const { value } = this.selectDom;
    this.props.wait(value * 1, 500)
  }

  render() {
    return (
      <div>
        <h2>当前求和为：{this.props.count}， 下面有{this.props.personLength}个人</h2>
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

// const mapStateToProps = (state) => {
//   return { count: state?.count || 0 }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     jia: data => dispatch(createIncreaseData(data)),
//     jian: data => dispatch(createDecreaseData(data)),
//     cheng: data => dispatch(createMultiplyByData(data)),
//     wait: (data, time) => dispatch(createIncreaseAsyncData(data, time))
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Count);


// 简写形式
export default connect(
  state => ({
    count: state.count,
    personLength: state.person.length
  }),
  {
    jia: createIncreaseData,
    jian: createDecreaseData,
    cheng: createMultiplyByData,
    wait: createIncreaseAsyncData
  }
)(Count)