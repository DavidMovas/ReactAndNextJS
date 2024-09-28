export default function Button ({setAmount}) {
    return(
        <div>
            <button onClick={
                () => {
                    setAmount((prev) => {
                        return prev + 1
                    });
                }
            }>Increment</button>
        </div>
    )
}