import { useState, useEffect } from "react"
import "./index.css"
const Carousel = ({ data, cnt = 4,time =15000 }) => {
    const [items, setItems] = useState(data);
    let timer;

    useEffect(() => {
        timer = setTimeout(() => {
            const newData = [...items];
            newData.push(newData.shift())
            setItems(newData);
        }, time);
        return () => clearTimeout(timer);
    })
    return <>
        {items.filter((el, i) => i < cnt)}
    </>
}
export default Carousel;