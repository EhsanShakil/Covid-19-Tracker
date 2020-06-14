import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../api/api";
import { Line } from "react-chartjs-2";
import Trend from "react-trend";

const Chart = ({ data, country }) => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchdailyData = async () => {
      const fetchingData = await fetchDailyData();
      setDailyData(fetchingData);
    };
    fetchdailyData();
  }, []);
  const lineChart = dailyData[0] ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map((data) => data.confirmed),
            label: "Infected",
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: dailyData.map((data) => data.deaths),
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgba(255, 0, 0, 0.5)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  return (
    <div>
      {lineChart}
      <Trend
        smooth
        autoDraw
        autoDrawDuration={10000}
        autoDrawEasing="ease-out"
        data={[0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]}
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]}
        gradient={["#00c6ff", "#F0F", "#FF0"]}
        radius={25}
        strokeWidth={3.5}
        strokeLinecap={"round"}
      />
      ;
    </div>
  );
};

export default Chart;
