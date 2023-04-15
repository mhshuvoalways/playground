import React, { useState, useEffect } from "react";

const App = () => {
  const [defaultValue, setStateDefaultValue] = useState(0);

  useEffect(() => {
    const refreshTime = localStorage.getItem("refreshTime");
    if (refreshTime > 1000) {
      setTimeout(() => {
        window.location.reload();
      }, refreshTime);
    }
  }, []);

  useEffect(() => {
    setStateDefaultValue(localStorage.getItem("refreshTime"));
  }, []);

  const onChangeHandler = (event) => {
    setStateDefaultValue(event.target.value);
  };

  const startRefresh = () => {
    window.location.reload();
    localStorage.setItem("refreshTime", defaultValue);
  };

  const stopRefresh = () => {
    window.location.reload();
    localStorage.removeItem("refreshTime");
    setStateDefaultValue(0);
  };

  return (
    <div>
      <input type="number" value={defaultValue} onChange={onChangeHandler} />
      <button onClick={startRefresh}>Start</button>
      <button onClick={stopRefresh}>Stop</button>
    </div>
  );
};

export default App;
