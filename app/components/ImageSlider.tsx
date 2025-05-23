"use client"
import {useState, useEffect  } from "react";
import styles from "../styles/style.module.css";





export default function ImageSlider() {

    const images = [
        "/images/imgoneslider.png",
        "/images/imgtwoslider.png",
        "/images/imgthreeslider.png",
    
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    


    // const nextImage = () => {
    //   setCurrentIndex((prevIndex) =>
    //     alreadyloaded.length === 0 ? 0 : (prevIndex + 1) % alreadyloaded.length
    //   );
    // };
    
    // const prevImage = () => {
    //   setCurrentIndex((prevIndex) =>
    //     alreadyloaded.length === 0
    //       ? 0
    //       : (prevIndex - 1 + alreadyloaded.length) % alreadyloaded.length
    //   );
    // };
    
    const [tobeloading, settobeloading] = useState([...images]);
    const [alreadyloaded, setalreadyloaded] = useState<string[]>([]);
    
    // useEffect(() => {
    //   const interval = setInterval(() => {
    //     if (tobeloading.length === 1) {
    //       settobeloading([...images]);
    //       setalreadyloaded([]);
    //       setCurrentIndex(0);
    //       return;
    //     }
    
    //     const nextTobeLoading = [...tobeloading];
    //     const popped = nextTobeLoading.shift();
    
    //     if (popped !== undefined) {
    //       settobeloading(nextTobeLoading);
    //       setalreadyloaded((prev) => {
    //         const updated = [...prev, popped];
    //         setCurrentIndex(currentIndex+1); 
    //         return updated;
    //       });
    //     }
    //   }, 6000);
    
    //   return () => clearInterval(interval);
    // }, [tobeloading]);
    



    const [barKey, setBarKey] = useState(0);

    const [slide, setSlide] = useState(false);

    useEffect(() => {
      const interval = setInterval(() => {
        if (tobeloading.length === 1) {
          settobeloading([...images]);
          setalreadyloaded([]);
          setSlide(true);
          setTimeout(() => {
            setCurrentIndex(0);
            setSlide(false);
          }, 500); 
          setBarKey(prev => prev + 1);
          return;
        }
    
        const nextTobeLoading = [...tobeloading];
        const popped = nextTobeLoading.shift();
    
        if (popped !== undefined) {
          settobeloading(nextTobeLoading);
          setalreadyloaded((prev) => {
            const updated = [...prev, popped];
            setSlide(true);
            setTimeout(() => {
              setCurrentIndex(currentIndex + 1);
              setSlide(false);
            }, 500); // match animation duration
            return updated;
          });
          setBarKey(prev => prev + 1);
        }
      }, 350000);
    
      return () => clearInterval(interval);
    }, [tobeloading, currentIndex]);
    





    return (
        <div className={styles.sliderContainer}>


            <div key={barKey} className={`${styles.backgroundImage} ${slide ? styles.slideOutLeft : ""}`}style={{ backgroundImage: `url(${images[currentIndex]})` }}>
                <div className={styles.notchcutout}>
                </div>
                    <div className={styles.leftslidetri}></div>
                    <div className={styles.righttrislide}></div>
                    <div className={styles.circleleft}></div>
                    <div className={styles.circleright}></div>
            </div>
            {/* <button onClick={prevImage} className={styles.prevButton}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>

            </button>
            <button onClick={nextImage} className={styles.nextButton}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>

            </button> */}

            <div  className={styles.loadingbar}>


            
                {
                alreadyloaded.map((image, index) => {
                    return <div className={styles.alreadyloded} key={index}></div>;
                })
                }

                {
                tobeloading.map((image, index) => {
                    return index === 0 ? (
                    <div className={styles.isloading} key={index}>
                        <div key={barKey} className={`${styles.loadingbarnimation} `} ></div>
                    </div>
                    ) : (
                        <div className={styles.tobeloadingcircle} key={index}></div>
                    );
                })
                }



            </div>
        </div>
    );
}
