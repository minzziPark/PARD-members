import styled from "styled-components";
import { deleteMemberAPI } from "../API/AxiosAPI";
import React, { useState } from "react";
import Modal from "./Modal";

function Member(member) {
  member = member.member;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(!isModalOpen);
  };

  const deleteHandler = async () => {
    try {
      const response = await deleteMemberAPI(`/${parseInt(member.id)}`);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container>
      <Content>{member.name}</Content>
      <Content>{member.part}</Content>
      <Content>{member.age}</Content>
      <Content>
        <ModifyButton onClick={handleModalOpen}>MODIFY</ModifyButton>
        <Modal
          isOpen={isModalOpen}
          closeModal={handleModalOpen}
          method="patch"
          member={member}
        ></Modal>
      </Content>
      <Content>
        <DeleteButton onClick={deleteHandler}>DELETE</DeleteButton>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  width: 600px;
  height: 50px;
  border-bottom: 1px solid white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  width: 100px;
  text-align: center;
  color: white;
`;

const DeleteButton = styled.button`
  width: 80px;
  height: 25px;
  color: #222222;
  background-color: white;
  border: 1px solid #222222;
  border-radius: 10px;
  &:hover {
    background-color: #ff3c3c;
    color: white;
    cursor: pointer;
  }
`;

const ModifyButton = styled.button`
  width: 80px;
  height: 25px;
  color: white;
  background-color: #222222;
  border: 1px solid white;
  border-radius: 10px;
  &:hover {
    background-color: white;
    color: #222222;
    cursor: pointer;
  }
`;

export default Member;
