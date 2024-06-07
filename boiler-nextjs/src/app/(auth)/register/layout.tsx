export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h1>auth Header</h1>
      {children}
      <h2>auth Footer</h2>
    </>
  );
}
