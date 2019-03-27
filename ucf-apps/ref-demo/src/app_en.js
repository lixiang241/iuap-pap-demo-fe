/**
 * 入口、导入组件样式、渲染
 */

import React,{Component} from 'react';
import { render } from 'mirrorx';
// import App from "./container";

import 'ucf-common/styles/tinper-bee.css';
import 'ucf-common/styles/public.less';
import './app.less';
import {
    RefTreeDemo1,
    RefTreeDemo2,
    RefTreeDemo3,
    // RefTreeDemo4,
    RefTreeDemo5,
    RefTreeDemo6,
  } from './components/Ref_EN/RefTree';
  
  import {
    RefTableDemo1,
    RefTableDemo2,
    RefTableDemo3,
    RefTableDemo4,
  } from './components/Ref_EN/RefTable';
  
  import {
    RefTreeTransferDemo1,
    RefTreeTransferDemo2
  } from './components/Ref_EN/RefTreeTransfer';
  import {
    RefTreeTableDemo1,
  } from './components/Ref_EN/RefTreeTable';
  
  import {
    RefJiLianDemo1,
    RefJiLianDemo2,
    RefJiLianDemo3,
  } from './components/Ref_EN/RefJiLian';

  
  import {RefComboboxDemo1,RefComboboxDemo2} from './components/Ref_EN/RefCombobox'
  import {getCookie} from './util';
  let lang = getCookie('u_locale') || getCookie('i18next') || 'zh_CN';
  
  // createRefTree(option)
  const entityType = "mainEntity";
  class App extends Component {
    constructor() {
      super();
      this.state = {
        checkedArray: [],
        value: '',
        count: [],
        refpk: '',
        refname: '',
        strictMode: false
      }
  
      setTimeout(() => {
        this.setState({
          strictMode: true
        });
      })
    }
  
  
    render() {
      let { strictMode } = this.state;
      return (
        <div>
          <h2>ref-tree</h2>
          <div className="demo-row">
            <div className="demo-col">
              <RefTreeDemo1 lang={lang}/>
            </div>
            <div className="demo-col">
              <RefTreeDemo2 lang={lang}/>
            </div>
            <div className="demo-col">
              <RefTreeDemo3 lang={lang}/>
            </div>
            {/* <div className="demo-col">
              <RefTreeDemo4 lang={lang}/>
            </div> */}
            <div className="demo-col">
              <RefTreeDemo5 lang={lang}/>
            </div>
            <div className="demo-col">
              <RefTreeDemo6 lang={lang}/>
            </div>
          </div>
          <h2>ref-multiple-table</h2>
          <div className="demo-row">
            <div className="demo-col">
              <RefTableDemo1 lang={lang}/>
            </div>
            <div className="demo-col">
              <RefTableDemo2 lang={lang}/>
            </div>
          </div>
          <div className="demo-row">
            <div className="demo-col">
              <RefTableDemo3 lang={lang}
              />
            </div>
          </div>
          <div className="demo-row">
            <div className="demo-col">
              <RefTableDemo4 lang={lang}
              />
            </div>
          </div>
          <h2>ref compositon </h2>
          <div className="demo-row">
            <div className="demo-col">
              <RefJiLianDemo1 lang={lang}/>
            </div>
            <div className="demo-col">
              <RefJiLianDemo2 lang={lang}/>
            </div>
            <div className="demo-col">
              <RefJiLianDemo3 lang={lang}/>
            </div>
          </div>
          
          <h2>ref-tree-transfer</h2>
          <div className="demo-row">
            <div className="demo-col">
              <RefTreeTransferDemo1 lang={lang}/>
            </div>
            <div className="demo-col">
              <RefTreeTransferDemo2 lang={lang}/>
            </div>
          </div>
          <h2>ref-tree-table</h2>
          <div className="demo-row">
            <div className="demo-col">
              <RefTreeTableDemo1 lang={lang}
              />
            </div>
          </div>
          <h2>combobox</h2>
          <div className="demo-row">
            <div className="demo-col">
              <RefComboboxDemo1 lang={lang}/>
            </div>
            <div className="demo-col">
              <RefComboboxDemo2 lang={lang}/>
            </div>
          </div>
        </div>
      )
    }
  };
  
  export default App;