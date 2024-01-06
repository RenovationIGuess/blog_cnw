import React, { useEffect, useState } from 'react';
import './SocialPageContentContainer.scss';
import SocialPostCard from './SocialPostCard';
import usePostsStore from '~/store/usePostsStore';
import NotFound from '../components/NotFound';

const SocialPageContentContainer = () => {
  const [fetchingPosts, fetchPosts] = usePostsStore((state) => [
    state.fetchingPosts,
    state.fetchPosts,
  ]);

  const [posts] = usePostsStore((state) => [state.posts]);

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="social-skeleton">
      <div>
        <div className="home-container">
          <div className="social-post-list">
            <div className="social-post-list__body">
              {/* Display list of post */}
              {fetchingPosts ? (
                <>Loading...</>
              ) : posts.length > 0 ? (
                posts.map((post, index) => (
                  <SocialPostCard key={post.id} post={post} postIndex={index} />
                ))
              ) : (
                <NotFound message={'No blogs exists...'} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialPageContentContainer;
