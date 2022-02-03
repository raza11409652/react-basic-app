import  './button.css'
const MurtazaButton=({text , onClick , ...props})=>{
    return <button onClick={onClick} {...props} className={"murtaza-btn"}>{text}</button>
}
export default  MurtazaButton
