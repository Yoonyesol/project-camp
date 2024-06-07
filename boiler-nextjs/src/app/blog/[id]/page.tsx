type TPageParams = {
  params: {
    blogId: string;
  };
  searchParams: {
    page: string;
  };
};

export default function BlogDetail({ params, searchParams }: TPageParams) {
  const { blogId } = params;
  const { page } = searchParams;

  return (
    <>
      <h1>BlogDetail Component</h1>
      <h2>
        Query String: {blogId}, {page}
      </h2>
    </>
  );
}
