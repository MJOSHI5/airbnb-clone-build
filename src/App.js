
import './App.css';
import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import SearchPage from './SearchPage'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Search from './Search';
//https://www.youtube.com/watch?v=blwWU8eli8Q: Solved the Switch not exported from react-router-dom|failed to compile


function App() {
  return (
    <div className="app">
      <Router>

        <Header />
        <Switch>
          <Route path="/search" component={Search}>
            <SearchPage />
          </Route>
            <Route path="/" component={Home}>
                <Home />

            </Route>
        

          

        </Switch>
        


        <Footer />

      </Router>
      
        
        
      
      
    </div>
  );
}

export default App;
