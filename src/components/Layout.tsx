export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1>Layout</h1>
      <main>{children}</main>
    </div>
  );
}
