import "./RoleCard.scss";

interface PropType {
    imagePath: string,
    children?: React.ReactNode 
}


export default function RoleCard({ imagePath, children }: PropType) {
    return (
        <div className="role-card-container">
            <div className="role-card-image-container">
                <img src={imagePath} className="role-card-image" />
            </div>

            <div className="role-card-content">
                {children}
            </div>
        </div>
    );
}