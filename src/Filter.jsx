const Filter = ({ scents, setCheckedScents }) => {
  function handleClick() {
    const checkboxes = document.querySelectorAll(".scent");
    console.log(checkboxes);
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
                    checked={true}
                  />
                  <label htmlFor={`${scent}`}>{scent}</label>
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
