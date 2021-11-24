import React from "react";
import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import json from "../data.json";

const [parent] = json;
const data = parent.response.data;

export default function DisplayTable() {
  const DisplayData = data.map((e) => {
    // console.log('displaydata', data[0].date);
    return (
      <tr key={e.date}>
        <td>{e.date}</td>
        <td>{e.Rating}</td>
        <td>{e.PDContributionCount}</td>
        <td>{e.PDMedianProxyBps}</td>
        <td>{e.LGD}</td>
      </tr>
    );
  });

  return (
    <>
      <br />
      <Table className="table table-striped text-center">
        <thead>
          <tr>
            <th>date</th>
            <th>Rating</th>
            <th>PDContributionCount</th>
            <th>PDMedianProxyBps</th>
            <th>LGD</th>
          </tr>
        </thead>
        <tbody>{DisplayData}</tbody>
      </Table>
    </>
  );
}
