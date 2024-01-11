import { useState } from "react";

export function useHealth(initialHealth: number){
    const [health, setHealth] = useState(initialHealth);

    const drinkHealthPotion = () => {
        setHealth((prevHealth) => prevHealth + 10);
      };
    const takeDamage = () => {
        setHealth(
            (prevHealth) => prevHealth - Math.ceil(Math.random() * 10)
          );
    }
    return {
        health,
        drinkHealthPotion,
        takeDamage
    }
}