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

const WorkPage = () => {
  return (
    <Layout>
      <title>My Work</title>
      <TypeH1>
        <ExternalLink href="#">Tellus id interdum velit laoreet</ExternalLink>
      </TypeH1>
      <TypeP>
        Pellentesque nec nam aliquam sem et. At risus viverra adipiscing at in
        tellus integer feugiat. Urna molestie at elementum eu. Pellentesque
        dignissim enim sit amet venenatis urna.
      </TypeP>
      <TypeP>
        Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien
        nec sagittis. Etiam erat velit scelerisque in dictum non consectetur a
        erat. Consequat id porta nibh venenatis. Congue mauris rhoncus aenean
        vel elit. Malesuada nunc vel risus commodo viverra maecenas accumsan
        lacus.
      </TypeP>
      <TypeP>
        Elementum curabitur vitae nunc sed velit. Ipsum dolor sit amet.
      </TypeP>
      <TypeH2>Adipiscing tristique risus</TypeH2>
      <TypeP>
        Volutpat odio facilisis mauris sit amet. Suspendisse potenti nullam ac
        tortor vitae purus. Donec adipiscing tristique risus nec. Nunc aliquet
        bibendum enim facilisis gravida. Lorem ipsum dolor sit amet consectetur.
      </TypeP>
      <TypeH2>Quis auctor elit sed vulputate mi sit amet mauris</TypeH2>
      <TypeP>
        Elit sed vulputate mi sit amet mauris commodo quis. Enim ut sem viverra
        aliquet eget sit amet tellus cras. Pharetra convallis posuere morbi leo
        urna molestie. Vitae sapien pellentesque habitant morbi tristique
        senectus. Donec ultrices tincidunt arcu non sodales neque.
      </TypeP>
      <TypeH1>
        <ExternalLink href="#">Id donec ultrices tincidunt arcu</ExternalLink>
      </TypeH1>
      <TypeP>
        Sagittis orci a scelerisque purus. Turpis tincidunt id aliquet risus.
        Fermentum posuere urna nec tincidunt praesent semper feugiat nibh sed.
        Ac orci phasellus egestas tellus rutrum tellus pellentesque. Potenti
        nullam ac tortor vitae purus faucibus ornare. Viverra justo nec ultrices
        dui sapien eget mi proin sed.
      </TypeP>
      <TypeP>
        Cursus mattis molestie a iaculis at erat. Pharetra magna ac placerat
        vestibulum lectus. Vulputate sapien nec sagittis aliquam malesuada
        bibendum arcu vitae.
      </TypeP>
    </Layout>
  );
};

export default WorkPage;
