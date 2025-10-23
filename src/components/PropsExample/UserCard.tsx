
type UserCardProps = {
    user:{
        name: string;
        email: string;
        role: string;
    }
}
const UserCard = ({user}:UserCardProps) =>
{

    return (
        <div>
            <h4>{user.name}</h4>
            <h4>{user.email}</h4>
            <h4>{user.role}</h4>
        </div>
    )
}

export default UserCard;