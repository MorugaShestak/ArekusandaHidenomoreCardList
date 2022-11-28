import './App.css';
import Card from "./components/Card/Card";

function App() {

    const test = require('./img/Discord Profile Banner 4.png')

  return (
    <div className="App">
        <Card name={"test"} description={"test"} cost={"test"}/>

        <details>
            <summary>Карты Территорий</summary>

            <Card name={"Пустыня"} description={"Создаёт пустыню. \n Принадлежит Гео и Пиро. \n Усиливает"} cost={"5.000 CP"}/>
        </details>

    </div>
  );
}

export default App;
