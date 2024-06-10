// "use client"; //client 코드 최대한 안 쓰는 게 좋다
import { redirect, useRouter } from "next/navigation";

export default function BlogDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  const number = parseInt(id, 10);

  //숫자가 아닌 문자열
  if (Number.isNaN(number)) {
    // useRouter().push("/blog/page/notfound");
    // return;
    //순간적으로 블로그 내용이 보이고 notfound로 빠지는 일 막기

    //서버 컴포넌트에서도 사용 가능한 redirect
    redirect("/blog/page/notfound");
  }

  return (
    <>
      <h1>BlogDetail Component</h1>
    </>
  );
}
