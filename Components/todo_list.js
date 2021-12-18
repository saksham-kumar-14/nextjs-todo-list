import React, { useState } from "react";
import style from "../styles/todo_styles.module.css"; 

const Todos = () =>{
    const [all_todos, set_all_todos] = useState([]); 
    const [current_todo, set_current_todo] = useState(""); 

    function add_todo(e){ 
        e.preventDefault(); 
        set_all_todos([
            ... all_todos, 
            {"name" : current_todo, "completed" : true}
        ])
    }

    function delete_todo(index){
        const new_arr = all_todos.filter(item => all_todos.indexOf(item) != index); 
        set_all_todos(new_arr); 
    }

    function handle_completion(index_){
        const new_arr = all_todos.map((e,index)=>{
            if(index === index_){
                return{
                    ...e,
                    completed : !e.completed
                }; 
            }
            return e; 
        })

        set_all_todos(new_arr); 
    }

    return(
        <div id={style.todo_list_div}>
            <h1>Todos</h1>
            <form id={style.create_div}>
                <input id={style.create_todo_input} onChange={(e)=>{
                    set_current_todo(e.target.value)     
                }} type="text"/>
                <button id={style.create_btn} onClick={add_todo}>Create</button> 
            </form>

            <div id={style.todos_list}>
                {all_todos.map((e, index)=>{
                    return(
                        <>
                        <div className={style.todo}>
                            <button className={style.delete_btn} onClick={()=>{
                                handle_completion(index)
                            }}><img className={style.done_img} src="/completed.png" /></button>
                            <span className={style.todo_name}> {e.name} </span>  
                            <button className={style.done_btn} onClick={()=>{
                                delete_todo(index)
                            }}><img className={style.delete_img} src="/delete.png"/></button>
                        </div>

                        <style jsx>{` 
                         div{
                            text-decoration : ${e.completed ? "none" : "line-through"}
                         }
                        `}</style>
                        </>
                    )
                })}
            </div>
        
        </div>
    )
}

export default Todos; 