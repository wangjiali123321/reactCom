import React, { memo, useState, useEffect } from 'react';
import PageWrap from '../../components/PageWrap';
import BetterTable from './BetterTable'

function Intro() {
  const [toRefreshList, setToRefreshList] = useState<Boolean>(false);

  const thead= [{
    prop:'id'
  },{
    prop: 'customContent',
    label: 'customContent',
    formatType: 'linkByName'
  },{
    prop: 'fisrtslot',
    formatType: 'prop'
  },{
    prop: 'operation'
  }]

  const operateConfig = {
    optType: {
      toRemove: {event:'toRemove',text: 'remove',type:'danger'},
      togo: {event:'togo',text: 'togo',type:'danger'}
    },
    optFunc: function(val:any, userinfo:any){
      if(val){

      }
      return  ['toRemove','togo']
    }
  }

  const firstslot = <span>firstslot</span>

  useEffect(()=>{
    setTimeout(()=>{
      setToRefreshList(!toRefreshList)
    },3000)
  },[])
  

  return (
    <PageWrap className="intro">
      <BetterTable thead={thead} operateConfig={operateConfig} toRefreshList={toRefreshList} firstslot={firstslot}/>
    </PageWrap>
  );
}

export default memo(Intro);
