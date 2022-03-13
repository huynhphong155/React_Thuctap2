import React from "react";
import ChartDonut from "../../Components/ChartDonut";
import ChartLine from "../../Components/ChartLine";
import RenderUI from "../../HOC/RenderUI";
import "./index.scss";

const data = [
  { name: "Vé đã sử dụng", value: 400, fill: "#4F75FF" },
  { name: "Vé chưa sử dụng", value: 300, fill: "#FF8A48" },
];
const data1 = [
  { name: "Vé đã sử dụng", value: 100, fill: "#4F75FF" },
  { name: "Vé chưa sử dụng", value: 600, fill: "#FF8A48" },
];

function Home() {
  return (
    <RenderUI>
      <div className="Home">
        <div className="Home-wrapper">
          <h1 className="Home-title">Thống kê</h1>
          <div className="Home-top">
            <p>Doanh thu</p>
          </div>
          <ChartLine />
          <div className="Home-bottom">
            <p>Tổng doanh thu theo tuần</p>
            <h3>
              525.145.000 <span>đồng</span>
            </h3>
          </div>
          <div className="ChartDonut">
            <div className="ChartDonut-wrapper">
              <p>Gói gia đình</p>
              <ChartDonut data={data} />
            </div>
            <div className="ChartDonut-wrapper">
              <p>Gói sự kiện</p>
              <ChartDonut data={data1} />
            </div>
          </div>
        </div>
      </div>
    </RenderUI>
  );
}

export default Home;
