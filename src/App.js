import React, { Component } from 'react';
import Quotes from './containers/Quotes'
import Starred from './containers/Starred/Starred'
import { Route, Switch} from 'react-router-dom'
import AboutMe from './containers/AboutMe/AboutMe'
import Arabic from './containers/ArabicQuotes/ArabicQuotes'
import Somali from './containers/SomaliQuotes/SomaliQuotes'
import './App.css'

class App extends Component {
    render() {
       
        return(
            
                <div style={{height: '100%'}}>
                    <Switch>
                        <Route path="/" exact component={Quotes}/>
                         <Route path="/starred" component={Starred} />
                         <Route path="/About" component={AboutMe} />
                         <Route path="/Arabic" component={Arabic} />
                         <Route path="/Somali" component={Somali} />
                    </Switch>
                </div>
            
        )
    }
}

export default App;


// const routes = [
//     {
//       path: "/",
//       exact: true,
//       sidebar: () => <div>home!</div>,
//       main: () => <h2>Home</h2>
//     },
//     {
//       path: "/bubblegum",
//       sidebar: () => <div>bubblegum!</div>,
//       main: () => <h2>Bubblegum</h2>
//     },
//     {
//       path: "/shoelaces",
//       sidebar: () => <div>shoelaces!</div>,
//       main: () => <h2>Shoelaces</h2>
//     }
//   ];
  
//   class SidebarExample extends Component  {
//       render() {
//           console.log(this.props.history)
//         return (
//             <Router>
//             <div style={{ display: "flex" }}>
//                 <div
//                 style={{
//                     padding: "10px",
//                     width: "40%",
//                     background: "#f0f0f0"
//                 }}
//                 >
//                 <ul style={{ listStyleType: "none", padding: 0 }}>
//                     <li>
//                     <Link to="/">Home</Link>
//                     </li>
//                     <li>
//                     <Link to="/bubblegum">Bubblegum</Link>
//                     </li>
//                     <li>
//                     <Link to="/shoelaces">Shoelaces</Link>
//                     </li>
//                 </ul>

//                 {routes.map((route, index) => (
//                     // You can render a <Route> in as many places
//                     // as you want in your app. It will render along
//                     // with any other <Route>s that also match the URL.
//                     // So, a sidebar or breadcrumbs or anything else
//                     // that requires you to render multiple things
//                     // in multiple places at the same URL is nothing
//                     // more than multiple <Route>s.
//                     <Route
//                     key={index}
//                     path={route.path}
//                     exact={route.exact}
//                     component={route.sidebar}
//                     />
//                 ))}
//                 </div>

//                 <div style={{ flex: 1, padding: "10px" }}>
//                 {routes.map((route, index) => (
//                     // Render more <Route>s with the same paths as
//                     // above, but different components this time.
//                     <Route
//                     key={index}
//                     path={route.path}
//                     exact={route.exact}
//                     component={route.main}
//                     />
//                 ))}
//                 </div>
//             </div>
//             </Router>
//         );
//     }
//   }
  
//   export default SidebarExample;