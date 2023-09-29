import Layout, { siteTitle } from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';

export default function Post({ postData }) {
  return (
      <Layout>
          <p>Page has {postData?.id}</p>
      </Layout>
    );
}

// return a list of possible values for ID
export async function getStaticPaths() {
  const posts = await getAllPostIds();
  const paths = posts.map((item) => {
    return {
      params: {
        id: item.id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

// returns post data based on ID
export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);
    console.log("postdata is...", postData);
    return {
      props: {
        postData,
      },
    };
  }