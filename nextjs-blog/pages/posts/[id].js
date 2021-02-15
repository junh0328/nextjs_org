import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';

export async function getStaticProps({ params }) {
  const postData = getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths, // getAllPostIds() 함수에 의해 리턴되는 path 배열을 가지고 있습니다. [{ id : pre-rendering },{ id: ssg-ssr } ]
    fallback: false, // fallback 속성은 나중에 설명합니다.
  };
}

export default function Post({ postData }) {
  console.log(postData);
  return (
    <Layout>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
    </Layout>
  );
}
