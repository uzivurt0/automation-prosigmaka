const readln = require("readline");
const rl = readln.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function formatScore(score) {
  if (score >= 90 && score <= 100) {
    return "A";
  } else if (score >= 75 && score < 90) {
    return "B";
  } else if (score >= 55 && score < 75) {
    return "C";
  } else if (score >= 35 && score < 55) {
    return "D";
  } else if (score >= 35 && score < 50) {
    return "E";
  } else if (score >= 0 && score < 40) {
    return "F";
  } else {
    return "Invalid!!";
  }
}

rl.question("Masukan nilai antara 0 dan 100: ", (input) => {
  const score = parseFloat(input);
  if (isNaN(score) || score < 0 || score > 100) {
    console.log("Invalid Input!");
  } else {
    const nilai = formatScore(score);
    console.log("Nilai: " + score + ", Konversi: " + nilai);
  }
  rl.close();
});
