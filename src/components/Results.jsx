const Results = ({ username, email, password, setState }) => {
  return (
    <form
      id="results"
      onSubmit={() => {
        setState(false);
      }}
    >
      <h1>Results</h1>
      <div className="container">
        <p>{`Name: ${username}`}</p>
        <p>{`Email: ${email}`}</p>
        <p>{`Password: ${password}`}</p>
      </div>
      <input id="sub" type="submit" value="Edit your information" />
    </form>
  );
};
export default Results;
