
type ButtonProps = {
    lable:string;


}
const Button = ({lable}: ButtonProps)=>{
    return (
<div>
    <button className="botton">
        {lable}
    </button>

</div>
    )

}

export default Button;