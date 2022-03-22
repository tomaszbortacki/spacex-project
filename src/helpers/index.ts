export const handleScroll = ({ currentTarget: target }: React.UIEvent<HTMLUListElement, UIEvent>, loadMore: Function) => {
  if (target.scrollTop + target.clientHeight >= target.scrollHeight) {
    loadMore();
  }
};
