// Importing necessary components and libraries
import React from "react";
import Header from "@/components/Header";
import Layout from "@/components/Layout";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  LineChart,
  Tooltip,
  Legend,
  Line,
} from "recharts"; // Recharts library for charts
import { BAR_DATA, BAR_GRAPH_DATA, LINE_CHART_DATA } from "@/helpers/constants";

// Helper function to generate path for TriangleBar
const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  }
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
  Z`;
};

// Custom component for TriangleBar
const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const Dashboard = () => {
  return (
    <Layout>
      <Header title="Dashboard" />

      {/* Container for charts */}
      <div className="mt-8 md:flex justify-between">
        {/* Bar chart */}
        <div className="w-full">
          <ResponsiveContainer>
        <BarChart
         
          data={BAR_GRAPH_DATA}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Bar
            dataKey="uv"
            fill="#8884d8"
            shape={<TriangleBar />}
            label={{ position: "top" }}
          >
            {/* Color cells */}
            {BAR_GRAPH_DATA.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))}
          </Bar>
        </BarChart>
        </ResponsiveContainer>
        </div>
        {/* Responsive container for another bar chart */}
        <div className="barChart w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={700}
              height={300}
              data={BAR_DATA}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
              barSize={20}
            >
              <XAxis
                dataKey="name"
                scale="point"
                padding={{ left: 10, right: 10 }}
              />
              <YAxis />
              <Tooltip />
              <Legend />
              <CartesianGrid strokeDasharray="3 3" />
              <Bar dataKey="pv" fill="#8884d8" background={{ fill: "#eee" }} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Wrapper for Line chart */}
      <div className="wrapperChart mt-20">
        <ResponsiveContainer width="100%" height="100%">
          {/* Line chart */}
          <LineChart
            width={500}
            height={300}
            data={LINE_CHART_DATA}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend />
            {/* Line 1 */}
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="pv"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            {/* Line 2 */}
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="uv"
              stroke="#82ca9d"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Layout>
  );
};

export default Dashboard;
