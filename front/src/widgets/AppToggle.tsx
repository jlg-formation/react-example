import { useState } from "react";

function AppToggle({
  action,
  initialState = true,
  label,
}: {
  action: (state: boolean) => void;
  initialState: boolean;
  label: { on: JSX.Element; off: JSX.Element };
}): JSX.Element {
  console.log("app toggle start");
  const [state, setState] = useState(initialState);
  console.log("state: ", state);
  const handleClick = () => {
    console.log("handle click");
    const newState = !state;
    setState(newState);
    action(newState);
  };
  return (
    <label className="toggle">
      <input type="checkbox" role="switch" onClick={handleClick} />
      <div className="switch">
        <div className="ergo">{state ? label.on : label.off}</div>
      </div>
    </label>
  );
}

export default AppToggle;
