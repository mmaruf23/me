import type { Variants } from 'motion';

export const fadeInVariantsRight: Variants = {
  hidden: { opacity: 0, y: -20 }, // Kondisi awal: tidak terlihat dan sedikit di bawah
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8, // Durasi animasi 0.8 detik
      ease: 'easeInOut', // Jenis transisi yang halus
    },
  },
};

export const fadeInVariantsLeft: Variants = {
  hidden: { opacity: 0, x: -20 }, // Kondisi awal: tidak terlihat dan sedikit di bawah
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8, // Durasi animasi 0.8 detik
      ease: 'easeInOut', // Jenis transisi yang halus
    },
  },
};

export const fadeInVariantsUp: Variants = {
  hidden: { opacity: 0, y: -20 }, // Kondisi awal: tidak terlihat dan sedikit di bawah
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
      duration: 0.8, // Durasi animasi 0.8 detik
      ease: 'easeInOut', // Jenis transisi yang halus
    },
  },
};
export const fadeInVariantsDown: Variants = {
  hidden: { opacity: 0, y: 20 }, // Kondisi awal: tidak terlihat dan sedikit di bawah
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
      duration: 0.8, // Durasi animasi 0.8 detik
      ease: 'easeInOut', // Jenis transisi yang halus
    },
  },
};

export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Properti ini yang membuat anak-anak muncul berurutan
      delayChildren: 0.3, // Tambahkan delay agar kontainer muncul dulu, baru anak-anaknya
    },
  },
};
