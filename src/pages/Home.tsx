import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
import { loadDestinations } from "../store/destination.slice";

export function Home() {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(loadDestinations());
  }, [dispatch]);

  return (
    <>
      <h2>Home page</h2>
    </>
  );
}
