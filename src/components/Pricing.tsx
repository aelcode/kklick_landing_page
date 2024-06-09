import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/xbutton';
import { BudgetKlick } from './shared/BudgetKlick';
import { KlickOne } from './shared/Klick1';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Check } from 'lucide-react';
import React from 'react';
import ModalBudget from './modals/ModalBudget';
import { KlickTwo } from './shared/KlickTwo';
import { KlickThree } from './shared/KlickThree';
import { OtherKlick } from './shared/OtherKlick';

enum PopularPlanType {
  NO = 0,
  YES = 1,
}

interface PricingProps {
  title: string;
  popular: PopularPlanType;
  price: number;
  description: string;
  buttonText: string;
  buttonUrl: string;
  benefitList: string[];
  sampleImage: React.ReactNode;
  bookModal: React.ReactNode;
}

const pricingList: PricingProps[] = [
  {
    title: 'Budget Klick (For Students Only)',
    popular: 0,
    price: 250,
    description: 'Package Inclusions:',
    buttonText: 'Book Now',
    buttonUrl: 'https://cal.com/kklick/budgetklick',
    benefitList: [
      '1-2 Pax',
      '7 Mins Photoshoot (Unlimited Shots)',
      '3 Mins Photo Selection for Printed copy',
      '1 pc Printed Copy (Minor Enhancement)',
      '(1 Postcard Size)',
      'Free use of available props',
      '1 Backdrop',
      'All soft copies (No Edit)',
    ],
    sampleImage: <BudgetKlick />,
    bookModal: <ModalBudget />,
  },
  {
    title: 'Klick 1',
    popular: 1,
    price: 450,
    description: 'Package Inclusions:',
    buttonText: 'Book Now',
    buttonUrl: 'https://cal.com/kklick/klick1',
    benefitList: [
      '1 - 2 Pax',
      '12 Mins Photoshoot (Unlimited Shots)',
      '3 Mins Photo Selection for Printed copy',
      '2 pc Printed Copy (Minor Enhancement)',
      '(1 Postcard Size + 1 Window Photo Collage)',
      'Free use of available props',
      '1 Backdrop',
      'All soft copies (No Edit)',
    ],
    sampleImage: <KlickOne />,
    bookModal: <ModalBudget />,
  },
  {
    title: 'Klick 2',
    popular: 0,
    price: 650,
    description: 'Package Inclusions:',
    buttonText: 'Book Now',
    buttonUrl: 'https://cal.com/kklick/klick2',
    benefitList: [
      '1 - 2 Pax',
      '20 Mins Photoshoot (Unlimited Shots)',
      '5 Mins Photo Selection for Printed copy',
      '3 pc Printed Copy (Minor Enhancement)',
      '(1 Postcard Size + 2 Strips)',
      'Free use of available props',
      '2 Backdrops',
      'All soft copies (No Edit)',
    ],
    sampleImage: <KlickTwo />,
    bookModal: <ModalBudget />,
  },
  {
    title: 'Klick 3',
    popular: 0,
    price: 850,
    description: 'Package Inclusions:',
    buttonText: 'Book Now',
    buttonUrl: 'https://cal.com/kklick/klick3',
    benefitList: [
      '1 - 4 Pax',
      '30 Mins Photoshoot (Unlimited Shots)',
      '5 Mins Photo Selection for Printed copy',
      '5 pc Printed Copy (Minor Enhancement)',
      '(1 Postcard Size + 2 Mini Size + 2 Strips)',
      'Free use of available props',
      '2 Backdrops',
      'All soft copies (No Edit)',
    ],
    sampleImage: <KlickThree />,
    bookModal: <ModalBudget />,
  },
  {
    title: 'Klick 4',
    popular: 0,
    price: 1050,
    description: 'Package Inclusions:',
    buttonText: 'Book Now',
    buttonUrl: 'https://cal.com/kklick/klick4',
    benefitList: [
      '1 - 6 Pax',
      '35 Mins Photoshoot (Unlimited Shots)',
      '10 Mins Photo Selection for Printed copy',
      '6 pc Printed Copy (Minor Enhancement)',
      '(1 Postcard Size + 2 Mini Size + 1 Window + 2 Strips)',
      'Free use of available props',
      '3 Backdrops',
      'All soft copies (No Edit)',
    ],
    sampleImage: <OtherKlick />,
    bookModal: <ModalBudget />,
  },
  {
    title: 'Klick Squad',
    popular: 0,
    price: 1550,
    description: 'Package Inclusions:',
    buttonText: 'Book Now',
    buttonUrl: 'https://cal.com/kklick/klick-squad',
    benefitList: [
      '1 - 10 Pax',
      '45 Mins Photoshoot (Unlimited Shots)',
      '10 Mins Photo Selection for Printed copy',
      '7 pc Printed Copy (Minor Enhancement)',
      '(2 Postcard Size + 2 Mini Size + 1 Window + 2 Strips)',
      'Free use of available props',
      '3 Backdrops',
      'All soft copies (No Edit)',
    ],
    sampleImage: <OtherKlick />,
    bookModal: <ModalBudget />,
  },
  {
    title: 'Studio Rental (2 Hours Minimum)',
    popular: 0,
    price: 700,
    description: 'Package Inclusions:',
    buttonText: 'Book Now',
    buttonUrl: 'https://cal.com/kklick/studio-rental',
    benefitList: [
      'Studio Space',
      '4 Backdrops (Color: Pink, Grey, Beige and White)',
      '2 Solo wood stool',
      '2 White boxes',
      '3 White nordic chair',
      'Free use of available props',
      'Dressing room with big mirror',
      'Body mirror',
      '4 Steps black ladder',
      'Fully Airconditioned',
      'Equipment: Godox 2 X SL100 D Continues light (Round Soft Box and Square Soft Box)',
    ],
    sampleImage: '',
    bookModal: <ModalBudget />,
  },
  {
    title: 'Birthday Theme Props',
    popular: 0,
    price: 999,
    description: 'Package Inclusions:',
    buttonText: 'Book Now',
    buttonUrl: 'https://cal.com/kklick/baby-theme-props-php999',
    benefitList: [
      '25 Minute Photoshoot (Unlimited Shots)',
      '5 Mins Photo Selection for Printed copy',
      'Complete with 4R & 8R prints (8R prints with a frame included).',
      'Choose from captivating themes like Baby Bear, Safari, and Car Themes.',
      'All soft copies (No Edit)',
    ],
    sampleImage: '',
    bookModal: <ModalBudget />,
  },
];

