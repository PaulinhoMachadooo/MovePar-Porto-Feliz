import React, { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { gsap } from "gsap";

interface ProjectGalleryProps {
  isOpen: boolean;
  onClose: () => void;
  category: string;
  projectTitle: string;
}

const ProjectGallery: React.FC<ProjectGalleryProps> = ({
  isOpen,
  onClose,
  category,
  projectTitle,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryImages = {
    Cozinha: [
      "https://lh3.googleusercontent.com/pw/AP1GczMKUjrjbD9BdjKqgYsWEOOL74ImoBe45b4_2mT3XCAdY-lYigSdVnMO5h5J5DDRyNqqPrlvtWtjpazCIGCq8cbNwVbVbnzj16kgJ3JSYH5ZFR-3mxr7jeN_qN34BdHy-43x1ITtJD1osviv1-51m1sP=w1093-h615-s-no-gm?authuser=1",
      "https://lh3.googleusercontent.com/pw/AP1GczPlwY1GzT5-sE0N9Q6laHbC17iZicHNa0yA24r0yHDFvV2_eJRzphRD-lmRdZcgoIp_eO7KBZiH3xWFFNF57JMJUT0EPkGlsh9x58CKAmVxTY5T5Lj7-JEgkcWQqxoIJP3M2ePL3CQMoti_YHcX30MM=w1093-h615-s-no-gm?authuser=1",
      "https://lh3.googleusercontent.com/pw/AP1GczOW1jpohGZW2ofLgLZq_q9BApQB3IrmmcHvquMk0rv2oGzO5khgF1ilZyl852q7E21QlUQelaeAZW24U9CtU42wi1ooBOsCtmo0p738VLK_qI54c1vaNnI7ryV35ovG1PPHmvQiMJGM6xAG8wnJt1Jf=w1093-h615-s-no-gm?authuser=1",
      "https://lh3.googleusercontent.com/pw/AP1GczPR1K36_Ca0GBgmwYhIbr7SVMDqoWeDKIj4llJSta_nBk1Hi6qrmH0ON0z5188Bj3CbVE1uVJiT8eUnjxLg64C6nquVdq34F0_dCwbT5PBkPgsEqcIelZI5PMqPWVThmOUMM5eNCZmpoAPVQNOVuB4L=w1093-h729-s-no-gm?authuser=1",
      "https://lh3.googleusercontent.com/pw/AP1GczMG1xU17WMzeQ8YAFRkaN2M8bR2EiAKAhPcVCLogMw77GZh0MLN4JfEcRBKuV7n_eisrzCkiSJP4sM4pT0u16mHWBH_mwIUAMsAYohNEn22nj8P-j0rF-S9zlfqQstA9kzmAo_gsVz2DjylHSJHPlRI=w1093-h729-s-no-gm?authuser=1",
      "https://lh3.googleusercontent.com/pw/AP1GczN8uw5QoKeqKFfPxEY_kAI0M6achxB559ztAVkmQyQFRC7SCA4VPpbqGuFbz6ZtJ7rkxPl6KCARwRlG4S2d6y7zsjlljAL9bEPZBAIlufAMdBYOeD1MfQbII1KoFJZx4zC-rZ7WOdjuwjG0E1tIMvDS=w1093-h729-s-no-gm?authuser=1",
      "https://lh3.googleusercontent.com/pw/AP1GczOp72oLPsqXycp6qcuBI0NjbDWk_4PgoEh3VMksPOs4GuloaMF5BrrKX4toyktez0vBF7g5wV0zBGqjJSducuL5EhskX9xUII5jzzaYuBVha0cxRnNXjln8BOyjfXfT29Pv3BsvWzOmn_xs7Z4uR_TF=w1093-h729-s-no-gm?authuser=1",
      "https://lh3.googleusercontent.com/pw/AP1GczPOIlcxyw_4pD7NHaFj4L8KcvJDG5OWJOWhWPDjj_rzcLBc6908bMwVlKkhCn1P3sBAyMGxvxVc4XsyL7SMd1SFGJY6iiFW5ZfOIZwvqT_d5AN19ImS0pBs3xHoMaNyIigecmxyVxwb1vIQjSAIYFFG=w1093-h729-s-no-gm?authuser=1",
    ],
    Closet: [
      "https://lh3.googleusercontent.com/pw/AP1GczOqYOP9eyKxJMBX77OOhLly-6rxQ79rBgu8y8IsCufvB6WFlmqSHNocbfWixxMXecSZWIX1damRscc5CFWY7_FMToy2LCqMlM9nDSuGsOCVigSpCsH67B530bM3XlCfSoMHj84vXd7ATbp3arUpPhJK=w1093-h716-s-no-gm?authuser=1",
      "https://lh3.googleusercontent.com/pw/AP1GczONKCBZ5Cc0vHlN50KIzI3OEaYtioG6AcBDevh14I4kyRGFVXRB9KBcVM-fZy2bLC2RB--l4RSIEMPpxUKvR7Wnfm30f2DcE44z6u-YB6l55TEq0PA-0we50FgRLvEs1QVho3bZIoZBu45PkkcpTMgK=w1093-h716-s-no-gm?authuser=1",
    ],
    Escritório: [
      "https://lh3.googleusercontent.com/pw/AP1GczO-50DeR7nvwtfZCcIEoGLF4q4HX8Uy1LyUuUvdBO9rX1sGng596vBj-wHgRKOAi0tcISXcxfFH0bNKQ9HWata5e0kkm8xoNC0IHEXGZnvrl3ilIdXtsvYRsHUgQacdtzIFRNzB630vSWqthrNc0avl=w1093-h729-s-no-gm?authuser=1",
      "https://lh3.googleusercontent.com/pw/AP1GczP1IU-BEhITxvWzoafYaDWCDzsEsuLoYAdsbZR0oNLA0dKw1Y4YGlXZIbRPcLb_q5TkRpNVXuGNen0IMfAsei8wbxZf1csXT6QhThIg_AowYpj2MMwEMtBWO2dWTtH1orBY9okycet72WhspvT9yllg=w1093-h729-s-no-gm?authuser=1",
      "https://lh3.googleusercontent.com/pw/AP1GczP4irfWOQnNa8JOpfjj7NJkfM6CdDES-ED8pZCdw754CDrXRZsjM-1RPbMRdzxhqX2CTYOWoe6w64amBqcXyT3va3N8a2GO1Z81ew_E1zJgMPcCvfK1_XyFWQUtsRKyO_aGbhfdclvySIyRrAt5az0W=w1093-h729-s-no-gm?authuser=1",
      "https://lh3.googleusercontent.com/pw/AP1GczOwTJyHpqQtm5p3RyApVa4UFe6RW12fbVksslab-o4_srTYtqReNNs1dJ5CtdQ_cq-qZuIAEVNA6_M84ML2AL6wnQg_G4yXqhfiBAJOa_8J5ecZ2XuAw1jEHDdxOW0rVjJGC8KVDRRbcmVgwbavFMH1=w1093-h729-s-no-gm?authuser=1",
      "https://lh3.googleusercontent.com/pw/AP1GczPuTAcr4-wEdOS6sGlhd_X6fZVWDZGPBEXiHapwmmyfT8QIywhyqB4Xgejxmyxyi-dZ00FL5czbbsS9tGD2fZQxOcrjiQdGNqsrLHdFv_MA43z8z695LCxbLmCj0BAdW4ZIAzlFoBTzQiOn7QCAcNXv=w1093-h729-s-no-gm?authuser=1",
      "https://lh3.googleusercontent.com/pw/AP1GczNaLeZLaviyFEbrXALRTlN2EpJjXGblrbj8BcKoS4kkROzUPJtI7erER6ZQDP2VHuZTVYNWx3d37qHU0n6ZJN81D3ilEsZQxVkKHJ6WdMK7Nkgkza_XROPbUFYSApBBL3isD4c6BuysT0JTCP5CiPBd=w1093-h729-s-no-gm?authuser=1",
    ],
    Sala: [
      "https://lh3.googleusercontent.com/pw/AP1GczNg74UdmLtJYWYFRmcEi3VB4V-TyLd_fpAXx-syXioKAHPL2N2Hx_p8DdcpB0pODPvT4gJMpFye1fMi5b_2YCavTXrhdH4dEXve3DtHhEkIbyTAW7Sah-pZYhqXRvqlyVChB4kR3i9QsCORxg1AlhZU=w1093-h729-s-no-gm?authuser=1",
      "https://lh3.googleusercontent.com/pw/AP1GczOafSwJgQPGRWomNj_Uf2n8cSzFwLqoMMZSuG1N2nYOcYsz0lDRF89INlhd6HhtGCTL7QqBBXMguiDPuBa0_SwBqvqeUhhc5lbiUeiVVbmN_-110JfgySy9-ie64t8XB1G3Kqo05_6uIe-_9ztcMoy7=w1093-h729-s-no-gm?authuser=1",
      "https://lh3.googleusercontent.com/pw/AP1GczNwiTfH5EcuVq5IvL-1cJIR24uLi0Ep_Tmvchhti_ZuaZD1GXsTBbUFMg3KnTKLOpCE6KlfueVGei8g6IYj8RB78cqw6yIVVx0CfwpE0AioPt5n6BHb6RtqnpKNZISUZULZTWhyINYfC9Ktc4xVQxBe=w1093-h729-s-no-gm?authuser=1",
    ],
    Dormitório: [
      "https://lh3.googleusercontent.com/pw/AP1GczPn6FVSjwlP_aW6V8T8nq0SuUV3iS-H7igSIoYWNJqXtPkERVRFC1aTfMcRlMR2FUmFsjhnU-yB0s61vjm7vIEQO2TqsIlkdqdJ_dLpgxODClW7LFcTgQj55uZA_q-Z0BR-8XEZPmAfoCB6iuazjusa=w1093-h615-s-no-gm?authuser=1",
      "https://lh3.googleusercontent.com/pw/AP1GczPKMYOygu7940IyBlXl3BjroDnrj3CTmxWe0FGHrzVscl0AkqssDgLWtbwPRd___0FnMKDZTZTvYZGja-NunPm_YP7ILAT3BZMa1FtEhrvvyR9GFJwZb25DSzSEjqsr6ixtbizKsaUqp5pJItOyGIVX=w1093-h615-s-no-gm?authuser=1",
      "https://lh3.googleusercontent.com/pw/AP1GczNe6IhUlO3V14Vpsl9u73Z9omMnxnivWIUnReAOgi8LFh1pvEort3oTXZCl2wPN-qZ-EKWkLXObmYM4hOQ3ekkdH7-LHMD2cfv9rpTg2qszmtx1iG0XbhAMX6mgubld-FtZm8xNRFcC1ntDVQOG9mjR=w1093-h729-s-no-gm?authuser=1",
      "https://lh3.googleusercontent.com/pw/AP1GczPnGBVplSeJRo1VjQXtnw6yAoO5h5Hd-KHyUKbIiyY30HRndGl1dmjzqlEwsRoY5a8KizofKa189PwSldcJQQ-KKPC8qNkfsAZr86Wzv9gdGCx9GNzsPWu1Dhn-YtT9Wy105qgT4cWI6Zf1JlN4JTt0=w1093-h729-s-no-gm?authuser=1",
      "https://lh3.googleusercontent.com/pw/AP1GczOz1Sq28boe2ptrZICEg18lJO6dgfvOfPO25gB7271vpbWAATUwXQId5RvvDCmZ_ncBf4B0WJs_6hhQMtjflha0ButjS44fzFywTXu46rb_ZMXsRrtF42_iIP6PVlRrOA1fioAdHBpcgP35xMYJqtWe=w1093-h729-s-no-gm?authuser=1",
    ],
    Banheiro: [
      "https://lh3.googleusercontent.com/pw/AP1GczOdQucoCSy2fVuVVbPAJcLbO0hGL5ggAnVIKw1EoVCYLi_EyG8qj0HynTmiYPCMA7rTwgMk9pBtdNS3PHXdRkKoh6pVNRdU4EI6RZcUnHPNpdSdRE4_xK6QAgxd1krchAlc9tybAFUf8kVduR00APaI=w1093-h729-s-no-gm?authuser=1",
      "https://lh3.googleusercontent.com/pw/AP1GczMQifI0mJ1c3sjfCCk44XHfjw7OKizvhcxfjIWZDWWPhyCvf7MYrs0m7-Cy3y8CTgLVmKRQobXOoBplCZfvk18THvS7M8nzNIRfQs3nIjqp0INFmvo3rh-pSB5lGZVhhM5VkMYp9m2kRYHw9W_u9nGt=w1093-h729-s-no-gm?authuser=1",
      "https://lh3.googleusercontent.com/pw/AP1GczPp_Tqo6PM8uS03TIJm-Npf0h6eRtD01YKkD2Hh-2HI0NCylQJzTxAtYUAaTp9xi5_OVV99_xpv8p3q44DPHokj9apXarNF2aDNLDEz-r-oSvLTlgHyQWbAp1COyoTYWWoKNj1J9oIibeas07LJZpSg=w652-h906-s-no-gm?authuser=1",
    ],
  };

  const images = galleryImages[category as keyof typeof galleryImages] || [];

  useEffect(() => {
    if (isOpen) {
      // Bloquear scroll do body
      document.body.style.overflow = "hidden";

      // Animação de entrada
      gsap.fromTo(
        ".gallery-overlay",
        { opacity: 0 },
        { opacity: 1, duration: 0.3 },
      );

      gsap.fromTo(
        ".gallery-content",
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(1.7)" },
      );
    } else {
      // Restaurar scroll do body
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") onClose();
    if (e.key === "ArrowRight") nextImage();
    if (e.key === "ArrowLeft") prevImage();
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="gallery-overlay fixed inset-0 bg-black/95 z-[100] flex items-center justify-center">
      <div className="gallery-content relative w-full h-full flex items-center justify-center p-4">
        {/* Header */}
        <div className="absolute top-0 left-0 right-0 z-10 p-6 bg-gradient-to-b from-black/50 to-transparent">
          <div className="flex justify-between items-center text-white">
            <div>
              <h2 className="text-2xl font-bold">{projectTitle}</h2>
              <p className="text-amber-400">{category}</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-full transition-all duration-300"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        {/* Main Image */}
        <div className="relative max-w-6xl max-h-[80vh] w-full">
          <img
            src={images[currentImageIndex]}
            alt={`${projectTitle} - Imagem ${currentImageIndex + 1}`}
            className="w-full h-full object-contain rounded-lg shadow-2xl"
          />

          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}
        </div>

        {/* Thumbnails */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
          <div className="flex gap-2 bg-black/50 p-3 rounded-full backdrop-blur-sm">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-12 h-12 rounded-lg overflow-hidden transition-all duration-300 ${
                  index === currentImageIndex
                    ? "ring-2 ring-amber-400 scale-110"
                    : "opacity-70 hover:opacity-100"
                }`}
              >
                <img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Image Counter */}
        <div className="absolute top-20 right-6 bg-black/50 text-white px-4 py-2 rounded-full backdrop-blur-sm">
          {currentImageIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  );
};

export default ProjectGallery;
