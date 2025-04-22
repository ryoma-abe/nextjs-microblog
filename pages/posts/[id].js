import { Layout } from "@/components/Layout";
import { getAllPostIds, getPostData } from "@/lib/post";

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export default function post({ postData }) {
  return <Layout>{postData.title}</Layout>;
}
