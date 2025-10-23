
type ColorListProps = {
    colors: string[]
}
const ColorsList = ({colors}:ColorListProps)=>{
    return (
        <div>
            <h1>color list</h1>
            <ul >
               {colors.map((items,index)=>(
                <li key={index}>{items}</li>
               ))}
            </ul>

        </div>
    )
}

export default ColorsList;