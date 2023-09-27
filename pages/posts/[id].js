import Layout, { siteTitle } from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';

export default function Post({ postData }) {
    return (
        <Layout>
            {postData.id}
        </Layout>
      );
  }

export async function getStaticPaths() {
  const paths = await getAllPostIds();
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
    const postData = getPostData(params.id);
    return {
      props: {
        postData,
      },
    };
  }