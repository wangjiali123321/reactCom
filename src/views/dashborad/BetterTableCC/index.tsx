import React, { Component } from 'react'
import PageWrap from '../../components/PageWrap';
import BetterTable from './BetterTable'

export default class intro extends Component <any, any> {
  constructor(props:any) {
    super(props)
    this.state = {
      num: 0,
      type: '原生',
      toRefreshList: false
    }
    
  }

  componentDidMount(){
    let that = this
    setInterval(()=>{
      that.setState({toRefreshList:!this.state.toRefreshList})
    },3000)
    
  }

  render() {
    return (
      <PageWrap className="intro">
        <BetterTable toRefreshList={this.state.toRefreshList} />
      </PageWrap>
    )
  }
}
