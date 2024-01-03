import { useState } from "react";
import Pokemon from "./Pokemon";

export default function Fight(props: { names: string[] }) {
  const [faintedArray, setFaintedArray] = useState<boolean[]>(
    new Array(props.names.length).fill(false)
  );
  console.log(faintedArray);
  return (
    <>
      <div style={{ display: "flex" }}>
        {props.names.map((name, i) => {
          return (
            <Pokemon
              key={i + name}
              name={name}
              health={50}
              fainted={() => {
                setFaintedArray((prevFaintedArray) => {
                  const newArray = [...prevFaintedArray];
                  newArray[i] = true;
                  return newArray;
                });
                console.log(`${name} fainted`);
              }}
            />
          );
        })}
      </div>
    </>
  );
}
