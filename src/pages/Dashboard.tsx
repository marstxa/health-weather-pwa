import { FaInfoCircle } from "react-icons/fa";
import { GiGasMask } from "react-icons/gi";
import { RiMentalHealthFill } from "react-icons/ri";
import { TiHome } from "react-icons/ti";
import { Link } from "react-router";
import DashboardLineChart from "../components/charts/DashboardLineChart";
import Footer from "../components/Footer";
import DasboardBarChart from "../components/charts/DasboardBarChart";
import AOS from "aos";
import { useEffect, useState } from "react";
import axios from "axios";

interface WeatherData {
  city: {
    name: string;
  };
  list: Array<{
    dt: number;
    temp: {
      day: number;
      min: number;
      max: number;
    };
    weather: Array<{
      description: string;
      icon: string;
    }>;
  }>;
}

interface Forecast {
  currentTemp: number;
  cityName: string;
  hourlyForecast: Array<{
    time: string;
    temperature: number;
    icon: string;
  }>;
  sevenDayForecast: Array<{
    day: string;
    description: string;
    tempRange: string;
    icon: () => { iconPath: string; description: string };
  }>;
}

const formatWeatherData = (data: WeatherData): Forecast => {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"];

  const currentTemp = Math.round(data.list[0].temp.day);

  const hourlyForecast = [
    {
      time: "6:00 AM",
      temperature: currentTemp,
      icon: "/weather-icon/sun clouds.png",
    },
    {
      time: "12:00 AM",
      temperature: 29,
      icon: "/weather-icon/sun clouds-1.png",
    },
    {
      time: "15:00 AM",
      temperature: currentTemp + 6,
      icon: "/weather-icon/sun clouds.png",
    },
    {
      time: "19:00 AM",
      temperature: currentTemp + 3,
      icon: "/weather-icon/Moon,stars and cloud.png",
    },
    {
      time: "21:00 AM",
      temperature: currentTemp - 4,
      icon: "/weather-icon/Group 6.png",
    },
  ];

  const sevenDayForecast = data.list.slice(0, 7).map((day, index) => ({
    day: index === 0 ? "Today" : daysOfWeek[new Date(day.dt * 1000).getDay()],
    description: day.weather[0].description,
    tempRange: `${Math.round(day.temp.max)}/${Math.round(day.temp.min)}`,
    icon: () => {
      const des = day.weather[0].description.toLowerCase();
      let iconPath = "/weather-icon-lite/Color=On.png";
      let description = "Unknown Weather";

      switch (true) {
        case des.includes("clear sky"):
          iconPath = "/weather-icon-lite/Color=On.png";
          description = "Clear Sky";
          break;
        case des.includes("few clouds"):
          iconPath = "/weather-icon-lite/Color=On-3.png";
          description = "Few Clouds";
          break;
        case des.includes("scattered clouds"):
          iconPath = "/weather-icon-lite/Color=On-4.png";
          description = "Scattered Clouds";
          break;
        case des.includes("broken clouds"):
          iconPath = "/weather-icon-lite/Color=On-2.png";
          description = "Broken Clouds";
          break;
        case des.includes("overcast clouds"):
          iconPath = "/weather-icon-lite/Color=On-2.png";
          description = "Overcast Clouds";
          break;
        case des.includes("shower rain"):
          iconPath = "/weather-icon-lite/Color=On-13.png";
          description = "Shower Rain";
          break;
        case des.includes("rain"):
          iconPath = "/weather-icon-lite/Color=On-9.png";
          description = "Rain";
          break;
        case des.includes("thunderstorm"):
          iconPath = "/weather-icon-lite/Color=On-18.png";
          description = "Thunderstorm";
          break;
        case des.includes("snow"):
          iconPath = "/weather-icon-lite/Color=On-23.png";
          description = "Snow";
          break;
        case des.includes("mist"):
          iconPath = "/weather-icon-lite/Color=On-7.png";
          description = "Mist";
          break;
      }

      return { iconPath, description };
    },
  }));

  return {
    currentTemp,
    cityName: data.city.name,
    hourlyForecast,
    sevenDayForecast,
  };
};

