declare module 'swiper/css';
declare module 'swiper/css/navigation';
declare module 'swiper/css/*';
declare module '*.svg' {
  const content: React.FC<React.SVGProps<SVGSVGElement>> | string;
  export default content;
}
