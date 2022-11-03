import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createAddUser } from '../../redux/actions/person';
// import store from '../../redux/store';
import { nanoid } from 'nanoid';

class Person extends Component {
  addUser = () => {
    const user = {
      id: nanoid(),
      username: this.username.value,
      age: this.age.value,
    }
    // store.dispatch(createAddUser(user));
    this.props.addPerson(user);
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <h2>人员信息， 上面求和为：{this.props.count}</h2>
        <input ref={c => this.username = c} type="text" placeholder='请输入姓名' />&nbsp;
        <input ref={c => this.age = c} type="number" placeholder='请输入年龄' />&nbsp;
        <button onClick={this.addUser}>添加人员</button>
        <ul>
          {/* {
            store.getState().person.map(personObj => <li key={personObj.id}>{personObj.username} -- {personObj.age}</li>)
          } */}
          {
            this.props.person.map(personObj => <li key={personObj.id}>{personObj.username} -- {personObj.age}</li>)
          }
        </ul>
      </div>
    )
  }
}

// connect：连接器，获取store数据，
export default connect(
  state => ({
    count: state.count,
    person: state.person
  }),
  {
    addPerson: createAddUser
  }
)(Person)
