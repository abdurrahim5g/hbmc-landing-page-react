// handle smooth scroll
const handleSmoothScroll = (e) => {
  e.preventDefault();
  const hash = e.target.hash.slice(1); // get the id
  const elementOffset = document.getElementById(hash).offsetTop; // get offset to top
  // finally scroll to the wight position
  window.scrollTo({
    top: elementOffset,
  });
};

export { handleSmoothScroll };
