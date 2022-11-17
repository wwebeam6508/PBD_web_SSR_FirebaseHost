import Shuffle from "shufflejs"
import styles from '../styles/shuffle.module.css'
import { useRef, useEffect,useState } from 'react'
const projects = [
  {
    name:"1",
    id:"1123",
    src:"https://firebasestorage.googleapis.com/v0/b/pbd-supply.appspot.com/o/works%2F2km%2FLINE_ALBUM_11365_220317.jpg?alt=media&token=a7cd308a-dd4b-440f-bb7f-893d998c41c4"
  },
  {
    name:"2",
    id:"1124",
    src:"https://firebasestorage.googleapis.com/v0/b/pbd-supply.appspot.com/o/works%2F2km%2FLINE_ALBUM_11365_220317_1.jpg?alt=media&token=91e05c90-670a-4c3a-81bc-060ba969cf39"
  },
  {
    name:"3",
    id:"1125",
    src:"https://firebasestorage.googleapis.com/v0/b/pbd-supply.appspot.com/o/works%2F2km%2FLINE_ALBUM_11365_220317_10.jpg?alt=media&token=e36ed65e-443f-4a70-9402-45bda0a0eb7e"
  },
  {
    name:"4",
    id:"1126",
    src:"https://firebasestorage.googleapis.com/v0/b/pbd-supply.appspot.com/o/works%2F2km%2FLINE_ALBUM_11365_220317_17.jpg?alt=media&token=d33589be-7bc3-4d7a-a121-ea7d204d367f"
  },
  {
    name:"5",
    id:"1127",
    src:"https://firebasestorage.googleapis.com/v0/b/pbd-supply.appspot.com/o/works%2F2km%2FLINE_ALBUM_11365_220317_21.jpg?alt=media&token=2b8a949f-ea43-441c-91e8-d864d3f7d482"
  }
]
const grayPixel =
  "data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==";
const blackPixel =
  "data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=";
const greenPixel =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO02Vz4HwAE9AJhcLBN6AAAAABJRU5ErkJggg==";
function ShuffleImage(){
  const [photos, setPhotos] = useState([
    { id: 1, src: grayPixel },
    { id: 2, src: blackPixel },
    { id: 3, src: greenPixel }
  ]);
  const elementRef = useRef(null);
  const sizerRef = useRef(null);
  const shuffleRef = useRef(null);
  useEffect(() => {
    // The elements are in the DOM, initialize a shuffle instance.
    shuffleRef.current = new Shuffle(elementRef.current, {
      itemSelector: ".photo-item",
      sizer: sizerRef.current
    });
    (async () => {
      // Kick off the network request and update the state once it returns.
      const photos = projects;
      const loadedPhotos = await waitForAllPhotos(photos);
      setPhotos(loadedPhotos);
    })();

    return () => {
      // Dispose of shuffle when it will be removed from the DOM.
      shuffleRef.current.destroy();
      shuffleRef.current = null;
      elementRef.current = null;
      sizerRef.current = null;
    };
  }, []);

  useEffect(() => {
    // Notify shuffle to dump the elements it's currently holding and consider
    // all elements matching the `itemSelector` as new.
    if (shuffleRef.current) {
      shuffleRef.current.resetItems();
    }
  }, [photos]);
  return(
    <div ref={elementRef} className={styles.row + " " + styles.my_shuffle}>
      {photos.map((image, key) => (
        <PhotoItem key={key} {...image} />
      ))}
      <div ref={sizerRef} className={styles.sizer}></div>
    </div>
  )
}

function waitForAllPhotos(photos) {
  return Promise.all(
    photos.map(
      (photo) =>
        new Promise((resolve) => {
          const image = document.createElement("img");
          image.src = photo.src;
          image.className = styles.img
          if (image.naturalWidth > 0 || image.complete) {
            resolve(photo);
          } else {
            image.onload = () => {
              resolve(photo);
            };
          }
        })
    )
  );
}

function PhotoItem({ id,  src, name }) {
  return (
    <div key={id} className={`photo-item `+ styles.column}>
      <div className={styles.figure + styles.aspect} >
        <img className={styles.img} src={src} />
        <figcaption>
          <PhotoAttribution name={name} />
        </figcaption>
      </div>
    </div>
  );
}

function PhotoAttribution({ username, name }) {
  if (!username) {
    return null;
  }

  const href = `https://unsplash.com/${username}?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge`;
  const title = `Download free do whatever you want high-resolution photos from ${name}`;
  return (
    <a
      className="photo-attribution"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={title}
    >
      <span>
        <svg viewBox="0 0 32 32">
          <path d="M20.8 18.1c0 2.7-2.2 4.8-4.8 4.8s-4.8-2.1-4.8-4.8c0-2.7 2.2-4.8 4.8-4.8 2.7.1 4.8 2.2 4.8 4.8zm11.2-7.4v14.9c0 2.3-1.9 4.3-4.3 4.3h-23.4c-2.4 0-4.3-1.9-4.3-4.3v-15c0-2.3 1.9-4.3 4.3-4.3h3.7l.8-2.3c.4-1.1 1.7-2 2.9-2h8.6c1.2 0 2.5.9 2.9 2l.8 2.4h3.7c2.4 0 4.3 1.9 4.3 4.3zm-8.6 7.5c0-4.1-3.3-7.5-7.5-7.5-4.1 0-7.5 3.4-7.5 7.5s3.3 7.5 7.5 7.5c4.2-.1 7.5-3.4 7.5-7.5z"></path>
        </svg>
      </span>
      <span>{name}</span>
    </a>
  );
}

export default ShuffleImage