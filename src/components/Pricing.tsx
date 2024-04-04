import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Check } from 'lucide-react';

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
}

const pricingList: PricingProps[] = [
  {
    title: 'Budget Klick',
    popular: 0,
    price: 250,
    description: 'Available only for students.',
    buttonText: 'Book Now',
    buttonUrl: 'https://cal.com/kklickstudio/budget-klick',
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
  },
  {
    title: 'Klick 1',
    popular: 1,
    price: 450,
    description: 'Klick 1 is the most popular package for everyone.',
    buttonText: 'Book Now',
    buttonUrl: 'https://cal.com/kklickstudio/klick1',
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
  },
  {
    title: 'Klick 2',
    popular: 0,
    price: 650,
    description: 'Klick 2 is the most popular package for everyone.',
    buttonText: 'Book Now',
    buttonUrl: 'https://cal.com/kklickstudio/budget-klick',
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
  },
  {
    title: 'Klick 3',
    popular: 0,
    price: 850,
    description:
      'Klick 3 is the most popular package for everyone. This is the best package for family photoshoots.',
    buttonText: 'Book Now',
    buttonUrl: 'https://cal.com/kklickstudio/budget-klick',
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
  },
  {
    title: 'Klick 4',
    popular: 0,
    price: 1050,
    description:
      'Klick 4 is the most popular package for everyone. This is the best package for family photoshoots.',
    buttonText: 'Book Now',
    buttonUrl: 'https://cal.com/kklickstudio/budget-klick',
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
  },
  {
    title: 'Klick Squad',
    popular: 0,
    price: 1550,
    description:
      'Klick Squad is the most popular package for everyone. This is the best package for family photoshoots.',
    buttonText: 'Book Now',
    buttonUrl: 'https://cal.com/kklickstudio/budget-klick',
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
        <br />
        <span>
          We offer 6 flexible packages designed for solo sessions, couples,
          friends, and larger groups.
        </span>
      </h3>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {pricingList.map((pricing: PricingProps) => (
          <Card
            key={pricing.title}
            className={
              pricing.popular === PopularPlanType.YES
                ? 'drop-shadow-xl shadow-black/10 dark:shadow-white/10'
                : ''
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

              <CardDescription>{pricing.description}</CardDescription>
            </CardHeader>

            <CardContent>
              <a href={pricing.buttonUrl} target='_blank'>
                <Button className='w-full'>{pricing.buttonText}</Button>
              </a>
            </CardContent>

            <hr className='w-4/5 m-auto mb-4' />

            <CardFooter className='flex'>
              <div className='space-y-4'>
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
