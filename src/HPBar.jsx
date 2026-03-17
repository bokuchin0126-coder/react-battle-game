function HPBar({ hp }) {

    let color = "green"

    if (hp < 50) {
        color = "orange"
    }

    if (hp < 20) {
        color = "red"
    }

    return (
        <div style={{
            width: "200px" ,
            border: "1px solid black"
        }}>
            <div style={{
                width: hp + "%",
                height: "20px",
                background: color
            }}></div>
        </div>
    )
}

export default HPBar