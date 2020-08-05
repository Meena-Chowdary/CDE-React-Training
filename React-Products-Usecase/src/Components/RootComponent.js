import React from "react"
import Header from "./Usecase/Header/header"
import Content from "./Usecase/Content/content"
import NavigationBar from "./Usecase/Header/navbar"

class RootComponent extends React.Component{

    render(){
        return (
            <div>
                <Header></Header>
                <NavigationBar></NavigationBar>
                <Content></Content>
            </div>
        )
    }

}


export default RootComponent

//<Header></Header>
// <NavigationBar></NavigationBar>