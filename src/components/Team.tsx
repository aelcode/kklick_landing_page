// import { buttonVariants } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  // CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
// import { Facebook, Instagram, Linkedin } from 'lucide-react';
import remluna from '../assets/team-rem-luna.webp';
import erickluna from '../assets/team-erick-luna.webp';
import christine from '../assets/team-joy-agapay.webp';
import mark from '../assets/team-kiko-agapay.webp';
import jehu from '../assets/team-jehu.webp';

interface TeamProps {
  imageUrl: string;
  name: string;
  position: string;
  motto: string;
  // socialNetworks: SociaNetworkslProps[];
}

// interface SociaNetworkslProps {
//   name: string;
//   url: string;
// }

const teamList: TeamProps[] = [
  {
    imageUrl: remluna,
    name: 'Remelyn Luna',
    position: 'CEO/Founder',
    motto:
      'Commit to the LORD whatever you do, and he will establish your plans. -Proverbs 16:3',
    // socialNetworks: [
    //   { name: 'Linkedin', url: 'http://linkedin.com' },
    //   {
    //     name: 'Facebook',
    //     url: 'https://www.facebook.com/',
    //   },
    //   {
    //     name: 'Instagram',
    //     url: 'https://www.instagram.com/',
    //   },
    // ],
  },
  {
    imageUrl: erickluna,
    name: 'Erick Luna',
    position: 'CEO/Founder/Developer',
    motto:
      'But seek first his kingdom and his righteousness, and all these things will be given to you as well. -Matthew 6:33',
    // socialNetworks: [
    //   { name: 'Linkedin', url: 'http://linkedin.com' },
    //   {
    //     name: 'Facebook',
    //     url: 'https://www.facebook.com/',
    //   },
    //   {
    //     name: 'Instagram',
    //     url: 'https://www.instagram.com/',
    //   },
    // ],
  },
  {
    imageUrl: christine,
    name: 'Christine Joy Agapay',
    position: 'CEO/Founder',
    motto:
      'For I know the plans I have for you,” declares the LORD, “plans to prosper you and not to harm you, plans to give you hope and a future. -Jeremiah 29:11',
    // socialNetworks: [
    //   { name: 'Linkedin', url: 'http://linkedin.com' },

    //   {
    //     name: 'Instagram',
    //     url: 'https://www.instagram.com/',
    //   },
    // ],
  },
  {
    imageUrl: mark,
    name: 'Mark Francis Agapay',
    position: 'CEO/Founder/Support',
    motto:
      'My flesh and my heart may fail, but God is the strength of my heart and my portion forever. -Psalm 73:26',
    // socialNetworks: [
    //   { name: 'Linkedin', url: 'http://linkedin.com' },
    //   {
    //     name: 'Facebook',
    //     url: 'https://www.facebook.com/',
    //   },
    // ],
  },
  {
    imageUrl: jehu,
    name: 'Jehu Moring Jaim',
    position: 'Office Admin/Staff',
    motto:
      'But you will receive power when the Holy Spirit comes on you; and you will be my witnesses in Jerusalem, and in all Judea and Samaria, and to the ends of the earth. -Acts 1:8',
    // socialNetworks: [
    //   { name: 'Linkedin', url: 'http://linkedin.com' },
    //   {
    //     name: 'Facebook',
    //     url: 'https://www.facebook.com/',
    //   },
    // ],
  },
];

export const Team = () => {
  // const socialIcon = (iconName: string) => {
  //   switch (iconName) {
  //     case 'Linkedin':
  //       return <Linkedin size='20' />;

  //     case 'Facebook':
  //       return <Facebook size='20' />;

  //     case 'Instagram':
  //       return <Instagram size='20' />;
  //   }
  // };

  return (
    <section id='team' className='container py-24 sm:py-32'>
      <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
        <span className='bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text'>
          Our Dedicated{' '}
        </span>
        Team
      </h2>

      {/* <p className='mt-4 mb-10 text-center text-xl text-muted-foreground'>
        The Masterminds Behind the Magic We're a crew of photo-loving,
        fun-seeking professionals. <br />
        Our mission? To help you unleash your inner superstar and capture
        moments you'll cherish forever.
      </p> */}

      <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-10'>
        {teamList.map(({ imageUrl, name, position, motto }: TeamProps) => (
          <Card
            key={name}
            className='bg-muted/50 relative mt-8 flex flex-col justify-center items-center'
          >
            <CardHeader className='mt-8 flex justify-center items-center pb-2'>
              <img
                src={imageUrl}
                alt={`${name} ${position}`}
                className='absolute -top-12 rounded-full w-24 h-24 aspect-square object-cover'
              />
              <CardTitle className='text-center'>{name}</CardTitle>
              <CardDescription className='text-primary'>
                {position}
              </CardDescription>
            </CardHeader>

            <CardContent className='text-center pb-2'>
              <p className='text-sm'>{motto}</p>
            </CardContent>

            {/* <CardFooter>
              {socialNetworks.map(({ name, url }: SociaNetworkslProps) => (
                <div key={name}>
                  <a
                    href={url}
                    target='_blank'
                    className={buttonVariants({
                      variant: 'ghost',
                      size: 'sm',
                    })}
                  >
                    <span className='sr-only'>{name} icon</span>
                    {socialIcon(name)}
                  </a>
                </div>
              ))}
            </CardFooter> */}
          </Card>
        ))}
      </div>
    </section>
  );
};
