import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
import {
  loadDestinations,
  selectDreamDestinations,
  selectDreamDestinationsMemo,
} from "../store/destination.slice";
import { useAppSelector } from "../hooks/useAppSelector";

export function Home() {
  const dispatch = useDispatch<AppDispatch>();

  // const destinations = useAppSelector((state) =>
  //   selectDreamDestinations(state)
  // );

  const destinations = useAppSelector((state) =>
    selectDreamDestinationsMemo(state)
  );

  useEffect(() => {
    dispatch(loadDestinations());
  }, [dispatch]);

  return (
    <>
      {destinations &&
        destinations.map((d) => <button key={d.code}>{d.name}</button>)}
    </>
  );
}
