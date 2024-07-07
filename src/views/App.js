import logo from './logo.svg';
import './App.scss';
import PackingList from './Example/Conditional'; 
import UserComponents from './Example/ClassComponents';


const Welcome = (props) =>{
  return <h1>Welcome {props.name}</h1>
}



const App = () => {
  const comment = {
    title: "Test Components",
    author:{
      name : "bao",
      phone: "123456",
    },
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1 id='h1'>
          Hello World
        </h1>
        <p>Hold</p>
      </header>
      <div>
        <UserComponents/>
        <Welcome name="Bao"/>
        <Comment 
          title = {comment.title}
          author = {comment.author}/>
        <PackingList/>
        
      </div>
    </div>
  );
}

function Comment(props){
  return(
    <div className = "comment">
      <div className="user-title">
          {props.title}
          <User author={props.author}/>
      </div>
    </div>
  )
}
function User(props) {
  return(
      <div>
          <div className = "user-name">
              {props.author.name}
          </div>
          <div className = "user-phone">
              {props.author.phone}
          </div>
      </div>
      
  )
}

export default App;
