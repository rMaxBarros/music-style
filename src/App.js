import Form from "./components/Form";
import Header from "./components/Header";
import Terms from "./components/Terms";

import './App.css';

function App() {
  return (
    <>
      <main>
        <Header />
        <h2>Inscreva-se e tenha atualizações sobre shows perto de você!</h2>
        <Form />
        <Terms />
      </main>
    </>
  );
}

export default App;
