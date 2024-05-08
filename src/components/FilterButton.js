import styled from "styled-components";

function FilterButton({ part, setPart, selected }) {
  const handlePart = () => {
    part === "iOS" ? setPart(part) : setPart(part.toLowerCase());
  };
  return (
    <Button
      part={part}
      selected={selected}
      onClick={() => {
        handlePart();
      }}
    >
      {part}
    </Button>
  );
}

const Button = styled.button`
  width: 100px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid white;
  color: ${(props) =>
    props.part.toLowerCase() === props.selected.toLowerCase()
      ? "#222222"
      : "white"};
  margin: 0px 10px 0px 10px;
  background-color: ${(props) =>
    props.part.toLowerCase() === props.selected.toLowerCase()
      ? "white"
      : "#222222"};

  &:hover {
    background-color: white;
    color: #222222;
    cursor: pointer;
  }
  &:focus {
    background-color: white;
    color: #222222;
  }
`;

export default FilterButton;
