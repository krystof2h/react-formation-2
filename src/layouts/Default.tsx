import { Outlet } from "react-router-dom";

export function Default() {
  return (
    <>
      <header>
        <h1>Click travel</h1>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
