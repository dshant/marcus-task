import Header from "@/components/Header";
import Layout from "@/components/Layout";
import React, { useEffect, useState } from "react";
import styles from "./index.module.css";

const Teams = () => {
  // State to store teams data
  const [teams, setTeams] = useState([]);

  // Function to fetch teams data from JSON file
  const fetchTeams = async () => {
    try {
      // Fetch data from teams.json file
      const res = await fetch("/json/teams.json");
      const jsonData = await res.json();
      // Update teams state with fetched data
      setTeams(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Fetch teams data when component mounts
  useEffect(() => {
    fetchTeams();
  }, []);

  return (
    <Layout>
      <Header title="Teams" />
      <div className={styles.main}>
        <h3 className={styles.heading}>Users Data</h3>
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead className={styles.tableHead}>
              <tr>
                <th scope="col" className="p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-all-search"
                      type="checkbox"
                      className={styles.input}
                    />
                    <label for="checkbox-all-search" className="sr-only">
                      checkbox
                    </label>
                  </div>
                </th>
                <th scope="col" className={styles.head}>
                  Id
                </th>
                <th scope="col" className={styles.head}>
                  Name
                </th>
                <th scope="col" className={styles.head}>
                  Leader
                </th>
                <th scope="col" className={styles.head}>
                  Location
                </th>
                <th scope="col" className={styles.head}>
                  Members
                </th>

                <th scope="col" className={styles.head}>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {teams?.map((data) => (
                <tr className={styles.tableRow}>
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-table-search-1"
                        type="checkbox"
                        className={styles.input}
                      />
                      <label for="checkbox-table-search-1" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </td>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {data?.id}
                  </th>
                  <td className={styles.tableData}>{data?.name}</td>
                  <td className={styles.tableData}>{data?.leader}</td>
                  <td className={styles.tableData}>{data?.location}</td>
                  <td className={styles.tableData}>
                    <div className="flex gap-2">
                      {data?.members?.map((data, index) => (
                        <span
                          className="border border-[#eeeeee] py-1 px-3 rounded-3xl text-xs font-medium"
                          key={index}
                        >
                          {data}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="flex items-center px-6 py-4">
                    <a href="#" className={styles.edit}>
                      Edit
                    </a>
                    <a href="#" className={styles.remove}>
                      Remove
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default Teams;
