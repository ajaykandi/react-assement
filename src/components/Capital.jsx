import { useLocation } from "react-router-dom";
import Header from "./Header";

const Capital = () => {
  let { capital } = useLocation().state;
  return (
    <div
      className="capital"
      style={{ minHeight: "100vh", background: " #1E2432", color: "white" }}
    >
      <Header />
      <h1>{capital}</h1>
    </div>
  );
};

export default Capital;
