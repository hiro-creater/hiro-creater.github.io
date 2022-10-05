import "./header.css";
import { useNavigate } from 'react-router-dom';
import { Burger } from "@mantine/core";
import { useState } from "react";

export default function Header(){
    const [opened, setOpened] = useState(false);
    const navigate = useNavigate();
    const load_to_home = (event:React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        console.log(event);
        navigate("/");
    }
    const load_to_introduction = (event:React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        console.log(event);
        navigate("/introduction");
    }
    const load_to_career = (event:React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        console.log(event);
        navigate("/career");
    }
    const load_to_strongweak = (event:React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        console.log(event);
        navigate("/strongweak");
    }
    const burger = (event:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        console.log(event);
        setOpened((e) => !e);
    }
    return(
        <header>
            <Burger className="burger" color="white" size="lg" opened={opened} onClick={burger}/>
            <div className="homelogo">
                <h1>Hiro@s</h1>
            </div>
            <div className="header_menu" onClick={load_to_home}>
                <p>ホーム</p>
            </div>
            <div className="header_menu" onClick={load_to_introduction}>
                <p>自己紹介</p>
            </div>
            <div className="header_menu" onClick={load_to_career}>
                <p>経歴</p>
            </div>
            <div className="header_menu" onClick={load_to_strongweak}>
                <p>長所と短所</p>
            </div>
        </header>
    );
}