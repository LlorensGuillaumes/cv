import { useState } from "react";
import { useEffect } from 'react';
import "./App.css";
import About from "./components/About/About";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import Hero from "./components/Hero/Hero";
import More from "./components/More/More";
import { CV } from "./CV/CV";
import { setHero } from "./redux/hero/hero.actions";
import { setAbout } from "./redux/about/about.actions.js";

function App() {
  //destruccturing de CV
  //creamos los componentes y les mandamos los datos
  //en cada componente pinto los datos en div, h3, ettccc
    //const { hero } = CV;
  
   

  const { education, hero, experience, habilities, languages, volunteer } = CV;
  const [mostrar, setMostrar] = useState('pepe')

  useEffect(() => {
      setHero(hero);
    }, [hero]);

    useEffect(() => {
      setAbout(About);
    }, [About]);



  return (
    <div className="App">
      <Hero hero={hero} />

      <div>
        <button type="button" onClick={()=>setMostrar('About')}>SOBRE MI</button>
        <button type="button"  onClick={()=>setMostrar('Educación')}>EDUCACIÓN</button>
        <button type="button"  onClick={()=>setMostrar('Experiencia')}>EXPERIENCIA</button>
        <button type="button" onClick={()=>setMostrar('More')}>OTROS</button>
      </div>
      
      {mostrar==='About' && <About about={hero.aboutMe} /> }
      {mostrar==='Educación' && <Education educacion={education} /> }
      {mostrar==='Experiencia' && <Experience experience={experience} /> }
      {mostrar==='More' && <More
        habilities={habilities}
        languages={languages}
        volunteer={volunteer}
      /> }
   


      
     
      
      
    </div>
  );
}

export default App;
