import Sections from './components/Sections'

function App() {
  return (
    <div className="App">
      <ul id="myMenu">
        <li data-menuanchor="firstPage" class="active" id="firstPage">
          <a href="#firstPage">First section</a>
        </li>
        <li data-menuanchor="secondPage" id="secondPage">
          <a href="#secondPage">Second section</a>
        </li>
        <li data-menuanchor="thirdPage">
          <a href="#thirdPage">Third section</a>
        </li>
        <li data-menuanchor="fourthPage">
          <a href="#fourthPage">Fourth section</a>
        </li>
      </ul>
      <Sections></Sections>
    </div>
  );
}

export default App;
