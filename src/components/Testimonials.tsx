import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';

interface TestimonialProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {
    image: '/src/assets/reviews/cx-review-01.webp',
    name: 'John Doe React',
    userName: '@john_Doe',
    comment:
      "Hi. Thankyou po. Ang ganda po ng experience namin sa studio. Super accommodating nung staff kanina. Sobrang hands on and he checked us din if we're okay since may kasama kaming toddler and newborn. Definitely will come back",
  },
  {
    image: '/src/assets/reviews/cx-review-02.webp',
    name: 'John Doe React',
    userName: '@john_Doe1',
    comment:
      'Thank you K Klick Self Photo Studio, we had a very nice and smooth experience earlier. We would like to commend your staff for being nice and accomodating. The staff helped us and attend to our queries. We definitely enjoyed the experience in K Klick! For sure, babalik po kami C Maraming salamaat poooo!',
  },

  {
    image: '/src/assets/reviews/cx-review-03.webp',
    name: 'John Doe React',
    userName: '@john_Doe2',
    comment:
      'Thank you so much K Klick Self Photo Studio, very satisfied shots and surely come back again to take a capture for my special day',
  },
  {
    image: '/src/assets/reviews/cx-review-04.webp',
    name: 'John Doe React',
    userName: '@john_Doe3',
    comment: 'Very accommodating ung staff and worth it din ung bayad.',
  },
  {
    image: '/src/assets/reviews/cx-review-05.webp',
    name: 'John Doe React',
    userName: '@john_Doe4',
    comment:
      'thankyou po super duper accomodating po yung staff and sulit na sulit po yung binayad namen',
  },
  {
    image: '/src/assets/reviews/cx-review-06.webp',
    name: 'John Doe React',
    userName: '@john_Doe5',
    comment:
      'Their staff is very kind. They even let you familiarize the studio before they start the countdown to paid minutes. Worth the price',
  },
];

export const Testimonials = () => {
  return (
    <section id='testimonials' className='container py-24 sm:py-32'>
      <h2 className='text-3xl md:text-4xl font-bold'>
        Discover Why
        <span className='bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text'>
          {' '}
          People Love{' '}
        </span>
        KKlick Self Photo Studio
      </h2>

      <p className='text-xl text-muted-foreground pt-4 pb-8'>
        The smiles say it all. Check out our reviews!
      </p>

      <div className='grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2  lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6'>
        {testimonials.map(
          ({ image, name, userName, comment }: TestimonialProps) => (
            <Card
              key={userName}
              className='max-w-md md:break-inside-avoid overflow-hidden'
            >
              {/* <CardHeader className='flex flex-row items-center gap-4 pb-2'>
                <Avatar>
                  <AvatarImage alt='' src={image} />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>

                <div className='flex flex-col'>
                  <CardTitle className='text-lg'>{name}</CardTitle>
                  <CardDescription>{userName}</CardDescription>
                </div>
              </CardHeader> */}

              <CardContent>
                <img
                  src={image}
                  alt='Portrait'
                  className='w-full h-auto object-cover mt-5 mb-4'
                />
                {comment}
              </CardContent>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
