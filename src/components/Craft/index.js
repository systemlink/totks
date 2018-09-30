import React from 'react';
import styled from "styled-components";

import Card from '../Card';

const Craft = () => (
  <section>
    <Title>Craft</Title>

    <CardList>
      <Card title="マイコンの研究成果を追加しました">
        <p>マイコンの研究成果を追加しました。(体験的マイコン学習) 今回はIchigoJamを試してみました。Ichig […]</p>
      </Card>

      <Card title="マイコンの研究成果を追加しました">
        <p>マイコンの研究成果を追加しました。(体験的マイコン学習) 今回はmilkcocoaというBaasとWindow […]</p>
      </Card>

      <Card title="マイコンの研究成果を追加しました">
        <p>マイコンの研究成果を追加しました。(体験的マイコン学習) 今回はGR-CITRUSというマイコンを、Chrom […]</p>
      </Card>

      <Card title="マイコンの研究成果を追加しました">
        <p>マイコンの研究成果を追加しました。(体験的マイコン学習) 今回はGR-CITRUSというマイコンを、Chrom […]</p>
      </Card>

      <Card title="マイコンの研究成果を追加しました">
        <p>マイコンの研究成果を追加しました。(体験的マイコン学習) 今回はGR-CITRUSというマイコンを、Chrom […]</p>
      </Card>

      <Card title="マイコンの研究成果を追加しました">
        <p>マイコンの研究成果を追加しました。(体験的マイコン学習) 今回はGR-CITRUSというマイコンを、Chrom […]</p>
      </Card>

      <Card title="マイコンの研究成果を追加しました">
        <p>マイコンの研究成果を追加しました。(体験的マイコン学習) 今回はGR-CITRUSというマイコンを、Chrom […]</p>
      </Card>

      <Card title="マイコンの研究成果を追加しました">
        <p>マイコンの研究成果を追加しました。(体験的マイコン学習) 今回はGR-CITRUSというマイコンを、Chrom […]</p>
      </Card>
    </CardList>
  </section>
);

const Title = styled.h2`
  text-align: center;
  color: #fff;
  font-family: 'Lato', sans-serif;
`;

const CardList = styled.ul`
  margin: 0 auto;
  max-width: 960px;
  font-family: 'Lato', sans-serif;
`;

export default Craft;