export const Pricing = () => {
  return (
    <section id='packages' className='container py-24 sm:py-32'>
      <h2 className='text-3xl md:text-4xl font-bold text-center'>
        Our
        <span className='bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text'>
          {' '}
          Packages
        </span>
      </h2>
      <h3 className='text-xl text-center text-muted-foreground pt-4 pb-8'>
        Choose the package that suits your needs and budget.
      </h3>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {pricingList.map((pricing: PricingProps) => (
          <Card
            key={pricing.title}
            className={
              pricing.popular === PopularPlanType.YES
                ? 'drop-shadow-xl shadow-black/10 dark:shadow-white/10'
                : 'hover:drop-shadow-xl shadow-black/10 dark:shadow-white/10'
            }
          >
            <CardHeader>
              <CardTitle className='flex item-center justify-between'>
                {pricing.title}
                {pricing.popular === PopularPlanType.YES ? (
                  <Badge variant='secondary' className='text-sm text-primary'>
                    Most popular
                  </Badge>
                ) : null}
              </CardTitle>
              <div>
                <span className='text-3xl font-bold'>Php{pricing.price}</span>
                {/* <span className='text-muted-foreground'> /month</span> */}
              </div>

              {/* <CardDescription>{pricing.description}</CardDescription> */}
            </CardHeader>

            <CardContent>
              {/* <Button variant='gooeyRight' className='w-full mb-4'>
                {pricing.bookModal}
              </Button> */}
              <a href={pricing.buttonUrl} target='_blank'>
                <Button variant='gooeyRight' className='w-full mb-4'>
                  {pricing.buttonText}
                </Button>
              </a>
              <CardDescription className='text-bold align-middle justify-center'>
                {pricing.description}
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <span className='ml-2'>{pricing.sampleImage}</span>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>View Print Layout</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </CardDescription>
            </CardContent>

            <hr className='w-4/5 m-auto mb-4' />

            <CardFooter className='flex'>
              <div className='space-y-2 text-sm'>
                {pricing.benefitList.map((benefit: string) => (
                  <span key={benefit} className='flex'>
                    <Check className='text-green-500' />{' '}
                    <h3 className='ml-2'>{benefit}</h3>
                  </span>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
