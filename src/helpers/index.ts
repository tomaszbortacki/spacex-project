export const handleScroll = ({ currentTarget: target }: any, loadMore: Function) => {
  if (target.scrollTop + target.clientHeight >= target.scrollHeight) {
    loadMore();
  }
};
