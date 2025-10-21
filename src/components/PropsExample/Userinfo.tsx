
type UserinfoProps ={
    name:string;
     age:number;
    };

const Userinfo = ({name , age } :UserinfoProps) =>{
    return(
        <div>
            <p>Hi my name is  {name} and i am {age} years old</p>

        </div>
    )
}
export default Userinfo