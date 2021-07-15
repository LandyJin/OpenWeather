import WeatherTile from './components/WeatherTile';
import env from "./env";
import { TodayDate } from './components/WeatherDetails';
import { Header, Container } from "./styles/weather.d";

function App() {
  return (
    <div className="App">
      <Header>Australia cities weather - <TodayDate /></Header>
      <Container>
        {env.cities.map((city, index) => {
          return <WeatherTile cityName={city} key={index}/>
        })}   
      </Container>
    </div>
  );
}

export default App;
