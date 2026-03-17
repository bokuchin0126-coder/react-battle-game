import { useReducer, useEffect } from "react"
import { battleReducer } from "./battleReducer"

export function useBattle() {

    const initialState = {
        playerHp: 100,
        enemyHp: 100,
        enemyType: "",
        logs: []
    }

    const [state, dispatch] = useReducer(battleReducer, initialState)

    async function spawnEnemy() {
        const id = Math.floor(Math.random() * 80) + 1

        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const data = await res.json()

        dispatch({
          type: "SPAWN_ENEMY",
          name: data.name,
          sprite: data.sprites.front_default,
          enemyType: data.types[0].type.name
        })
    }

    function attack() {
        dispatch({type: "ATTACK"})
    }

    return {
        state,
        attack,
        spawnEnemy
    }
}