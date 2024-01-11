import {useMemo, useState } from "react";
import Pokemon from "./pokemon/Pokemon";

export default function Fight(props: { names: string[] }) {
  const [faintedArray, setFaintedArray] = useState<boolean[]>(
    new Array(props.names.length).fill(false)
  );
  const doWehaveAWinner = useMemo(() => faintedArray.filter(fainted => !fainted).length === 1,[faintedArray]);
  if(doWehaveAWinner){
    const indexOfWinner = faintedArray.findIndex(fainted=>!fainted);
    const winnersName = props.names.at(indexOfWinner);
    return <>The winner is {winnersName}</>
  }
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
