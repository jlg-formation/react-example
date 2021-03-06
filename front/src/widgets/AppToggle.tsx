function AppToggle({
  action,
  initialState = true,
  label,
}: {
  action: (state: boolean) => void;
  initialState: boolean;
  label: { on: JSX.Element; off: JSX.Element };
}): JSX.Element {
  const handleChange = () => {
    action(!initialState);
  };
  return (
    <label className="toggle">
      <input
        type="checkbox"
        role="switch"
        checked={initialState}
        onChange={handleChange}
      />
      <div className="switch">
        <div className="ergo">{initialState ? label.on : label.off}</div>
      </div>
    </label>
  );
}

export default AppToggle;
