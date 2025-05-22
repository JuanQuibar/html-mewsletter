import { Roboto, Source_Serif_4  } from 'next/font/google'

export const roboto = Roboto ({ 
    weight: ['100','300', '400', '500', '700', '900'],
    subsets: ['latin'],
  });

  export const serif = Source_Serif_4 ({
    weight: ['200','300', '400', '600', '700', '900'],
    subsets: ['latin'],
  })