import React, {useEffect, useState} from 'react';
import axios from "axios";
import PageList from "./PageList";

const TodoList = ({page = 1}) => {

    const [current, setCurrent] = useState(page)
    const [dtoList, setDtoList] = useState([])
    const [resultDTO, setResultDTO] = useState({
        pageList:[]
    })
    const movePage = (num) => {
        setCurrent(num)
    }

    useEffect(() => {
        axios.get("http://localhost:8080/todo/pages?page=" + current)
            .then(res => {
                setDtoList(res.data.dtoList)
                setResultDTO(res.data)
            })
    },[current])

    const list = dtoList.map(todo => <li key={todo.tno}>{todo.tno} -- {todo.title} -- {todo.content}</li>)

    return (
        <div>
            <ul>
                {list}
            </ul>
            <PageList {...resultDTO} movePage={movePage}></PageList>

        </div>
    );
};

export default TodoList;