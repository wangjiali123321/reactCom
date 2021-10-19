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

  useEffect(()=>{
    setTimeout(()=>{
      setToRefreshList(!toRefreshList)
    },3000)
  },[])
  

  return (
    <PageWrap className="intro">
      <BetterTable thead={thead} operateConfig={operateConfig} toRefreshList={toRefreshList} />
    </PageWrap>
  );
}

export default memo(Intro);
