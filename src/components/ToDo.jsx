import React from 'react'

const ToDo = ({
  item,
  setItem,
  handleAdd,
  list,
  handleDeleteAll,
  handleDelete,
}) => {
  return (
    <div className="container">
      <section className="sec">
        <input
          type="text"
          className="inp"
          placeholder="Enter"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <button className="btn" onClick={handleAdd}>
          Add
        </button>

        <button className="btn" onClick={handleDeleteAll}>
          DeleteAll
        </button>
      </section>

      <div className={`list ${list.length > 0 ? "show" : ""}`}>
        <ul className="ullist">
          {list.map((el, index) => (
            <li key={index}>
              {el}
              <button
                className="btn-delete"
                onClick={() => handleDelete(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ToDo