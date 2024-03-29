import React, { useMemo, useCallback, useEffect, useState, memo } from 'react';
import { Table,Button } from 'antd';
import { Menu,BetterTableProps,optTypeItemProps} from './service'
import './index.less'

function BetterTable(props: BetterTableProps) {
  const [menuData, setmenuData] = useState<Menu[]>([{
    id:'5',
    key:'1',
    customContent: '123'
  }]);

  useEffect(()=>{
    console.log(1)
    for(let i in menuData){
      let operation= []
      let temp = props.operateConfig.optFunc(menuData[i])
      for(let j in temp){
        operation.push(props.operateConfig.optType[temp[j]])
      }
      console.log(operation)
      menuData[i]['operation'] = operation;
      setmenuData(menuData)
    }
  },[])

  useEffect(()=>{
    console.log('torefresh')
  },[props.toRefreshList])

  return (
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
                          {record.operation && record.operation.map((each:optTypeItemProps,index:number)=>{
                            // return <div key={index}>{each.text}</div>
                            return <Button key={index} >{each.text}</Button>
                          })}
                        </div>
                }
              }else if(e.formatType === 'slot'){
                columnContent = function(text:any, record:any){
                  return <h2>{props['firstslot']}</h2>
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
