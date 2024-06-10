interface IProps {
  params: {
    id: string;
  };
}

//generateMetadata: %메타데이터 공유하지 않는 특성
export async function generateMetadata({ params }: IProps) {
  return {
    title: `Blog ${params.id} | Sucoding`,
  };
}
export default function layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
