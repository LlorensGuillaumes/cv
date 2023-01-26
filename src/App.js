import { useState } from "react";
import "./App.css";
import About from "./components/About/About";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import Hero from "./components/Hero/Hero";
import More from "./components/More/More";
import { CV } from "./CV/CV";

function App() {
    //destruccturing de CV
    //creamos los componentes y les mandamos los datos
    //en cada componente pinto los datos en div, h3, ettccc

    const { education, hero, experience, habilities, languages, volunteer } = CV;
    const [mostrar, setMostrar] = useState("");

    const menu = [
        { path: "about", name: "SOBRE MI", component: <About about={hero.aboutMe} /> },
        { path: "education", name: "EDUCACIÓN", component: <Education educacion={education} /> },
        { path: "experience", name: "EXPERIENCIA", component: <Experience experience={experience} /> },
        {
            path: "more",
            name: "OTROS",
            component: <More habilities={habilities} languages={languages} volunteer={volunteer} />,
        },
    ];

    return (
        <div className="App">
            <Hero hero={hero} />

            <div>
                {menu.map((item) => (
                    <button key={item.path} type="button" onClick={() => setMostrar(item.path)}>
                        {item.name}
                    </button>
                ))}
            </div>

            {menu.map(menuItem => {
              return menuItem.path === mostrar ? menuItem.component : null
            })}
        </div>
    );
}

export default App;
