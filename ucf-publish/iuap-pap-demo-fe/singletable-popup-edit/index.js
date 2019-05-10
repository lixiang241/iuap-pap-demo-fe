/*! build:ucf hash:751f4e6f4c77674732b7, chunkhash:f88b52803047ec8da29a, name:singletable-popup-edit/index, filebase:index.js, query:, file:singletable-popup-edit/index.js */!function(e){function a(a){for(var n,s,o=a[0],i=a[1],c=a[2],m=0,u=[];m<o.length;m++)s=o[m],l[s]&&u.push(l[s][0]),l[s]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);for(d&&d(a);u.length;)u.shift()();return r.push.apply(r,c||[]),t()}function t(){for(var e,a=0;a<r.length;a++){for(var t=r[a],n=!0,o=1;o<t.length;o++){var i=t[o];0!==l[i]&&(n=!1)}n&&(r.splice(a--,1),e=s(s.s=t[0]))}return e}var n={},l={5:0},r=[];function s(a){if(n[a])return n[a].exports;var t=n[a]={i:a,l:!1,exports:{}};return e[a].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.m=e,s.c=n,s.d=function(e,a,t){s.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:t})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,a){if(1&a&&(e=s(e)),8&a)return e;if(4&a&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var n in e)s.d(t,n,function(a){return e[a]}.bind(null,n));return t},s.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(a,"a",a),a},s.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},s.p="";var o=window.webpackJsonp=window.webpackJsonp||[],i=o.push.bind(o);o.push=a,o=o.slice();for(var c=0;c<o.length;c++)a(o[c]);var d=i;r.push([2090,0]),t()}({2071:function(e,a,t){},2072:function(e,a,t){},2073:function(e,a,t){},2074:function(e,a,t){},2090:function(e,a,t){"use strict";t.r(a);t(159);var n=t(0),l=t.n(n),r=t(3),s=t.n(r),o=t(2),i=t(8),c=t.n(i),d=t(12),m=t.n(d),u=t(13),p=t.n(u),f=t(14),g=t.n(f),E=t(15),h=t.n(E),b=t(16),M=t.n(b),v=t(4),j=t.n(v),y=t(5),S=t(69),w=t(64),P=t(23),k=t(70),x=t(95),I=t(73),C=t.n(I),V=t(63),O=t.n(V),N=t(125),T=t(156),D=t(68),F=t(30),q=t(9),Y=t(43),L=(t(2071),F.a.Item),H=y.Select.Option,R=O.a.YearPicker,_=function(e){function a(){var e,t;m()(this,a);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(t=g()(this,(e=h()(a)).call.apply(e,[this].concat(l)))).search=function(){t.props.form.validateFields(function(e,a){a.year&&(a.year=a.year.format("YYYY"));var n=a.dept;if(n){var l=JSON.parse(n).refpk;a.dept=l}t.getQuery(a,0)})},t.reset=function(){t.props.form.resetFields()},t.getQuery=function(e,a){var n=Object(q.e)(t.props.queryParam),l=n.pageParams,s=n.whereParams;for(var o in s=Object(q.e)(s),l.pageIndex=0,e){var i=!0,c=!1,d=void 0;try{for(var m,u=s.entries()[Symbol.iterator]();!(i=(m=u.next()).done);i=!0){var p=C()(m.value,2),f=p[0];if(o===p[1].key){s.splice(f,1);break}}}catch(e){c=!0,d=e}finally{try{i||null==u.return||u.return()}finally{if(c)throw d}}if((e[o]||0===e[o])&&0===a){var g="LIKE";["code","month"].includes(o)&&(g="EQ"),s.push({key:o,value:e[o],condition:g})}}n.whereParams=s,r.actions.popupEdit.updateState(n),0===a&&r.actions.popupEdit.loadList(n),t.props.onCloseEdit()},t}return M()(a,e),p()(a,[{key:"render",value:function(){var e=this.props,a=e.form,t=e.onCallback,n=a.getFieldProps;return l.a.createElement(N.a,{form:a,reset:this.reset,onCallback:t,search:this.search,intl:this.props.intl},l.a.createElement(F.a,{size:"sm"},l.a.createElement(L,{label:l.a.createElement(o.a,{id:"js.com.Sea3.0001",defaultMessage:"员工编号"})},l.a.createElement(y.FormControl,c()({placeholder:this.props.intl.formatMessage({id:"js.com.Sea3.0002",defaultMessage:"精确查询"})},n("code",{initialValue:""})))),l.a.createElement(L,{label:l.a.createElement(o.a,{id:"js.com.Sea3.0003",defaultMessage:"员工姓名"})},l.a.createElement(y.FormControl,c()({placeholder:this.props.intl.formatMessage({id:"js.com.Sea3.0004",defaultMessage:"模糊查询"})},n("name",{initialValue:""})))),l.a.createElement(L,{label:l.a.createElement(o.a,{id:"js.com.Sea3.0005",defaultMessage:"部门"})},l.a.createElement(D.a,n("dept",{initialValue:""}))),l.a.createElement(L,{label:l.a.createElement(o.a,{id:"js.com.Sea3.0006",defaultMessage:"年份"})},l.a.createElement(R,c()({},n("year",{initialValue:null}),{format:"YYYY",locale:Y.a,placeholder:this.props.intl.formatMessage({id:"js.com.Sea3.0007",defaultMessage:"选择年"})}))),l.a.createElement(L,{label:l.a.createElement(o.a,{id:"js.com.Sea3.0008",defaultMessage:"月份"})},l.a.createElement(T.a,n("month",{initialValue:""}))),l.a.createElement(L,{label:l.a.createElement(o.a,{id:"js.com.Sea3.0009",defaultMessage:"是否超标"})},l.a.createElement(y.Select,n("exdeeds",{initialValue:""}),l.a.createElement(H,{value:""},l.a.createElement(o.a,{id:"js.com.Sea3.0010",defaultMessage:"请选择"})),l.a.createElement(H,{value:"0"},l.a.createElement(o.a,{id:"js.com.Sea3.0011",defaultMessage:"未超标"})),l.a.createElement(H,{value:"1"},l.a.createElement(o.a,{id:"js.com.Sea3.0012",defaultMessage:"超标"}))))))}}]),a}(n.Component),A=F.a.createForm()(Object(o.d)(_)),B=t(10),z=t.n(B),G=t(19),J=t.n(G),Q=t(41),K=t.n(Q),U=t(86),W=t(39),$=(t(2072),O.a.YearPicker),X=F.a.Item,Z=y.Select.Option,ee="YYYY-MM-DD HH:mm:ss",ae="YYYY",te=[l.a.createElement(o.a,{id:"js.com.Pop.0001",defaultMessage:"新增"}),l.a.createElement(o.a,{id:"js.com.Pop.0002",defaultMessage:"修改"}),l.a.createElement(o.a,{id:"js.com.Pop.0003",defaultMessage:"详情"})],ne=function(e){function a(e){var t;return m()(this,a),(t=g()(this,h()(a).call(this,e))).onCloseEdit=function(){t.setState({rowData:{},btnFlag:0}),t.props.onCloseEdit()},t.onSubmitEdit=function(){var e=K()(t),a=e.state.btnFlag;e.props.form.validateFields(function(n,l){n||(l=e.onHandleSaveData(l),t.onCloseEdit(),l.btnFlag=a,r.actions.popupEdit.saveOrder(l))})},t.onHandleSaveData=function(e){var a=K()(t),n=t.state.rowData,l={};return n&&(l=Object.assign({},n,e)),l.year=l.year.format(ae),l.applyTime&&(l.applyTime=l.applyTime.format(ee)),a.onHandleRef(l),l},t.onHandleRef=function(e){for(var a=["dept","postLevel"],t=0,n=a.length;t<n;t++){var l=JSON.parse(e[a[t]]);e[a[t]]=l.refpk}},t.onHandleBtns=function(e){var a=K()(t),n=[{label:l.a.createElement(o.a,{id:"js.com.Pop.0004",defaultMessage:"取消"}),fun:t.onCloseEdit,shape:"border"},{label:l.a.createElement(o.a,{id:"js.com.Pop.0005",defaultMessage:"确定"}),fun:a.onSubmitEdit,colors:"primary"}];return 2==e&&(n=[]),n},t.state={rowData:{},btnFlag:0,cancelFlag:!1},t}return M()(a,e),p()(a,[{key:"componentWillReceiveProps",value:function(){var e=J()(z.a.mark(function e(a){var t,n,l,r,s,o,i,c,d;return z.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=this,n=this.props,l=n.btnFlag,r=n.currentIndex,s=a.btnFlag,o=a.currentIndex,i=a.editModelVisible,l===s&&r===o||(t.props.form.resetFields(),this.setState({btnFlag:s}),0!==s&&i&&(c=this.props.list,d=c[o]||{},this.setState({rowData:d})));case 4:case"end":return e.stop()}},e,this)}));return function(a){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props,a=e.form,t=e.editModelVisible,n=this.state,r=n.rowData,s=n.btnFlag,i=a.getFieldProps,d=a.getFieldError,m=r.code,u=r.serviceYearsCompany,p=r.pickTime,f=r.postLevel,g=r.levelName,E=r.year,h=r.sex,b=r.allowanceStandard,M=r.remark,v=r.deptName,S=r.dept,w=r.exdeeds,P=r.allowanceActual,k=r.allowanceType,x=r.month,I=r.pickType,C=r.name,V=r.serviceYears,N=r.applyTime,q=this.onHandleBtns(s);return l.a.createElement(U.a,{show:t,title:te[s],size:"lg",btns:q,autoFocus:!1,enforceFocus:!1,close:this.onCloseEdit,className:"single-table-pop-model"},l.a.createElement(F.a,null,l.a.createElement(X,{label:l.a.createElement(o.a,{id:"js.com.Pop.0006",defaultMessage:"员工编号"})},l.a.createElement(y.FormControl,c()({disabled:!0},i("code",{initialValue:m||""})))),l.a.createElement(X,{required:!0,label:l.a.createElement(o.a,{id:"js.com.Pop.0007",defaultMessage:"员工姓名"})},l.a.createElement(y.FormControl,c()({disabled:2===s},i("name",{validateTrigger:"onBlur",initialValue:C||"",rules:[{type:"string",required:!0,pattern:/\S+/gi,message:l.a.createElement(o.a,{id:"js.com.Pop.0008",defaultMessage:"请输入员工姓名"})}]}))),l.a.createElement(W.a,{errorMsg:d("name")})),l.a.createElement(X,{required:!0,label:l.a.createElement(o.a,{id:"js.com.Pop.0009",defaultMessage:"员工性别"})},l.a.createElement(y.Select,c()({disabled:2===s},i("sex",{initialValue:void 0!==h?h:0,rules:[{required:!0,message:l.a.createElement(o.a,{id:"js.com.Pop.0010",defaultMessage:"请选择员工性别"})}]})),l.a.createElement(Z,{value:0},l.a.createElement(o.a,{id:"js.com.Pop.0011",defaultMessage:"女"})),l.a.createElement(Z,{value:1},l.a.createElement(o.a,{id:"js.com.Pop.0012",defaultMessage:"男"}))),l.a.createElement(W.a,{errorMsg:d("sex")})),l.a.createElement(X,{required:!0,label:l.a.createElement(o.a,{id:"js.com.Pop.0013",defaultMessage:"部门"})},l.a.createElement(D.a,c()({disabled:2===s,placeholder:this.props.intl.formatMessage({id:"js.com.Pop.0014",defaultMessage:"请选择部门"})},i("dept",{initialValue:JSON.stringify({refname:v||"",refpk:S||""}),rules:[{message:l.a.createElement(o.a,{id:"js.com.Pop.0015",defaultMessage:"请选择部门"}),pattern:/[^({"refname":"","refpk":""}|{"refpk":"","refname":""})]/}]}),{backdrop:!1})),l.a.createElement(W.a,{errorMsg:d("dept")})),l.a.createElement(X,{required:!0,label:l.a.createElement(o.a,{id:"js.com.Pop.0016",defaultMessage:"职级"})},l.a.createElement(D.b,c()({disabled:2===s,placeholder:this.props.intl.formatMessage({id:"js.com.Pop.0017",defaultMessage:"请选择职级"})},i("postLevel",{initialValue:JSON.stringify({refpk:f?f.toString():"",refname:g?g.toString():""}),rules:[{message:l.a.createElement(o.a,{id:"js.com.Pop.0018",defaultMessage:"请选择职级"}),pattern:/[^({"refname":"","refpk":""}|{"refpk":"","refname":""})]/}]}))),l.a.createElement(W.a,{errorMsg:d("postLevel")})),l.a.createElement(X,{className:"time",required:!0,label:l.a.createElement(o.a,{id:"js.com.Pop.0019",defaultMessage:"工龄"})},l.a.createElement(y.InputNumber,c()({iconStyle:"one",min:0,step:1,disabled:2===s,max:99},i("serviceYears",{initialValue:"number"==typeof V?V:1,rules:[{pattern:/^[0-9]+$/,required:!0}]})))),l.a.createElement(X,{className:"time",required:!0,label:l.a.createElement(o.a,{id:"js.com.Pop.0020",defaultMessage:"司龄"})},l.a.createElement(y.InputNumber,c()({iconStyle:"one",min:0,step:1,disabled:2===s,max:99},i("serviceYearsCompany",{initialValue:"number"==typeof u?u:1,rules:[{pattern:/^[0-9]+$/,required:!0}]})))),l.a.createElement(X,{className:"time",required:!0,label:l.a.createElement(o.a,{id:"js.com.Pop.0021",defaultMessage:"年份"})},l.a.createElement($,c()({disabled:2==s},i("year",{initialValue:E?j()(E):j()(),validateTrigger:"onBlur",rules:[{required:!0,message:l.a.createElement(o.a,{id:"js.com.Pop.0022",defaultMessage:"请选择申请时间"})}]}),{getCalendarContainer:function(){return document.querySelector(".single-table-pop-model")},format:ae,locale:Y.a,placeholder:this.props.intl.formatMessage({id:"js.com.Pop.0023",defaultMessage:"选择年"})}))),l.a.createElement(X,{required:!0,label:l.a.createElement(o.a,{id:"js.com.Pop.0024",defaultMessage:"月份"})},l.a.createElement(T.a,c()({disabled:2===s},i("month",{initialValue:x||1,rules:[{required:!0,message:l.a.createElement(o.a,{id:"js.com.Pop.0025",defaultMessage:"请选择月份"})}]}))),l.a.createElement(W.a,{errorMsg:d("month")})),l.a.createElement(X,{required:!0,label:l.a.createElement(o.a,{id:"js.com.Pop.0026",defaultMessage:"补贴类别"})},l.a.createElement(y.Select,c()({disabled:2===s},i("allowanceType",{initialValue:k?k.toString():"1",rules:[{required:!0,message:l.a.createElement(o.a,{id:"js.com.Pop.0027",defaultMessage:"请选择补贴类别"})}]})),l.a.createElement(Z,{value:"1"},l.a.createElement(o.a,{id:"js.com.Pop.0028",defaultMessage:"电脑补助"})),l.a.createElement(Z,{value:"2"},l.a.createElement(o.a,{id:"js.com.Pop.0029",defaultMessage:"住宿补助"})),l.a.createElement(Z,{value:"3"},l.a.createElement(o.a,{id:"js.com.Pop.0030",defaultMessage:"交通补助"}))),l.a.createElement(W.a,{errorMsg:d("allowanceType")})),l.a.createElement(X,{className:"time",required:!0,label:l.a.createElement(o.a,{id:"js.com.Pop.0031",defaultMessage:"补贴标准"})},l.a.createElement(y.InputNumber,c()({iconStyle:"one",precision:2,min:0,max:9999,disabled:2===s},i("allowanceStandard",{initialValue:b?Number(b):100})))),l.a.createElement(X,{className:"time",required:!0,label:l.a.createElement(o.a,{id:"js.com.Pop.0032",defaultMessage:"实际补贴"})},l.a.createElement(y.InputNumber,c()({iconStyle:"one",precision:2,min:0,max:9999,disabled:2===s},i("allowanceActual",{initialValue:P?Number(P):100})))),l.a.createElement(X,{required:!0,label:l.a.createElement(o.a,{id:"js.com.Pop.0033",defaultMessage:"是否超标"})},l.a.createElement(y.Select,c()({disabled:2===s},i("exdeeds",{initialValue:w?w.toString():"0",rules:[{required:!0,message:l.a.createElement(o.a,{id:"js.com.Pop.0034",defaultMessage:"请选择是否超标"})}]})),l.a.createElement(Z,{value:"0"},l.a.createElement(o.a,{id:"js.com.Pop.0035",defaultMessage:"未超标"})),l.a.createElement(Z,{value:"1"},l.a.createElement(o.a,{id:"js.com.Pop.0036",defaultMessage:"超标"}))),l.a.createElement(W.a,{errorMsg:d("exdeeds")})),s>=2?l.a.createElement(X,{className:"time",required:!0,label:l.a.createElement(o.a,{id:"js.com.Pop.0037",defaultMessage:"申请时间"})},l.a.createElement(O.a,c()({className:"form-item",format:ee,disabled:2===s,locale:Y.a},i("applyTime",{initialValue:N?j()(N):j()(),validateTrigger:"onBlur",rules:[{required:!0,message:l.a.createElement(o.a,{id:"js.com.Pop.0022",defaultMessage:"请选择申请时间"})}]})))):null,l.a.createElement(X,{required:!0,label:l.a.createElement(o.a,{id:"js.com.Pop.0038",defaultMessage:"领取方式"})},l.a.createElement(y.Select,c()({disabled:2===s},i("pickType",{initialValue:I?I.toString():"1",rules:[{required:!0,message:l.a.createElement(o.a,{id:"js.com.Pop.0039",defaultMessage:"请选择领取方式"})}]})),l.a.createElement(Z,{value:"1"},l.a.createElement(o.a,{id:"js.com.Pop.0040",defaultMessage:"转账"})),l.a.createElement(Z,{value:"2"},l.a.createElement(o.a,{id:"js.com.Pop.0041",defaultMessage:"现金"}))),l.a.createElement(W.a,{errorMsg:d("pickType")})),s>=2?l.a.createElement(X,{className:"time",label:l.a.createElement(o.a,{id:"js.com.Pop.0042",defaultMessage:"领取时间"})},l.a.createElement(O.a,c()({className:"form-item",format:ee,disabled:2===s,locale:Y.a},i("pickTime",{initialValue:p&&j()(p)||"",validateTrigger:"onBlur",rules:[{required:!1,message:l.a.createElement(o.a,{id:"js.com.Pop.0043",defaultMessage:"请选择领取时间"})}]})))):null,l.a.createElement(X,{label:l.a.createElement(o.a,{id:"js.com.Pop.0044",defaultMessage:"备注"})},l.a.createElement(y.FormControl,c()({disabled:2===s},i("remark",{initialValue:M||""}))))))}}]),a}(n.Component),le=F.a.createForm()(Object(o.d)(ne)),re=(t(2073),"YYYY-MM-DD HH:mm:ss"),se=function(e){function a(e){var t;return m()(this,a),(t=g()(this,h()(a).call(this,e))).onRefreshList=function(){r.actions.popupEdit.loadList(t.props.queryParam)},t.freshData=function(e){t.onPageSelect(e,0)},t.onDataNumSelect=function(e,a){t.onPageSelect(a,1)},t.onPageSelect=function(e,a){var n=Object(q.e)(t.props.queryParam),l=Object(q.j)(e,a,n.pageParams),s=l.pageIndex,o=l.pageSize;n.pageParams={pageIndex:s,pageSize:o},t.setState({selectedIndex:0}),r.actions.popupEdit.loadList(n)},t.onClickShowModel=function(e){t.setState({editModelVisible:!0,btnFlag:e})},t.onCloseEdit=function(){t.setState({editModelVisible:!1,btnFlag:-1})},t.onClickDel=function(){t.props.list.length>0?t.setState({delModalVisible:!0,showHoverContent:!1}):Object(q.b)(t.props.intl.formatMessage({id:"js.com.Ind4.0001",defaultMessage:"数据为空，不能删除"}))},t.formatMessage=t.props.intl.formatMessage,t.column=[{title:t.formatMessage({id:"js.com.Ind4.0002",defaultMessage:"员工编号"}),dataIndex:"code",key:"code",width:150},{title:t.formatMessage({id:"js.com.Ind4.0003",defaultMessage:"员工姓名"}),dataIndex:"name",key:"name",width:120,filterType:"text",filterDropdown:"show",render:function(e,a,t){return l.a.createElement(y.Tooltip,{inverse:!0,overlay:e},l.a.createElement("span",{tootip:e,className:"popTip"},e))}},{title:t.formatMessage({id:"js.com.Ind4.0004",defaultMessage:"员工性别"}),dataIndex:"sexEnumValue",key:"sexEnumValue",width:150},{title:t.formatMessage({id:"js.com.Ind4.0005",defaultMessage:"所属部门"}),dataIndex:"deptName",key:"deptName",width:120},{title:t.formatMessage({id:"js.com.Ind4.0006",defaultMessage:"职级"}),dataIndex:"levelName",key:"levelName",width:140},{title:t.formatMessage({id:"js.com.Ind4.0007",defaultMessage:"工龄"}),dataIndex:"serviceYears",key:"serviceYears",width:130,className:"column-number-right "},{title:t.formatMessage({id:"js.com.Ind4.0008",defaultMessage:"司龄"}),dataIndex:"serviceYearsCompany",key:"serviceYearsCompany",width:130,className:"column-number-right "},{title:t.formatMessage({id:"js.com.Ind4.0009",defaultMessage:"年份"}),dataIndex:"year",key:"year",width:100,render:function(e,a,t){return l.a.createElement("div",null,e?j()(e).format("YYYY"):"")}},{title:t.formatMessage({id:"js.com.Ind4.0010",defaultMessage:"月份"}),dataIndex:"monthEnumValue",key:"monthEnumValue",width:100},{title:t.formatMessage({id:"js.com.Ind4.0011",defaultMessage:"补贴类别"}),dataIndex:"allowanceTypeEnumValue",key:"allowanceTypeEnumValue",width:120},{title:t.formatMessage({id:"js.com.Ind4.0012",defaultMessage:"补贴标准"}),dataIndex:"allowanceStandard",key:"allowanceStandard",width:120,className:"column-number-right ",render:function(e,a,t){return l.a.createElement("span",null,"number"==typeof e?e.toFixed(2):"")}},{title:t.formatMessage({id:"js.com.Ind4.0013",defaultMessage:"实际补贴"}),dataIndex:"allowanceActual",key:"allowanceActual",width:120,className:"column-number-right ",render:function(e,a,t){return l.a.createElement("span",null,"number"==typeof e?e.toFixed(2):"")}},{title:t.formatMessage({id:"js.com.Ind4.0014",defaultMessage:"是否超标"}),dataIndex:"exdeedsEnumValue",key:"exdeedsEnumValue",width:120},{title:t.formatMessage({id:"js.com.Ind4.0015",defaultMessage:"申请时间"}),dataIndex:"applyTime",key:"applyTime",width:150,render:function(e,a,t){return l.a.createElement("div",null,e?j()(e).format(re):"")}},{title:t.formatMessage({id:"js.com.Ind4.0016",defaultMessage:"领取方式"}),dataIndex:"pickTypeEnumValue",key:"pickTypeEnumValue",width:120},{title:t.formatMessage({id:"js.com.Ind4.0017",defaultMessage:"领取时间"}),dataIndex:"pickTime",key:"pickTime",width:150,render:function(e,a,t){return l.a.createElement("div",null,e?j()(e).format(re):"")}},{title:t.formatMessage({id:"js.com.Ind4.0018",defaultMessage:"备注"}),dataIndex:"remark",key:"remark",width:100}],t.export=function(){t.grid.exportExcel()},t.resetTableHeight=function(e){var a=0;a=e?Object(q.i)()-420:Object(q.i)()-270,t.setState({tableHeight:a})},t.state={tableHeight:0,selectedIndex:0,editModelVisible:!1,btnFlag:0,delModalVisible:!1,showHoverContent:!1},t}return M()(a,e),p()(a,[{key:"componentWillMount",value:function(){this.resetTableHeight(!0)}},{key:"componentDidMount",value:function(){this.onRefreshList()}},{key:"confirmGoBack",value:function(e){if(this.setState({delModalVisible:!1}),1===e){var a=this.props.list[this.state.selectedIndex];r.actions.popupEdit.removeList(a)}}},{key:"render",value:function(){var e=this,a=this.props,t=a.list,n=a.showLoading,r=a.pageIndex,s=a.totalPages,i=a.total,d=this.state,m=d.editModelVisible,u=d.selectedIndex,p=d.btnFlag,f=d.delModalVisible,g=d.tableHeight,E=d.showHoverContent,h={activePage:r,total:i,items:s,freshData:this.freshData,onDataNumSelect:this.onDataNumSelect},b=t.length<=0;return l.a.createElement("div",{className:"single-table-popup"},l.a.createElement(w.a,{title:this.props.intl.formatMessage({id:"js.com.Ind4.0019",defaultMessage:"A3单表弹框编辑"})}),l.a.createElement(A,c()({},this.props,{onCloseEdit:this.onCloseEdit,onCallback:this.resetTableHeight})),l.a.createElement("div",{className:"table-header"},l.a.createElement(x.a,{funcCode:"singletable-popupedit"},l.a.createElement(P.a,{role:"add",colors:"primary",className:"ml8",onClick:function(){e.onClickShowModel(0)}},l.a.createElement(o.a,{id:"js.com.Ind4.0020",defaultMessage:"新增"})),l.a.createElement(P.a,{shape:"border",className:"ml8",onClick:this.export},l.a.createElement(o.a,{id:"js.com.Ind4.0021",defaultMessage:"导出"}))),l.a.createElement(k.a,{show:f,context:l.a.createElement(o.a,{id:"js.com.Ind4.0022",defaultMessage:"是否要删除 ?"}),confirmFn:function(){e.confirmGoBack(1)},cancelFn:function(){e.confirmGoBack(2)}})),l.a.createElement("div",{className:"gird-parent"},l.a.createElement(S.a,{ref:function(a){return e.grid=a},data:t,rowKey:function(e,a){return a},columns:this.column,paginationObj:h,selectedRow:this.selectedRow,multiSelect:!1,hoverContent:function(){return E?l.a.createElement(x.a,{funcCode:"singletable-popupedit"},l.a.createElement(P.a,{isAction:!0,role:"update",className:"ml8",disabled:b,onClick:function(){e.setState({showHoverContent:!1}),e.onClickShowModel(1)}},l.a.createElement(o.a,{id:"js.com.Ind4.0023",defaultMessage:"修改"})),l.a.createElement(P.a,{isAction:!0,className:"ml8",disabled:b,onClick:function(){e.setState({showHoverContent:!1}),e.onClickShowModel(2)}},l.a.createElement(o.a,{id:"js.com.Ind4.0024",defaultMessage:"详情"})),l.a.createElement(P.a,{isAction:!0,role:"delete",className:"ml8",disabled:b,onClick:e.onClickDel},l.a.createElement(o.a,{id:"js.com.Ind4.0025",defaultMessage:"删除"}))):null},onRowHover:function(a){e.setState({selectedIndex:a,showHoverContent:!0})},showHeaderMenu:!0,sort:{mode:"multiple",backSource:!0},loading:{show:n},scroll:{y:g},sheetHeader:{height:30,ifshow:!1}})),l.a.createElement(le,{editModelVisible:m,onCloseEdit:this.onCloseEdit,currentIndex:u,btnFlag:p,list:t}))}}]),a}(n.Component),oe=Object(o.d)(se),ie=t(35),ce=t.n(ie),de=t(26),me={GET_DETAIL:"".concat("/iuap-pap-demo-be","/popup_allowances/list"),SAVE_ORDER:"".concat("/iuap-pap-demo-be","/popup_allowances/insertSelective"),UPDATE_ORDER:"".concat("/iuap-pap-demo-be","/popup_allowances/updateSelective"),DEL_ORDER:"".concat("/iuap-pap-demo-be","/popup_allowances/deleteBatch"),GET_LIST:"".concat("/iuap-pap-demo-be","/popup_allowances/list")},ue=function(e){var a=Object.assign({},e),t=Object(q.e)(a.pageParams);return delete a.pageParams,Object(de.a)(me.GET_LIST,{method:"post",data:a,param:t})},pe=function(e){return Object(de.a)(me.UPDATE_ORDER,{method:"post",data:e})},fe={name:"popupEdit",initialState:{rowPopData:{},showLoading:!1,list:[],pageIndex:0,pageSize:25,totalPages:1,total:0,queryParam:{pageParams:{pageIndex:0,pageSize:25},whereParams:[]}},reducers:{updateState:function(e,a){return ce()({},e,Object(q.e)(a))}},effects:{loadList:function(){var e=J()(z.a.mark(function e(a,t){var n,l,s,o,i;return z.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r.actions.popupEdit.updateState({showLoading:!0}),n=a||t().popupEdit.queryParam,e.t0=q.n,e.next=5,ue(n);case 5:e.t1=e.sent,l=(0,e.t0)(e.t1),s=l.result,o=s.data,i={showLoading:!1,queryParam:n},o&&(i=Object.assign({},i,{list:o.content,pageIndex:o.number+1,totalPages:o.totalPages,total:o.totalElements,pageSize:o.size,rowPopData:o.content.length>0?o.content[0]:{}})),r.actions.popupEdit.updateState(i);case 12:case"end":return e.stop()}},e)}));return function(a,t){return e.apply(this,arguments)}}(),removeList:function(){var e=J()(z.a.mark(function e(a,t){var n,l,s,o,i,c,d,m,u,p;return z.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r.actions.popupEdit.updateState({showLoading:!0}),n=a.id,l=t(),s=l.intl.localeData,o=s["js.sin.src5.0001"]||"删除成功",e.t0=q.n,e.next=8,f=[{id:n}],Object(de.a)(me.DEL_ORDER,{method:"post",data:f});case 8:e.t1=e.sent,e.t2=o,i=(0,e.t0)(e.t1,e.t2),"success"===i.result.status?(c=t().popupEdit,d=c.queryParam,m=c.list,u=c.totalPages,(p=d.pageParams.pageIndex)>0&&p+1===u&&1===m.length&&(d.pageParams.pageIndex=p-1),r.actions.popupEdit.loadList(d)):r.actions.popupEdit.updateState({showLoading:!1});case 13:case"end":return e.stop()}var f},e)}));return function(a,t){return e.apply(this,arguments)}}(),saveOrder:function(){var e=J()(z.a.mark(function e(a,t){var n,l,s,o,i,c,d,m,u,p;return z.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r.actions.popupEdit.updateState({showLoading:!0}),n=null,l=a.btnFlag,delete a.btnFlag,s=t(),o=s.intl.localeData,0!==l){e.next=16;break}return i=o["js.sin.src5.0002"]||"保存成功",e.t0=q.n,e.next=11,f=a,Object(de.a)(me.SAVE_ORDER,{method:"post",data:f});case 11:e.t1=e.sent,e.t2=i,c=(0,e.t0)(e.t1,e.t2),d=c.result,n=d.status;case 16:if(1!==l){e.next=26;break}return m=o["js.sin.src5.0003"]||"修改成功",e.t3=q.n,e.next=21,pe(a);case 21:e.t4=e.sent,e.t5=m,u=(0,e.t3)(e.t4,e.t5),p=u.result,n=p.status;case 26:"success"===n?r.actions.popupEdit.loadList():r.actions.popupEdit.updateState({showLoading:!1});case 27:case"end":return e.stop()}var f},e)}));return function(a,t){return e.apply(this,arguments)}}()}};s.a.model(fe);var ge=Object(r.connect)(function(e){return e.popupEdit},null)(oe);t(2074);Object(r.render)(l.a.createElement(Y.b,null,l.a.createElement(ge,null)),document.querySelector("#app"))}});
//# sourceMappingURL=index.js.map