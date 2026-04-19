export default function Honeypot({ name }: { name: string }) {
  return (
    <div style={{ position: "absolute", left: "-9999px" }}>
      <label htmlFor={name}>title</label>
      <input
        id={name}
        type="text"
        name={name}
        tabIndex={-1}
        autoComplete="off"
      />
    </div>
  );
}
