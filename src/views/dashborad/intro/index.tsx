import React, { memo, useState, useEffect } from 'react';
import PageWrap from '../../components/PageWrap';
import BetterTable from './BetterTable'

function Intro() {
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
  

  return (
    <PageWrap className="intro">
      <BetterTable thead={thead} operateConfig={operateConfig} />
    </PageWrap>
  );
}

export default memo(Intro);
