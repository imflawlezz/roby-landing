import {BlogGrid} from "@/components/shared/BlogGrid";
import React from "react";
import {RoundButton} from "@/components/shared/RoundButton";

const blogPosts = [
    {
        imageUrl: "/blog/blog-1.jpeg",
        date: "February 3, 2021",
        category: "Marketing",
        title: "Curating a workplace that inspires all of us"
    },
    {
        imageUrl: "/blog/blog-2.jpeg",
        date: "February 25, 2021",
        category: "Design",
        title: "Designers who changed the web with Webflow"
    },
    {
        imageUrl: "/blog/blog-3.jpeg",
        date: "March 9, 2021",
        category: "Code",
        title: "Communication between studio departments"
    },
];

export const Blog = () => {
    return (
        <section className="my-16 sm:my-18 md:my-24 lg:my-32 px-4 sm:px-10 md:px-20 lg:px-30">
            <div className="text-center mb-8 md:mb-12 lg:mb-16">
                <div className="flex flex-wrap justify-between items-center">
                    <div className="flex flex-wrap justify-start items-center gap-x-2 md:gap-x-3">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase text-black">
                            Our
                        </h1>
                        <span className="text-3xl md:text-4xl lg:text-5xl uppercase font-normal text-black">
                            Blog
                        </span>
                    </div>
                    <RoundButton variant={'black'} text={['view all','post']}/>
                </div>

            </div>
            <BlogGrid posts={blogPosts} className="mt-12" />
        </section>
    );
}