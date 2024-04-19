import { useEffect, useState } from "react";

export default function RandomColor() {
  const [typeColor, setTypeColor] = useState("hex");
  const [color, setColor] = useState("#000000");
  function randomcolorutility(length) {
    return Math.floor(Math.random() * length);
  }
  function handleCreateRandomHexColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomcolorutility(hex.length)];
    }
    console.log(hexColor);
    setColor(hexColor);
  }
  function handleCreateRandomRgbColor() {
    const r = randomcolorutility(256);
    const g = randomcolorutility(256);
    const b = randomcolorutility(256);
    setColor(`rgb(${r},${g},${b}`);
  }
  useEffect(() => {
    if (typeColor === "rgb") {
      handleCreateRandomHexColor();
    } else {
      handleCreateRandomRgbColor();
    }
  }, [typeColor]);
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
      }}
      className="container"
    >
      <button onClick={() => setTypeColor("hex")}>create HEX Color</button>
      <button onClick={() => setTypeColor("rgb")}>Generate RGB Color</button>
      <button
        onClick={
          typeColor === "hex"
            ? handleCreateRandomHexColor
            : handleCreateRandomRgbColor
        }
      >
        Generate Random Color
      </button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "60px",
          margintop: "35px",
          flexDirection: "column",
          columnGap: "10px",
        }}
      >
        <h3>{typeColor === "rgb" ? "RGB Color" : "Hex Color"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
}
