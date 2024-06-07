export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div>
        <h1>Category Header</h1>
        {children}
        <h2>Category Footer</h2>
      </div>
    </>
  );
}
