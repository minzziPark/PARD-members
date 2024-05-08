import styled from "styled-components";
import Title from "./components/Title";
import React, { useEffect, useState } from "react";
import { getMembersAPI } from "./API/AxiosAPI";
import FilterButton from "./components/FilterButton";
import Member from "./components/Member";
import { members_dummy } from "./API/dummy";
import AddMember from "./components/AddMember";

function App() {
  const [members, setMembers] = useState([]);
  const [part, setPart] = useState("all");
  const [changed, setChanged] = useState(false);
  const parts = ["ALL", "SERVER", "iOS", "WEB"];

  const getMember = async () => {
    const response =
      part === "all"
        ? await getMembersAPI("")
        : await getMembersAPI(`?part=${part}`);
    const newData = response.data;
    setMembers(newData);
  };

  useEffect(() => {
    getMember();
  }, [part]);

  return (
    <Background>
      <Title />
      <FilterContainer>
        {parts.map((partname) => {
          return (
            <FilterButton
              key={partname}
              part={partname}
              setPart={setPart}
              selected={part}
            />
          );
        })}
      </FilterContainer>
      <AddMember />
      <Container />
      {members.map((member) => {
        return <Member key={member.id} member={member} />;
      })}
    </Background>
  );
}

const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100dvw;
  height: 100dvh;
  background: #222222;
`;

const FilterContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Container = styled.div`
  width: 600px;
  border-bottom: 1px solid white;
  display: flex;
  flex-direction: row;
  /* justify-content ; */
  align-items: center;
`;

export default App;
