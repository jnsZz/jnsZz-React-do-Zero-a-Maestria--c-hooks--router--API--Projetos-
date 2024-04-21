const Events = () => {
    const handleMyEvent = (e) => {
        console.log(e);
        console.log("Ativou")
    };

    const renderSomething = (x) => {
        if(x){
            return <h1>Rederizando Isso!</h1>;
        }else{
            return <h1>Também posso renderizar isso!</h1>
        }
    };
  return (
    <div>
      <div>
        <button onClick={handleMyEvent}>Clique Aqui</button>
      </div>
      <div>
        <button onClick={() => console.log ("Clicou")}>Clique aqui</button>
      </div>
      <div>
        <button onClick={() =>{
            if (true){
                console.log ("Isso não deveria existir =)");
            }
        }}>Clique aqui</button>
      </div>
      {renderSomething(true)}
      {renderSomething(false)}
    </div>
  );
};
export default Events;
