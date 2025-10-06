"use client";
import { useState } from "react";
import { posts } from "../data/posts";
import PostCard from "../components/PostCard";
import BlogLayout from "../components/BlogLayout";
import Head from "next/head";
import SearchBar from "@/components/SearchBar";
import Modal from "@/components/Modal";

export default function Home() {
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <>
      <Head>
        <title>TechBlog - Home</title>
        <meta
          name="description"
          content="Latest tech articles on JavaScript, CSS, React, and more."
        />
      </Head>

      {/* {Reusable Modal} */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2>🎉 Hacktoberfest 2025 🎉</h2>
        <p>Welcome to the official TechBlog repository!</p>
        <p>
          Feel free to contribute to our open source projects. Thank you for
          your work!
        </p>
      </Modal>

      <BlogLayout title="Latest Posts">
        {/* 🔍 Search bar */}
        <SearchBar posts={posts} onSearch={setFilteredPosts} />

        {/* Post listing */}
        {filteredPosts.length === 0 ? (
          <p>No posts found.</p>
        ) : (
          filteredPosts.map((post) => <PostCard key={post.id} post={post} />)
        )}
      </BlogLayout>
    </>
  );
}
