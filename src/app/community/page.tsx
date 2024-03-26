import React from "react";
import Skeleton from "../../components/skeleton";
import styles from "../../styles/community.module.scss";

// interface IntersectionObserverInit {
//   root?: Element | Document | null;
//   rootMargin?: string;
//   threshold?: number | number[];
// }
// type IntersectHandler = (
//   entry: IntersectionObserverEntry,
//   observer: IntersectionObserver,
// ) => void;

// function community(
//   onIntersect: IntersectHandler,
//   options?: IntersectionObserverInit,
// ) {
//   const ref = useRef<HTMLDivElement>(null);

//   const callback = useCallback(
//     (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) onIntersect(entry, observer);
//       });
//     },
//     [onIntersect],
//   );
//   useEffect(() => {
//     if (!ref.current) return () => {};
//     const observer = new IntersectionObserver(callback, options);
//     observer.observe(ref.current);
//     return () => observer.disconnect();
//   }, [ref, options, callback]);
//   const userkeys = {
//     all: ["users"] as const,
//     lists: () => [...userkeys.all, "list"] as const,
//     list: (filters: string) => [...userkeys.lists(), { filters }] as const,
//     details: () => [...userkeys.all, "detail"] as const,
//     detail: (id: number) => [...userkeys.details(), id] as const,
//   };
// const useFetchUsers = ({ size }: PaginationParams) =>
//   useInfiniteQuery(
//     userkeys.lists(),
//     ({ pageParam = 0 }: QueryFunctionContext) =>
//       axios.get<PaginationResponse<User>>("/users", {
//         params: { page: pageParam, size },
//       }),
//     {
//       getNextPageParam: ({ data: { isLastPage, pageNumber } }) =>
//         isLastPage ? undefined : pageNumber + 1,
//     },
//   );
function community() {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.header}>
          <img src="/images/blackPrev.svg" alt="prev" />
          <h1>Bodeum 게시판</h1>
          <div>
            <img src="/images/bodeumIcon.svg" alt="bodeumIcon" />
          </div>
        </div>
        <div className={styles.search}>
          <input placeholder="검색어를 입력하세요." />
        </div>
        <div className={styles.board}>
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      </div>
    </div>
  );
}

export default community;