function Dashboard() {
  const [userInput, setUserInput] = useState("");
  const [weatherData, setWeatherData] = useState<Forecast | null>(null);

  useEffect(() => {
    AOS.init({});
    searchLocation();
  }, []);

  useEffect(() => {
    if (userInput) {
      searchLocation(userInput);
    }
  }, [userInput]);

  const searchLocation = async (city: string = "London") => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&cnt=${7}&units=metric&appid=${
        import.meta.env.VITE_APP_ID
      }`;

      const response = await axios.get<WeatherData>(url);
      const data = formatWeatherData(response.data);
      setWeatherData(data);
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const inputElement = e.currentTarget.querySelector("input");
    if (inputElement) {
      setUserInput(inputElement.value);
      // Optional: Clear the input after submission
      inputElement.value = "";
    }
  };

  const weatherDescription =
    weatherData?.sevenDayForecast[0].icon().description;

  const selectIcon = () => {
    const description = weatherDescription?.toLowerCase();
    switch (true) {
      case description?.includes("clear sky"):
        return "/weather-icon/Sun.png";
      case description?.includes("few clouds"):
      case description?.includes("scattered clouds"):
      case description?.includes("broken clouds"):
      case description?.includes("overcast clouds"):
        return "/weather-icon/sun clouds.png";
      case description?.includes("thunderstorm"):
        return "/weather-icon/Thunder.png";
      case description?.includes("rain"):
      case description?.includes("shower rain"):
        return "/weather-icon/rain.png";
      default:
        return "/weather-icon/Sun.png";
    }
  };

  return (
    <div className="bg-secondary w-full min-h-screen h-full">
      <div className="w-full flex flex-row">
        <div className="w-24 h-full min-h-screen fixed z-100 px-2 pt-12 bg-[#141619]">
          <figure data-aos="zoom-out" className="w-18 h-18">
            <img
              className="w-full h-full object-fit"
              src="/logos/logo-transparent-1.png"
              alt="healthadvice"
            />
          </figure>
          <ul
            data-aos="zoom-out"
            className="menu menu-vertical text-white gap-4"
          >
            <li>
              <Link to={"/"}>
                <TiHome size={32} />
              </Link>
            </li>
            <li>
              <Link to={"/user-health"}>
                <RiMentalHealthFill size={32} />
              </Link>
            </li>
            <li>
              <Link to={"/info"}>
                <FaInfoCircle size={32} />
              </Link>
            </li>
          </ul>
        </div>

        {/*Content */}
        <div className="w-full px-[5%] py-[3%] ml-24">
          <div className="w-full flex flex-row justify-between gap-6">
            <div className="w-2/3">
              <form onSubmit={handleSubmit}>
                <label data-aos="fade-down" className="floating-label">
                  {" "}
                  <span>Location</span>
                  <input
                    type="text"
                    className="input w-full h-16 bg-neutral border-2 border-base-300 focus:outline-0 text-white"
                    placeholder="Enter location name"
                  />
                </label>
              </form>

              <div className="flex flex-row items-center justify-between">
                <div
                  data-aos="fade-up"
                  className="flex flex-col items-start justify-center text-white w-1/2 gap-6"
                >
                  <h2 className="h2-font">
                    {weatherData ? weatherData.cityName : "London"}
                  </h2>{" "}
                  <h1 className="text-7xl font-extrabold font-[Rubik]">
                    {weatherData?.currentTemp}°C
                  </h1>
                </div>
                <figure
                  data-aos="zoom-in-left"
                  className="w-1/2 mt-10 flex items-center justify-center"
                >
                  <img
                    className="w-60 h-auto object-cover aspect-square"
                    src={selectIcon()}
                    alt="Sun"
                  />
                </figure>
              </div>
              <div
                data-aos="zoom-in"
                className="w-full min-h-90 rounded-xl bg-neutral mt-30 px-[4%] pt-10 pb-16 shadow-2xl"
              >
                <h5 className="h5-font text-accent mb-16">TODAY’S FORECAST</h5>
                <div className="w-full flex flex-row items-center justify-around">
                  {weatherData &&
                    weatherData.hourlyForecast.map((hour, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center justify-center w-30 gap-3 text-center"
                      >
                        <h5 className="h5-font text-accent">{hour.time}</h5>
                        <img
                          className="w-full h-full object-cover aspect-square"
                          src={hour.icon}
                          alt=""
                        />
                        <h3 className="text-4xl font-extrabold text-white font-[Rubik]">
                          {hour.temperature}°C
                        </h3>
                      </div>
                    ))}
                </div>
              </div>
            </div>

            <div
              data-aos="fade-left"
              className="w-1/3 min-h-full bg-neutral shadow-2xl rounded-xl px-7 pt-[7%] h5-font text-accent"
            >
              <h5>7-DAY FORECAST</h5>
              <div className="flex flex-col items-center justify-center mt-10 gap-3">
                {weatherData &&
                  weatherData.sevenDayForecast.map((day, index) => (
                    <div
                      key={index}
                      className="flex flex-row justify-between items-center w-full border-b border-accent py-6"
                    >
                      <h5>{day.day}</h5>
                      <div className="flex flex-row items-center justify-center gap-2">
                        <img
                          className="w-10 h-full object-fit"
                          src={day.icon().iconPath}
                          alt={day.description}
                        />
                        <h5>{day.description}</h5>
                      </div>
                      <h5>{day.tempRange}</h5>
                    </div>
                  ))}
              </div>
            </div>
          </div>

          <div
            data-aos="fade-right"
            className="w-full flex flex-row justify-around items-center mt-18"
          >
            <div className="stat bg-neutral border-base-300 rounded-xl w-80 h-34">
              <div className="stat-figure text-white">
                <GiGasMask size={32} />
              </div>
              <div className="stat-title h5-font text-accent">
                Carbon Monoxide (CO)
              </div>
              <div className="stat-value font-extrabold font-[Rubik] text-white">
                1.12pm
              </div>
            </div>
            <div className="stat bg-neutral border-base-300 rounded-xl w-80 h-34">
              <div className="stat-figure text-white">
                <GiGasMask size={32} />
              </div>
              <div className="stat-title h5-font text-accent">Ozone (O₃)</div>
              <div className="stat-value font-extrabold font-[Rubik] text-white">
                0.0085
              </div>
            </div>
            <div className="stat bg-neutral border-base-300 rounded-xl w-80 h-34">
              <div className="stat-figure text-white">
                <GiGasMask size={32} />
              </div>
              <div className="stat-title h5-font text-accent">
                Sulfur Dioxide (SO₂)
              </div>
              <div className="stat-value font-extrabold font-[Rubik] text-white">
                5pb
              </div>
            </div>
            <div className="stat bg-neutral border-base-300 rounded-xl w-80 h-34">
              <div className="stat-figure text-white">
                <GiGasMask size={32} />
              </div>
              <div className="stat-title h5-font text-accent">
                Nitrogen Dioxide (NO₂)
              </div>
              <div className="stat-value font-extrabold font-[Rubik] text-white">
                45pb
              </div>
            </div>
          </div>

          <div className="w-full h-[50vh] flex flex-row justify-between items-center mt-20 gap-4">
            <div
              data-aos="fade-down"
              className="bg-neutral h-full min-h-full w-4/10 rounded-xl shadow p-[3%] flex flex-col gap-20"
            >
              <div className="w-full flex flex-row justify-between">
                <h4 className="h3-font text-accent">AIR QUALITY INDEX</h4>
                <div className="flex items-center justify-center w-32 h-32 bg-white rounded-full">
                  <h1 className="text-success font-extrabold font-[Rubik] text-7xl">
                    49
                  </h1>
                </div>
              </div>

              <p className="text-white">
                The air quality is <strong>good</strong>, meaning it’s generally
                safe, but those who are sensitive (such as individuals with
                asthma or respiratory conditions) may experience mild
                discomfort.
              </p>
            </div>

            <div
              data-aos="fade-down"
              className="bg-neutral h-full w-1/2 rounded-xl shadow p-[3%]"
            >
              <div className="w-full h-full">
                <DashboardLineChart />
              </div>
            </div>
          </div>

          <div
            data-aos="fade-down"
            className="bg-neutral w-full h-screen rounded-xl shadow p-[3%] mt-20"
          >
            <DasboardBarChart />
          </div>
        </div>
      </div>
      <Footer bgColor="bg-[#000000]" />
    </div>
  );
}

export default Dashboard;
