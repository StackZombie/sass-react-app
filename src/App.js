import './scss/style.scss';
import NavBar from './components/NavBar/NavBar';
function App() {
  return (
    <>
    <NavBar />
    <div id="container">
        <h1>Hello World</h1>
    </div>
    <div id="toast">
          <h4 class="warning">You may fail this match</h4>
          <h4 class="danger">Alas! I failed this match</h4>
          <h4 class="success">Yahoo ! I won this match</h4>
    </div>
    <div class="box">
      <h3>This text comes inside a box</h3>
      <p>This text is related to tiny size</p>
    </div>
    </>
  );
}

export default App;
