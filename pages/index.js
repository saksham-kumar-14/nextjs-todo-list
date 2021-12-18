import HeadingAnimation from "../Components/heading_animation";
import Greeting from "../Components/greetings";
import Head from "next/head";
import Todos from "../Components/todo_list"; 
import style from "../styles/Home.module.css"; 

const Home =() =>{
  return(
    <>
      <Head>
        <title>Todo List</title>
      </Head>
      <div id={style.home_div}>
        <HeadingAnimation /> 
        <Greeting />  
        <Todos /> 
      </div>
    </>
  )
}

export default Home; 