import { useState } from "react";

export default function LikeButton() {

    let [isLiked, setisLiked] = useState(false);

    let [clicks, setclicks] = useState(0);

    
    let toggeleLike = () => {
        setisLiked (!isLiked);
        setclicks(clicks+1);
    }
    
    let styles = {color : "red"}

    return (
        <div>
            <p>clicks = {clicks}</p>
            <p onClick={toggeleLike}>
                {
                    isLiked ? <i style={styles} className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>
                }
            </p>
        </div>
    );
}