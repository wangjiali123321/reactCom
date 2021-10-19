import React, { Component } from 'react'

export default class BetterTable extends Component <any, any> {
  constructor(props:any) {
    super(props)
    this.getParentMethod = this.getParentMethod.bind(this)
    this.state = {
      num: 0,
      type: '原生',
    }
    console.log('constructor')
  }

  componentWillReceiveProps(props:any,props1:any){
    console.log(props,props1)
  }

  componentDidMount() {
    console.log('componentDidMount')
    document.getElementById('btn')!.addEventListener('click', this.yuanshengClick)
  }

  getParentMethod() {
    this.props.methodToChild(123)
  }

  yuanshengClick = () => {
    this.setState({
      num: 4,
      type: '原生',
    }, () => {
      console.log(this.state.num)
    })
    this.setState({
      num: 4,
      type: '原生',
    }, () => {
      console.log(this.state.num)
    })
    console.log(this.state.num)
  }

  handleClick = () => {
    this.setState({
      num: 4,
      type: '原生',
    }, () => {
      console.log(this.state.num)
    })
    this.setState({
      num: 4,
      type: '原生',
    }, () => {
      console.log(this.state.num)
    })
    console.log(this.state.num)
  }

  render() {
    console.log('render')
    return (
      <div id="CommunicateChild">
        <div>
          <button type="button" id="btn">子组件调用父组件的方法</button>
          {this.state.num}{this.state.type}
          <p><button type="button" onClick={this.handleClick}>调用父组件的方法</button></p>
        </div>
      </div>
    )
  }
}