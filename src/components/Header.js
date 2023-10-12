//props is a obj i.e name and value pair 
export function Header(props){
    return(
        <div>
            <h1>Header {props.name}</h1>
        </div>
    )
}
//in html code if u write js then it shd be in curly brackets

export function Footer(props){
    return(
        <div>
            <h1>Footer {props.brand}</h1>
        </div>
    )
}