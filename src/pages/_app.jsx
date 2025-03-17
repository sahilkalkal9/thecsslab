
import Nav from "@/components/nav/nav"
import "../app/globals.scss"


export default function App({ Component, ...propsPage }) {



    return (
        <div className="App">
            <div className="app-content">
                {/* <Nav /> */}
                <Component {...propsPage} />

            </div>
        </div>
    )
}