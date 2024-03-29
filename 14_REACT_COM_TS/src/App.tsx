import React, {createContext} from 'react';
import './App.css';
// 4 - Importação de componentes
import FirstComponent from './components/FirstComponent';
// 5 - Desestruturando props
import SecondComponent from './components/SecondComponent';
import Destructuring, {Category} from './components/Destructuring';
// 6 - useState
import State from './components/State';
// 10 - Utilizando contexto
import Context from './components/Context';
// 8 - Types
type textOrNull = string | null;
// 9 - Context
interface IAppContext {
  language: string,
  framework: string,
  projects: number,
}

export const AppContext = createContext<IAppContext | null>(null);

function App() {

  // 1 - Variáveis
  const name: string = "Matheus";
  const age: number = 30;
  const isWorking: boolean = true;

  // 2 - Funções
  const userGreeting = (name: string): string => {
    return `Olá, ${name}!`;
  };

  // 8 - Types
  const myText: textOrNull = "Tem algum texto aqui";
  let mySecondText: textOrNull = null;

  mySecondText = "Opa";

  // 9 - Context
  const contextValue: IAppContext  = {
    language: "JavaScript",
    framework: "Express",
    projects: 5,
  }

  return (
    <AppContext.Provider value={contextValue}>
    <div className="App">
     <h1>TypeScript com React</h1>
     <h2>Nome: {name}</h2>
     <p>Idade: {age}</p>
     {isWorking && (<p>Está trabalhando!</p>)}
     <h3>{userGreeting(name)}</h3>
     <FirstComponent/>
     <SecondComponent name='Segundo'/>
     <Destructuring 
      title='Primeiro post' 
      content='Algum conteúdo' 
      commentsQty={10}
      tags={["ts", "js"]}
      category={Category.TS}
     />
     <State/>
     {myText && <p>Tem texto na variável</p>}
     {mySecondText && <p>Tem texto na variável</p>}
     <Context/>
    </div>
    </AppContext.Provider>
  );
}

export default App;
