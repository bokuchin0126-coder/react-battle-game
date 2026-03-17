export function battleReducer(state, action) {
    switch (action.type) {

        case "ATTACK": {

           let damage = 10
           let log = "Player attack!"

           if (state.enemyType === "grass") {
            damage *= 2
            log += "It's super effective!"
           }

           if (state.enemyType === "water") {
            damage *= 0.5
            log += "It's not very effective..."
           }
           const enemyDamage = Math.floor(Math.random() * 10) + 5
           const newEnemyHp = Math.max(0, state.enemyHp - damage)
           const newPlayerHp = Math.max(0, state.playerHp - enemyDamage)

           let isGameOver = false

           if (newEnemyHp === 0 || newPlayerHp === 0) {
            isGameOver = true
           }

           return {
            ...state,
            enemyHp: newEnemyHp,
            playerHp: newPlayerHp,
            isGameOver,
            logs: [
                `${log} ${damage} damage!`,
                ...state.logs
            ]
           }
        }

        case "SPAWN_ENEMY":
            return {
                ...state,
                enemyHp: 100,
                enemyName: action.name,
                enemySprite: action.sprite,
                enemyType: action.enemyType,
                logs: [
                    `${action.name} appeared!`,
                    ...state.logs
                ]
            }

        const initialState = {
            playerHp: 100,
            enemyHp: 100,
            logs: [],
            isGameOver: false
        }

        const playerDamage = 10

        return {
            ...state,

            enemyHp: Math.max(0, state.enemyHp - playerDamage),
            playerHp: Math.max(0, state.playerHp - enemyDamage),
            isGameOver,

            logs: [
                `Player attack! ${playerDamage}`,
                `Enemy attack! ${enemyDamage}`,
                ...state.logs
            ]
        }

        default:
            return state
    }
}