/*! build:ucf hash:d5e6891898251b2d28bd, chunkhash:19c37b2097287b2e58c5, name:singletable-query/index, filebase:index.js, query:, file:singletable-query/index.js */!function(c){function e(e){for(var t,a,n=e[0],r=e[1],l=e[2],o=0,i=[];o<n.length;o++)a=n[o],s[a]&&i.push(s[a][0]),s[a]=0;for(t in r)Object.prototype.hasOwnProperty.call(r,t)&&(c[t]=r[t]);for(d&&d(e);i.length;)i.shift()();return m.push.apply(m,l||[]),u()}function u(){for(var e,t=0;t<m.length;t++){for(var a=m[t],n=!0,r=1;r<a.length;r++){var l=a[r];0!==s[l]&&(n=!1)}n&&(m.splice(t--,1),e=o(o.s=a[0]))}return e}var a={},s={6:0},m=[];function o(e){if(a[e])return a[e].exports;var t=a[e]={i:e,l:!1,exports:{}};return c[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=c,o.c=a,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var t=window.webpackJsonp=window.webpackJsonp||[],n=t.push.bind(t);t.push=e,t=t.slice();for(var r=0;r<t.length;r++)e(t[r]);var d=n;m.push([1577,0]),u()}({1563:function(e,t,a){},1564:function(e,t,a){},1565:function(e,t,a){},1566:function(e,t,a){},1577:function(e,t,a){"use strict";a.r(t);a(161);var n,r,l=a(0),y=a.n(l),h=a(2),o=a.n(h),i=a(58),v=a.n(i),c=a(10),u=a.n(c),s=a(11),m=a.n(s),d=a(12),p=a.n(d),f=a(13),E=a.n(f),b=a(14),w=a.n(b),g=a(3),k=a(86),x=a.n(k),S=a(4),P=a.n(S),F=a(54),q=a(50),O=a(18),I=a(66),j=a(6),D=a.n(j),N=a(25),Y=a(62),T=a.n(Y),C=a(53),L=a(105),M=a(131),V=a(5),_=a(47),R=a.n(_),A=(a(1563),N.a.Item),H=g.Select.Option,B=T.a.YearPicker,G=function(e){function t(e){var o;return u()(this,t),(o=p()(this,E()(t).call(this,e))).search=function(){o.props.form.validateFields(function(e,t){t.year&&(t.year=t.year.format("YYYY"));var a=t.dept;if(a){var n=JSON.parse(a).refpk;t.dept=n}var r=Object(V.f)(o.props.queryParam);r.pageParams.pageIndex=0;var l=o.getSearchPanel(t);r.whereParams=l,h.actions.query.updateState({cacheFilter:l}),h.actions.query.loadList(r),o.props.clearRowFilter()})},o.reset=function(){o.props.form.resetFields(),o.props.form.validateFields(function(e,t){var a=Object(V.f)(o.props.queryParam),n=a.whereParams,r=[];for(var l in t)r.push({key:l});a.whereParams=Object(V.g)(n,r,"key"),h.actions.query.updateState({queryParam:a})})},o.getSearchPanel=function(e){var t=[];for(var a in e)if(e[a]||"number"==typeof e[a]){var n="LIKE";["code","month"].includes(a)&&(n="EQ"),["serviceYearsCompany"].includes(a)&&(n="GTEQ"),t.push({key:a,value:e[a],condition:n})}return t},o.state={},o}return w()(t,e),m()(t,[{key:"render",value:function(){var e=this.props,t=e.form,a=e.onCallback,n=t.getFieldProps;return y.a.createElement(L.a,{reset:this.reset,onCallback:a,search:this.search},y.a.createElement(N.a,{size:"sm"},y.a.createElement(A,{label:"员工编号"},y.a.createElement(g.FormControl,D()({placeholder:"精确查询"},n("code",{initialValue:""})))),y.a.createElement(A,{label:"员工姓名"},y.a.createElement(g.FormControl,D()({placeholder:"模糊查询"},n("name",{initialValue:""})))),y.a.createElement(A,{label:"部门"},y.a.createElement(C.a,n("dept",{initialValue:""}))),y.a.createElement(A,{label:"司龄"},y.a.createElement(g.InputNumber,D()({min:0,iconStyle:"one"},n("serviceYearsCompany",{initialValue:""})))),y.a.createElement(A,{label:"年份"},y.a.createElement(B,D()({},n("year",{initialValue:null}),{format:"YYYY",locale:R.a,placeholder:"选择年"}))),y.a.createElement(A,{label:"月份"},y.a.createElement(M.a,n("month",{initialValue:""}))),y.a.createElement(A,{label:"是否超标"},y.a.createElement(g.Select,n("exdeeds",{initialValue:""}),y.a.createElement(H,{value:""},"请选择"),y.a.createElement(H,{value:"0"},"未超标"),y.a.createElement(H,{value:"1"},"超标")))))}}]),t}(l.Component),z=N.a.createForm()(G),K=a(267),J=a.n(K),Q=(a(1564),g.Menu.Item),W="YYYY-MM-DD HH:mm:ss",U=function(e){function t(e){var f;return u()(this,t),(f=p()(this,E()(t).call(this,e))).onRelevance=function(e,t){var a=e.name;if("name"===t&&window.open("https://baike.baidu.com/item/"+a,"_blank"),"code"===t&&f.setState({record:e,showModal:!0}),"year"===t){var n=e.code,r=e.name,l=e.sexEnumValue,o=e.levelName;h.actions.routing.push({pathname:"/employee",search:x.a.stringify({code:n,name:r,sexEnumValue:l,levelName:o})})}},f.sortFun=function(e){var t=f.props.queryParam;t.sortMap=Object(V.l)(e),h.actions.query.loadList(t)},f.onFilterChange=function(e,t,a){var n=!0,r=Object(V.f)(f.props.queryParam),l=r.whereParams,o=!(r.pageParams.pageIndex=0),i=!1,c=void 0;try{for(var u,s=l.entries()[Symbol.iterator]();!(o=(u=s.next()).done);o=!0){var m=v()(u.value,2),d=m[0];m[1].key===e&&(l[d]=f.handleFilterData(e,t,a),n=!1)}}catch(e){i=!0,c=e}finally{try{o||null==s.return||s.return()}finally{if(i)throw c}}if(n){var p=f.handleFilterData(e,t,a);l.push(p)}h.actions.query.loadList(r)},f.handleFilterData=function(e,t,a){var n={key:e,value:t,condition:a};return Array.isArray(t)&&(n.value=f.handleDateFormat(t),n.condition="RANGE"),n},f.onFilterClear=function(e){var t=Object(V.f)(f.props.queryParam),a=t.whereParams,n=t.pageParams,r=!0,l=!1,o=void 0;try{for(var i,c=a.entries()[Symbol.iterator]();!(r=(i=c.next()).done);r=!0){var u=v()(i.value,2),s=u[0];if(u[1].key===e){a.splice(s,1),n.pageIndex=0;break}}}catch(e){l=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(l)throw o}}h.actions.query.loadList(t)},f.handleDateFormat=function(e){return e.map(function(e,t){return 0===t?e.format("YYYY-MM-DD 00:00:00"):e.format("YYYY-MM-DD 23:59:59")})},f.freshData=function(e){f.onPageSelect(e,0)},f.onDataNumSelect=function(e,t){f.onPageSelect(t,1)},f.onPageSelect=function(e,t){var a=Object(V.f)(f.props.queryParam),n=a.pageParams,r=n.pageIndex,l=n.pageSize;r=0===t?e-1:(l=e,0),e&&"all"===e.toString().toLowerCase()&&(l=1),a.pageParams={pageIndex:r,pageSize:l},h.actions.query.loadList(a)},f.afterRowFilter=function(e){if(!e){var t=Object(V.f)(f.props),a=t.queryParam,n=t.cacheFilter;a.whereParams=n,h.actions.query.updateState({queryParam:a})}f.setState({filterable:e})},f.clearRowFilter=function(){f.setState({filterable:!1})},f.close=function(){f.setState({showModal:!1})},f.export=function(){f.grid.exportExcel()},f.resetTableHeight=function(e){var t=0;t=e?Object(V.j)()-470:Object(V.j)()-270,f.setState({tableHeight:t})},f.gridColumn=[{title:"数据",width:80,dataIndex:"k",key:"k",fixed:"left",className:"data-cls ",exportHidden:!0,render:function(e,t,a){var n=y.a.createElement(g.Menu,{onClick:function(e){return f.onRelevance(t,e.key)}},y.a.createElement(Q,{key:"code"},"模态弹出"),y.a.createElement(Q,{key:"year"},"链接跳转"),y.a.createElement(Q,{key:"name"},"打开新页"));return y.a.createElement("div",{className:"table-menu"},y.a.createElement(J.a,{trigger:["click"],overlay:n,animation:"slide-up"},y.a.createElement(g.Icon,{type:"uf-link",style:{color:"#004898"}})))}},{title:"员工编号",dataIndex:"code",key:"code",width:160},{title:"员工姓名",dataIndex:"name",key:"name",width:120,filterType:"text",filterDropdownType:"string",filterDropdown:"show",sorter:!0,render:function(e,t,a){return y.a.createElement(g.Tooltip,{inverse:!0,overlay:e},y.a.createElement("span",null,e))}},{title:"员工性别",dataIndex:"sex",key:"sex",exportKey:"sexEnumValue",width:120,filterType:"dropdown",filterDropdown:"hide",filterDropdownAuto:"manual",filterDropdownData:[{key:"男",value:"1"},{key:"女",value:"0"}],render:function(e,t,a){return y.a.createElement("span",null,t.sexEnumValue)}},{title:"部门",dataIndex:"dept",key:"dept",exportKey:"deptName",width:150,filterType:"dropdown",filterDropdown:"hide",filterDropdownAuto:"manual",filterDropdownData:f.props.colFilterSelectdept,filterDropdownFocus:function(){if(!f.props.colFilterSelectdept){h.actions.query.getListByCol({distinctParams:["dept"]})}},render:function(e,t,a){return y.a.createElement("span",null,t.deptName)}},{title:"职级",dataIndex:"levelName",key:"levelName",width:120},{title:"工龄",dataIndex:"serviceYears",key:"serviceYears",width:180,filterType:"number",filterDropdownType:"number",className:"column-number-right ",filterInputNumberOptions:{max:100,min:0,step:1,precision:0},sorter:!0},{title:"司龄",dataIndex:"serviceYearsCompany",key:"serviceYearsCompany",width:130,className:"column-number-right ",sorter:!0},{title:"年份",dataIndex:"year",key:"year",width:100,render:function(e,t,a){return y.a.createElement("div",null,e?P()(e).format("YYYY"):"")}},{title:"月份",dataIndex:"monthEnumValue",key:"monthEnumValue",width:100,className:"column-number-right ",sorter:!0},{title:"补贴类别",dataIndex:"allowanceTypeEnumValue",key:"allowanceTypeEnumValue",width:120},{title:"补贴标准",dataIndex:"allowanceStandard",key:"allowanceStandard",width:120,className:"column-number-right ",render:function(e,t,a){return y.a.createElement("span",null,"number"==typeof e?e.toFixed(2):"")}},{title:"实际补贴",dataIndex:"allowanceActual",key:"allowanceActual",width:120,className:"column-number-right ",render:function(e,t,a){return y.a.createElement("span",null,"number"==typeof e?e.toFixed(2):"")}},{title:"是否超标",dataIndex:"exdeedsEnumValue",key:"exdeedsEnumValue",width:120},{title:"申请时间",dataIndex:"applyTime",key:"applyTime",width:300,filterDropdown:"hide",filterType:"daterange",filterDropdownType:"daterange",render:function(e,t,a){return y.a.createElement("div",null,e?P()(e).format(W):"")}},{title:"领取方式",dataIndex:"pickTypeEnumValue",key:"pickTypeEnumValue",width:120},{title:"领取时间",dataIndex:"pickTime",key:"pickTime",width:150,render:function(e,t,a){return y.a.createElement("div",null,e?P()(e).format(W):"")}},{title:"备注",dataIndex:"remark",key:"remark",width:100}],f.state={tableHeight:0,filterable:!1,showModal:!1,record:{}},f}return w()(t,e),m()(t,[{key:"componentWillMount",value:function(){this.resetTableHeight(!0)}},{key:"componentDidMount",value:function(){h.actions.query.loadList(this.props.queryParam)}},{key:"componentWillReceiveProps",value:function(e){if(!this.props.colFilterSelectdept&&e.colFilterSelectdept)for(var t=0,a=this.gridColumn.length;t<a;t++){var n=this.gridColumn[t];if("dept"===n.key){n.filterDropdownData=e.colFilterSelectdept;break}}}},{key:"render",value:function(){var t=this,e=this,a=e.props,n=a.queryObj,r=a.showLoading,l=a.queryParam,o=n.pageIndex,i=n.total,c=n.totalPages,u=e.state,s=u.filterable,m=u.record,d=u.tableHeight,p={activePage:o,total:i,items:c,freshData:e.freshData,onDataNumSelect:e.onDataNumSelect},f={mode:"multiple",backSource:!0,sortFun:e.sortFun};return y.a.createElement("div",{className:"single-table-query"},y.a.createElement(g.Loading,{showBackDrop:!0,show:r,fullScreen:!0}),y.a.createElement(q.a,{title:"A1单表查询示例"}),y.a.createElement(z,{queryParam:l,clearRowFilter:this.clearRowFilter,onCallback:this.resetTableHeight}),y.a.createElement("div",{className:"table-header"},y.a.createElement(O.a,{className:"ml8",colors:"primary",onClick:e.export},"导出")),y.a.createElement("div",{className:"gird-parent"},y.a.createElement(F.a,{ref:function(e){return t.grid=e},columns:this.gridColumn,data:n.list,rowKey:function(e,t){return t},paginationObj:p,multiSelect:!1,showFilterMenu:!0,filterable:s,onFilterChange:e.onFilterChange,onFilterClear:e.onFilterClear,afterRowFilter:e.afterRowFilter,sort:f,scroll:{y:d},sheetHeader:{height:30,ifshow:!1}})),y.a.createElement(I.a,{show:this.state.showModal,title:"模态弹出",close:this.close,btns:[]},y.a.createElement("div",null,y.a.createElement("span",null,"员工编号："),y.a.createElement("span",null,m.code)),y.a.createElement("div",null,y.a.createElement("span",null,"员工姓名："),y.a.createElement("span",null,m.name)),y.a.createElement("div",null,y.a.createElement("span",null,"员工性别："),y.a.createElement("span",null,m.sexEnumValue)),y.a.createElement("div",null,y.a.createElement("span",null,"职级："),y.a.createElement("span",null,m.levelName))))}}]),t}(l.Component),X=a(26),Z=a.n(X),$=a(8),ee=a.n($),te=a(17),ae=a.n(te),ne=a(29),re=a.n(ne),le=a(21),oe={GET_LIST:"".concat("/iuap-pap-demo-be","/query_allowances/list"),GET_LIST_BY_COL:"".concat("/iuap-pap-demo-be","/query_allowances/distinct")},ie={name:"query",initialState:{showLoading:!1,cacheFilter:[],queryParam:{pageParams:{pageIndex:0,pageSize:25},sortMap:[],whereParams:[]},queryObj:{list:[],pageIndex:0,pageSize:25,totalPages:1,total:0}},reducers:{updateState:function(e,t){return re()({},e,t)}},effects:{loadList:(r=ae()(ee.a.mark(function e(){var r,l,o,i,c,u,s,m,d,p=arguments;return ee.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=0<p.length&&void 0!==p[0]?p[0]:{},l=1<p.length?p[1]:void 0,h.actions.query.updateState({showLoading:!0}),e.t0=V.o,e.next=6,t=r,a=void 0,a=Object.assign({},t),n=Object(V.f)(a.pageParams),delete a.pageParams,Object(le.a)(oe.GET_LIST,{method:"post",data:a,param:n});case 6:e.t1=e.sent,o=(0,e.t0)(e.t1),i=o.result,c=i.data,u={showLoading:!1},c?(s=r.pageParams,m=Object(V.p)(c,s),u.queryObj=m,u.queryParam=r):(d=l().query.queryObj,u.queryObj=Object(V.n)(d)),h.actions.query.updateState(u);case 13:case"end":return e.stop()}var t,a,n},e)})),function(){return r.apply(this,arguments)}),getListByCol:(n=ae()(ee.a.mark(function e(a,t){var n,r,l,o,i,c,u;return ee.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=V.o,e.next=3,t=a,Object(le.a)(oe.GET_LIST_BY_COL,{method:"post",data:t});case 3:e.t1=e.sent,n=(0,e.t0)(e.t1),r=n.result,l=r.data,o=void 0===l?[]:l,i=a.distinctParams,c=i[0],u=o.map(function(e){return{key:e.deptName,value:e.dept}}),h.actions.query.updateState(Z()({},"colFilterSelect"+c,u));case 10:case"end":return e.stop()}var t},e)})),function(e,t){return n.apply(this,arguments)})}};o.a.model(ie);var ce=Object(h.connect)(function(e){return e.query},null)(U),ue=(a(1565),function(e){function l(){var e,t;u()(this,l);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=p()(this,(e=E()(l)).call.apply(e,[this].concat(n)))).onBack=function(){h.actions.routing.goBack()},t}return w()(l,e),m()(l,[{key:"render",value:function(){var e=x.a.parse(this.props.location.search),t=e.code,a=e.name,n=e.sexEnumValue,r=e.levelName;return y.a.createElement("div",{className:"employee"},y.a.createElement(q.a,{title:"A1单表查询示例",back:!0}),y.a.createElement("div",{className:"content"},y.a.createElement("div",{className:"item"},y.a.createElement("span",null,"员工编号："),y.a.createElement("span",null,t)),y.a.createElement("div",{className:"item"},y.a.createElement("span",null,"员工姓名："),y.a.createElement("span",null,a)),y.a.createElement("div",{className:"item"},y.a.createElement("span",null,"员工性别："),y.a.createElement("span",null,n)),y.a.createElement("div",{className:"item"},y.a.createElement("span",null,"       职级："),y.a.createElement("span",null,r))))}}]),l}(l.Component)),se=Object(h.connect)(function(e){return e.query},null)(ue);a(1566);o.a.defaults({historyMode:"hash",middlewares:[]}),Object(h.render)(y.a.createElement(h.Router,null,y.a.createElement(function(){return y.a.createElement("div",{className:"route-content"},y.a.createElement(h.Route,{exact:!0,path:"/",component:ce}),y.a.createElement(h.Route,{exact:!0,path:"/employee",component:se}))},null)),document.querySelector("#app"))}});
//# sourceMappingURL=index.js.map