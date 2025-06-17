import { BlogCard, BlogCardProps } from './BlogCard';

interface BlogGridProps {
    posts: BlogCardProps[];
    className?: string;
}

export const BlogGrid = ({ posts, className = '' }: BlogGridProps) => {
    return (
        <div className={`w-full max-w-screen mx-auto ${className}`}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post, index) => (
                    <BlogCard
                        key={`blog-post-${index}`}
                        imageUrl={post.imageUrl}
                        date={post.date}
                        category={post.category}
                        title={post.title}
                    />
                ))}
            </div>
        </div>
    );
};