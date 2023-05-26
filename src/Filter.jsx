const Filter = ({ scents, setCheckedScents }) => {

  function handleClick() {
    const checkboxes = document.querySelectorAll(".scent");
    const checked = [];
    for (let i = 0; i < checkboxes.length; ++i) {
      if (checkboxes[i].checked) {
        checked.push(checkboxes[i].name);
      }
    }
    setCheckedScents(checked);
  }

  return (
    <>
      {scents.length > 0 ? (
        <>
          <div>
            {scents.map((scent) => {
              return (
                <>
                  <input
                    type="checkbox"
                    className="scent"
                    name={`${scent}`}
                    onChange={handleClick}
                  />
                  <label htmlFor={`${scent}`}>{`${scent.charAt(0).toUpperCase()}${scent.slice(1)}`}</label>
                </>
              );
            })}
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default Filter;
