import './App.css';
import NavBar from "./Components/NavBar";
import Main from "./Pages/Main";
import Footer from './Components/Footer';

function App() {
    return (<>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap"
                    rel="stylesheet"/>
                <link
                    href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
                    rel="stylesheet"/>
                <meta name="csrf-token" content="{{ csrf_token() }}"/>
            </head>

            <body>
            <div className="App">
                <NavBar></NavBar>
                <Main></Main>
                <Footer></Footer>
            </div>
            </body>
        </>
    )
        ;
}

export default App;
