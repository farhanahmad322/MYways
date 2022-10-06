import "./App.css";
import NavBar from "./components/NavBar";
import News from "./components/News";
import Weather from "./components/weather.json";

function App() {
  return (
    <div>
      <NavBar />
      <News />
      <div>
        <div className="container my-3">
          <div className="card">
            {Weather &&
              Weather.map((weather) => {
                return (
                  <div key={weather.query}>
                    <div className="main">
                      
                      <div className="card-header">
                        {weather.query.results.channel.location.city},
                        {weather.query.results.channel.location.region},
                        {weather.query.results.channel.location.country} As of{" "}
                        {weather.query.results.channel.lastBuildDate}
                      </div>

                      <div className="top2">
                       <h1> {weather.query.results.channel.ttl} {weather.query.results.channel.units.temperature}</h1>
                      </div>

                      <div className="top3">{weather.query.created}</div>
                      <div> <hr /> </div>
                      <div className="card-body">
                        
                        {weather.query.results.channel.title}
                        <br /> <br />
                         
                        <a href="/newsdetail/" className="btn btn-sm btn-primary">
                      Next Hours
                    </a>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
