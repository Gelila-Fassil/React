
type ProfileProps = {
    name:string;
    age:number;
    isOnline:boolean;
}
const Profile = ({name , age , isOnline} : ProfileProps) =>{
    return (
        <div>
            <h4>{name}</h4>
            <h4>{age}</h4>
            <p>{isOnline ? 'online' : 'offline'}</p>

        </div>
    )
}

export default Profile;