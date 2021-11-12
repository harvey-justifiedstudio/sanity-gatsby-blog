export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "618e500c99839c68ad41cdd8",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-isbx5q2n",
                  apiId: "1ffc1bba-b4cf-47be-8fab-012d2b8fb6b5",
                },
                {
                  buildHookId: "618e500cdc52bd7c020f8a5e",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-fn9ai4vb",
                  apiId: "d3ac7497-4bbe-40d3-958d-5265b225c2d5",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/harvey-justifiedstudio/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-fn9ai4vb.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
