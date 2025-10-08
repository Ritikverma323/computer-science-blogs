import { posts } from '../data/posts';
import PostList from '../components/postList'
import BlogLayout from '../components/BlogLayout';
import HacktoberfestModel from '@/components/HacktoberFestModel';


export const dynamic = 'force-static'; 

export default function Home() {
  return (
    <><HacktoberfestModel /><BlogLayout title="Latest Posts" headingLevel={1}>
      <PostList posts={posts} />
    </BlogLayout></>
  );
}
