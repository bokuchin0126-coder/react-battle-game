function Log({ logs }) {
    
    return (
        <div>
            <h2>Log</h2>

            {logs.map((log, index) => {
                <p key={index}>{log}</p>
            })}
        </div>
    )
}

export default Log