import { Badge } from '@/components/ui/badge';
// import { Button } from '@/components/ui/button';
import {
  Card,
  // CardContent,
  // CardDescription,
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
  price: number | string;
  description: string;
  buttonText: string;
  buttonUrl: string;
  benefitList: string[];
}

const pricingList: PricingProps[] = [
  {
    title: 'ADD ONS',
    popular: 0,
    price: 'Starts from 40',
    description: 'Price List:',
    buttonText: 'Book Now',
    buttonUrl: 'https://cal.com/kklickstudio/budget-klick',
    benefitList: [
      'Number Balloons - 40.00',
      'Additional 4R Size Print - 50.00',
      'Additional Pax - 100.00',
      'Additional Pet - 100.00',
      'Additional Backdrop - 150.00',
      '8R Print - 200.00',
      '8R Frame - 300.00',
      'Additional 10 Mins Photoshoot - 150.00 (Subject to availability)',
    ],
  },
  {
    title: 'BABY PROPS',
    popular: 0,
    price: 'Php500',
    description: 'Package Inclusions:',
    buttonText: 'Book Now',
    buttonUrl: 'https://cal.com/kklickstudio/budget-klick',
    benefitList: [
      'Aesthetic Bear Theme',
      'Princess Theme',
      'Safari Adventure Theme',
      'Cars Pit Stop Theme',
    ],
  },
  {
    title: 'DISCOUNTS',
    popular: 1,
    price: '15% OFF',
    description: 'Package Inclusions:',
    buttonText: 'Book Now',
    buttonUrl: 'https://cal.com/kklickstudio/klick1',
    benefitList: ['Birthday Celebrant', 'Wedding Anniversary'],
  },
];

export const AddonsDiscount = () => {
  return (
    <section id='addons' className='container py-24 sm:py-32'>
      <h2 className='text-3xl md:text-4xl font-bold text-center mb-8'>
        Our
        <span className='bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text'>
          {' '}
          Addons and Discounts
        </span>
      </h2>
      {/* <h3 className='text-xl text-center text-muted-foreground pt-4 pb-8'>
        Choose the package that suits your needs and budget.
      </h3> */}
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {/* <div className='grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2  lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6'> */}
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
                  <Badge
                    variant='secondary'
                    className='text-sm text-primary bg-[#C7A57C]'
                  >
                    Forever
                  </Badge>
                ) : null}
              </CardTitle>
              <div>
                <span className='text-3xl font-bold'>{pricing.price}</span>
                {/* <span className='text-muted-foreground'> /month</span> */}
              </div>
            </CardHeader>

            {/* <CardContent>
              <a href={pricing.buttonUrl} target='_blank'>
                <Button className='w-full mb-4'>{pricing.buttonText}</Button>
              </a>
              <CardDescription className='text-bold'>
                {pricing.description}
              </CardDescription>
            </CardContent> */}

            <hr className='w-[90%] m-auto mb-4' />

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
