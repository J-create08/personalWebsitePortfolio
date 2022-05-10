import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Hero from '../components/Hero'
import NavBar from '../components/NavBar'
import { sanityClient, urlFor } from "../sanity"
import { Post } from '../typings'

interface Props {
  posts: [Post]
}

export default function Home({ posts }: Props) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Head>
        <title>Juan Carlos Rojas's Web Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <NavBar />
        
        <Hero />
        {/* className='bg-gradient-to-tr from-lightblue to-primary h-screen' */}
        <div className='bg-gradient-to-tr from-yellow-400 to-primary h-screen'>
          <h3 className='text-white font-bold text-3xl pt-5 max-w-lg text-center mx-auto'>Blog Posts</h3>
          <hr className='max-w-lg my-5 mx-auto border max-h-1'/>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md-gap-6 p-2 md:-6 max-w-7xl mx-auto'>
           {posts.map((post) => (
             <Link key={post._id} href={`/post/${post.slug.current}`}>
                <div className='border rounded-lg group cursor-pointer overflow-hidden'>
                    {post.mainImage && (
                      <img className='h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out' src={urlFor(post.mainImage).url()} alt="Post Image" />
                    )}

                    <div className='flex items-center justify-between p-3 bg-white'>
                      <div>
                        <p className='text-lg font-bold'>{post.title}</p>
                        <p className='text-xs'>{post.description} by {post.author.name}</p>
                      </div>

                      <img className='h-12 w-12 object-cover rounded-full' src={urlFor(post.author.image).url()!} alt="Author Image" />
                    </div>

                </div>
             </Link>
           ))}

          </div>

        </div>

      </main>

    </div>
  )
}



export const getServerSideProps =  async () => {
  const query = `*[_type == "post"] {
    _id,
    title,
    slug,
    author -> {
    name, 
    image
  },
  description,
  mainImage
  }`;

  const posts = await sanityClient.fetch(query)

  return {
    props: {
      posts,
    },
  };
};