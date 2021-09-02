import React, { useMemo, useCallback, useEffect, useState, memo } from 'react';
import { Table } from 'antd';
import { Menu } from './service'

const thead= [{
  prop:'id'
},{
  prop: 'customContent',
  // render: ()=>{
  //   <div>123</div>
  // }
}]

const menuData:Menu[]=[{
  id:'5'
}]

function BetterTable() {
  return (
    // <div>123</div>
    <Table<Menu>
      dataSource={menuData}
      key={'1'}
    >
      {
        thead.map((e,index)=>{
          console.log(index)
          return <Table.Column<Menu> title={e.prop} key={index} ></Table.Column> 
        })
      }
    </Table>
  );
}

export default BetterTable;
