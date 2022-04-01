import './App.css';
import React, { Component } from 'react'
import Task from './component/task'
import CreateTask from './component/createTask';

export default class App extends Component {
  state = {
    arr: [],
    flag:true
  }
  // changeDes = (index, des)=>{
  //   let arr = this.state.arr
  //   arr[index].description = des
  //   this.setState({
  //     arr:arr
  //   })
  // }
  deleteTask = (index)=>{
    let arr = this.state.arr
    arr.splice(index,1)
    this.setState({
      arr:arr
    })
  }

  create = ()=>{
    if (this.state.arr.length < 8){
      this.setState({
        flag:!this.state.flag
      },()=>{
        console.log(this.state.arr)
      })
    }else{
      alert('Finish one task first')
    }
  }
  close = (o)=>{
    let arr = this.state.arr
    if(o != ''){
      arr.push(o)
    }
    this.setState({
      flag:!this.state.flag,
      arr:arr
    })
  }

  render() {
    const { arr ,flag} = this.state;
    return (
      <div className="App">
        {flag?'':<CreateTask c = {this.close}/>}
        <div className='header'>
          <strong>To Do List</strong>
          <button className="btn btn-default" onClick={()=>{
            this.create()
          }}>Create Task</button>
        </div>
        <div id='outer_wrap' style={{paddingTop:'20px'}}>
          <div style={{ height: 5 + '%' }} >All Task</div>
          <div id='TaskList' style={{ height: '95%', }}>
            <div className="row" style={{ height: 100 + '%', }}>
              {
                arr.map((value, index) => {
                  return (
                    <Task key={index} myIndex = {index} title={value.title} description={value.description} del = {this.deleteTask}></Task>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}
