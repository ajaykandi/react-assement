import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
import Header from "./Header";

const Home = () => {
  const nav = useNavigate();
  const [data, setData] = useState();
  const [query, setQuery] = useState("");

  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : false;

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetch("https://restcountries.com/v2/all")
          .then((res) => res.json())
          .then((data) => setData(data));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="home">
      <Header />
      <h1>Countries and Currencies</h1>
      <div className="home-table-container">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search here"
            onChange={(e) => setQuery(e.target.value.toLowerCase())}
          />
          <img alt="" src="https://i.postimg.cc/fTv4LyW5/search.png" />
        </div>
        <table className="table">
          <tbody>
            <tr>
              <th>Name</th>
              <th>Capital</th>
              <th>Currency</th>
            </tr>
            {data
              ?.filter((c) => c.name.toLowerCase().includes(query))
              ?.map((country) => {
                const { name, capital, currencies, numericCode } = country;
                let currency;
                if (currencies !== undefined && currencies.length > 0) {
                  currency =
                    currencies[0]?.name + "  (" + currencies[0]?.symbol + ")";
                } else {
                  currency = "-";
                }

                return (
                  <tr key={numericCode}>
                    <td onClick={() => nav("/capital", { state: { capital } })}>
                      {name}
                    </td>
                    <td>{capital}</td>
                    <td>{currency}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
