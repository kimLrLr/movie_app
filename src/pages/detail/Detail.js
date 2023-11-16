import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { movieDetail } from "../../api";

export const Detail = () => {
  const { id } = useParams();
  // =>다른 곳에서도 사용할 수 있도록 useParams사용
  // console.log(id);

  useEffect(() => {
    (async () => {
      try {
        const data = await movieDetail(id);
        console.log(data);
      } catch (error) {
        console.log("에러: " + error);
      }
    })();
  }, []);

  return <div>Detail</div>;
};
