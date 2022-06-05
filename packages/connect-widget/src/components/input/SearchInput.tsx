import { FunctionalComponent, h, ComponentProps } from "preact";
import style from "./input.module.css";

import { TextInput } from "./TextInput";

type SearchInputProps = Partial<ComponentProps<typeof TextInput>>;

const SearchIcon: FunctionalComponent = (props) => (
  <svg
    width={16}
    height={15}
    viewBox="0 0 16 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={style.searchIcon}
    {...props}
  >
    <path
      d="M15.088 13.19l-3.351-3.13a6.19 6.19 0 10-1.18 1.179l3.352 3.13a.844.844 0 001.179 0 .834.834 0 000-1.18zM2.333 6.333a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0z"
      fill="#818283"
    />
  </svg>
);

export const SearchInput: FunctionalComponent<SearchInputProps> = (props) => {
  return (
    <div className={style.searchInputContainer}>
      <SearchIcon />
      <TextInput {...props} placeholder="Search" />
    </div>
  );
};
