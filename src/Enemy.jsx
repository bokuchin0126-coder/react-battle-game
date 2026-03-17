function Enemy({ hp, name, sprite, type }) {
    return (
        <div>
            <h2>{name}</h2>
            <img src={sprite} width="120" />
            <p>HP: {hp}</p>
            <p style={{ color: type === "grass" ? "green" : "blue" }}>Type: {type}</p>
        </div>
    )
}

export default Enemy