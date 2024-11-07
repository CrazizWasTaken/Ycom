import './App.css';
import kom from './Ykom.png';
import Comp from './component';
import head1 from './head1.jpg';
import head2 from './head2.jpg';
import head3 from './head3.jpg';
const starma = [{title:"Jlab Work Buds",desc0:"Łączność: Bezprzewodowe",desc1:"Budowa słuchawek: Dokanałowe",desc2:"Redukcja hałasu: Aktywna - ENC",desc3:"Pasmo przenoszenia: 20 ~ 20000 Hz",price:"459,00zl",img: head1},
  {title:"Hori Gaming Earbuds Pro",desc0:"Łączność: Przewodowe",desc1:"Budowa słuchawek: Dokanałowe",desc2:"Mikrofon: Posiada, na kablu",desc3:"Pasmo przenoszenia: 100 ~ 20000 Hz",price:"119,00zl",img: head2},
  {title:"Honor Earbuds X6 biale",desc0:"Łączność: True Wireless",desc1:"Budowa słuchawek: Douszne, Zamknięte",desc2:"Mikrofon: Posiada, przy słuchawce",desc3:"Pasmo przenoszenia: 20 ~ 20000 Hz",price:"199,00zl",img: head3}
];
function App() {
  return(
    <div>
      <div id="Top">
        <img src={kom} alt="ddd"/>
      </div>
      <div id="Bass1">
       <Comp Starma={starma[0]}/>
       <Comp Starma={starma[1]}/>
       <Comp Starma={starma[2]}/>
      </div>
    </div>
  )
}

export default App;
