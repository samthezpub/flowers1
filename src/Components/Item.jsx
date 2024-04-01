import { Paper, Button, Rating } from '@mui/material'

export default function Item({name, rating, text})
{
    return (
        <div className="item">
            <h2 className="item_title">{name}</h2>
            <Rating value={rating} readOnly></Rating>
            <p className="item_text">{text}</p>

        </div>
    )
}