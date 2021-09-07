import React, { useMemo, useCallback, useEffect, useState, memo } from 'react';
import { Table } from 'antd';
import { Menu } from './service'
import './index.less'

const thead= [{
  prop:'id'
},{
  prop: 'customContent',
  label: 'customContent',
  formatType: 'linkByName'
},{
  prop: 'operation'
}]

const menuData:Menu[]=[{
  id:'5',
  key:'1',
  customContent: '123'
}]

function BetterTable() {
  return (
    // <div>123</div>
    <div className="lucky_table_better">
      <header></header>
      <section>
        <Table<Menu>
          dataSource={menuData}
        >
          {
            thead.map((e,index)=>{
              let welcome: {} | null | undefined
              if(e.formatType){
                welcome = <h2>formatType</h2>
              }else{
                welcome = <h2>你好</h2>
              }
              return  <Table.Column<Menu> 
                        title={e.prop} 
                        dataIndex={e.prop} 
                        key={index} 
                        render={(text, record:any) => (
                          welcome
                        )}
                      ></Table.Column> 
            })
          }
        </Table>
      </section>
      
    </div>
    
  );
}

export default BetterTable;
