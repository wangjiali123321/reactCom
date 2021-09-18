import React, { useMemo, useCallback, useEffect, useState, memo } from 'react';
import { Table } from 'antd';
import { Menu } from './service'
import './index.less'

interface theadItemProps {
  prop: String,
  label?: String,
  formatType?: String,
  operation?: String
}

interface BetterTableProps {
  thead: Array<theadItemProps>
}

const menuData:Menu[]=[{
  id:'5',
  key:'1',
  customContent: '123'
}]

function BetterTable(props: BetterTableProps) {
  return (
    // <div>123</div>
    <div className="lucky_table_better">
      <header></header>
      <section>
        <Table<Menu>
          dataSource={menuData}
        >
          {
            props.thead.map((e,index)=>{
              let columnContent : (text:any, record:any)=>{}
              if(e.prop === 'operation'){
                columnContent = function(text:any, record:any){
                  return <div >
                          <a>Invite {record.name}</a>
                          <a>Delete</a>
                        </div>
                }
              }else if(e.formatType){
                columnContent = function(text:any, record:any){
                  return <h2>formatType</h2>
                } 
              }else {
                columnContent = function(text:any, record:any){
                  return <h2>你好</h2>
                } 
              }
              return  <Table.Column<Menu> 
                        title={e.prop}
                        key={index} 
                        render={(text, record:any) => (
                          columnContent(text,record)
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
