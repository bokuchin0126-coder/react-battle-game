import { useState, useEffect } from "react"
import { useReducer } from "react"
import { battleReducer } from "./battleReducer"
import { useBattle } from "./useBattle"
import Player from "./Player"
import Enemy from "./Enemy"
import HPBar from "./HPBar"
import Log from "./Log"

function App() {
  const { state, attack, spawnEnemy } = useBattle()

  useEffect(() => {
    spawnEnemy()
  }, [])

  useEffect(() => {
    if (state.enemyHp <= 0) {
      spawnEnemy()
    }
  }, [state.enemyHp])

  return (
    <>
     <h1>Battle Game</h1>

     <Player hp={state.playerHp} />
     <HPBar hp={state.playerHp} />

     <Enemy hp={state.enemyHp} name={state.enemyName} sprite={state.enemySprite} type={state.enemyType} />
     <HPBar hp={state.enemyHp} />
     <button onClick={attack} disabled={state.isGameOver}>Attack</button>
     {state.isGameOver && <h2>GAME OVER</h2>}

     <Log logs={state.logs} />

    </>
  )
}

export default App