import { useTheme, Text } from "@nextui-org/react";
import Link from "next/link";
import { useState } from "react";
import { FaSun } from 'react-icons/fa';
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../../interfaces/state";
import { setActiveThemeDart, setDesactiveThemeDart } from "../../reducers/mainReducer";

export const Navbar = () => {
    
  const dispatch = useDispatch();
  const { theme, isDark } = useTheme();

    const { darkTheme} = useSelector((state: State) => state.state) 
  const [dark, setDark] = useState(darkTheme);

  const handleDarkTheme = () => {
    if (!dark) {
      setDark(!dark);
      dispatch(setActiveThemeDart());
    }

    if (dark) {
      setDark(!dark);
      dispatch(setDesactiveThemeDart());
    }
  };

  return (
    <div className="container"
      style={{
        backgroundColor: theme?.colors.gray800.value,
      }}
    >
      <Link href={'/'}>
      <Text color="white" className="title" h2>
        Movies
      </Text>
      </Link>
      <ul className="content">
          <Link href={'/movies/upcoming'} >
          <li className="box">
          <Text className="text" color="white" h5>Up Comming</Text>
        </li>
          </Link>

         <Link href={'/movies/toprated '}>
        <li className="box">
          <Text className="text" color="white" h5>Top Rated</Text>
        </li>
        </Link>
        <FaSun className={dark ? "night"   : "sun"} onClick={handleDarkTheme} />
      </ul>
    </div>
  );
};
