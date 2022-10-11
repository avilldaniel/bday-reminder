import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { set } from "../utils/slices/themeSlice";
import { RootState } from "../utils/store";

interface NavProps {}

const Nav: FC<NavProps> = ({}) => {
  const theme = useSelector((state: RootState) => state.theme.value);
  const dispatch = useDispatch();

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
    // console.log({ theme });
  }, [theme]);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    dispatch(set(next));
  };

  return (
    <button onClick={toggleTheme} type="button" aria-label="Toggle theme">
      toggle theme
    </button>
  );
};
export default Nav;
