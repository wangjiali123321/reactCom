import React, { Component } from 'react'
import PageWrap from '../../components/PageWrap';
import BetterTable from './BetterTable'

export default class intro extends Component <any, any> {
  constructor(props:any) {
    super(props)
    console.log(props)
    this.state = {
      num: 0,
      type: '原生',
      toRefreshList: false
    }
    
  }

  getDerivedStateFromProps(nextProps:any, prevState:any) {
    console.log(nextProps,prevState)
    return true
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate')
    return true
  }

  render() {
    console.log('render')
    return (
      <PageWrap className="intro">
        <BetterTable toRefreshList={this.state.toRefreshList} />
      </PageWrap>
    )
  }

  getSnapshotBeforeUpdate(prevProps:any, prevState:any){
    console.log(prevProps, prevState)
    return true
  }

  componentDidMount(){
    console.log('componentDidMount')
    let that = this
    that.setState({toRefreshList:!this.state.toRefreshList})
    // setInterval(()=>{
    //   that.setState({toRefreshList:!this.state.toRefreshList})
    // },3000)
    
  }

  componentDidUpdate(){
    console.log('update')
    
  }




  static getDerivedStateFromError() {
    console.log('error')
    return { isError: true };
  }

  componentDidCatch(error:any, info:any) {
    console.log(error,info)
  }

  

  
}
