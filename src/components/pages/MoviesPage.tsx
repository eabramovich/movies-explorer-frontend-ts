import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button/Button";
import { useTypedDispatch } from "../../hooks/useTypedDispatch";
import { logoutUser } from "../../store/action-creators/auth";

const Movies: FC = () => {
  const navigate = useNavigate();
  const dispatch = useTypedDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/sign-in");
  }

  return (
    <>
      Это страница с фильмами
      <Button title='Выйти' onClick={handleLogout} />
    </>
  )

};

export default Movies;