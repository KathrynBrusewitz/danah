import React from "react";
import Layout from "../components/Layout";
import styled from "@emotion/styled";
import { ExternalLink } from "../components/Link";

const TypeH1 = styled.h1`
  font-size: 24px;
`;
const TypeH2 = styled.h2`
  font-size: 20px;
`;
const TypeP = styled.p`
  font-size: 18px;
  font-family: "WorkSans-Light";
`;

const WritingPage = () => {
  return (
    <Layout>
      <title>My Writing</title>
      <TypeH1>
        <ExternalLink href="#">Dictumst vestibulum rhoncus</ExternalLink>
      </TypeH1>
      <TypeP>
        Consectetur lorem donec massa sapien faucibus et molestie ac feugiat.
        Lectus quam id leo in vitae turpis.
      </TypeP>
      <TypeP>
        Odio pellentesque diam volutpat commodo sed egestas egestas fringilla
        phasellus.
      </TypeP>
      <TypeH2>
        <ExternalLink href="#">Adipiscing tristique risus</ExternalLink>
      </TypeH2>
      <TypeP>
        Volutpat odio facilisis mauris sit amet. Suspendisse potenti nullam ac
        tortor vitae purus. Donec adipiscing tristique risus nec.
      </TypeP>
      <TypeH2>
        <ExternalLink href="#">
          Quis auctor elit sed vulputate mi sit amet mauris
        </ExternalLink>
      </TypeH2>
      <TypeP>
        Nunc mattis enim ut tellus elementum sagittis vitae et leo. Hendrerit
        dolor <ExternalLink href="#">magna eget est lorem</ExternalLink> ipsum
        dolor sit amet.
      </TypeP>

      <TypeH1>
        <ExternalLink href="#">Risus commodo viverra maecenas</ExternalLink>
      </TypeH1>
      <TypeP>
        Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien
        nec sagittis. Etiam erat velit scelerisque in dictum{" "}
        <ExternalLink href="#">non consectetur</ExternalLink> a erat.
      </TypeP>

      <TypeH1>
        <ExternalLink href="#">Ac turpis egestas integer eget</ExternalLink>
      </TypeH1>
      <TypeP>
        Elementum curabitur vitae nunc sed velit. Ipsum dolor sit amet
        consectetur adipiscing elit pellentesque habitant morbi. Cras semper
        auctor <ExternalLink href="#">neque vitae tempus</ExternalLink> quam
        pellentesque.
      </TypeP>
    </Layout>
  );
};

export default WritingPage;
