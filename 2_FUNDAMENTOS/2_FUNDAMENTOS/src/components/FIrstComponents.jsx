import MyComponents from "./Mycomponents";
const FirstComponents = () => {
  //Meu primeirot component
  /* 
multi line
*/
  return (
    <div className="App">
      {/* AlgumComentario */}
      <h1>Hello World </h1>
      <p className="teste">Meu texto</p>
      <MyComponents />
    </div>
  );
};

export default FirstComponents;
