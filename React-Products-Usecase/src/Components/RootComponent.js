import React from "react"
import Header from "./Usecase/Header/header"
import Content from "./Usecase/Content/content"
import NavigationBar from "./Usecase/Header/navbar"
import Footer from "./Usecase/Header/footer"
import 'bootstrap/dist/css/bootstrap.min.css';

class RootComponent extends React.Component {

    render() {
        return (
            <div>
                <Header></Header>
                <NavigationBar></NavigationBar>
                <Content></Content>
                <Footer></Footer>
            </div>
        )
    }

}


export default RootComponent;