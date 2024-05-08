import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";

function AddMember() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <Container>
      <AddButton onClick={handleModalOpen}>Add Developer</AddButton>
      <Modal
        isOpen={isModalOpen}
        closeModal={handleModalOpen}
        method="post"
        member={{
          name: "",
          part: "",
          age: 0,
        }}
      ></Modal>
    </Container>
  );
}

const Container = styled.div`
  width: 600px;
  display: flex;
  justify-content: end;
`;
const AddButton = styled.button`
  margin: 30px 0px 15px 0px;
  width: 130px;
  height: 30px;
  background-color: #ff5c00;
  color: white;
  border: none;
  border-radius: 10px;

  &:hover {
    cursor: pointer;
  }
`;

export default AddMember;
