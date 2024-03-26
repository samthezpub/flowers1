import { Paper, Button, Rating } from '@mui/material'

export default function Item(props)
{
    return (
        <div className="item">
            <h2 className="item_title">{props.item.name}</h2>
            <Rating value={props.item.rating} readOnly></Rating>
            <p className="item_text">{props.item.text}</p>

        </div>
    )
}