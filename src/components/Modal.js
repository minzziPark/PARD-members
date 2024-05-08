import React, { useState } from "react";
import styled from "styled-components";
import { getMembersAPI, postMemberAPI } from "../API/AxiosAPI";

function Modal({ isOpen, closeModal, method, member }) {
  const title = method === "post" ? "REGISTER" : "MODIFY";
  const [newData, setNewData] = useState({
    name: member.name,
    part: member.part,
    age: parseInt(member.age),
  });
  const contents = ["NAME", "PART", "AGE"];

  const memberDataHandler = (event) => {
    const { value, name } = event.target;
    name === "age"
      ? setNewData({
          ...newData,
          [name]: value ? parseInt(value) : 0,
        })
      : setNewData({
          ...newData,
          [name]: value,
        });
    // console.log(newData);
  };

  const submitHandler = async () => {
    try {
      const response =
        method === "post"
          ? await postMemberAPI(newData)
          : console.log("구현필요");
      closeModal();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Background style={{ display: isOpen ? "block" : "none" }}>
      <Container>
        <Title>{title}</Title>
        {contents.map((content) => {
          const lowerContent = content.toLowerCase();
          return (
            <InputBox key={content}>
              <div>{content}</div>
              <input
                name={lowerContent}
                value={newData[lowerContent]}
                onChange={memberDataHandler}
              />
            </InputBox>
          );
        })}
        <BtnContainer>
          <CloseBtn onClick={closeModal}>CANCEL</CloseBtn>
          <AddButton onClick={submitHandler}>OK</AddButton>
        </BtnContainer>
      </Container>
    </Background>
  );
}

const Background = styled.div`
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.35);
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 400px;
  max-width: 100%;
  max-height: 90%;
  overflow-y: auto;
  background-color: #222222;
  border: 1px solid #ff5c00;
  border-radius: 10px;
`;

const Title = styled.div`
  color: white;
  font-size: 25px;
  text-align: center;
  margin-bottom: 30px;
`;

const InputBox = styled.div`
  /* width: 350px; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  div {
    width: 50px;
    color: white;
    margin: 0px 10px 10px 0px;
  }
  input {
    width: 250px;
    height: 30px;
    background-color: #222222;
    border: 1px solid white;
    border-radius: 5px;
    margin-bottom: 10px;
    color: white;
    margin-right: 30px;
  }
`;

const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const CloseBtn = styled.button`
  width: 100px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid white;
  background: #222222;
  color: white;
  margin: 20px 10px 20px 10px;
  &:hover {
    cursor: pointer;
  }
`;

const AddButton = styled.button`
  width: 100px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid white;
  background: white;
  color: #222222;
  margin: 20px 10px 20px 10px;
  &:hover {
    cursor: pointer;
  }
`;

export default Modal;
