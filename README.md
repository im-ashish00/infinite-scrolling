# Infinite-scolling

Gives you data about the books.<br>
[Live Preview](https://im-ashish00.github.io/infinite-scrolling/)<br>
![Output Image](https://raw.githubusercontent.com/im-ashish00/infinite-scrolling/main/output.gif)

#### Things Learned:-

- [Learned about how to make and use custom hooks.](https://github.com/im-ashish00/infinite-scrolling/blob/c053268ae42e621b1d9c9bbe3353a74324c21911/src/useBookSearch.jsx#L4)
- [useRef doesn't re-renders the component like useState and the value persists across renders.](https://github.com/im-ashish00/infinite-scrolling/blob/c053268ae42e621b1d9c9bbe3353a74324c21911/src/App.jsx#L9)
- [useRef returns an object with property current.](https://github.com/im-ashish00/infinite-scrolling/blob/c053268ae42e621b1d9c9bbe3353a74324c21911/src/App.jsx#L13)
- useMemo caches the value in a way so we don't have to recompute the value, works best when we need to compute a really slow function.
- useMemo basically remembers the referential value across renders.
- [useCallback is just the same as useMemo, It's also used to caching.](https://github.com/im-ashish00/infinite-scrolling/blob/c053268ae42e621b1d9c9bbe3353a74324c21911/src/App.jsx#L10)
- [The big difference b/w useCallback and useMemo is, useCallback returns a whole function whereas useMemo returns value returned from that function.](https://github.com/im-ashish00/infinite-scrolling/blob/c053268ae42e621b1d9c9bbe3353a74324c21911/src/App.jsx#L55)
- [Like useState & useEffect, these too take in an array of the dependencies they're dependent on.](https://github.com/im-ashish00/infinite-scrolling/blob/c053268ae42e621b1d9c9bbe3353a74324c21911/src/App.jsx#L22)
- [Intersection observer observe changes in intersection of target's element with an ancestor element, by default it's top level document's viewport.](https://github.com/im-ashish00/infinite-scrolling/blob/c053268ae42e621b1d9c9bbe3353a74324c21911/src/App.jsx#L14)
- Intersection takes in two values - (callback, options) 
- callback gives us two values i.e. entries, observer
- options provides us a way to set the threshold(which is how much of an element is showing on the screen, value from 0-1), root(by default it's null i.e. document's viewport), rootMargin etc.
- [observe method](https://github.com/im-ashish00/infinite-scrolling/blob/c053268ae42e621b1d9c9bbe3353a74324c21911/src/App.jsx#L20) observes the node/element, unobserve does what the name says, [disconnect method](https://github.com/im-ashish00/infinite-scrolling/blob/c053268ae42e621b1d9c9bbe3353a74324c21911/src/App.jsx#L13) disconnects it. 
- [isIntersecting gives the boolean about whether or not element is intersecting.](https://github.com/im-ashish00/infinite-scrolling/blob/c053268ae42e621b1d9c9bbe3353a74324c21911/src/App.jsx#L15)
