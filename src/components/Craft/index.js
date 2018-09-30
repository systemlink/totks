import React from 'react';
import styled from "styled-components";
import { StaticQuery, graphql } from 'gatsby'

import Card from '../Card';

const query = graphql`
  query {
    contentfulTitleIcon {
      before {
        file {
          url
        }
      }
      after {
        file {
          url
        }
      }
    }
  }
`;

const Craft = ({ data }) => (
  <section>
    <Title
      beforeUrl={data.contentfulTitleIcon.before.file.url}
      afterUrl={data.contentfulTitleIcon.after.file.url}
    >
      Craft
    </Title>

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

  &:before {
    margin-right: 10px;
    content: '';
    display: inline-block;
    background-image: url("${props => props.beforeUrl}");
    background-size: contain;
    width: 24px;
    height: 24px;
  }

  &:after {
    margin-left: 10px;
    content: '';
    display: inline-block;
    background-image: url("${props => props.afterUrl}");
    background-size: contain;
    width: 24px;
    height: 24px;
  }
`;

const CardList = styled.ul`
  margin: 0 auto;
  max-width: 960px;
  font-family: 'Lato', sans-serif;
`;

export default props => (
  <StaticQuery
    query={query}
    render={data => (
      <Craft data={data} {...props} />
    )}
  />
);
