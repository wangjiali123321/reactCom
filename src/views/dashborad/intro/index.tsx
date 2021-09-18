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

  return (
    <PageWrap className="intro">
      <BetterTable thead={thead} />
    </PageWrap>
  );
}

export default memo(Intro);
