export async function generateMetadata({ params }) {
  const { id } = params;

  return {
    title: `Post ${id} - My Blog`,
    description: `This is the detail page for blog post ${id}.`,
  };
}

export default function PostPage({ params }) {
  const { id } = params;

  return (
    <main>
      <h1>Post {id}</h1>
      <p>This is the content for blog post #{id}.</p>
    </main>
  );
}
