import './App.css';
import Header from './components/Header';

function App() {

  const title = 'Blog post';
  const body = 'This is my blog post';

  return (<>
    <Header text={title}/>
    <div className="container">
      <h1>{title.toUpperCase()}</h1>
      <p>{body}</p>
    </div>
  </>);
}

export default App;
