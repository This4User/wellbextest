import './Main.module.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import StartPage from "../StartPage/StartPage";
import TodosPageContainer from "../TodosPage/TodosPageContainer";
import Navbar from "../../Navbar/Navbar";
import s from "./Main.module.css"

const Main = () => {

    const linksArray = [
        {
            name: "Start Page",
            url: "wellbextest/"
        },
        {
            name: "Todos Page",
            url: "wellbextest/todos"
        },
    ]
    return (
        <BrowserRouter>
            <div className={s.container}>
                <div className={s.navbar}>
                    <Navbar linksArray={linksArray}/>
                </div>
                <div className={s.content}>
                    <Routes>
                        <Route
                            path={"wellbextest/"}
                            element={<StartPage/>}
                        />
                        <Route
                            path={"wellbextest/todos"}
                            element={<TodosPageContainer/>}
                        />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default Main;
