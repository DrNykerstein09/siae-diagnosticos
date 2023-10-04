async function getDiagnoses() {
  const res = await fetch("http://localhost:3000/api/diagnosesApi");
  const diagnoses = await res.json();

  return diagnoses; // Return the fetched data
}

// Define the Diagnoses type outside of the function
export type Diagnoses = typeof getDiagnoses extends () => Promise<infer T>
  ? T
  : never;
