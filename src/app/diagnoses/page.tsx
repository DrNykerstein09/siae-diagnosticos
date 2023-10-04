import React from "react";
import DiagnosesDataTable from "./data-table";
import { columns } from "./columns";

async function getDiagnoses() {
  const res = await fetch("http://localhost:3000/api/diagnosesApi");
  const diagnoses = await res.json();

  return diagnoses; 
}


const Diagnoses = async () => {
  const diagnoses = await getDiagnoses();
  return (
    <div className="container py-10 mx-auto">
      <DiagnosesDataTable columns={columns} data={diagnoses} />
    </div>
  );
};

export default Diagnoses;
