import React, { useMemo, useCallback, useEffect, useState, memo } from 'react';
import { Table } from 'antd';
import { Menu } from './service'
import './index.less'

const thead= [{
  prop:'id'
},{
  prop: 'customContent',
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
              return <Table.Column<Menu> title={e.prop} dataIndex={e.prop} key={index} ></Table.Column> 
            })
          }
          <Table.Column
            title="Action"
            key="action"
            render={(text, record:any) => (
              <div>
                <a>Invite {record.lastName}</a>
                <a>Delete</a>
              </div>
            )}
          />
        </Table>
      </section>
      
    </div>
    
  );
}

export default BetterTable;
