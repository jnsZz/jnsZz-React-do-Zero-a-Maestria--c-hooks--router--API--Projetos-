const MyComponents = () => {
  const Valor1 = 4;
  const Valor2 = 3;
  const Soma = () => {
    const Resultado = Valor1 + Valor2;
    console.log(Resultado)
  };

  return (
    <div>
      <h1>valor 1 = ({Valor1})</h1>
      <h1>valor 2 = ({Valor2})</h1>
      <div>
        <button onClick={Soma}>Clique para saber a Soma no console.log</button>
      </div>
    </div>
  );
};
export default MyComponents;
