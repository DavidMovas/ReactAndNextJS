export default function Title({locked}) {
    return (
        <h1 className="title">
            {locked ? <span>Limit Reached <b>Buy PRO</b></span> : <span>Fancy Counter</span>}
        </h1>
    )
}