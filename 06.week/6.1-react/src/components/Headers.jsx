
export default function Header(props){

    return(
        <>
        <div className="text-2xl text-black p-3 m-3 bg-amber-50">{props.title}</div>
        <div className="text-2xl text-black p-3 m-3 bg-amber-50">{props.desc}</div>
        </>
    )
}