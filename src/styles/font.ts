import localFont from 'next/font/local';

export const medieval = localFont({
  src: [
    {
      path: './fonts/medieval/MedievalSharp-Bold.ttf',
      weight: '700',
      style: 'normal'
    },
    {
      path: './fonts/medieval/MedievalSharp-BoldOblique.ttf',
      weight: '700',
      style: 'italic'
    },
    {
      path: './fonts/medieval/MedievalSharp-Book.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: './fonts/medieval/MedievalSharp-BookOblique.ttf',
      weight: '400',
      style: 'italic'
    }
  ],
  variable: '--font-medieval'
})

export const eagleLake = localFont({
  src: './fonts/eagle_lake/EagleLake-Regular.ttf',
  variable: '--font-eagle-lake'
})

export const fraunces = localFont({
  src: [
    {
      path: './fonts/fraunces/Fraunces-Regular.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: './fonts/fraunces/Fraunces_Soft-BoldItalic.ttf',
      weight: '700',
      style: 'italic'
    },
    {
      path: './fonts/fraunces/Fraunces_SuperSoft-LightItalic.ttf',
      weight: '400',
      style: 'italic'
    },
    {
      path: './fonts/fraunces/Fraunces_Soft-Bold.ttf',
      weight: '700',
      style: 'normal'
    },
    {
      path: './fonts/fraunces_semibold/Fraunces_Soft-SemiBold.ttf',
      weight: '600',
      style: 'normal'
    },
    {
      path: './fonts/fraunces_semibold/Fraunces-SemiBoldItalic.ttf',
      weight: '600',
      style: 'italic'
    }
  ],
  variable: '--font-fraunces'
})