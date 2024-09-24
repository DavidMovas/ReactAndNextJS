export default function Button () {

    const handelClick = () => {
        console.log("clicked");
    }

    return(
        <div>
            <button onClick={handelClick}>Increment</button>
        </div>
    )
}