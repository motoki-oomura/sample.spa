// webpackでentryに指定したjs。ここを起点に require や import したファイルがbundleされる。


// ============================================================================
// example1 - One Way Binding
// ============================================================================
// import React from 'react';
// import { render } from 'react-dom';
//
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { message: 'hello react!' };
//   }
//
//   changeMessage(e) {
//     this.setState( { message: e.target.value } );
//   }
//
//
//   render() {
//     return (
//       <div>
//         <input type="text" onChange={ this.changeMessage.bind(this) }/>
//         <p>{ this.state.message }</p>
//       </div>
//     );
//   }
// }
//
// render(<App/>, document.getElementById('app'));



// ============================================================================
// example2 - Counter
// ============================================================================
// import React from 'react';
// import { render } from 'react-dom';
//
// class Counter extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0
//     };
//   }
//
//   render() {
//     return (
//       <div>
//         <p>{ this.state.count }</p>
//         <button onClick={ this.addCount.bind(this) }>１足す</button>
//       </div>
//
//     );
//   }
//
//   addCount() {
//     this.setState( {count: this.state.count + 1 });
//   }
// }
//
// render(<Counter/>, document.getElementById('app'));



// ============================================================================
// example3 - Parent and Child Component
// ============================================================================
// import React from 'react';
// import { render } from 'react-dom';
//
// class Child extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//
//   render() {
//     return (
//       <p>{ this.props.text }</p>
//     );
//   }
// }
//
// class Parent extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//
//   render() {
//     return (
//       <div>
//         <Child text="hoge"></Child>
//         <Child text="fuga"></Child>
//       </div>
//     );
//   }
// }
//
// render(<Parent/>, document.getElementById('app'));




// ============================================================================
// example4 - View My Github Repository List
// ============================================================================
// import React from 'react';
// import { render } from 'react-dom';
//
// const REQUEST_URL = 'https://api.github.com/users/motokioomura/repos';
//
// class App extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       data: []
//     };
//   }
//
//   componentDidMount() {
//     this.fetchData();
//   }
//
//   fetchData() {
//     console.log('fetch');
//     fetch(REQUEST_URL)
//       .then((res) => res.json())
//       .then(resData => {
//         this.setState({
//           data: resData
//         });
//       });
//   }
//
//   render() {
//     return (
//       <ul>
//         { this.state.data.map(item => {
//           return (
//             <li key={ item.id }>
//               <a href={item.html_url} target="_blank">
//               { item.name }
//               </a>
//             </li>
//           );
//         })}
//       </ul>
//     );
//   }
// }
//
// render(<App/>, document.getElementById('app'));

// ============================================================================
// example5 - Todo App
// ============================================================================
// import React from 'react';
// import { render } from 'react-dom';
//
// import Todos from './todo/todo';
//
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//
//   render() {
//     return (
//       <Todos/>
//     );
//   }
// }
//
// render(<App/>, document.getElementById('app'));