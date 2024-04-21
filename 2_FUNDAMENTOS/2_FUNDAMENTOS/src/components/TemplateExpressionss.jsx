const TemplateExpressions = () => {
  const name = "Jonas";
  const data = {
    age: 31,
    job: "Programmer",
  };
  return (
    <div>
      <h1>Olá {name},tudo bem?</h1>
      <p>Voce atua como: {data.job}</p>
      <p>{4+4}</p>
      <p>{console.log("React App")}</p>
    </div>
  );
};
export default TemplateExpressions;
