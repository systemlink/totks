import React from 'react';
import Layout from '../components/Layout';
import Card from '../components/Card';

const IndexPage = () => (
  <Layout>
    <article>
      <h2>クラフト</h2>

      <Card title="マイコンの研究成果を追加しました">
        <p>マイコンの研究成果を追加しました。(体験的マイコン学習) 今回はIchigoJamを試してみました。Ichig […]</p>
      </Card>

      <Card title="マイコンの研究成果を追加しました">
        <p>マイコンの研究成果を追加しました。(体験的マイコン学習) 今回はmilkcocoaというBaasとWindow […]</p>
      </Card>

      <Card title="マイコンの研究成果を追加しました">
        <p>マイコンの研究成果を追加しました。(体験的マイコン学習) 今回はGR-CITRUSというマイコンを、Chrom […]</p>
      </Card>
    </article>
  </Layout>
)

export default IndexPage
