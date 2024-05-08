import styled from "styled-components";

function Title() {
  return (
    <Layout>
      <img src={process.env.PUBLIC_URL + "/img/Logo.png"} width="150px" />
    </Layout>
  );
}

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100dvw;
  height: 100px;
`;

export default Title;
